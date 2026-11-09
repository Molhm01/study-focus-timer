import{R as H,j as e,r as a,a as qs,c as zs}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").
relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulep\
reload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName===
"LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&
(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const Bs={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function ie({x:t,y:s,r:n,fill:i}){const o=[];for(let l=0;l<10;l++){
const d=Math.PI/5*l-Math.PI/2,p=l%2===0?n:n*.45;o.push(`${(t+p*Math.cos(d)).toFixed(1)},${(s+p*Math.sin(d)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function Vs({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
e.jsx("polygon",{points:"28,26 22,8 42,20",fill:"#f4a261"}),e.jsx("polygon",{points:"68,26 74,8 54,20",fill:"#f4a261"}),
e.jsx("circle",{cx:"48",cy:"50",r:"27",fill:"#f4a261"}),e.jsx("circle",{cx:"38",cy:"46",r:"3.4",fill:"#26221f"}),e.jsx("\
circle",{cx:"58",cy:"46",r:"3.4",fill:"#26221f"}),e.jsx("polygon",{points:"44,55 52,55 48,60",fill:"#e76f51"}),e.jsx("pa\
th",{d:"M48 60 q0 5 -6 5 M48 60 q0 5 6 5",stroke:"#26221f",strokeWidth:"1.6",fill:"none",strokeLinecap:"round"}),e.jsx("\
path",{d:"M16 52 h12 M17 59 l11 -3 M80 52 h-12 M79 59 l-11 -3",stroke:"#26221f",strokeWidth:"1.4",strokeLinecap:"round"})]});case"\
owl":return e.jsxs("g",{children:[e.jsx("polygon",{points:"30,24 24,10 44,20",fill:"#8d6e63"}),e.jsx("polygon",{points:"\
66,24 72,10 52,20",fill:"#8d6e63"}),e.jsx("ellipse",{cx:"48",cy:"52",rx:"26",ry:"28",fill:"#8d6e63"}),e.jsx("circle",{cx:"\
38",cy:"46",r:"9",fill:"#fff"}),e.jsx("circle",{cx:"58",cy:"46",r:"9",fill:"#fff"}),e.jsx("circle",{cx:"38",cy:"46",r:"3\
.6",fill:"#26221f"}),e.jsx("circle",{cx:"58",cy:"46",r:"3.6",fill:"#26221f"}),e.jsx("polygon",{points:"44,56 52,56 48,62",
fill:"#ffb74d"}),e.jsx("path",{d:"M34 68 q14 8 28 0",stroke:"#6d4c41",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]});case"\
fox":return e.jsxs("g",{children:[e.jsx("polygon",{points:"26,28 18,6 44,18",fill:"#e76f51"}),e.jsx("polygon",{points:"7\
0,28 78,6 52,18",fill:"#e76f51"}),e.jsx("polygon",{points:"29,24 24,11 40,19",fill:"#f4d8ce"}),e.jsx("polygon",{points:"\
67,24 72,11 56,19",fill:"#f4d8ce"}),e.jsx("circle",{cx:"48",cy:"50",r:"27",fill:"#e76f51"}),e.jsx("ellipse",{cx:"48",cy:"\
60",rx:"13",ry:"10",fill:"#f4d8ce"}),e.jsx("circle",{cx:"38",cy:"45",r:"3.4",fill:"#26221f"}),e.jsx("circle",{cx:"58",cy:"\
45",r:"3.4",fill:"#26221f"}),e.jsx("circle",{cx:"48",cy:"56",r:"3.4",fill:"#26221f"})]});case"robot":return e.jsxs("g",{
children:[e.jsx("line",{x1:"48",y1:"14",x2:"48",y2:"24",stroke:"#7fd6cc",strokeWidth:"3",strokeLinecap:"round"}),e.jsx("\
circle",{cx:"48",cy:"12",r:"4",fill:"#7fd6cc"}),e.jsx("rect",{x:"21",y:"42",width:"6",height:"14",rx:"3",fill:"#5fb3a9"}),
e.jsx("rect",{x:"69",y:"42",width:"6",height:"14",rx:"3",fill:"#5fb3a9"}),e.jsx("rect",{x:"24",y:"24",width:"48",height:"\
44",rx:"10",fill:"#90e0d4"}),e.jsx("rect",{x:"32",y:"38",width:"12",height:"10",rx:"3",fill:"#123f3a"}),e.jsx("rect",{x:"\
52",y:"38",width:"12",height:"10",rx:"3",fill:"#123f3a"}),e.jsx("rect",{x:"36",y:"56",width:"24",height:"4",rx:"2",fill:"\
#123f3a",opacity:"0.7"})]});case"star":return e.jsxs("g",{children:[e.jsx(ie,{x:48,y:48,r:30,fill:"#ffd166"}),e.jsx("cir\
cle",{cx:"40",cy:"46",r:"3.4",fill:"#5c4400"}),e.jsx("circle",{cx:"56",cy:"46",r:"3.4",fill:"#5c4400"}),e.jsx("path",{d:"\
M41 56 q7 6 14 0",stroke:"#5c4400",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]});case"sprout":return e.jsxs("g",
{children:[e.jsx("path",{d:"M48 34 q-16 -18 -28 -6 q14 12 28 6",fill:"#7fb069"}),e.jsx("path",{d:"M48 34 q16 -18 28 -6 q\
-14 12 -28 6",fill:"#94c77d"}),e.jsx("circle",{cx:"48",cy:"56",r:"24",fill:"#a3c585"}),e.jsx("circle",{cx:"40",cy:"52",r:"\
3.2",fill:"#2e4423"}),e.jsx("circle",{cx:"56",cy:"52",r:"3.2",fill:"#2e4423"}),e.jsx("path",{d:"M41 62 q7 6 14 0",stroke:"\
#2e4423",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]});case"blob":return e.jsxs("g",{children:[e.jsx("path",{d:"\
M48 22 q26 0 27 24 q1 26 -25 28 q-28 2 -29 -24 q-1 -24 27 -28",fill:"#b388eb"}),e.jsx("circle",{cx:"40",cy:"48",r:"3.6",
fill:"#33204f"}),e.jsx("circle",{cx:"57",cy:"48",r:"3.6",fill:"#33204f"}),e.jsx("path",{d:"M42 58 q6 5 13 0",stroke:"#33\
204f",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"33",cy:"57",r:"3",fill:"#d3b8f5",opacity:"\
0.8"}),e.jsx("circle",{cx:"64",cy:"57",r:"3",fill:"#d3b8f5",opacity:"0.8"})]});case"penguin":return e.jsxs("g",{children:[
e.jsx("ellipse",{cx:"48",cy:"52",rx:"26",ry:"28",fill:"#233248"}),e.jsx("ellipse",{cx:"48",cy:"58",rx:"16",ry:"18",fill:"\
#f4f6f8"}),e.jsx("circle",{cx:"38",cy:"42",r:"3.4",fill:"#fff"}),e.jsx("circle",{cx:"58",cy:"42",r:"3.4",fill:"#fff"}),e.
jsx("circle",{cx:"38",cy:"42",r:"1.7",fill:"#101418"}),e.jsx("circle",{cx:"58",cy:"42",r:"1.7",fill:"#101418"}),e.jsx("p\
olygon",{points:"44,48 52,48 48,55",fill:"#f2a03d"}),e.jsx("ellipse",{cx:"36",cy:"79",rx:"7",ry:"3.4",fill:"#f2a03d"}),e.
jsx("ellipse",{cx:"60",cy:"79",rx:"7",ry:"3.4",fill:"#f2a03d"}),e.jsx("ellipse",{cx:"22",cy:"54",rx:"5",ry:"12",fill:"#1\
b2839",transform:"rotate(14 22 54)"}),e.jsx("ellipse",{cx:"74",cy:"54",rx:"5",ry:"12",fill:"#1b2839",transform:"rotate(-\
14 74 54)"})]});case"frog":return e.jsxs("g",{children:[e.jsx("circle",{cx:"34",cy:"26",r:"10",fill:"#6aa84f"}),e.jsx("c\
ircle",{cx:"62",cy:"26",r:"10",fill:"#6aa84f"}),e.jsx("circle",{cx:"34",cy:"26",r:"6",fill:"#fff"}),e.jsx("circle",{cx:"\
62",cy:"26",r:"6",fill:"#fff"}),e.jsx("circle",{cx:"34",cy:"27",r:"3",fill:"#22301c"}),e.jsx("circle",{cx:"62",cy:"27",r:"\
3",fill:"#22301c"}),e.jsx("circle",{cx:"48",cy:"54",r:"26",fill:"#7fb069"}),e.jsx("path",{d:"M32 56 q16 12 32 0",stroke:"\
#3c5527",strokeWidth:"2.4",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"30",cy:"50",r:"3.4",fill:"#a8d08d",opacity:"\
0.9"}),e.jsx("circle",{cx:"66",cy:"50",r:"3.4",fill:"#a8d08d",opacity:"0.9"})]});case"moon":default:return e.jsxs("g",{children:[
e.jsx("circle",{cx:"48",cy:"48",r:"28",fill:"#2b3a67"}),e.jsx("path",{d:"M58 26 a26 26 0 1 0 12 44 a20 20 0 1 1 -12 -44",
fill:"#ffd97a"}),e.jsx("circle",{cx:"36",cy:"42",r:"2.6",fill:"#8fa3d9"}),e.jsx("circle",{cx:"30",cy:"56",r:"1.8",fill:"\
#8fa3d9"})]})}}function Ks({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(ie,{x:14,y:22,r:4,fill:"\
#ffe9a8"}),e.jsx(ie,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(ie,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(ie,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"rainbow":return e.jsxs("g",{fill:"none",strokeLinecap:"round",children:[e.jsx("path",{d:"M14 60 A36 3\
6 0 0 1 82 60",stroke:"#ff6b6b",strokeWidth:"2.6",opacity:"0.85"}),e.jsx("path",{d:"M19 62 A31 31 0 0 1 77 62",stroke:"#\
ffd166",strokeWidth:"2.6",opacity:"0.85"}),e.jsx("path",{d:"M24 64 A26 26 0 0 1 72 64",stroke:"#6fe3a5",strokeWidth:"2.6",
opacity:"0.85"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"\
2",strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",
fill:"none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"\
#ff7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(ie,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(ie,{x:78,y:30,r:2.6,fill:"#ffb\
27b"})]});case"galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#c39bff",strokeWidth:"1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",
fill:"none",stroke:"#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"\
36",r:"2.4",fill:"#e3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function Ys({
eyes:t}){switch(t){case"glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circ\
le",{cx:"38",cy:"47",r:"8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 \
-3",strokeLinecap:"round"})]});case"shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"\
11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"\
44",y:"44",width:"8",height:"3",rx:"1.5",fill:"#15181f"})]});case"hearts":return e.jsxs("g",{fill:"#ff6b8a",children:[e.
jsx("path",{d:"M38 53 c-5 -4 -9 -7 -9 -11 a5 5 0 0 1 9 -3 a5 5 0 0 1 9 3 c0 4 -4 7 -9 11 z"}),e.jsx("path",{d:"M58 53 c-\
5 -4 -9 -7 -9 -11 a5 5 0 0 1 9 -3 a5 5 0 0 1 9 3 c0 4 -4 7 -9 11 z"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"\
#ffd97a",strokeWidth:"2",children:[e.jsx("circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"\
round"})]});case"star-eyes":return e.jsxs("g",{children:[e.jsx(ie,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(ie,{x:58,y:47,
r:5.4,fill:"#fff3c4"})]});default:return null}}function Xs({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[
e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",fill:"none",stroke:"#e05d7a",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("r\
ect",{x:"19",y:"40",width:"10",height:"16",rx:"5",fill:"#e05d7a"}),e.jsx("rect",{x:"67",y:"40",width:"10",height:"16",rx:"\
5",fill:"#e05d7a"})]});case"beanie":return e.jsxs("g",{children:[e.jsx("path",{d:"M23 34 a25 22 0 0 1 50 0 z",fill:"#5b8\
def"}),e.jsx("rect",{x:"21",y:"32",width:"54",height:"9",rx:"4.5",fill:"#7ba4f4"}),e.jsx("circle",{cx:"48",cy:"11",r:"5",
fill:"#dce7ff"})]});case"halo":return e.jsx("ellipse",{cx:"48",cy:"12",rx:"16",ry:"4.6",fill:"none",stroke:"#ffe08a",strokeWidth:"\
3.4"});case"crown":return e.jsxs("g",{children:[e.jsx("polygon",{points:"30,30 33,12 42,22 48,8 54,22 63,12 66,30",fill:"\
#ffd700",stroke:"#c9a400",strokeWidth:"1.4",strokeLinejoin:"round"}),e.jsx("rect",{x:"29",y:"29",width:"38",height:"6",rx:"\
3",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"1.4"}),e.jsx("circle",{cx:"48",cy:"18",r:"2.4",fill:"#e05d7a"})]});case"\
wizard":return e.jsxs("g",{children:[e.jsx("polygon",{points:"48,2 30,34 66,34",fill:"#5a4a8a"}),e.jsx("polygon",{points:"\
40,20 48,2 52,12",fill:"#6d5ba6"}),e.jsx("ellipse",{cx:"48",cy:"34",rx:"27",ry:"5.4",fill:"#4a3d75"}),e.jsx(ie,{x:44,y:22,
r:2.6,fill:"#ffe08a"})]});case"gradcap":return e.jsxs("g",{children:[e.jsx("polygon",{points:"48,6 86,20 48,34 10,20",fill:"\
#2b3245",stroke:"#1c2233",strokeWidth:"1.4",strokeLinejoin:"round"}),e.jsx("path",{d:"M34 26 v10 q14 8 28 0 v-10",fill:"\
#2b3245"}),e.jsx("line",{x1:"82",y1:"22",x2:"82",y2:"38",stroke:"#ffd166",strokeWidth:"2.2",strokeLinecap:"round"}),e.jsx(
"circle",{cx:"82",cy:"41",r:"3",fill:"#ffd166"})]});case"astro":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"\
48",r:"36",fill:"rgba(200,230,255,0.14)",stroke:"#e8eef4",strokeWidth:"4"}),e.jsx("path",{d:"M24 34 a30 30 0 0 1 20 -12",
fill:"none",stroke:"#fff",strokeWidth:"3",opacity:"0.7",strokeLinecap:"round"}),e.jsx("rect",{x:"40",y:"82",width:"16",height:"\
7",rx:"3",fill:"#c7d2dc"})]});case"laurel":return e.jsxs("g",{fill:"none",stroke:"#7fb069",strokeWidth:"3",strokeLinecap:"\
round",children:[e.jsx("path",{d:"M26 36 q6 -16 22 -20"}),e.jsx("path",{d:"M70 36 q-6 -16 -22 -20"}),e.jsx("path",{d:"M3\
2 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 -2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}
function Gs({frame:t}){if(t==="frame-rainbow")return e.jsxs("g",{fill:"none",strokeWidth:"3",strokeLinecap:"round",children:[
e.jsx("path",{d:"M48 3 A45 45 0 0 1 87 26",stroke:"#ff6b6b"}),e.jsx("path",{d:"M87 26 A45 45 0 0 1 87 70",stroke:"#ffd16\
6"}),e.jsx("path",{d:"M87 70 A45 45 0 0 1 48 93",stroke:"#6fe3a5"}),e.jsx("path",{d:"M48 93 A45 45 0 0 1 9 70",stroke:"#\
7fb6ff"}),e.jsx("path",{d:"M9 70 A45 45 0 0 1 9 26",stroke:"#c39bff"}),e.jsx("path",{d:"M9 26 A45 45 0 0 1 48 3",stroke:"\
#ff9ff3"})]});const s=Bs[t];return s?e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"\
3"}),t==="frame-gold"||t==="frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t===
"frame-diamond"?e.jsxs("g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",
r:"2.4"}),e.jsx("circle",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const It=H.memo(function({spec:s,size:n=96}){return e.
jsxs("svg",{width:n,height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"\
48",cy:"48",r:"45",fill:"rgba(255,255,255,0.06)"}),e.jsx(Ks,{aura:s.aura}),e.jsx(Vs,{base:s.base}),e.jsx(Ys,{eyes:s.eyes}),
e.jsx(Xs,{hat:s.hat}),e.jsx(Gs,{frame:s.frame})]})}),Hs=2,Zs=25,Js=15;function Q(t=new Date){return`${t.getFullYear()}-${String(
t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Gt(t,s,n){var E,T,L;const i=t.days||{};
let o=0,l=0,d=0,p=0;const h=Object.keys(i).sort();for(const F of h){const N=i[F];N&&(o+=N.focusSec||0,l+=N.sessions||0,(N.
focusSec||0)>d&&(d=N.focusSec||0),(N.sessions||0)>0&&p++)}let u=0;const g=new Date;for((((E=i[Q(g)])==null?void 0:E.sessions)||
0)>0||g.setDate(g.getDate()-1);(((T=i[Q(g)])==null?void 0:T.sessions)||0)>0;)u++,g.setDate(g.getDate()-1);let v=0,x=0,C=null;
for(const F of h){if(!((((L=i[F])==null?void 0:L.sessions)||0)>0))continue;const N=new Date(F+"T12:00:00");C?x=Math.round(
(N.getTime()-C.getTime())/864e5)===1?x+1:1:x=1,x>v&&(v=x),C=N}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:u,bestStreak:v,bestDayMin:Math.round(d/60),activeDays:p}}function pe(t){return t.totalFocusMin*Hs+t.totalSessions*
Zs+t.totalTasksCompleted*Js}function He(t){return 100+50*(t-1)}function xe(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=He(s);)n-=He(s),s++;const i=He(s);return{level:s,xp:t,intoLevel:n,needed:i,progress:i>0?n/i:0}}const Tt=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"},{level:36,name:"Titan of Study"},{level:42,name:"Myth of the Stacks"}];function Qs(t){let s=Tt[0].name;for(const n of Tt)
t>=n.level&&(s=n.name);return s}const ot=[{id:"none-hat",slot:"hat",name:"No hat",level:1,hint:""},{id:"headphones",slot:"\
hat",name:"Headphones",level:2,hint:"Unlocked at level 2"},{id:"beanie",slot:"hat",name:"Beanie",level:4,hint:"Unlocked \
at level 4"},{id:"halo",slot:"hat",name:"Halo",level:8,hint:"Unlocked at level 8"},{id:"crown",slot:"hat",name:"Focus cr\
own",level:12,hint:"Unlocked at level 12"},{id:"wizard",slot:"hat",name:"Wizard hat",level:16,hint:"Unlocked at level 16"},
{id:"laurel",slot:"hat",name:"Laurel wreath",level:20,hint:"Unlocked at level 20"},{id:"gradcap",slot:"hat",name:"Gradua\
tion cap",level:7,hint:"Unlocked at level 7"},{id:"astro",slot:"hat",name:"Astro helmet",level:24,hint:"Unlocked at leve\
l 24"},{id:"none-eyes",slot:"eyes",name:"No eyewear",level:1,hint:""},{id:"glasses",slot:"eyes",name:"Round glasses",level:3,
hint:"Unlocked at level 3"},{id:"shades",slot:"eyes",name:"Cool shades",level:6,hint:"Unlocked at level 6"},{id:"monocle",
slot:"eyes",name:"Monocle",level:10,hint:"Unlocked at level 10"},{id:"star-eyes",slot:"eyes",name:"Starry eyes",level:15,
hint:"Unlocked at level 15"},{id:"hearts",slot:"eyes",name:"Heart eyes",level:8,hint:"Unlocked at level 8"},{id:"none-au\
ra",slot:"aura",name:"No aura",level:1,hint:""},{id:"sparkle",slot:"aura",name:"Sparkles",level:5,hint:"Unlocked at leve\
l 5"},{id:"calm-ring",slot:"aura",name:"Calm ring",level:9,hint:"Unlocked at level 9"},{id:"ember",slot:"aura",name:"Emb\
er glow",level:13,hint:"Unlocked at level 13"},{id:"galaxy",slot:"aura",name:"Galaxy ring",level:18,hint:"Unlocked at le\
vel 18"},{id:"rainbow",slot:"aura",name:"Rainbow ring",level:15,hint:"Unlocked at level 15"},{id:"none-frame",slot:"fram\
e",name:"No frame",level:1,hint:""},{id:"frame-bronze",slot:"frame",name:"Bronze frame",level:2,hint:"Unlocked at level \
2"},{id:"frame-silver",slot:"frame",name:"Silver frame",level:6,hint:"Unlocked at level 6"},{id:"frame-gold",slot:"frame",
name:"Gold frame",level:11,hint:"Unlocked at level 11"},{id:"frame-emerald",slot:"frame",name:"Emerald frame",level:16,hint:"\
Unlocked at level 16"},{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"},{id:"\
frame-rainbow",slot:"frame",name:"Rainbow frame",level:25,hint:"Unlocked at level 25"}];function en(t,s){return s>=t.level}
function tn(t){return ot.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const sn=[{id:"moon",name:"Moon"},
{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},{id:"\
sprout",name:"Sprout"},{id:"blob",name:"Blob"},{id:"penguin",name:"Penguin"},{id:"frog",name:"Frog"}],rt=[{id:"first-ses\
sion",name:"First steps",desc:"Complete your first focus session",unlocked:t=>t.totalSessions>=1,target:1,progress:t=>t.
totalSessions},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessions",unlocked:t=>t.totalSessions>=
10,target:10,progress:t=>t.totalSessions},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50,target:50,progress:t=>t.totalSessions},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.
totalTasksCompleted>=5,target:5,progress:t=>t.totalTasksCompleted},{id:"tasks-25",name:"Task master",desc:"Finish 25 tas\
ks",unlocked:t=>t.totalTasksCompleted>=25,target:25,progress:t=>t.totalTasksCompleted},{id:"streak-3",name:"Hat trick",desc:"\
Study 3 days in a row",unlocked:t=>t.bestStreak>=3,target:3,progress:t=>t.bestStreak},{id:"streak-7",name:"Full week",desc:"\
Study 7 days in a row",unlocked:t=>t.bestStreak>=7,target:7,progress:t=>t.bestStreak},{id:"streak-30",name:"Unstoppable",
desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30,target:30,progress:t=>t.bestStreak},{id:"hour-day",name:"Soli\
d hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60,target:60,progress:t=>t.bestDayMin},{id:"deep-da\
y",name:"Deep work day",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180,target:180,progress:t=>t.bestDayMin},
{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 total focus hours",unlocked:t=>t.totalFocusMin>=600,target:600,progress:t=>t.
totalFocusMin},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus hours",unlocked:t=>t.totalFocusMin>=6e3,
target:6e3,progress:t=>t.totalFocusMin},{id:"level-5",name:"Rising star",desc:"Reach level 5",unlocked:(t,s)=>xe(s?s.xp:
pe(t)).level>=5,target:5,progress:(t,s)=>xe(s?s.xp:pe(t)).level},{id:"level-10",name:"Double digits",desc:"Reach level 1\
0",unlocked:(t,s)=>xe(s?s.xp:pe(t)).level>=10,target:10,progress:(t,s)=>xe(s?s.xp:pe(t)).level},{id:"level-20",name:"Sky\
 high",desc:"Reach level 20",unlocked:(t,s)=>xe(s?s.xp:pe(t)).level>=20,target:20,progress:(t,s)=>xe(s?s.xp:pe(t)).level},
{id:"quests-1",name:"Quest starter",desc:"Claim your first daily quest",unlocked:(t,s)=>((s==null?void 0:s.questsClaimed)||
0)>=1,target:1,progress:(t,s)=>(s==null?void 0:s.questsClaimed)||0},{id:"quests-10",name:"Quest regular",desc:"Claim 10 \
daily quests",unlocked:(t,s)=>((s==null?void 0:s.questsClaimed)||0)>=10,target:10,progress:(t,s)=>(s==null?void 0:s.questsClaimed)||
0},{id:"quests-50",name:"Quest legend",desc:"Claim 50 daily quests",unlocked:(t,s)=>((s==null?void 0:s.questsClaimed)||0)>=
50,target:50,progress:(t,s)=>(s==null?void 0:s.questsClaimed)||0},{id:"active-7",name:"Regular",desc:"Study on 7 differe\
nt days",unlocked:t=>t.activeDays>=7,target:7,progress:t=>t.activeDays},{id:"active-30",name:"Devoted",desc:"Study on 30\
 different days",unlocked:t=>t.activeDays>=30,target:30,progress:t=>t.activeDays}];function Pt(t){if(t<60)return`${t} mi\
n`;const s=Math.floor(t/60),n=t%60;return n?`${s}h ${n}m`:`${s}h`}const Dt=[{id:"focus-25",kind:"focus",name:"Focus 25 m\
inutes today",target:25,xp:15,unit:"min"},{id:"focus-45",kind:"focus",name:"Focus 45 minutes today",target:45,xp:25,unit:"\
min"},{id:"focus-90",kind:"focus",name:"Focus 90 minutes today",target:90,xp:45,unit:"min"}],Ot=[{id:"sessions-1",kind:"\
sessions",name:"Complete 1 focus session",target:1,xp:10,unit:""},{id:"sessions-2",kind:"sessions",name:"Complete 2 focu\
s sessions",target:2,xp:20,unit:""},{id:"sessions-3",kind:"sessions",name:"Complete 3 focus sessions",target:3,xp:35,unit:""}],
Ft=[{id:"tasks-1",kind:"tasks",name:"Finish 1 task",target:1,xp:10,unit:""},{id:"tasks-2",kind:"tasks",name:"Finish 2 ta\
sks",target:2,xp:20,unit:""},{id:"tasks-3",kind:"tasks",name:"Finish 3 tasks",target:3,xp:30,unit:""}],nn={id:"streak-ke\
ep",kind:"streak",name:"Study today to protect your streak",target:1,xp:15,unit:""};function an(t){let s=2166136261;for(let n=0;n<
t.length;n++)s^=t.charCodeAt(n),s=Math.imul(s,16777619);return s>>>0}function on(t){let s=t>>>0;return()=>{s|=0,s=s+1831565813|
0;let n=Math.imul(s^s>>>15,1|s);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ht(t,s){const n=on(
an(t)),i=Dt[Math.floor(n()*Dt.length)],o=Ot[Math.floor(n()*Ot.length)],l=Ft[Math.floor(n()*Ft.length)],d=s>=2?nn:l,p=[i,
o,d];for(let h=p.length-1;h>0;h--){const u=Math.floor(n()*(h+1));[p[h],p[u]]=[p[u],p[h]]}return p}function Zt(t,s){return t.
map(n=>{const i=n.kind==="focus"?s.todayMin:n.kind==="sessions"||n.kind==="streak"?s.todaySessions:s.tasksToday,o=Math.min(
i,n.target);return{...n,progress:o,done:i>=n.target}})}const Jt="sft:ft-stats.v1",ut="sft:ft-tasks.v1",rn="sft:ft-sessio\
n.v1",Qt="sft:ft-profile.v1",ft="sft:ft-progress-ledger.v1",es="sft:ft-xp-bonus.v1",ts="sft:ft-quests.v1";function _e(){
const t=se(ft);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.tasks,migratedAt:t.migratedAt??null}:{v:1,
tasks:{},migratedAt:null}}function ss(t){const s=_e();let n=!1;s.migratedAt===null&&(s.migratedAt=Date.now(),n=!0);for(const i of t.
tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in s.tasks)&&(s.tasks[i.id]=Date.now(),n=!0);if(n)try{window.
localStorage.setItem(ft,JSON.stringify(s))}catch{}return s}function Ut(){const t=se(ut)||{tasks:[]};ss(t)}function ln(t){
if(!t)return;const s=_e();let n=!1;if(s.migratedAt===null&&(s.migratedAt=Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.
now(),n=!0),n)try{window.localStorage.setItem(ft,JSON.stringify(s))}catch{}}const cn={name:"",base:"moon",hat:"none-hat",
eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function lt(){const t=se(es);return{total:Math.max(0,Math.
floor((t==null?void 0:t.total)||0)),questsClaimed:Math.max(0,Math.floor((t==null?void 0:t.questsClaimed)||0))}}function dn(t){
try{window.localStorage.setItem(es,JSON.stringify(t))}catch{}}function ct(){const t=se(ts);return t&&t.day===Q()&&Array.
isArray(t.claimed)?{day:t.day,claimed:t.claimed}:{day:Q(),claimed:[]}}function un(t){try{window.localStorage.setItem(ts,
JSON.stringify(t))}catch{}}function ns(t){var o;const s=t.days||{},n=new Date;n.setDate(n.getDate()-1);let i=0;for(;(((o=
s[Q(n)])==null?void 0:o.sessions)||0)>0;)i++,n.setDate(n.getDate()-1);return i}function as(t){const s=Q();let n=0;for(const i of Object.
values(t.tasks))typeof i=="number"&&Q(new Date(i))===s&&n++;return n}function fn(){const t=se(Jt)||{days:{}},s=se(ut)||{},
n=_e(),i=Gt(t,s,Object.keys(n.tasks).length),o=lt(),l=ct(),d=t.days[Q()],h=Zt(Ht(Q(),ns(t)),{todayMin:Math.round(((d==null?
void 0:d.focusSec)||0)/60),todaySessions:(d==null?void 0:d.sessions)||0,tasksToday:as(n)}).filter(x=>x.done&&!l.claimed.
includes(x.id)).length,u=is(),g={xp:pe(i)+o.total,questsClaimed:o.questsClaimed},v=rt.filter(x=>x.unlocked(i,g)&&!u.seenAchievements.
includes(x.id)).length;return h+v}function se(t){try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{
return null}}function mn(){const t=se(Qt);return{...cn,...t||{}}}function _t(t){try{window.localStorage.setItem(Qt,JSON.
stringify(t))}catch{}}function is(){const t=se("sft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||
{}}}function Wt(t){try{window.localStorage.setItem("sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function os(){const t=se(
rn);return!!(t&&t.running&&t.phase==="focus")}function pn(t){const[s,n]=a.useState(0),[i,o]=a.useState(()=>mn()),[l,d]=a.
useState(()=>is()),[p,h]=a.useState("");a.useEffect(()=>{const M=()=>n(S=>S+1),c=window.setInterval(M,2e3);return window.
addEventListener("focus",M),window.addEventListener("sft:progress",M),()=>{window.clearInterval(c),window.removeEventListener(
"focus",M),window.removeEventListener("sft:progress",M)}},[t]);const u=a.useMemo(()=>se(Jt)||{days:{}},[s]),g=a.useMemo(
()=>se(ut)||{tasks:[],activeId:null},[s]),[v,x]=a.useState(()=>_e());a.useEffect(()=>{x(ss(g))},[g]);const C=a.useMemo(()=>Gt(
u,g,Object.keys(v.tasks).length),[u,g,v]),[E,T]=a.useState(()=>lt()),[L,F]=a.useState(()=>ct());a.useEffect(()=>{T(lt()),
F(ct())},[s]);const N=a.useMemo(()=>pe(C)+E.total,[C,E]),b=a.useMemo(()=>xe(N),[N]),w=a.useMemo(()=>({xp:N,questsClaimed:E.
questsClaimed}),[N,E]),j=a.useMemo(()=>{const M=u.days[Q()];return Zt(Ht(Q(),ns(u)),{todayMin:Math.round(((M==null?void 0:
M.focusSec)||0)/60),todaySessions:(M==null?void 0:M.sessions)||0,tasksToday:as(v)}).map(c=>c)},[u,v]),$=a.useMemo(()=>j.
map(M=>({...M,claimed:L.claimed.includes(M.id)})),[j,L]),D=$.filter(M=>M.done&&!M.claimed).length,O=a.useCallback(M=>{const c=$.
find(I=>I.id===M);if(!c||!c.done||c.claimed)return 0;const S={day:Q(),claimed:[...L.claimed,M]},W={total:E.total+c.xp,questsClaimed:E.
questsClaimed+1};un(S),dn(W),F(S),T(W);try{window.dispatchEvent(new Event("sft:progress"))}catch{}return c.xp},[$,L,E]),
U=a.useCallback(M=>{o(c=>{const S={...c,...M,updatedAt:Date.now()};try{_t(S)}catch{h("This browser blocked saving. Profi\
le changes last until the tab closes.")}return S})},[]),B=a.useCallback(M=>{o(()=>{try{_t(M)}catch{}return M})},[]),V=a.
useCallback(M=>{d(c=>{const S={...c,seenAchievements:Array.from(new Set([...c.seenAchievements,...M]))};return Wt(S),S})},
[]),R=a.useCallback(M=>{d(c=>{const S={...c,celebratedLevel:Math.max(c.celebratedLevel,M)};return Wt(S),S})},[]);return{
ready:!0,snapshot:C,statsDays:u.days,levelInfo:b,xpTotal:N,bonusXp:E.total,quests:$,claimQuest:O,claimableCount:D,questsClaimedTotal:E.
questsClaimed,achCtx:w,profile:i,setProfile:U,replaceProfile:B,meta:l,markAchievementsSeen:V,celebrateLevel:R,storageMessage:p}}
const Ue={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},Z=!!(Ue.apiKey&&Ue.databaseURL&&Ue.authDomain),Ze="\
10.14.1",Je={app:`https://www.gstatic.com/firebasejs/${Ze}/firebase-app.js`,auth:`https://www.gstatic.com/firebasejs/${Ze}\
/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Ze}/firebase-database.js`};let Re=null;function Qe(t){
return new Function("u","return import(u)")(t)}function be(){if(!Re){const t=Promise.all([Qe(Je.app),Qe(Je.auth),Qe(Je.database)]).
then(([s,n,i])=>{const o=s.initializeApp(Ue);return{auth:n.getAuth(o),db:i.getDatabase(o),authApi:n,dbApi:i}});t.catch(()=>{
Re===t&&(Re=null)}),Re=t}return Re}function hn(){const[t,s]=a.useState(Z?"loading":"off"),[n,i]=a.useState(null),[o,l]=a.
useState("");a.useEffect(()=>{if(!Z)return;let h,u=!0;return be().then(({auth:g,authApi:v})=>{u&&(h=v.onAuthStateChanged(
g,x=>{u&&(x?(i({uid:x.uid,name:x.displayName||(x.isAnonymous?"Guest":"Scholar"),email:x.email||null,anonymous:!!x.isAnonymous}),
s("signed-in")):(i(null),s("signed-out")))}))}).catch(()=>{u&&(s("error"),l("Account features could not be loaded. Every\
thing else still works on this device."))}),()=>{u=!1,h&&h()}},[]);const d=a.useCallback(()=>{Z&&(l(""),be().then(({auth:h,
authApi:u})=>u.signInWithPopup(h,new u.GoogleAuthProvider)).catch(h=>{h&&(h.code==="auth/popup-closed-by-user"||h.code===
"auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaffected.")}))},[]),p=a.useCallback(
()=>{Z&&be().then(({auth:h,authApi:u})=>u.signOut(h)).catch(()=>{})},[]);return{status:t,user:n,error:o,signInWithGoogle:d,
signOut:p}}async function gn(t){if(!Z)return null;const{db:s,dbApi:n}=await be(),i=await n.get(n.child(n.ref(s),`profile\
s/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="string"?o.name.slice(0,40):"",
base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.eyes=="string"?o.eyes:
"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:"none-frame",updatedAt:typeof o.
updatedAt=="number"?o.updatedAt:0}}async function qt(t,s){if(!Z)return;const{db:n,dbApi:i}=await be();await i.set(i.ref(
n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,updatedAt:s.updatedAt})}
function rs(t,s){const[n,i]=a.useState(null),[o,l]=a.useState(Z?"connecting":"off"),d=a.useRef(t);return d.current=t,a.useEffect(
()=>{if(!Z||!s){l("off"),i(null);return}let p=!0,h;return l("connecting"),(async()=>{try{const{auth:u,db:g,authApi:v,dbApi:x}=await be();
let C=u.currentUser;if(C||(C=(await v.signInAnonymously(u)).user),!p)return;const E=x.ref(g,`presence/${C.uid}`),T=()=>x.
set(E,{studying:d.current,ts:Date.now()}).catch(()=>{});await T(),x.onDisconnect(E).remove().catch(()=>{});const L=window.
setInterval(T,3e4),F=x.onValue(x.ref(g,"presence"),N=>{if(!p)return;const b=Date.now();let w=0;const j=N&&N.val?N.val():
{};for(const $ of Object.keys(j||{})){const D=j[$];D&&D.studying===!0&&typeof D.ts=="number"&&b-D.ts<9e4&&w++}i(w),l("li\
ve")},()=>{p&&l("error")});h=()=>{window.clearInterval(L),F&&F(),x.remove(E).catch(()=>{})}}catch{p&&l("error")}})(),()=>{
p=!1,h&&h()}},[s]),a.useEffect(()=>{!Z||!s||o!=="live"||be().then(({auth:p,db:h,dbApi:u})=>{const g=p.currentUser;g&&u.set(
u.ref(h,`presence/${g.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,status:o}}const yn=H.
memo(function({count:s=44}){const n=a.useMemo(()=>Array.from({length:s},()=>({left:Math.random()*100,delay:Math.random()*
.35,dur:1.5+Math.random()*1.1,hue:Math.floor(Math.random()*360),dx:(Math.random()*2-1)*70,size:6+Math.random()*6,round:Math.
random()<.4,spin:Math.floor(Math.random()*360)})),[s]);return e.jsx("div",{className:"pf-confetti","aria-hidden":"true",
children:n.map((i,o)=>e.jsx("span",{style:{left:`${i.left}%`,animationDelay:`${i.delay}s`,animationDuration:`${i.dur}s`,
background:`hsl(${i.hue} 90% 65%)`,width:i.size,height:i.round?i.size:i.size*.45,borderRadius:i.round?"50%":2,transform:`\
rotate(${i.spin}deg)`,"--dx":`${i.dx}px`}},o))})}),xn=H.memo(function({amount:s,label:n}){return e.jsxs("div",{className:"\
pf-xpfloat",role:"status",children:["+",s," XP",n?` · ${n}`:""]})}),bn=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],kn=H.
memo(function({days:s}){const n=a.useMemo(()=>{var g;const u=[];for(let v=6;v>=0;v--){const x=new Date;x.setDate(x.getDate()-
v);const C=Q(x);u.push({key:C,label:bn[x.getDay()],min:Math.round((((g=s[C])==null?void 0:g.focusSec)||0)/60),isToday:v===
0})}return u},[s]),[i,o]=a.useState(6),l=Math.max(30,...n.map(u=>u.min)),d=n[i]||n[n.length-1],p=Math.max(...n.map(u=>u.
min)),h=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u} min`;return e.jsxs("div",{className:"pf-week",children:[
e.jsx("div",{className:"pf-week-bars",role:"group","aria-label":"Focus minutes, last 7 days",children:n.map((u,g)=>e.jsxs(
"button",{type:"button",className:`pf-week-bar ${g===i?"is-active":""} ${u.min===p&&p>0?"is-best":""}`,"aria-label":`${u.
label}${u.isToday?" (today)":""}: ${h(u.min)}`,onClick:()=>o(g),children:[e.jsx("span",{className:"pf-week-fill",style:{
height:`${Math.max(3,Math.round(u.min/l*100))}%`}}),e.jsx("span",{className:"pf-week-day",children:u.label})]},u.key))}),
e.jsxs("div",{className:"pf-week-caption",children:[d.isToday?"Today":d.label,": ",e.jsx("strong",{children:h(d.min)}),d.
min===p&&p>0?" · best this week":""]})]})});function vn(){const[t,s]=a.useState(!1);return a.useEffect(()=>{Ut();const n=()=>Ut(),
i=window.setInterval(n,15e3);if(!Z)return()=>window.clearInterval(i);const o=()=>s(os());o();const l=window.setInterval(
o,1e4);return()=>{window.clearInterval(l),window.clearInterval(i)}},[]),rs(t,Z),null}function jn(){const[t,s]=a.useState(
0);return a.useEffect(()=>{const n=()=>s(fn());n();const i=window.setInterval(n,15e3);return window.addEventListener("sf\
t:progress",n),window.addEventListener("focus",n),()=>{window.clearInterval(i),window.removeEventListener("sft:progress",
n),window.removeEventListener("focus",n)}},[]),t>0?e.jsx("span",{className:"pf-dot","aria-label":`${t} progression rewar\
d${t===1?"":"s"} to collect`}):null}const wn=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"aura",label:"\
Aura"},{slot:"frame",label:"Frame"}],Sn=H.memo(function({onClose:s}){var ne;const n=pn(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:d,replaceProfile:p,meta:h}=n,u=hn(),[g,v]=a.useState(!1);a.useEffect(()=>{if(!Z)return;const y=()=>v(os());y();
const K=window.setInterval(y,5e3);return()=>window.clearInterval(K)},[]);const x=rs(g,Z),[C,E]=a.useState(!1),[T,L]=a.useState(
""),[F,N]=a.useState(""),b=a.useRef("");a.useEffect(()=>{if(!Z||u.status!=="signed-in"||!u.user||u.user.anonymous)return;
const y=u.user.uid;b.current!==y&&(b.current=y,gn(y).then(K=>{K&&K.updatedAt>l.updatedAt?(p(K),N("Profile synced from yo\
ur account.")):qt(y,l).then(()=>N("Profile saved to your account.")).catch(()=>N("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>N("Could not sync right now; your local profile is safe.")))},[u.status,u.user]),a.useEffect(
()=>{if(!Z||u.status!=="signed-in"||!u.user||u.user.anonymous||!l.updatedAt)return;const y=window.setTimeout(()=>{qt(u.user.
uid,l).catch(()=>N("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(y)},[l.
updatedAt,u.status,u.user]);const w=o.level,j=Qs(w),D=a.useMemo(()=>rt.filter(y=>y.unlocked(i,n.achCtx)),[i,n.achCtx]).filter(
y=>!h.seenAchievements.includes(y.id)),O=w>h.celebratedLevel,U=tn(w),[B,V]=a.useState(!1),[R,M]=a.useState([]),c=a.useRef(
null);a.useEffect(()=>{if(c.current!==null&&n.xpTotal>c.current){const y=n.xpTotal-c.current,K=Date.now()+Math.random();
M(q=>[...q,{id:K,amount:y}]),window.setTimeout(()=>M(q=>q.filter(Y=>Y.id!==K)),1700)}c.current=n.xpTotal},[n.xpTotal]),a.
useEffect(()=>{if(!O)return;V(!0);const y=window.setTimeout(()=>V(!1),2600);return()=>window.clearTimeout(y)},[O]);const S=y=>{
n.claimQuest(y.id)},W=()=>{const y=T.trim().slice(0,24);d({name:y}),E(!1)},I=l.name||"Guest scholar",r=((ne=n.statsDays[Q()])==
null?void 0:ne.sessions)||0,_=n.claimableCount>0?`${n.claimableCount} quest${n.claimableCount===1?"":"s"} ready to claim\
!`:O?`Level ${w}! You are now ${j}.`:i.currentStreak>=2&&r===0?`Study today to keep your ${i.currentStreak}-day streak.`:
U.length>0?`${o.needed-o.intoLevel} XP to ${U[0].name} at level ${U[0].level}.`:"Every focus minute earns 2 XP. Quests e\
arn bonus XP.";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[B?e.jsx(
yn,{}):null,R.map(y=>e.jsx(xn,{amount:y.amount,label:y.label},y.id)),e.jsxs("div",{className:"ft-sheet-head",children:[e.
jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close profile",onClick:s,
children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(It,{spec:l,size:84}),e.jsxs("div",{className:"pf-he\
ro-info",children:[C?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("input",{value:T,maxLength:24,autoFocus:!0,placeholder:"\
Display name",onChange:y=>L(y.target.value),onKeyDown:y=>{y.key==="Enter"&&W(),y.key==="Escape"&&E(!1)}}),e.jsx("button",
{type:"button",className:"ft-primary is-compact",onClick:W,children:"Save"})]}):e.jsxs("button",{type:"button",className:"\
pf-name",title:"Edit display name",onClick:()=>{L(l.name),E(!0)},children:[I," ",e.jsx("span",{className:"pf-name-pen","\
aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",children:j}),x.status==="live"&&x.count!==null?
e.jsxs("span",{className:"pf-live",title:"People with a focus session running right now",children:[e.jsx("span",{className:"\
pf-live-dot","aria-hidden":"true"})," ",x.count," studying now"]}):null]}),e.jsxs("span",{className:"pf-level-badge",title:`\
Level ${w}`,children:["Lv ",w]})]}),e.jsx("div",{className:"pf-bubble",role:"status",children:_}),e.jsxs("div",{className:"\
pf-xpwrap",role:"img","aria-label":`Level ${w}, ${o.intoLevel} of ${o.needed} experience toward level ${w+1}`,children:[
e.jsx("div",{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",
{className:"pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),n.bonusXp>0?e.jsxs("p",{className:"ft-field-hint \
pf-bonus-note",children:[n.xpTotal," XP total, including ",n.bonusXp," bonus XP from quests."]}):null,O?e.jsxs("div",{className:"\
pf-banner",role:"status",children:["Level ",w," reached - ",j,"!",U.length===0?"":" New gear below.",e.jsx("button",{type:"\
button",className:"ft-primary is-compact",onClick:()=>n.celebrateLevel(w),children:"Nice"})]}):null,D.length>0?e.jsxs("d\
iv",{className:"pf-banner",role:"status",children:["Unlocked: ",D.map(y=>y.name).join(", "),e.jsx("button",{type:"button",
className:"ft-primary is-compact",onClick:()=>n.markAchievementsSeen(D.map(y=>y.id)),children:"Nice"})]}):null,e.jsx("h3",
{children:"Daily quests"}),e.jsx("div",{className:"pf-quests",children:n.quests.map(y=>e.jsxs("div",{className:`pf-quest\
 ${y.claimed?"is-claimed":""} ${y.done&&!y.claimed?"is-done":""}`,children:[e.jsxs("div",{className:"pf-quest-body",children:[
e.jsx("strong",{children:y.name}),e.jsxs("span",{className:"pf-quest-prog",children:[e.jsx("span",{className:"pf-quest-b\
ar",children:e.jsx("span",{style:{width:`${Math.round(y.progress/y.target*100)}%`}})}),e.jsxs("span",{className:"pf-ques\
t-num",children:[y.progress,"/",y.target,y.unit?` ${y.unit}`:""]})]})]}),y.claimed?e.jsxs("span",{className:"pf-quest-cl\
aimed",children:["✓ +",y.xp]}):y.done?e.jsxs("button",{type:"button",className:"ft-primary is-compact","aria-label":`C\
laim ${y.xp} XP for ${y.name}`,onClick:()=>S(y),children:["+",y.xp," XP"]}):e.jsxs("span",{className:"pf-quest-xp",children:[
"+",y.xp," XP"]})]},y.id))}),e.jsx("p",{className:"ft-field-hint",children:"Three new quests every day. Claimed quest XP\
 is yours to keep."}),e.jsx("h3",{children:"This week"}),e.jsx(kn,{days:n.statsDays}),e.jsx("h3",{children:"Your stats"}),
e.jsxs("div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Pt(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Pt(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:sn.map(y=>e.jsx("button",{type:"button",title:y.name,"aria-label":`Avatar ${y.name}`,
className:`pf-basebtn ${l.base===y.id?"is-active":""}`,onClick:()=>d({base:y.id}),children:e.jsx(It,{spec:{...l,base:y.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},y.id))}),wn.map(({slot:y,label:K})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:K}),e.jsx("div",{className:"pf-gear",children:ot.filter(q=>q.
slot===y).map(q=>{const Y=en(q,w),ce=l[y]===q.id||q.id.startsWith("none")&&!ot.some(Me=>Me.slot===y&&l[y]===Me.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${ce?"is-active":""} ${Y?"":"is-locked"}`,title:Y?q.name:`${q.name} - ${q.
hint}`,onClick:()=>{Y&&d({[y]:q.id})},children:Y?q.name:`🔒 ${q.name} · Lv ${q.level}`},q.id)})})]},y)),U.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",U[0].name," at level ",U[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:rt.
map(y=>{const K=y.unlocked(i,n.achCtx),q=!K&&y.target&&y.progress?Math.min(y.progress(i,n.achCtx),y.target):null;return e.
jsxs("li",{className:K?"is-got":"",children:[e.jsx("span",{className:"pf-ach-check","aria-hidden":"true",children:K?"★":
"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:y.name}),e.jsx("span",{children:y.desc}),
q!==null?e.jsxs("span",{className:"pf-ach-prog",children:[e.jsx("span",{className:"pf-quest-bar",children:e.jsx("span",{
style:{width:`${Math.round(q/(y.target||1)*100)}%`}})}),e.jsxs("span",{className:"pf-quest-num",children:[q,"/",y.target]})]}):
null]})]},y.id)})}),e.jsx("h3",{children:"Account"}),Z?e.jsxs(e.Fragment,{children:[u.status==="signed-out"?e.jsx("p",{className:"\
ft-field-hint",children:"Optional: sign in to keep your profile and level across devices. You can keep studying without \
an account."}):null,u.status==="signed-out"?e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:u.signInWithGoogle,
children:"Sign in with Google"}):null,u.status==="loading"?e.jsx("p",{className:"ft-field-hint",children:"Loading accoun\
t features…"}):null,u.status==="signed-in"&&u.user?e.jsx("div",{className:"pf-account",children:u.user.anonymous?e.jsxs(
"p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("button",{type:"button",className:"pf-linkbtn",onClick:u.
signInWithGoogle,children:"Sign in with Google"})," to save this profile to an account."]}):e.jsxs(e.Fragment,{children:[
e.jsxs("p",{className:"pf-account-name",children:[u.user.name,u.user.email?` · ${u.user.email}`:""]}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:u.signOut,children:"Sign out"})]})}):null,u.error?e.jsx("p",{className:"\
ft-field-hint",children:u.error}):null,F?e.jsx("p",{className:"ft-field-hint",children:F}):null,e.jsx("p",{className:"ft\
-field-hint",children:"The studying counter is an anonymous total. Nobody can see your name, avatar or stats."})]}):e.jsx(
"p",{className:"ft-field-hint",children:"Sign-in and the live studying counter need a small server, which has not been c\
onnected yet. Your level, avatar and stats are saved in this browser and keep working offline."}),n.storageMessage?e.jsx(
"p",{className:"ft-field-hint",children:n.storageMessage}):null]})});function Se(t,s){const[n,i]=a.useState(s),[o,l]=a.useState(
!1),[d,p]=a.useState("");a.useEffect(()=>{try{const u=window.localStorage.getItem("sft:"+t);if(u!=null){const g=JSON.parse(
u),v=s!==null&&typeof s=="object"&&!Array.isArray(s)&&g!==null&&typeof g=="object"&&!Array.isArray(g)?{...s,...g}:g;i(v)}}catch{
p("Saved data on this browser could not be read.")}l(!0)},[t]);const h=a.useCallback(u=>{i(g=>{const v=typeof u=="functi\
on"?u(g):u;try{window.localStorage.setItem("sft:"+t,JSON.stringify(v))}catch{p("This browser blocked saving. Changes las\
t until the tab closes.")}return v})},[t]);return[n,h,{ready:o,message:d}]}const Nn={v2cat:["images/images/v2cat-0.txt",
"images/images/v2cat-1.txt"],longer:["images/images/longer-0.txt","images/images/longer-1.txt","images/images/longer-2.t\
xt","images/images/longer-3.txt","images/images/longer-4.txt","images/images/longer-5.txt"],curated:["images/images/cura\
ted-0.txt"],rain:["images/images/rain-0.txt","images/images/rain-1.txt"],"thumb-rain":["images/images/thumb-rain-0.txt"],
library:["images/images/library-0.txt","images/images/library-1.txt","images/images/library-2.txt","images/images/librar\
y-3.txt","images/images/library-4.txt"],"thumb-library":["images/images/thumb-library-0.txt"],coffee:["images/images/cof\
fee-0.txt","images/images/coffee-1.txt","images/images/coffee-2.txt"],"thumb-coffee":["images/images/thumb-coffee-0.txt"],
desk:["images/images/desk-0.txt","images/images/desk-1.txt","images/images/desk-2.txt"],"thumb-desk":["images/images/thu\
mb-desk-0.txt"],mountains:["images/images/mountains-0.txt","images/images/mountains-1.txt","images/images/mountains-2.tx\
t","images/images/mountains-3.txt","images/images/mountains-4.txt","images/images/mountains-5.txt"],"thumb-mountains":["\
images/images/thumb-mountains-0.txt"],forest:["images/images/forest-0.txt","images/images/forest-1.txt","images/images/f\
orest-2.txt","images/images/forest-3.txt"],"thumb-forest":["images/images/thumb-forest-0.txt"],stars:["images/images/sta\
rs-0.txt"],"thumb-stars":["images/images/thumb-stars-0.txt"],ocean:["images/images/ocean-0.txt","images/images/ocean-1.t\
xt","images/images/ocean-2.txt"],"thumb-ocean":["images/images/thumb-ocean-0.txt"],catalog:["images/images/catalog-0.txt",
"images/images/catalog-1.txt","images/images/catalog-2.txt","images/images/catalog-3.txt","images/images/catalog-4.txt",
"images/images/catalog-5.txt","images/images/catalog-6.txt"]},et={};function mt(t){return et[t]||(et[t]=Promise.all(Nn[t].
map(async s=>{const n=await fetch(s);if(!n.ok)throw Error("Image unavailable");return n.text()})).then(s=>"data:image/jp\
eg;base64,"+s.join("").replace(/\s/g,"")))}function Mn(t){const[s,n]=a.useState("");return a.useEffect(()=>{let i=!0;return mt(
t).then(o=>{i&&n(o)}).catch(()=>{}),()=>{i=!1}},[t]),s}const Cn={rain:"photos/12-rain.jpg",library:"photos/13-library.jp\
g",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.\
jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-ocean.jpg"},En={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.j\
pg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-desk.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest\
.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-ocean.jpg"},zt=Object.fromEntries(Object.keys(Cn).map(t=>[t,()=>mt(t).
then(s=>({default:s}))])),Bt=Object.fromEntries(Object.keys(En).map(t=>[t,()=>mt("thumb-"+t).then(s=>({default:s}))])),tt={},
st={},nt={focusMin:25,shortMin:5,longMin:15,longEvery:4,autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,
customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,notifications:!1,keepAwake:!1,background:{kind:"builtin",id:"ra\
in"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,
showChip:!0,showHint:!0,clockOnly:!1,spotify:null,spotifyOpen:!1,musicOpen:!0,musicMode:"radio",radio:{index:0,playing:!1,
volume:.7}},Rn=[{id:"rain",name:"Rainy window"},{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"des\
k",name:"Night desk"},{id:"mountains",name:"Mountains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},
{id:"ocean",name:"Ocean"}],Ln=[{id:"#101418",name:"Ink"},{id:"#16213a",name:"Midnight"},{id:"#122b21",name:"Forest"},{id:"\
#2e1a33",name:"Plum"},{id:"#33191f",name:"Wine"},{id:"#232a30",name:"Slate"},{id:"#3a2e1e",name:"Cocoa"},{id:"#d8cfc0",name:"\
Paper"}],oe=[{id:"chillhop-jazz",title:"Chillhop Jazz Coffee Shop",artist:"alex-morgan",url:"https://cdn.pixabay.com/dow\
nload/audio/2026/06/16/audio_912babebe1.mp3?filename=alex-morgan-chillhop-jazz-coffee-shop-552792.mp3",cover:"https://cd\
n.pixabay.com/audio/2026/06/16/18-47-53-884_200x200.jpg",seconds:173},{id:"subclair-lofi",title:"Lofi",artist:"Sub_Clair",
url:"https://cdn.pixabay.com/download/audio/2026/08/15/audio_7249b5f798.mp3?filename=sub_clair-lofi-586095.mp3",cover:"h\
ttps://cdn.pixabay.com/audio/2026/08/15/08-51-29-850_200x200.jpg",seconds:214},{id:"kulakovka-relax",title:"LoFi Relax",
artist:"Kulakovka",url:"https://cdn.pixabay.com/download/audio/2026/07/20/audio_d3e4d47bc2.mp3?filename=kulakovka-lofi-r\
elax-570489.mp3",cover:"https://cdn.pixabay.com/gradients/82bfb5-eac560_200x200.png",seconds:140},{id:"apalon-lofi",title:"\
Lofi",artist:"APALONBeats",url:"https://cdn.pixabay.com/download/audio/2026/07/29/audio_453d7bbab8.mp3?filename=apalonbe\
ats-lofi-576261.mp3",cover:"https://cdn.pixabay.com/audio/2026/07/29/14-51-13-130_200x200.jpg",seconds:128},{id:"monda-l\
ofi",title:"LoFi Music",artist:"MondaMusic",url:"https://cdn.pixabay.com/download/audio/2026/08/20/audio_cd7ca920a0.mp3?\
filename=mondamusic-lofi-lofi-music-589107.mp3",cover:"https://cdn.pixabay.com/audio/2026/08/20/09-14-53-672_200x200.jpg",
seconds:98},{id:"zephira-chill",title:"Chill Lofi",artist:"ZephiraMusic",url:"https://cdn.pixabay.com/download/audio/202\
6/08/14/audio_a5f2abd4d3.mp3?filename=zephiramusic-chill-lofi-585360.mp3",cover:"https://cdn.pixabay.com/gradients/67a87\
1-909cf2_200x200.png",seconds:137},{id:"coffee-shop",title:"Lofi Coffee Shop",artist:"alex-morgan",url:"https://cdn.pixa\
bay.com/download/audio/2026/07/15/audio_6353298add.mp3?filename=alex-morgan-lofi-coffee-shop-568150.mp3",cover:"https://\
cdn.pixabay.com/audio/2026/07/15/21-20-45-679_200x200.jpg",seconds:114},{id:"midnight-club",title:"Lofi Midnight Club",artist:"\
alex-morgan",url:"https://cdn.pixabay.com/download/audio/2026/07/15/audio_53935e58bb.mp3?filename=alex-morgan-lofi-midni\
ght-club-568164.mp3",cover:"https://cdn.pixabay.com/audio/2026/07/15/21-18-58-754_200x200.jpg",seconds:137}];function Vt(t){
const s=t.replace("#",""),n=parseInt(s.slice(0,2),16)/255,i=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255,
l=Math.max(n,i,o),d=Math.min(n,i,o),p=(l+d)/2;if(l===d)return{h:0,s:0,l:p};const h=l-d,u=p>.5?h/(2-l-d):h/(l+d);let g=0;
return l===n?g=(i-o)/h+(i<o?6:0):l===i?g=(o-n)/h+2:g=(n-i)/h+4,{h:g*60,s:u,l:p}}function at(t,s,n){const i=o=>{const l=(o+
t/30)%12,d=s*Math.min(n,1-n),p=n-d*Math.max(-1,Math.min(l-3,9-l,1));return Math.round(p*255).toString(16).padStart(2,"0")};
return`#${i(0)}${i(8)}${i(4)}`}function An(t){const s=t.replace("#","");if(!/^[0-9a-f]{6}$/i.test(s))return 0;const n=i=>{
const o=parseInt(s.slice(i,i+2),16)/255;return o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)};return .2126*n(0)+.7152*n(
2)+.0722*n(4)}const pt=[{id:"lofi-246243",name:"Windowsill cat",url:"https://cdn.pixabay.com/video/2024/12/11/246243_med\
ium.mp4",tile:0,preview:"v2cat",duration:76.71},{id:"lofi-246535",name:"Sunset cat",url:"https://cdn.pixabay.com/video/2\
024/12/13/246535_medium.mp4",tile:1,preview:"v2cat",duration:58.56},{id:"lofi-246241",name:"Night room cat",url:"https:/\
/cdn.pixabay.com/video/2024/12/11/246241_medium.mp4",tile:2,preview:"v2cat",duration:75.34},{id:"lofi-246242",name:"Fire\
place cat",url:"https://cdn.pixabay.com/video/2024/12/11/246242_medium.mp4",tile:3,preview:"v2cat",duration:58.69},{id:"\
lofi-270983",name:"Mountain cafe",url:"https://cdn.pixabay.com/video/2025/04/09/270983_medium.mp4",tile:4,preview:"v2cat",
duration:5.33},{id:"lofi-73663",name:"Attic nap",url:"https://cdn.pixabay.com/video/2021/05/09/73663-549527825_medium.mp\
4",tile:5,preview:"v2cat",duration:60.01},{id:"lofi-215407",name:"Rainy study desk",url:"https://cdn.pixabay.com/video/2\
024/06/05/215407_medium.mp4",tile:6,preview:"v2cat",duration:60.09},{id:"photo-107976",name:"Tropical waterfall",url:"ht\
tps://cdn.pixabay.com/video/2022/02/17/107976-678971242_medium.mp4",tile:7,preview:"v2cat",duration:60.01,blend:!0},{id:"\
photo-22589",name:"Waterfall streams",url:"https://cdn.pixabay.com/video/2019/04/04/22589-328624822_medium.mp4",tile:8,preview:"\
v2cat",duration:36.31,blend:!0},{id:"lofi-312345",name:"Rainy reading cat",url:"https://cdn.pixabay.com/video/2025/10/27\
/312345_medium.mp4",tile:9,preview:"v2cat",duration:64},{id:"lofi-345856",name:"City window cat",url:"https://cdn.pixaba\
y.com/video/2026/04/11/345856_medium.mp4",tile:10,preview:"v2cat",duration:64},{id:"lofi-310025",name:"Cozy study rain",
url:"https://cdn.pixabay.com/video/2025/10/15/310025_medium.mp4",tile:11,preview:"v2cat",duration:64},{id:"lofi-270507",
name:"Sunset fence cat",url:"https://cdn.pixabay.com/video/2025/04/07/270507_medium.mp4",tile:12,preview:"v2cat",duration:59.97},
{id:"photo-292827",name:"Alpine lake",url:"https://cdn.pixabay.com/video/2025/07/22/292827_medium.mp4",tile:13,preview:"\
v2cat",duration:20.03,blend:!0},{id:"photo-20451",name:"Golden surf",url:"https://cdn.pixabay.com/video/2019/01/04/20451\
-309694501_medium.mp4",tile:14,preview:"v2cat",duration:43.32,blend:!0},{id:"photo-198488",name:"Shoreline waves",url:"h\
ttps://cdn.pixabay.com/video/2024/01/29/198488-907576442_medium.mp4",tile:15,preview:"v2cat",duration:60,blend:!0},{id:"\
lofi-214500",name:"Warm library desk",url:"https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4",tile:16,preview:"\
v2cat",duration:63.23},{id:"lofi-301247",name:"Retro train cat",url:"https://cdn.pixabay.com/video/2025/09/02/301247_med\
ium.mp4",tile:17,preview:"v2cat",duration:29.87},{id:"lofi-345838",name:"Sleeping dog desk",url:"https://cdn.pixabay.com\
/video/2026/04/11/345838_medium.mp4",tile:18,preview:"v2cat",duration:61.4},{id:"lofi-345955",name:"Night reading",url:"\
https://cdn.pixabay.com/video/2026/04/12/345955_medium.mp4",tile:19,preview:"v2cat",duration:64}],$n=new Map(pt.map(t=>[
t.id,t]));function In(t,s){const n=d=>t.replace(/_(tiny|small|medium|large)\.mp4/,d),i=[n("_medium.mp4"),n("_large.mp4"),
n("_small.mp4"),n("_tiny.mp4")],o=[...new Set(i)],l=n(s?"_small.mp4":"_medium.mp4");return[l,...o.filter(d=>d!==l)]}function Kt(t){
var n;return((n=window.__SFT_POSTERS)==null?void 0:n[t.id])||t.poster}const Tn={"balcony-dusk-l.jpg":"53-balcony-dusk-l.\
jpg","balcony-dusk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-dusk-p.jpg","balcony-dusk-p.mp4":"31-\
balcony-dusk-p.mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"30-cozy-window-l.mp4","cozy-window-p\
.jpg":"50-cozy-window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-street-l.jpg":"49-japan-street-l.jpg","ja\
pan-street-l.mp4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jpg","japan-street-p.mp4":"35-japan-st\
reet-p.mp4","misty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty-river-l.mp4","misty-river-p.jpg":"3\
9-misty-river-p.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"47-night-train-l.jpg","night-train-\
l.mp4":"28-night-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train-p.mp4":"27-night-train-p.mp4","rai\
ny-window-l.jpg":"41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4","rainy-window-p.jpg":"37-rainy-win\
dow-p.jpg","rainy-window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakura-night-l.jpg","sakura-night-l.mp4":"\
26-sakura-night-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p.mp4":"25-sakura-night-p.mp4","shrine\
-l.jpg":"10-shrine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine-p.jpg","shrine-p.mp4":"18-shrine-p.m\
p4","water-garden-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-garden-l.mp4","water-garden-p.jpg":"42-w\
ater-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},ls=(t,s,n)=>`scenes/${Tn[`${t}-${s}.${n}`]}`,Pn=(t,s)=>ls(
t.id,s,"jpg"),Dn=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"\
#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"#c9b6ff"},{id:"white",name:"White",
value:"#ffffff"}],cs=[{id:"sans",name:"Sans",css:"system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"},{id:"serif",
name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"Mono",css:"ui-monospace, 'SF Mono', Menlo, Consol\
as, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, sans-serif"}],On=[{id:"mint",name:"Mint",accent:"\
#9fd8c6",font:"sans",bg:{kind:"color",id:"#101418"}},{id:"dusk",name:"Dusk",accent:"#ffcf99",font:"serif",bg:{kind:"colo\
r",id:"#3b2f4a"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",bg:{kind:"color",id:"#0f2e25"}},{id:"dawn",name:"\
Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"color",id:"#4a2f3d"}}],Fn=[{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},
{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Woodblock"},{id:"custom",name:"My sound"}],ds=[{id:"\
none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"storm",name:"Thunderstorm",file:"sounds/thundersto\
rm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"forest",name:"Forest birds",file:"sounds/forest.m4\
a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",name:"Restaurant chatter",file:"sounds/coffee-sh\
op.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"wind",name:"Wind",file:"sounds/wind.m4a"},{id:"\
stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown noise"},{id:"white",name:"White noise"}],us=[{id:"\
lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"\
https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",name:"Peaceful Piano",url:"https://open.spotify.c\
om/playlist/37i9dQZF1DX4sWSpwq3LiO"}],re={focus:"Focus",short:"Short break",long:"Long break"};let Le=null;function We(){
return Le||(Le=new(window.AudioContext||window.webkitAudioContext)),Le.state==="suspended"&&Le.resume(),Le}function me(t,s,n){
const i=t.createOscillator(),o=t.createGain();i.type=n.type||"sine",i.frequency.value=n.freq,o.gain.setValueAtTime(1e-4,
n.start),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),n.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,
n.start+n.dur),i.connect(o),o.connect(s),i.start(n.start),i.stop(n.start+n.dur+.05)}function Ae(t,s,n){const i=We(),o=i.
createGain();o.gain.value=s,o.connect(i.destination);const l=n?2:1,d=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let p=0;p<l;p++){
const h=i.currentTime+.02+p*(d+.35);if(t==="bell")[[660,.5],[1320,.28],[1760,.14],[2240,.07]].forEach(([u,g])=>me(i,o,{freq:u,
start:h,dur:2.2,gain:g}));else if(t==="chime")me(i,o,{freq:783.99,start:h,dur:1.3,gain:.4}),me(i,o,{freq:1046.5,start:h+
.32,dur:1.4,gain:.34});else if(t==="gong")[[196,.42],[294,.24],[392,.17],[523,.09]].forEach(([u,g])=>me(i,o,{freq:u,start:h,
dur:3.4,gain:g}));else if(t==="beep")for(let u=0;u<3;u++)me(i,o,{freq:880,type:"square",start:h+u*.3,dur:.16,gain:.22});else
t==="wood"&&(me(i,o,{freq:1400,type:"triangle",start:h,dur:.07,gain:.5}),me(i,o,{freq:1400,type:"triangle",start:h+.22,dur:.07,
gain:.4}))}}function Un(t){const s=We(),n=s.createGain();n.gain.value=.35*t,n.connect(s.destination),me(s,n,{freq:1800,start:s.
currentTime,dur:.035,gain:.5})}function _n(t,s){const n=2*t.sampleRate,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(
0);let l=0;for(let d=0;d<n;d++){const p=Math.random()*2-1;s==="brown"?(l=(l+.02*p)/1.02,o[d]=l*3.2):o[d]=p}return i}const Wn={
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
t","sounds/stream-3.txt","sounds/stream-4.txt","sounds/stream-5.txt"]},Oe={};let Yt=!1;function qn(t,s){return Oe[s]||(Oe[s]=
Promise.all((Wn[s]||[]).map(async n=>{const i=await fetch(n);if(!i.ok)throw new Error(`HTTP ${i.status}`);return(await i.
text()).trim()})).then(n=>{if(!n.length)throw new Error("Recording unavailable");const i=atob(n.join(""));return t.decodeAudioData(
Uint8Array.from(i,o=>o.charCodeAt(0)).buffer)}).catch(n=>{throw delete Oe[s],n})),Oe[s]}function zn(t,s){if(t==="none")return null;
const n=ds.find(p=>p.id===t),i=We(),o=i.createGain();if(o.gain.value=s,o.connect(i.destination),n!=null&&n.file){let p=!1,
h=null;return qn(i,n.file).then(u=>{p||(h=i.createBufferSource(),h.buffer=u,h.loop=!0,h.connect(o),h.start())}).catch(()=>{}),
()=>{p=!0;try{h==null||h.stop()}catch{}try{o.disconnect()}catch{}}}const l=i.createBufferSource();l.buffer=_n(i,t==="whi\
te"?"white":"brown"),l.loop=!0;let d=l;if(t==="brown"){const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=
900,d.connect(p),d=p}return d.connect(o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function Bn(t){return/^https:\/\/.+/i.
test(t.trim())}async function dt(t){const s=await fetch(t);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.blob()}
async function Xt(t){try{const s=await dt(t);if(s.type.startsWith("image/"))return s;throw new Error("not an image")}catch{
const s=`https://images.weserv.nl/?url=${encodeURIComponent(t.replace(/^https?:\/\//,""))}`,n=await dt(s);if(!n.type.startsWith(
"image/"))throw new Error("not an image");return n}}async function Vn(t){var d;const s=t.trim();if(/pin\.it\//i.test(s))
throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);let i=s;if(n){const p=await fetch(
`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);if(!p.ok)throw new Error("pin l\
ookup failed");const h=await p.json();if((h==null?void 0:h.status)!=="success"||!Array.isArray(h==null?void 0:h.data)||h.
data.length===0)throw new Error("pin unavailable");const u=(d=h.data[0])==null?void 0:d.images;if(!u)throw new Error("pi\
n has no image");const g=u.originals||u["736x"]||u["564x"]||u["236x"];if(!(g!=null&&g.url))throw new Error("pin has no i\
mage");i=g.url}const o=i.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{const p=`${o[1]}/orig\
inals${o[2]}`;return{blob:await Xt(p),finalUrl:p}}catch{}if(!/^https:\/\//i.test(i))throw new Error("not a link");return{
blob:await Xt(i),finalUrl:i}}function fs(t){const s=us.find(o=>o.id===t),i=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const le=({d:t,vb:s=24})=>e.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,i)=>e.jsx("path",{d:n},i))}),Kn="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",Yn="M5 12h14",Xn="M4 6h16|M4 12h16|M4 18h10",Gn="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
ms="M6 6l12 12|M18 6L6 18",Hn="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function he(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),i=s%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function Ne(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function Fe({label:t,value:s,min:n,max:i,onChange:o,unit:l}){const d=p=>{const h=parseInt(p,10);Number.
isFinite(h)&&o(Math.min(i,Math.max(n,h)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:i,value:s,onChange:p=>d(p.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,s+1)),children:"\
+"})]})]})}function ee({label:t,hint:s,checked:n,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-\
checked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>i(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const Zn=H.memo(function({scene:s,token:n,
paused:i,animate:o,onReady:l,onFail:d}){const p=a.useRef(null),[h,u]=a.useState(!1),[g,v]=a.useState(0),x=a.useMemo(()=>window.
matchMedia("(max-width: 900px), (orientation: portrait)").matches,[]),C=a.useMemo(()=>s.url?In(s.url,x):[ls(s.id,"p","mp\
4")],[s,x]),E=C[Math.min(g,C.length-1)],T=a.useRef({paused:i,animate:o});T.current={paused:i,animate:o};const L=a.useRef(
{onReady:l,onFail:d});L.current={onReady:l,onFail:d};const F=a.useRef(null);return a.useEffect(()=>{var N;(N=F.current)==
null||N.call(F)},[i,o]),a.useEffect(()=>{u(!1);const N=p.current;if(!N)return;let b=!1,w=!1,j=0,$=!1,D=!1;const O=I=>I.play().
catch(()=>{}),U=()=>!T.current.paused&&T.current.animate&&!document.hidden,B=()=>{const I=document.createElement("video");
return I.className="ft-bg ft-bgvideo",I.muted=!0,I.playsInline=!0,I.setAttribute("playsinline",""),I.setAttribute("disab\
lepictureinpicture",""),I.setAttribute("disableremoteplayback",""),I.preload="auto",I.src=E,I.setAttribute("aria-hidden",
"true"),I.loop=!s.blend,I},V=()=>{D||w||(D=!0,v(I=>I<C.length-1?I+1:(u(!0),c&&(c.remove(),c=null),L.current.onFail(n),I)))};
let R=null;const M=()=>{w||(c&&(c.currentTime=0,c.style.opacity="1",U()&&O(c)),R&&(R.remove(),R=null),b=!1)};let c=B();c.
addEventListener("error",V),c.addEventListener("ended",M),N.appendChild(c);const S=()=>{U()?$&&c&&(O(c),R&&O(R)):(c==null||
c.pause(),R==null||R.pause())};F.current=S;const W=()=>{if(!(w||!c)){if(!$&&c.readyState>=2&&($=!0,p.current&&(p.current.
style.opacity="1"),L.current.onReady(n),U()&&O(c)),U()&&$){c.paused&&!c.ended&&O(c);const I=s.duration||c.duration,r=Math.
min(1.5,I/4);if(!s.blend)return;if(!b&&Number.isFinite(I)&&c.currentTime>=I-r&&(b=!0,R=B(),R.style.opacity="0",R.style.zIndex=
"2",R.addEventListener("error",()=>{}),N.appendChild(R),R.currentTime=0,O(R)),b&&R&&R.readyState>=2){R.paused&&O(R);const _=Math.
min(1,R.currentTime/r);c.style.opacity=String(1-_),R.style.opacity="1",_>=1&&(c.remove(),c=R,R=null,b=!1,c.addEventListener(
"error",V),c.addEventListener("ended",M),N.dataset.wraps=String(Number(N.dataset.wraps||0)+1))}}(s.blend||!$)&&(j=requestAnimationFrame(
W))}};return j=requestAnimationFrame(W),document.addEventListener("visibilitychange",S),window.addEventListener("pointer\
down",S),()=>{w=!0,cancelAnimationFrame(j),F.current=null,c==null||c.pause(),R==null||R.pause(),c==null||c.remove(),R==null||
R.remove(),document.removeEventListener("visibilitychange",S),window.removeEventListener("pointerdown",S)}},[E]),e.jsx("\
div",{ref:p,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:h&&e.jsx("span",{className:"\
ft-stream-status",children:"This scene could not load right now. Try another background."})},E)}),Jn=H.memo(function({scene:s,
paused:n,animate:i}){const[o,l]=a.useState([{s,key:0}]),[d,p]=a.useState(null),[h,u]=a.useState(null),g=a.useRef(0),v=a.
useRef(o),x=a.useRef(0),C=a.useRef(new Set),E=a.useRef(null),T=j=>{v.current=j,l(j)};a.useEffect(()=>{const j=v.current,
$=j[j.length-1];if($&&$.s.id===s.id){x.current=$.key;const U=$.key;window.setTimeout(()=>{x.current===U&&E.current===U&&
T(v.current.filter(B=>B.key===U))},400);return}const D=++g.current;u(null),x.current=D;const O=j.filter(U=>C.current.has(
U.key)).slice(-1);T([...O,{s,key:D}])},[s]);const L=a.useCallback(j=>{C.current.add(j),j===x.current&&(E.current=j,p(j),
window.setTimeout(()=>{x.current===j&&T(v.current.filter($=>$.key===j))},400))},[]),F=a.useCallback(j=>{if(u(j),j!==x.current)
return;const $=v.current.filter(O=>O.key!==j);if(!$.length)return;const D=$[$.length-1];x.current=D.key,T($),C.current.has(
D.key)?(E.current=D.key,p(D.key)):(E.current=null,p(null))},[]),N=d===null||d!==x.current,b=o.some(j=>C.current.has(j.key)),
w=h!==null&&h===x.current;return e.jsxs(e.Fragment,{children:[b?null:e.jsx("div",{className:"ft-bg",style:{backgroundColor:"\
#101418"}}),o.map(j=>e.jsx(Zn,{scene:j.s,token:j.key,paused:n,animate:i,onReady:L,onFail:F},j.key)),N&&!w?e.jsx("div",{className:"\
ft-scene-switching",role:"status","aria-label":"Loading selected background",children:e.jsx("i",{})}):null,h!==null?e.jsxs(
"div",{className:"ft-scene-error",role:"status",children:["Could not load ",s.name,". ",b?"Your previous background is s\
till playing.":"Choose another background to try again."]}):null]})}),Qn=H.memo(function({kind:s,id:n,scrim:i,builtinSrc:o,
linkBg:l,uploadBg:d,paused:p,animate:h,customFit:u,enhance:g}){let v={};s==="builtin"&&o?v={backgroundImage:`url(${o})`}:
s==="color"?v={backgroundColor:/^#[0-9a-f]{6}$/i.test(n||"")?n:"#101418"}:s==="link"&&(l==null?void 0:l.kind)==="image"?
v={backgroundImage:`url(${l.url})`}:s==="upload"&&(d==null?void 0:d.kind)==="image"?v={backgroundImage:`url(${d.url})`}:
(s==="link"||s==="upload"||s==="builtin")&&(v={backgroundColor:"#101418"}),(s==="link"||s==="upload")&&v.backgroundImage&&
(v={...v,backgroundSize:u,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},g!==!1&&(v={...v,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const x=s==="scene"?$n.get(n)||pt[0]:void 0,C=s==="link"&&(l==null?void 0:l.kind)===
"video"?l.url:s==="upload"&&(d==null?void 0:d.kind)==="video"?d.url:null,E=s==="color"?Math.max(i,Math.min(.78,Math.pow(
An(n||"#101418"),1.15)*.9)):i;return e.jsxs(e.Fragment,{children:[x?e.jsx(Jn,{scene:x,paused:!!p,animate:h}):C?e.jsx(ea,
{src:C,paused:!!p,animate:h,fit:u}):e.jsx("div",{className:"ft-bg",style:v}),e.jsx("div",{className:"ft-scrim",style:{opacity:E}}),
e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharp\
en",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),ea=H.memo(function({
src:s,paused:n,animate:i,fit:o}){const l=a.useRef(null);return a.useEffect(()=>{const d=l.current;if(!d)return;const p=()=>{
n||!i||document.hidden?d.pause():d.play().catch(()=>{})};p();const h=()=>{!n&&i&&!document.hidden&&d.play().catch(()=>{})};
return document.addEventListener("visibilitychange",p),window.addEventListener("pointerdown",h),()=>{document.removeEventListener(
"visibilitychange",p),window.removeEventListener("pointerdown",h)}},[n,i,s]),i?e.jsx("video",{ref:l,className:"ft-bg ft-\
bgvideo",style:{objectFit:o,backgroundColor:"#101418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",
"aria-hidden":"true"}):null}),ta=H.memo(function({scene:s,active:n,onPick:i}){const o=Mn(s.preview||"catalog"),l=s.preview===
"v2cat"?5:s.preview==="curated"?3:8,d=s.preview==="v2cat"?4:s.preview==="curated"?3:13;return e.jsxs("button",{type:"but\
ton",className:`ft-bgswatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${s.name} animated scene`,onClick:i,children:[
Kt(s)?e.jsx("img",{className:"ft-bgswatch-img",src:Kt(s),alt:"",loading:"lazy",decoding:"async"}):s.tile!=null?e.jsx("sp\
an",{className:"ft-bgswatch-img",style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}% ${d*100}%`,backgroundPosition:`${s.
tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*100/(d-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:Pn(s,"p"),alt:"",
loading:"lazy",decoding:"async"}),e.jsx("span",{className:"ft-bgswatch-name",children:s.name})]})}),sa=H.memo(function({
id:s,name:n,active:i,onPick:o}){const[l,d]=a.useState(st[s]||null);return a.useEffect(()=>{let p=!0;return!st[s]&&Bt[s]&&
Bt[s]().then(h=>{st[s]=h.default,p&&d(h.default)}).catch(()=>{}),()=>{p=!1}},[s]),e.jsx("button",{type:"button",className:`\
ft-bgswatch ${i?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:o})}),na=H.memo(function({
color:s,onChange:n}){const o=a.useRef(null),l=/^#[0-9a-f]{6}$/i.test(s)?s:"#101418",d=Vt(l),[p,h]=a.useState(d.l);a.useEffect(
()=>{h(Vt(/^#[0-9a-f]{6}$/i.test(s)?s:"#101418").l)},[s]),a.useEffect(()=>{var L;const x=(L=o.current)==null?void 0:L.getContext(
"2d");if(!x)return;const C=x.createImageData(168,168),E=C.data,T=168/2;for(let F=0;F<168;F++)for(let N=0;N<168;N++){const b=N-
T+.5,w=F-T+.5,j=Math.sqrt(b*b+w*w)/T,$=(F*168+N)*4;if(j>1){E[$+3]=0;continue}const D=(Math.atan2(w,b)*180/Math.PI+360)%360,
O=at(D,j,p);E[$]=parseInt(O.slice(1,3),16),E[$+1]=parseInt(O.slice(3,5),16),E[$+2]=parseInt(O.slice(5,7),16),E[$+3]=255}
x.putImageData(C,0,0)},[p]);const u=x=>{var N;const C=(N=o.current)==null?void 0:N.getBoundingClientRect();if(!C)return;
const E=x.clientX-C.left-C.width/2,T=x.clientY-C.top-C.height/2,L=Math.min(1,Math.sqrt(E*E+T*T)/(C.width/2)),F=(Math.atan2(
T,E)*180/Math.PI+360)%360;n(at(F,L,p))},g=d.h*Math.PI/180,v=d.s*(168/2);return e.jsxs("div",{className:"ft-wheelwrap",children:[
e.jsxs("span",{className:"ft-wheelbox",children:[e.jsx("canvas",{ref:o,width:168,height:168,className:"ft-wheel","aria-l\
abel":"Color wheel: drag to pick a background color",onPointerDown:x=>{x.target.setPointerCapture(x.pointerId),u(x)},onPointerMove:x=>{
x.buttons&1&&u(x)}}),e.jsx("span",{className:"ft-wheel-dot",style:{left:168/2+Math.cos(g)*v,top:168/2+Math.sin(g)*v,background:l}})]}),
e.jsxs("span",{className:"ft-wheel-side",children:[e.jsx("span",{className:"ft-wheel-preview",style:{background:l},children:l}),
e.jsx("input",{type:"range",min:.05,max:.95,step:.01,value:p,"aria-label":"Color lightness",onChange:x=>{const C=parseFloat(
x.target.value);h(C),n(at(d.h,d.s,C))}}),e.jsx("span",{className:"ft-field-hint",children:"Drag the wheel for hue, slide\
 for lightness. Light colors are dimmed behind the timer so text stays readable."})]})]})});function aa(t){return t.kind!==
"image"||!t.thumb?"":`https://images.weserv.nl/?url=${encodeURIComponent(t.thumb.replace(/^https?:\/\//,""))}&w=200&h=20\
0&fit=cover&q=70`}function it(t){try{const s=new URL(t);if(/pinterest\./i.test(s.host))return"Pinterest pin";const n=decodeURIComponent(
s.pathname.split("/").pop()||"");return n.length>4&&/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(n)?n.slice(0,26):
s.host.replace(/^www\./,"")}catch{return"Saved link"}}const ia=H.memo(function({link:s,active:n,onPick:i,onRemove:o}){const l=aa(
s);return e.jsxs("span",{className:`ft-bgswatch ft-bgswatch-named ft-linksw ${n?"is-active":""}`,children:[e.jsxs("butto\
n",{type:"button",className:"ft-linksw-pick","aria-label":`Use saved background ${it(s.source)}`,onClick:i,children:[s.kind===
"video"?e.jsx("video",{className:"ft-bgswatch-img",src:s.source,muted:!0,playsInline:!0,preload:"metadata"}):l?e.jsx("im\
g",{className:"ft-bgswatch-img",src:l,alt:"",loading:"lazy",decoding:"async"}):null,e.jsx("span",{className:"ft-bgswatch\
-name",children:it(s.source)})]}),e.jsx("button",{type:"button",className:"ft-linksw-del","aria-label":`Remove saved bac\
kground ${it(s.source)}`,onClick:o,children:"×"})]})}),oa=H.memo(function({settings:s,patch:n,spotifySrc:i,onOpenSettings:o}){
const l=s.musicMode==="spotify"?"spotify":"radio",d=s.radio&&typeof s.radio.index=="number"?s.radio:{index:0,playing:!1,
volume:.7},p=oe[Math.min(Math.max(0,d.index),oe.length-1)]||oe[0],h=a.useRef(d);h.current=d;const u=a.useRef(l);u.current=
l;const g=a.useRef(null),[v,x]=a.useState(0),[C,E]=a.useState(""),T=a.useRef(0),[L,F]=a.useState(!1),N=a.useRef(null),[b,
w]=a.useState(()=>{try{const c=window.localStorage.getItem("sft:ft-player-pos.v1");if(c){const S=JSON.parse(c);if(S&&typeof S.
x=="number"&&typeof S.y=="number")return S}}catch{}return null}),j=a.useRef(null),$=(c,S)=>{const W=N.current,I=W?W.offsetWidth:
320,r=W?W.offsetHeight:180;return{x:Math.max(4,Math.min(Math.max(4,window.innerWidth-I-4),c)),y:Math.max(4,Math.min(Math.
max(4,window.innerHeight-r-4),S))}},D=c=>{var W;const S=(W=N.current)==null?void 0:W.getBoundingClientRect();S&&(j.current=
{dx:c.clientX-S.left,dy:c.clientY-S.top},c.currentTarget.setPointerCapture(c.pointerId))},O=c=>{j.current&&w($(c.clientX-
j.current.dx,c.clientY-j.current.dy))},U=()=>{j.current&&(j.current=null,w(c=>{if(!c)return c;const S=$(c.x,c.y);try{window.
localStorage.setItem("sft:ft-player-pos.v1",JSON.stringify(S))}catch{}return S}))};a.useEffect(()=>{const c=()=>w(S=>S&&
$(S.x,S.y));return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),a.useEffect(()=>{
const c=new Audio;c.preload="none",g.current=c;const S=()=>{const r=c.currentTime||0;x(_=>Math.floor(_)===Math.floor(r)?
_:r)},W=()=>{T.current=0,E(""),n({radio:{...h.current,index:(h.current.index+1)%oe.length,playing:!0}})},I=()=>{!g.current||
g.current.dataset.track!==p.id||(T.current+=1,T.current>=oe.length?(E("Radio tracks cannot load on this connection right\
 now."),n({radio:{...h.current,playing:!1}})):(E("That track could not load - skipped it."),n({radio:{...h.current,index:(h.
current.index+1)%oe.length,playing:!0}})))};return c.addEventListener("timeupdate",S),c.addEventListener("ended",W),c.addEventListener(
"error",I),()=>{c.pause(),c.removeEventListener("timeupdate",S),c.removeEventListener("ended",W),c.removeEventListener("\
error",I),g.current=null}},[]),a.useEffect(()=>{const c=g.current;if(!c)return;const S=l==="radio"&&d.playing;c.dataset.
track!==p.id&&(S||c.dataset.track)&&(c.dataset.track=p.id,c.src=p.url,c.preload="auto",T.current=0,x(0))},[p.id,l,d.playing]),
a.useEffect(()=>{const c=g.current;c&&(c.volume=d.volume,l==="radio"&&d.playing?c.play().catch(()=>{}):c.pause())},[l,d.
playing,d.volume,p.id]),a.useEffect(()=>{const c=()=>{const S=g.current;S&&u.current==="radio"&&h.current.playing&&S.paused&&
S.play().catch(()=>{})};return window.addEventListener("pointerdown",c),()=>window.removeEventListener("pointerdown",c)},
[]),a.useEffect(()=>{l==="spotify"&&h.current.playing&&n({radio:{...h.current,playing:!1}})},[l]);const B=c=>{const S=g.
current;if(!S)return;const W=c.currentTarget.getBoundingClientRect(),I=Math.min(1,Math.max(0,(c.clientX-W.left)/W.width)),
r=Number.isFinite(S.duration)&&S.duration>0?S.duration:p.seconds;S.currentTime=I*r,x(S.currentTime)},V=p.seconds,R=V>0?Math.
min(100,v/V*100):0;return e.jsxs("div",{ref:N,className:`ft-player ${L?"is-mini":""}`,style:b?{left:b.x,top:b.y,right:"a\
uto",bottom:"auto"}:void 0,"data-testid":"music-player",children:[e.jsxs("span",{className:"ft-player-head",title:"Drag \
to move",onPointerDown:D,onPointerMove:O,onPointerUp:U,onPointerCancel:U,children:[e.jsx(le,{d:"M9 6h.01|M15 6h.01|M9 12\
h.01|M15 12h.01|M9 18h.01|M15 18h.01"}),e.jsxs("span",{className:"ft-player-mode",children:[e.jsx("button",{type:"button",
className:`ft-player-modebtn ${l==="radio"?"is-active":""}`,onPointerDown:c=>c.stopPropagation(),onClick:()=>n({musicMode:"\
radio"}),children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-player-modebtn ${l==="spotify"?"is-active":
""}`,onPointerDown:c=>c.stopPropagation(),onClick:()=>n({musicMode:"spotify"}),children:"Spotify"})]}),e.jsx("button",{type:"\
button",className:"ft-player-x","aria-label":L?"Expand player":"Minimize player",onPointerDown:c=>c.stopPropagation(),onClick:()=>F(
c=>!c),children:L?"❐":"–"}),e.jsx("button",{type:"button",className:"ft-player-x","aria-label":"Hide player",onPointerDown:c=>c.
stopPropagation(),onClick:()=>n({musicOpen:!1}),children:"×"})]}),L?e.jsx("div",{className:"ft-player-minrow",children:l===
"radio"?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"ft-player-play is-small","aria-label":d.playing?
"Pause radio":"Play radio",onClick:()=>n({radio:{...d,playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("s\
pan",{className:"ft-player-mintitle",children:p.title})]}):e.jsx("span",{className:"ft-player-mintitle",children:"Spotif\
y player"})}):null,l==="radio"?e.jsxs("div",{className:"ft-player-body",children:[e.jsxs("span",{className:"ft-player-ro\
w",children:[e.jsx("img",{className:"ft-player-cover",src:p.cover,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("span",
{className:"ft-player-meta",children:[e.jsx("span",{className:"ft-player-title",children:p.title}),e.jsxs("span",{className:"\
ft-player-artist",children:[p.artist," · instrumental lofi"]}),e.jsx("span",{className:"ft-player-bar",onClick:B,role:"\
slider","aria-label":"Track progress","aria-valuemin":0,"aria-valuemax":V,"aria-valuenow":Math.round(v),children:e.jsx("\
span",{style:{width:`${R}%`}})}),e.jsxs("span",{className:"ft-player-times",children:[he(v*1e3)," / ",he(V*1e3)]})]})]}),
e.jsxs("span",{className:"ft-player-controls",children:[e.jsx("button",{type:"button",className:"ft-player-btn","aria-la\
bel":"Previous track",onClick:()=>n({radio:{...d,index:(d.index-1+oe.length)%oe.length,playing:!0}}),children:"⏮"}),e.
jsx("button",{type:"button",className:"ft-player-play","aria-label":d.playing?"Pause":"Play",onClick:()=>n({radio:{...d,
playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-player-btn","aria-\
label":"Next track",onClick:()=>n({radio:{...d,index:(d.index+1)%oe.length,playing:!0}}),children:"⏭"}),e.jsx("input",
{type:"range",className:"ft-player-vol",min:0,max:1,step:.05,value:d.volume,"aria-label":"Radio volume",onChange:c=>n({radio:{
...d,volume:parseFloat(c.target.value)}})})]}),C?e.jsx("span",{className:"ft-player-status",children:C}):null]}):e.jsx("\
div",{className:"ft-player-body",children:i?e.jsx("iframe",{className:"ft-player-iframe",src:i,width:"100%",height:"152",
frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"\
Spotify player"}):e.jsxs("span",{className:"ft-player-status",children:["Pick a Spotify playlist or paste a Spotify link\
 in Settings. ",e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:o,children:"Open settings"})]})})]})}),
ra=H.memo(function({chip:s,panel:n,fullscreenSupported:i,onFullscreen:o,onTasks:l,onSettings:d,onMinimize:p,onPopout:h,onProfile:u}){
return e.jsxs("header",{className:"ft-topbar",children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),s?e.
jsx("span",{className:"ft-chip",title:"Today's completed focus time",children:s}):null,e.jsxs("span",{className:"ft-topb\
ar-actions",children:[i?e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.
jsx(le,{d:Kn})}):null,e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"\
Open timer in its own window",onClick:h,children:e.jsx(le,{d:Hn})}),e.jsx("button",{type:"button",className:"ft-iconbtn",
"aria-label":"Minimize to a small timer",title:"Minimize to a small timer",onClick:p,children:e.jsx(le,{d:Yn})}),e.jsxs(
"button",{type:"button",className:`ft-iconbtn ${n==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"\
Profile and progress",onClick:u,children:[e.jsx(le,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.\
5s8 2.5 8 6.5"}),e.jsx(jn,{})]}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"ari\
a-label":"Tasks",onClick:l,children:e.jsx(le,{d:Xn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settin\
gs"?"is-active":""}`,"aria-label":"Settings",onClick:d,children:e.jsx(le,{d:Gn})})]})]})}),la=H.memo(function({tasksState:s,
setTasksState:n,week:i,ready:o,savedMessage:l,onClose:d}){const[p,h]=a.useState(""),[u,g]=a.useState(1),[v,x]=a.useState(
null),[C,E]=a.useState(""),T=s.tasks,L=b=>{const w=C.trim();x(null),w&&n(j=>({...j,tasks:j.tasks.map($=>$.id===b?{...$,title:w}:
$)}))},F=Math.max(1,...i.map(b=>b.minutes)),N=()=>{const b=p.trim();if(!b)return;const w={id:`t${Date.now()}`,title:b,est:u,
done:0,completed:!1};n(j=>({tasks:[...j.tasks,w],activeId:j.activeId||w.id})),h(""),g(1)};return e.jsxs("aside",{className:"\
ft-sheet","aria-label":"Tasks",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Tasks"}),
e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close tasks",onClick:d,children:e.jsx(le,{d:ms})})]}),
e.jsxs("div",{className:"ft-addtask",children:[e.jsx("input",{value:p,placeholder:"What are you studying?",onChange:b=>h(
b.target.value),onKeyDown:b=>{b.key==="Enter"&&N()},maxLength:120}),e.jsxs("span",{className:"ft-stepper is-small",children:[
e.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>g(Math.max(1,u-1)),children:"-"}),e.jsxs("span",
{className:"ft-stepper-value",children:[u,e.jsx("em",{children:"est"})]}),e.jsx("button",{type:"button","aria-label":"Mo\
re pomodoros",onClick:()=>g(Math.min(20,u+1)),children:"+"})]}),e.jsx("button",{type:"button",className:"ft-primary is-c\
ompact",onClick:N,disabled:!o,children:"Add"})]}),T.length===0?e.jsx("p",{className:"ft-field-hint",children:"No tasks y\
et. Add one to track pomodoros against it, or just run the timer."}):null,e.jsx("ul",{className:"ft-tasklist",children:T.
map(b=>e.jsxs("li",{className:`${b.id===s.activeId?"is-active":""} ${b.completed?"is-done":""}`,children:[e.jsx("button",
{type:"button",className:"ft-taskcheck","aria-label":b.completed?"Mark not done":"Mark done",onClick:()=>{b.completed||ln(
b.id),n(w=>({...w,tasks:w.tasks.map(j=>j.id===b.id?{...j,completed:!j.completed}:j)}))},children:b.completed?"✓":""}),
v===b.id?e.jsx("input",{className:"ft-taskedit","aria-label":`Rename task ${b.title}`,value:C,autoFocus:!0,maxLength:120,
onChange:w=>E(w.target.value),onKeyDown:w=>{w.key==="Enter"&&L(b.id),w.key==="Escape"&&x(null)},onBlur:()=>L(b.id)}):e.jsx(
"button",{type:"button",className:"ft-taskname",onClick:()=>n(w=>({...w,activeId:b.id})),children:b.title}),e.jsxs("span",
{className:"ft-taskcount",children:[b.done,"/",b.est]}),e.jsx("button",{type:"button",className:"ft-taskeditbtn","aria-l\
abel":`Rename ${b.title}`,onClick:()=>{x(b.id),E(b.title)},children:"✎"}),e.jsx("button",{type:"button",className:"ft-\
taskdel","aria-label":`Delete ${b.title}`,onClick:()=>n(w=>({tasks:w.tasks.filter(j=>j.id!==b.id),activeId:w.activeId===
b.id?null:w.activeId})),children:"×"})]},b.id))}),T.some(b=>b.completed)?e.jsx("button",{type:"button",className:"ft-gh\
ost is-compact",onClick:()=>n(b=>({...b,tasks:b.tasks.filter(w=>!w.completed)})),children:"Clear completed"}):null,e.jsxs(
"div",{className:"ft-week",children:[e.jsx("h3",{children:"This week"}),e.jsx("div",{className:"ft-weekbars",role:"img",
"aria-label":`Focus minutes by day: ${i.map(b=>`${b.label} ${b.minutes}`).join(", ")}`,children:i.map((b,w)=>e.jsxs("spa\
n",{className:"ft-weekcol",children:[e.jsx("span",{className:"ft-weekbar",style:{height:`${Math.round(b.minutes/F*64)}px`}}),
e.jsx("span",{className:"ft-weekday",children:b.label})]},w))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});
function ca(){const[t,s]=a.useState(null),[,n]=a.useState(0),i=a.useRef(null);a.useEffect(()=>{const h=new BroadcastChannel(
"sft-sync");i.current=h,h.onmessage=g=>{var v;((v=g.data)==null?void 0:v.t)==="state"&&s(g.data)};const u=window.setInterval(
()=>n(g=>g+1),500);return()=>{window.clearInterval(u),h.close()}},[]);const o=h=>{var u;return(u=i.current)==null?void 0:
u.postMessage({t:"cmd",cmd:h})};let l=t?t.remaining:0;t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));
const d=!t||Date.now()-t.at>4e3,p=t&&t.dur>0?Math.round((1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{
"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},children:[e.jsx("div",{className:"ft-popout-phase",children:t?re[t.phase]:
"Study focus"}),e.jsx("div",{className:"ft-popout-time",children:t?he(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar",
"aria-hidden":"true",children:e.jsx("span",{style:{width:`${p}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[
e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pau\
se":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),d?e.jsx("p",{className:"\
ft-popout-note",children:"Open the study timer in another tab to control it from here."}):null]})}const da=H.memo(function({
settings:s,patch:n,bgStatus:i,soundStatus:o,lastBgSrcRef:l,lastSndSrcRef:d,resolveLinkBg:p,resolveCustomSound:h,uploadBg:u,
uploadSound:g,previewAlarm:v,requestNotifications:x,notificationsSupported:C,wakeLockSupported:E,onResetSettings:T,savedMessage:L,
onClose:F,savedLinks:N,onSaveLink:b,onRemoveLink:w}){const[j,$]=a.useState(""),[D,O]=a.useState(""),[U,B]=a.useState(""),
[V,R]=a.useState(""),M=s.background,c=()=>{const r=j.trim();r&&p(r).then(_=>{_&&(l.current=r,n({background:{kind:"link",
source:r}}),N.some(ne=>ne.source===r)||b({id:`l${Date.now()}`,source:r,kind:_.kind,thumb:_.kind==="image"?_.finalUrl:void 0,
addedAt:Date.now()}),$(""))})},S=r=>{M.kind==="link"&&M.source===r.source||p(r.source).then(_=>{_&&(l.current=r.source,n(
{background:{kind:"link",source:r.source}}))})},W=()=>{const r=D.trim();Bn(r)&&h(r).then(_=>{var ne;_&&(d.current=r,n({alarmSound:"\
custom",customAlarm:{source:r,name:((ne=r.split("/").pop())==null?void 0:ne.split("?")[0])||"Custom sound"}}))})},I=()=>{
const r=U.trim();if(r){if(!fs(r)){R("That is not a Spotify link. Copy a link that starts with https://open.spotify.com/ \
from the Spotify app (Share - Copy link). Your current player is unchanged.");return}R(""),n({spotify:r,spotifyOpen:!0})}};
return e.jsxs("aside",{className:"ft-sheet","aria-label":"Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[
e.jsx("h2",{children:"Settings"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close settings",
onClick:F,children:e.jsx(le,{d:ms})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"\
ft-chips",children:On.map(r=>e.jsxs("button",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:r.accent,font:r.
font,background:{kind:r.bg.kind,id:r.bg.id}}),children:[r.name," theme"]},r.id))}),e.jsxs("div",{className:"ft-field is-\
stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",
children:[Dn.map(r=>e.jsx("button",{type:"button",className:`ft-colorswatch ${s.accent.toLowerCase()===r.value?"is-activ\
e":""}`,style:{background:r.value},"aria-label":`${r.name} accent`,onClick:()=>n({accent:r.value})},r.id)),e.jsxs("label",
{className:"ft-colorcustom",children:[e.jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8\
c6","aria-label":"Custom accent color",onChange:r=>n({accent:r.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx(
"div",{className:"ft-chips",children:cs.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.font===r.id?"is-a\
ctive":""}`,style:r.css==="inherit"?void 0:{fontFamily:r.css},onClick:()=>n({font:r.id}),children:r.name},r.id))})]}),e.
jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Clock style"}),
e.jsx("div",{className:"ft-chips",children:[["ring","Ring"],["bar","Bar"],["minimal","Minimal"]].map(([r,_])=>e.jsx("but\
ton",{type:"button",className:`ft-chipbtn ${s.clockStyle===r?"is-active":""}`,onClick:()=>n({clockStyle:r}),children:_},
r))})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Cloc\
k size"}),e.jsx("div",{className:"ft-chips",children:[["s","Small"],["m","Medium"],["l","Large"]].map(([r,_])=>e.jsx("bu\
tton",{type:"button",className:`ft-chipbtn ${s.clockSize===r?"is-active":""}`,onClick:()=>n({clockSize:r}),children:_},r))})]}),
e.jsx(ee,{label:"Clock-only mode",hint:"Hides the mode tabs and buttons so only the clock shows. Drag the clock anywhere\
 and resize it from its corner handle; use the round button under it to bring the controls back.",checked:s.clockOnly===
!0,onChange:r=>n({clockOnly:r})}),e.jsx(ee,{label:"Cycle dots",checked:s.showDots,onChange:r=>n({showDots:r})}),e.jsx(ee,
{label:"Today's stats chip",checked:s.showChip,onChange:r=>n({showChip:r})}),e.jsx(ee,{label:"Shortcut hints",checked:s.
showHint,onChange:r=>n({showHint:r})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Music"}),e.jsxs("div",{className:"\
ft-chips",children:[e.jsx("button",{type:"button",className:`ft-chipbtn ${s.musicMode!=="spotify"?"is-active":""}`,onClick:()=>n(
{musicMode:"radio",musicOpen:!0}),children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-chipbtn ${s.musicMode===
"spotify"?"is-active":""}`,onClick:()=>n({musicMode:"spotify",musicOpen:!0}),children:"Spotify"})]}),e.jsx("span",{className:"\
ft-field-hint",children:"Focus radio is built-in instrumental lofi that streams from Pixabay (free license, no account n\
eeded). The mini player floats on the page - drag it anywhere by its top bar. It shows the current track and its cover l\
ive. The tracks are instrumentals, so there are no lyrics to display."}),e.jsx(ee,{label:"Show mini player",checked:s.musicOpen!==
!1,onChange:r=>n({musicOpen:r})}),e.jsx("h4",{className:"ft-subhead",children:"Spotify playlists"}),e.jsx("div",{className:"\
ft-chips",children:us.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.spotify===r.id?"is-active":""}`,onClick:()=>{
R(""),n({spotify:r.id,spotifyOpen:!0,musicMode:"spotify",musicOpen:!0})},children:r.name},r.id))}),e.jsxs("div",{className:"\
ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Any Spotify link"}),e.jsx("span",{className:"\
ft-field-hint",children:"Paste an open.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link\
). Music plays in Spotify's official player inside the mini player, with the album art shown by Spotify; this is not acc\
ount sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second previ\
ews when signed out; podcast episodes usually play in full. Live lyrics are not possible here: Spotify only shares the c\
urrent song with connected apps, not with an embedded player."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("in\
put",{className:"ft-textinput",value:U,placeholder:"https://open.spotify.com/playlist/…",onChange:r=>B(r.target.value),
inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:I,children:"Use link"})]}),s.spotify?
e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(
{musicMode:"spotify",musicOpen:!0}),children:"Show player"}),e.jsx("button",{type:"button",className:"ft-ghost is-compac\
t",onClick:()=>n({spotify:null,spotifyOpen:!1,musicMode:"radio"}),children:"Remove player"})]}):null,V?e.jsx("span",{className:"\
ft-field-hint",children:V}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(Fe,{label:"Focus",
value:s.focusMin,min:1,max:180,unit:"min",onChange:r=>n({focusMin:r})}),e.jsx(Fe,{label:"Short break",value:s.shortMin,min:1,
max:60,unit:"min",onChange:r=>n({shortMin:r})}),e.jsx(Fe,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:r=>n(
{longMin:r})}),e.jsx(Fe,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:r=>n({longEvery:r})}),
e.jsx(ee,{label:"Auto-start breaks",checked:s.autoBreaks,onChange:r=>n({autoBreaks:r})}),e.jsx(ee,{label:"Auto-start foc\
us",checked:s.autoFocus,onChange:r=>n({autoFocus:r})}),C?e.jsx(ee,{label:"Browser notifications",hint:"Alerts when a ses\
sion ends in another tab.",checked:s.notifications,onChange:x}):null,E?e.jsx(ee,{label:"Keep screen awake",checked:s.keepAwake,
onChange:r=>n({keepAwake:r})}):null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"\
ft-chips",children:Fn.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===r.id?"is-active":""}`,
onClick:()=>{n({alarmSound:r.id}),v(r.id)},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx(
"span",{className:"ft-field-label",children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,
"aria-label":"Alarm volume",onChange:r=>n({alarmVolume:parseFloat(r.target.value)})})]}),e.jsx(ee,{label:"Ring twice",checked:s.
alarmRepeat,onChange:r=>n({alarmRepeat:r})}),e.jsx(ee,{label:"Ticking while running",checked:s.tick,onChange:r=>n({tick:r})}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:D,placeholder:"\
https://…/sound.mp3",onChange:r=>O(r.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:W,children:"Use link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:r=>{var _;return g((_=r.target.files)==null?void 0:_[0])}})]}),s.customAlarm?
e.jsxs("span",{className:"ft-field-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"\
ft-field-hint",children:o}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"\
ft-chips",children:ds.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.ambient===r.id?"is-active":""}`,onClick:()=>n(
{ambient:r.id}),children:r.name},r.id))}),s.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{
className:"ft-field-label",children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.ambientVolume,
"aria-label":"Ambient volume",onChange:r=>n({ambientVolume:parseFloat(r.target.value)})})]}):null]}),e.jsxs("section",{children:[
e.jsx("h3",{children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Scenes"}),e.jsx("div",{className:"ft-bg\
grid",children:pt.map(r=>e.jsx(ta,{scene:r,active:M.kind==="scene"&&M.id===r.id,onPick:()=>n({background:{kind:"scene",id:r.
id}})},r.id))}),e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Illustrated scenes are draw\
n to loop seamlessly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay o\
nly when chosen. While a scene loads, your previous background stays on screen (a still photo on your first visit); a sc\
ene that cannot load keeps it rather than going black or swapping to something else."}),e.jsx(ee,{label:"Animate backgro\
unds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:s.bgAnimate!==!1,onChange:r=>n(
{bgAnimate:r})}),e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:Rn.map(
r=>e.jsx(sa,{id:r.id,name:r.name,active:M.kind==="builtin"&&M.id===r.id,onPick:()=>n({background:{kind:"builtin",id:r.id}})},
r.id))}),e.jsx("h4",{className:"ft-subhead",children:"Solid color"}),e.jsx("div",{className:"ft-bggrid",children:Ln.map(
r=>e.jsx("button",{type:"button",className:`ft-bgswatch ${M.kind==="color"&&(M.id||"").toLowerCase()===r.id?"is-active":
""}`,style:{background:r.id},"aria-label":`${r.name} background color`,onClick:()=>n({background:{kind:"color",id:r.id}})},
r.id))}),e.jsx(na,{color:M.kind==="color"&&M.id?M.id:"#101418",onChange:r=>n({background:{kind:"color",id:r}})}),e.jsxs(
"div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or \
video link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pi\
n/…), a direct image link (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the scr\
een, cropped to match its own shape, never stretched. Every link you add is saved under My saved backgrounds below and r\
eloads each visit - paste once, keep forever. When a direct image load is blocked, the link you paste is fetched through\
 a public image relay (weserv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"ft-inrow",children:[
e.jsx("input",{className:"ft-textinput",value:j,placeholder:"https://www.pinterest.com/pin/…",onChange:r=>$(r.target.value),
inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:c,children:"Use link"})]}),N.length?
e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"ft-subhead",children:"My saved backgrounds"}),e.jsx("div",{className:"\
ft-bggrid",children:N.map(r=>e.jsx(ia,{link:r,active:M.kind==="link"&&M.source===r.source,onPick:()=>S(r),onRemove:()=>w(
r.id)},r.id))}),e.jsx("span",{className:"ft-field-hint",children:"Tap one to use it again, × to forget it. Saved on this\
 device."})]}):null,e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-file\
btn",children:["Upload image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload backgrou\
nd image or video file",className:"ft-fileinput",onChange:r=>{var _;return u((_=r.target.files)==null?void 0:_[0])}})]}),
e.jsx("span",{className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),i?e.jsx("span",{className:"ft-field\
-hint",children:i}):null]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-la\
bel",children:"Imported image or video fit"}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",
className:`ft-chipbtn ${s.customFit!=="contain"?"is-active":""}`,onClick:()=>n({customFit:"cover"}),children:"Crop to fi\
ll"}),e.jsx("button",{type:"button",className:`ft-chipbtn ${s.customFit==="contain"?"is-active":""}`,onClick:()=>n({customFit:"\
contain"}),children:"Show whole image"})]}),e.jsx("span",{className:"ft-field-hint",children:"Crop fills the screen. Sho\
w whole image preserves the full composition with plain dark space where needed. No blur-fill or stretching."})]}),e.jsx(
ee,{label:"Sharpen imported images",hint:"A local sharpen filter for images you paste or upload - it cannot add detail a\
 small original never had. Runs on your device only; images never leave this browser.",checked:s.enhance!==!1,onChange:r=>n(
{enhance:r})}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"Darken ba\
ckground"}),e.jsx("input",{type:"range",min:.15,max:.85,step:.05,value:s.scrim,"aria-label":"Background darkness",onChange:r=>n(
{scrim:parseFloat(r.target.value)})})]})]}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-fie\
ld-label",children:"Start over"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:T,children:"Rese\
t settings"})]}),e.jsxs("p",{className:"ft-field-hint",children:["Your settings, saved backgrounds, tasks and stats stay\
 in this browser. Link backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay wh\
en a direct load is blocked; Spotify playback happens inside Spotify's official player; selected catalog videos and focu\
s-radio tracks stream from Pixabay's CDN. ",L]})]})});function ua(){return typeof window<"u"&&/[?&]popout=1/.test(window.
location.search)?e.jsx(ca,{}):e.jsx(fa,{})}function fa(){var $t;const[t,s,n]=Se("ft-settings.v2",nt),[i,o]=Se("ft-clockf\
ree.v1",null),l=a.useRef(null),d=a.useRef(null),p=a.useCallback(f=>m=>{var P,z;const k=l.current;if(!k)return;const A=k.
getBoundingClientRect();o(we=>{const ae=we||{x:A.left,y:A.top,s:1};return d.current={mode:f,id:m.pointerId,sx:m.clientX,
sy:m.clientY,ox:ae.x,oy:ae.y,ss:ae.s},ae}),(z=(P=m.target).setPointerCapture)==null||z.call(P,m.pointerId),m.preventDefault()},
[o]),h=a.useCallback(f=>{const m=d.current;if(!(!m||m.id!==f.pointerId))if(m.mode==="move")o(k=>k&&{...k,x:Math.min(Math.
max(m.ox+f.clientX-m.sx,-40),window.innerWidth-60),y:Math.min(Math.max(m.oy+f.clientY-m.sy,0),window.innerHeight-60)});else{
const k=l.current;if(!k)return;const A=k.getBoundingClientRect(),P=A.left+A.width/2,z=A.top+A.height/2,we=Math.max(30,Math.
hypot(m.sx-P,m.sy-z)),ae=Math.hypot(f.clientX-P,f.clientY-z);o(fe=>fe&&{...fe,s:Math.min(2.6,Math.max(.45,m.ss*(ae/we)))})}},
[o]),u=a.useCallback(f=>{d.current&&d.current.id===f.pointerId&&(d.current=null)},[]),[g,v,x]=Se("ft-tasks.v1",{tasks:[],
activeId:null}),[C,E,T]=Se("ft-stats.v1",{days:{}}),[L,F,N]=Se("ft-session.v1",null),[b,w]=Se("ft-links.v1",[]),j=a.useCallback(
f=>w(m=>[f,...m.filter(k=>k.source!==f.source)].slice(0,24)),[w]),$=a.useCallback(f=>w(m=>m.filter(k=>k.id!==f)),[w]),D=a.
useMemo(()=>({focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,t.longMin]),[O,U]=a.
useState("focus"),[B,V]=a.useState(!1),[R,M]=a.useState(D.focus),[c,S]=a.useState(0),[W,I]=a.useState("none"),[r,_]=a.useState(
!1),[ne,y]=a.useState(""),K=a.useRef(0),q=a.useRef(!1);q.current=B;const Y=a.useRef(O);Y.current=O;const ce=a.useRef(R);
ce.current=R;const Me=a.useRef(t.accent);Me.current=t.accent;const[ps,ht]=a.useState(null),[hs,gs]=a.useState(null),[ys,
qe]=a.useState(null),[xs,ge]=a.useState(""),[ze,gt]=a.useState(null),[bs,de]=a.useState(""),J=a.useRef(null),ye=a.useRef(
null),$e=a.useRef(null),yt=a.useCallback(async f=>{ge("Loading background…");try{const m=f.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.
test(m)&&!/pin(it)?\./i.test(m))return ht(z=>(z&&z.url.startsWith("blob:")&&URL.revokeObjectURL(z.url),{url:m,kind:"vide\
o"})),ge("Background applied."),{kind:"video",finalUrl:m};const{blob:k,finalUrl:A}=await Vn(f),P=k.type.startsWith("vide\
o/")?"video":"image";return ht(z=>(z&&z.url.startsWith("blob:")&&URL.revokeObjectURL(z.url),{url:URL.createObjectURL(k),
kind:P})),ge("Background applied."),{kind:P,finalUrl:A}}catch(m){const k=m instanceof Error&&m.message==="short pin link"?
"Short pin.it links cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your \
previous background is unchanged.":"Could not load that pin or link. Private or deleted pins cannot be read. Use a publi\
c pin link, a direct image link, or upload the image below. Your previous background is unchanged.";return ge(k),!1}},[]),
xt=a.useCallback(async f=>{de("Loading sound…");try{const m=await dt(f);if(!/^audio\//.test(m.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.
test(f))throw new Error("not audio");return gt(k=>(k&&URL.revokeObjectURL(k),URL.createObjectURL(m))),de("Sound saved. I\
t will ring when a session ends."),!0}catch{return de("That link blocks cross-site loading. Download the sound to your d\
evice and upload it instead. Your previous sound is unchanged."),!1}},[]),Be=a.useRef(""),Ve=a.useRef("");a.useEffect(()=>{
n.ready&&t.background.kind==="link"&&t.background.source&&t.background.source!==Be.current&&(Be.current=t.background.source,
yt(t.background.source))},[n.ready,t.background]),a.useEffect(()=>{var m;if(!n.ready)return;const f=((m=t.customAlarm)==
null?void 0:m.source)||"";t.alarmSound==="custom"&&f&&f!==Ve.current&&(Ve.current=f,xt(f))},[n.ready,t.alarmSound,t.customAlarm]);
const bt=a.useRef(!1);a.useEffect(()=>{var f;!n.ready||bt.current||(bt.current=!0,t.background.kind==="upload"&&(X({background:{
kind:"color",id:"#101418"}}),ge("Your uploaded image resets when the tab reloads. Upload it again, or save a link instea\
d.")),!((f=t.customAlarm)!=null&&f.source)&&t.alarmSound==="custom"&&(X({alarmSound:"bell"}),de("Your uploaded sound res\
ets when the tab reloads. Upload it again, or save a link instead.")))},[n.ready]),a.useEffect(()=>{n.ready&&(!t.accent||
!t.font||!t.clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||
typeof t.bgAnimate!="boolean")&&s(f=>({...nt,...f}))},[n.ready]),a.useEffect(()=>{if(!n.ready)return;const f=t.background;
f.kind==="gradient"?X({background:{kind:"color",id:{dusk:"#3b2f4a",moss:"#0f2e25",ink:"#101418",dawn:"#4a2f3d"}[f.id||""]||
"#101418"}}):f.kind==="animated"&&X({background:{kind:"builtin",id:"rain"}})},[n.ready,t.background]),a.useEffect(()=>{if(n.
ready)try{t.spotify&&!window.localStorage.getItem("sft:ft-musicmig.v1")&&(window.localStorage.setItem("sft:ft-musicmig.v\
1","1"),X({musicMode:"spotify",musicOpen:t.spotifyOpen!==!1}))}catch{}},[n.ready]);const ue=t.background;a.useEffect(()=>{
let f=!0;if(n.ready){if(ue.kind==="builtin"){const m=ue.id&&zt[ue.id]?ue.id:"rain";tt[m]?qe(tt[m]):(qe(null),zt[m]().then(
k=>{tt[m]=k.default,f&&qe(k.default)}).catch(()=>{}))}return()=>{f=!1}}},[n.ready,ue.kind,ue.id]);const kt=a.useRef(!1),
te=a.useCallback(f=>{N.ready&&F({phase:f.phase,running:f.running,endAt:f.endAt||0,remainingMs:f.remainingMs,cycleCount:f.
cycleCount})},[N.ready]);a.useEffect(()=>{if(!N.ready||!n.ready||!T.ready||!x.ready||kt.current||(kt.current=!0,!L))return;
const f=L.phase==="short"||L.phase==="long"?L.phase:"focus";if(U(f),S(L.cycleCount||0),L.running&&L.endAt>Date.now()+500)
K.current=L.endAt,M(L.endAt-Date.now()),V(!0);else if(L.running){let m="focus",k=L.cycleCount||0;if(f==="focus"){k+=1,m=
k%Math.max(1,t.longEvery)===0&&k>0?"long":"short";const A=Ne(new Date(L.endAt));E(P=>{const z=P.days[A]||{focusSec:0,sessions:0};
return{days:{...P.days,[A]:{focusSec:z.focusSec+Math.round(G.current.focus/1e3),sessions:z.sessions+1}}}}),v(P=>P.activeId?
{...P,tasks:P.tasks.map(z=>z.id===P.activeId?{...z,done:z.done+1}:z)}:P)}S(k),U(m),M(G.current[m]),V(!1),y(`Your ${re[f].
toLowerCase()} ended while you were away.`),te({phase:m,running:!1,remainingMs:G.current[m],cycleCount:k})}else{const m=typeof L.
remainingMs=="number"&&L.remainingMs>0?Math.min(L.remainingMs,G.current[f]):G.current[f];M(m),V(!1)}},[N.ready,n.ready]);
const ke=a.useRef({}),G=a.useRef(D);G.current=D;const vt=a.useCallback(f=>{const m=Y.current;let k="focus",A=c;if(m==="f\
ocus"){if(A=f?c:c+1,S(A),k=A%Math.max(1,t.longEvery)===0&&A>0?"long":"short",!f){const z=Ne(),we=C.days[z]||{focusSec:0,
sessions:0};E({days:{...C.days,[z]:{focusSec:we.focusSec+Math.round(G.current.focus/1e3),sessions:we.sessions+1}}}),g.activeId&&
v(ae=>({...ae,tasks:ae.tasks.map(fe=>fe.id===ae.activeId?{...fe,done:fe.done+1}:fe)}))}}else k="focus";if(t.alarmSound===
"custom"&&J.current)try{J.current.currentTime=0,J.current.volume=t.alarmVolume,J.current.play().catch(()=>Ae("bell",t.alarmVolume,
t.alarmRepeat))}catch{Ae("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound==="custom"?Ae("bell",t.alarmVolume,t.alarmRepeat):
Ae(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<"u"&&Notification.permission==="gra\
nted")try{new Notification(`${re[m]} finished`,{body:k==="focus"?"Time to focus.":`Time for a ${re[k].toLowerCase()}.`})}catch{}
delete ke.current[m],U(k),M(G.current[k]);const P=k==="focus"?t.autoFocus:t.autoBreaks;P?(K.current=Date.now()+G.current[k],
V(!0)):V(!1),te({phase:k,running:P,endAt:P?Date.now()+G.current[k]:0,remainingMs:G.current[k],cycleCount:A})},[c,t,C,E,v,
te]),Ie=a.useRef(vt);Ie.current=vt;const Te=a.useRef(void 0);a.useEffect(()=>{if(!B)return;const f=()=>{const A=K.current-
Date.now();A<=0?Ie.current(!1):M(P=>Math.ceil(P/1e3)!==Math.ceil(A/1e3)?A:P)};if(Te.current===void 0)try{Te.current=typeof Worker<
"u"?new Worker(new URL(""+new URL("timerWorker-B03v4wmZ.js",import.meta.url).href,import.meta.url)):null}catch{Te.current=
null}const m=Te.current;if(m){const A=()=>f();return m.addEventListener("message",A),m.postMessage("start"),f(),()=>{m.removeEventListener(
"message",A),m.postMessage("stop")}}const k=window.setInterval(f,250);return()=>window.clearInterval(k)},[B]);const jt=a.
useRef(D),wt=a.useRef(!1);a.useEffect(()=>{const f=jt.current;if(jt.current=D,!!n.ready){if(!wt.current){wt.current=!0;return}
f.focus===D.focus&&f.short===D.short&&f.long===D.long||q.current||(delete ke.current[Y.current],M(D[Y.current]))}},[D,n.
ready]);const St=a.useRef(0);a.useEffect(()=>{if(!B||!t.tick)return;const f=window.setInterval(()=>{const m=Math.ceil((K.
current-Date.now())/1e3);m!==St.current&&(St.current=m,Un(t.alarmVolume))},250);return()=>window.clearInterval(f)},[B,t.
tick,t.alarmVolume]),a.useEffect(()=>{document.title=`${he(R)} - ${re[O]} - Study focus timer`},[R,O]),a.useEffect(()=>{
let f=0;const m=()=>{ye.current&&(ye.current(),ye.current=null),t.ambient!=="none"&&(ye.current=zn(t.ambient,t.ambientVolume))};
return t.ambient!=="none"&&!Yt?(Yt=!0,f=window.setTimeout(m,1500)):m(),()=>{window.clearTimeout(f),ye.current&&(ye.current(),
ye.current=null)}},[t.ambient,t.ambientVolume]),a.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let f=!1;
const m=()=>{navigator.wakeLock.request("screen").then(A=>{f||($e.current=A)}).catch(()=>{})};m();const k=()=>{document.
visibilityState==="visible"&&m()};return document.addEventListener("visibilitychange",k),()=>{if(f=!0,document.removeEventListener(
"visibilitychange",k),$e.current){try{$e.current.release()}catch{}$e.current=null}}},[t.keepAwake]),a.useEffect(()=>{ze?
(J.current=new Audio(ze),J.current.preload="auto"):J.current=null},[ze]);const Nt=a.useRef(()=>{}),Mt=a.useRef(()=>{}),Ct=a.
useRef(()=>{}),ve=a.useCallback(()=>{if(y(""),We(),J.current)try{J.current.pause(),J.current.currentTime=0}catch{}K.current=
Date.now()+ce.current,V(!0),te({phase:Y.current,running:!0,endAt:K.current,remainingMs:ce.current,cycleCount:c})},[te,c]),
je=a.useCallback(()=>{V(!1),te({phase:Y.current,running:!1,remainingMs:ce.current,cycleCount:c})},[te,c]),Ce=a.useCallback(
()=>{y(""),delete ke.current[Y.current],V(!1),M(G.current[Y.current]),te({phase:Y.current,running:!1,remainingMs:G.current[Y.
current],cycleCount:c})},[te,c]),Pe=a.useCallback(()=>{Ie.current(!0)},[]);Nt.current=ve,Mt.current=je,Ct.current=Ce;const Ee=a.
useCallback(f=>{const m=Y.current;if(f===m)return;const k=q.current?Math.max(0,K.current-Date.now()):ce.current;k>0&&k<G.
current[m]?ke.current[m]=k:delete ke.current[m];const A=ke.current[f],P=typeof A=="number"&&A>0?Math.min(A,G.current[f]):
G.current[f];V(!1),U(f),M(P),te({phase:f,running:!1,remainingMs:P,cycleCount:c})},[te,c]),Ke=a.useCallback(()=>{document.
fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),
[Et,Rt]=a.useState(null),ks=a.useCallback(()=>{const f=window.documentPictureInPicture;if(f!=null&&f.requestWindow){f.requestWindow(
{width:320,height:200}).then(m=>{for(const k of Array.from(document.styleSheets))try{const A=Array.from(k.cssRules||[]).
map(z=>z.cssText).join(`
`),P=m.document.createElement("style");P.textContent=A,m.document.head.appendChild(P)}catch{const A=k.href;if(A){const P=m.
document.createElement("link");P.rel="stylesheet",P.href=A,m.document.head.appendChild(P)}}m.document.body.className="ft\
-pip-body",m.addEventListener("pagehide",()=>Rt(null)),Rt(m)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);a.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const f=new BroadcastChannel(
"sft-sync"),m=()=>f.postMessage({t:"state",phase:Y.current,remaining:ce.current,running:q.current,dur:G.current[Y.current],
accent:Me.current,at:Date.now()});m();const k=window.setInterval(m,1e3);return f.onmessage=A=>{const P=A.data;(P==null?void 0:
P.t)==="cmd"&&(P.cmd==="toggle"?q.current?Mt.current():Nt.current():P.cmd==="reset"?Ct.current():P.cmd==="skip"&&Ie.current(
!0))},()=>{window.clearInterval(k),f.close()}},[]);const vs=a.useCallback(()=>{I("none"),_(!0)},[]),js=W==="tasks",ws=W===
"settings",Ss=a.useCallback(()=>I(f=>f==="tasks"?"none":"tasks"),[]),Ns=a.useCallback(()=>I(f=>f==="settings"?"none":"se\
ttings"),[]),Ms=a.useCallback(()=>I("settings"),[]),Cs=a.useCallback(()=>I(f=>f==="profile"?"none":"profile"),[]);a.useEffect(
()=>{const f=m=>{var A;const k=(A=m.target)==null?void 0:A.tagName;k==="INPUT"||k==="TEXTAREA"||k==="SELECT"||(m.code===
"Space"?(m.preventDefault(),q.current?je():ve()):m.key==="Escape"?I("none"):m.key==="r"||m.key==="R"?Ce():m.key==="s"||m.
key==="S"?Pe():m.key==="1"?Ee("focus"):m.key==="2"?Ee("short"):m.key==="3"?Ee("long"):m.key==="m"||m.key==="M"?_(P=>!P):
(m.key==="f"||m.key==="F")&&Ke())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",
f)},[ve,je,Ce,Pe,Ee,Ke]);const X=a.useCallback(f=>s(m=>({...m,...f})),[s]),Es=a.useCallback(f=>{if(!f)return;const m=f.type.
startsWith("video/");if(!m&&!f.type.startsWith("image/")){ge("That file is not an image or video.");return}gs(k=>(k&&URL.
revokeObjectURL(k.url),{url:URL.createObjectURL(f),kind:m?"video":"image"})),X({background:{kind:"upload"}}),ge("Backgro\
und applied for this visit. Use a link to keep it across visits.")},[X]),Rs=a.useCallback(f=>{if(f){if(!f.type.startsWith(
"audio/")){de("That file is not an audio file.");return}gt(m=>(m&&URL.revokeObjectURL(m),URL.createObjectURL(f))),X({alarmSound:"\
custom",customAlarm:{source:"",name:f.name}}),de(`Using "${f.name}" for this visit. Use a link to keep it across visits.`)}},
[X]),Ls=a.useCallback(f=>{var m;if(f==="custom"){if(J.current)try{J.current.currentTime=0,J.current.volume=t.alarmVolume,
J.current.play().catch(()=>de("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else
de((m=t.customAlarm)!=null&&m.source?"Still loading your sound.":"Add a link or upload a file first.");return}Ae(f,t.alarmVolume,
!1)},[t.alarmVolume,t.customAlarm]),As=a.useCallback(f=>{if(!f){X({notifications:!1});return}if(!(typeof Notification>"u"))
try{const m=Notification.requestPermission();m&&typeof m.then=="function"?m.then(k=>X({notifications:k==="granted"})).catch(
()=>X({notifications:!1})):X({notifications:Notification.permission==="granted"})}catch{X({notifications:!1})}},[X]),$s=a.
useCallback(()=>s(nt),[s]),Is=a.useMemo(()=>({focusSec:0,sessions:0}),[]),De=C.days[Ne()]||Is,Ye=a.useMemo(()=>{var k,A;
let f=0;const m=new Date;for(((k=C.days[Ne(m)])==null?void 0:k.sessions)>0||m.setDate(m.getDate()-1);((A=C.days[Ne(m)])==
null?void 0:A.sessions)>0;)f++,m.setDate(m.getDate()-1);return f},[C.days]),Ts=a.useMemo(()=>{const f=[];for(let m=6;m>=
0;m--){const k=new Date;k.setDate(k.getDate()-m);const A=C.days[Ne(k)];f.push({label:`${"SMTWTFS"[k.getDay()]}`,minutes:Math.
round(((A==null?void 0:A.focusSec)||0)/60)})}return f},[C.days]),Ps=a.useMemo(()=>t.showChip?`${De.sessions} ${De.sessions===
1?"session":"sessions"} · ${Math.round(De.focusSec/60)} min${Ye>1?` · ${Ye}-day streak`:""}`:null,[t.showChip,De,Ye]),
Ds=n.ready&&x.ready&&T.ready,Os=(($t=cs.find(f=>f.id===t.font))==null?void 0:$t.css)||"inherit",Xe=1-R/Math.max(1,D[O]),
Ge=118,Lt=2*Math.PI*Ge,Fs=typeof Notification<"u",Us=typeof navigator<"u"&&"wakeLock"in navigator,_s=typeof document<"u"&&
document.fullscreenEnabled,At=g.tasks.find(f=>f.id===g.activeId)||null,Ws=t.spotify?fs(t.spotify):null;return e.jsxs("di\
v",{className:`ft-root ${r?"is-compact":""}`,style:{"--ft-accent":t.accent,"--ft-font":Os},children:[e.jsx(Qn,{kind:ue.kind,
id:ue.id,scrim:t.scrim,builtinSrc:ys,linkBg:ps,uploadBg:hs,paused:r,animate:t.bgAnimate!==!1,customFit:t.customFit||"cov\
er",enhance:t.enhance!==!1}),e.jsx(ra,{chip:Ps,panel:W,fullscreenSupported:_s,onFullscreen:Ke,onTasks:Ss,onSettings:Ns,onMinimize:vs,
onPopout:ks,onProfile:Cs}),e.jsxs("main",{ref:l,className:`ft-center ${t.clockOnly===!0?"is-clockonly":""}`,style:t.clockOnly===
!0&&i?{left:i.x,top:i.y,transform:`scale(${i.s})`,transformOrigin:"top left"}:void 0,onPointerMove:t.clockOnly===!0?h:void 0,
onPointerUp:t.clockOnly===!0?u:void 0,onPointerCancel:t.clockOnly===!0?u:void 0,children:[t.clockOnly!==!0?e.jsx("nav",{
className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(f=>e.jsx("button",{type:"button",className:`\
ft-mode ${O===f?"is-active":""}`,onClick:()=>Ee(f),children:re[f]},f))}):null,t.clockOnly!==!0&&t.showDots?e.jsx("div",{
className:"ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((f,m)=>e.jsx(
"span",{className:`ft-dot ${m<c%Math.max(1,t.longEvery)||c>0&&c%Math.max(1,t.longEvery)===0&&O!=="focus"?"is-done":""}`},
m))}):null,e.jsxs("div",{className:`ft-clock is-${t.clockSize} ${t.clockOnly===!0?"is-free":""}`,role:"timer","aria-live":"\
off","aria-label":`${re[O]} timer, ${he(R)} remaining`,onPointerDown:t.clockOnly===!0?p("move"):void 0,title:t.clockOnly===
!0?"Drag to move":void 0,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-h\
idden":"true",children:[e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:Ge}),e.jsx("circle",{className:"ft\
-ring-fill",cx:"130",cy:"130",r:Ge,strokeDasharray:Lt,strokeDashoffset:Lt*(1-Xe)})]}):null,e.jsxs("div",{className:"ft-t\
ime-wrap",children:[e.jsx("div",{className:"ft-time",children:he(R)}),e.jsx("div",{className:"ft-taskline",children:At?At.
title:O==="focus"?"Pick a task or just focus":"Rest up"})]})]}),t.clockOnly===!0?e.jsxs("div",{className:"ft-clockonly-t\
ools",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact ft-clockonly-exit","aria-label":"Show timer\
 controls",onPointerDown:f=>f.stopPropagation(),onClick:()=>X({clockOnly:!1}),children:"Show controls"}),e.jsx("button",
{type:"button",className:"ft-clock-resize","aria-label":"Drag to resize the clock",onPointerDown:p("resize"),children:"⤡"})]}):
null,t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(Xe*100)}%`}})}):null,t.clockOnly!==!0?e.jsxs("div",{className:"ft-controls",children:[e.jsx("button",{type:"button",
className:"ft-primary",onClick:()=>B?je():ve(),children:B?"Pause":R<D[O]?"Resume":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost",onClick:Ce,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:Pe,children:"\
Skip"})]}):null,t.clockOnly!==!0&&t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R reset · S\
 skip · M minimize · F fullscreen · Esc close panels"}):null,ne?e.jsxs("p",{className:"ft-awaytoast",role:"status",children:[
ne,e.jsx("button",{type:"button",className:"ft-awaytoast-x","aria-label":"Dismiss note",onClick:()=>y(""),children:"×"})]}):
null]}),r?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-label":"Minimized timer",children:[e.jsx("span",{
className:"ft-compactphase",children:re[O]}),e.jsx("span",{className:"ft-compacttime",children:he(R)}),e.jsx("button",{type:"\
button",className:"ft-compactbtn","aria-label":B?"Pause":"Start",onClick:()=>B?je():ve(),children:B?"❚❚":"▶"}),e.jsx(
"button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",onClick:()=>_(!1),children:"⤢"})]}):null,
W==="profile"?e.jsx(Sn,{onClose:()=>I("none")}):null,e.jsx(vn,{}),js?e.jsx(la,{tasksState:g,setTasksState:v,week:Ts,ready:Ds,
savedMessage:x.message||T.message||"",onClose:()=>I("none")}):null,ws?e.jsx(da,{settings:t,patch:X,bgStatus:xs,soundStatus:bs,
lastBgSrcRef:Be,lastSndSrcRef:Ve,resolveLinkBg:yt,resolveCustomSound:xt,uploadBg:Es,uploadSound:Rs,previewAlarm:Ls,requestNotifications:As,
notificationsSupported:Fs,wakeLockSupported:Us,onResetSettings:$s,savedMessage:n.message||"",onClose:()=>I("none"),savedLinks:b,
onSaveLink:j,onRemoveLink:$}):null,Et?qs.createPortal(e.jsxs("div",{className:"ft-pip",children:[e.jsx("div",{className:"\
ft-pip-phase",children:re[O]}),e.jsx("div",{className:"ft-pip-time",children:he(R)}),e.jsx("div",{className:"ft-pip-bar",
"aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.round(Xe*100)}%`}})}),e.jsxs("div",{className:"ft-pip-b\
tns",children:[e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>B?je():ve(),children:B?"Pause":
"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Ce,children:"Reset"}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:Pe,children:"Skip"})]})]}),Et.document.body):null,t.musicOpen!==!1?e.jsx(
oa,{settings:t,patch:X,spotifySrc:Ws,onOpenSettings:Ms}):null]})}zs(document.getElementById("root")).render(e.jsx(ua,{}));
