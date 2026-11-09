import{R as G,j as e,r as a,a as ws,c as Ss}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").
relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulep\
reload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName===
"LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&
(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const Ns={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function ee({x:t,y:s,r:n,fill:i}){const o=[];for(let l=0;l<10;l++){
const d=Math.PI/5*l-Math.PI/2,m=l%2===0?n:n*.45;o.push(`${(t+m*Math.cos(d)).toFixed(1)},${(s+m*Math.sin(d)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function Ms({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#123f3a",opacity:"0.7"})]});case"star":return e.jsxs("g",{children:[e.jsx(ee,{x:48,y:48,r:30,fill:"#ffd166"}),e.jsx("cir\
cle",{cx:"40",cy:"46",r:"3.4",fill:"#5c4400"}),e.jsx("circle",{cx:"56",cy:"46",r:"3.4",fill:"#5c4400"}),e.jsx("path",{d:"\
M41 56 q7 6 14 0",stroke:"#5c4400",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]});case"sprout":return e.jsxs("g",
{children:[e.jsx("path",{d:"M48 34 q-16 -18 -28 -6 q14 12 28 6",fill:"#7fb069"}),e.jsx("path",{d:"M48 34 q16 -18 28 -6 q\
-14 12 -28 6",fill:"#94c77d"}),e.jsx("circle",{cx:"48",cy:"56",r:"24",fill:"#a3c585"}),e.jsx("circle",{cx:"40",cy:"52",r:"\
3.2",fill:"#2e4423"}),e.jsx("circle",{cx:"56",cy:"52",r:"3.2",fill:"#2e4423"}),e.jsx("path",{d:"M41 62 q7 6 14 0",stroke:"\
#2e4423",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]});case"blob":return e.jsxs("g",{children:[e.jsx("path",{d:"\
M48 22 q26 0 27 24 q1 26 -25 28 q-28 2 -29 -24 q-1 -24 27 -28",fill:"#b388eb"}),e.jsx("circle",{cx:"40",cy:"48",r:"3.6",
fill:"#33204f"}),e.jsx("circle",{cx:"57",cy:"48",r:"3.6",fill:"#33204f"}),e.jsx("path",{d:"M42 58 q6 5 13 0",stroke:"#33\
204f",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"33",cy:"57",r:"3",fill:"#d3b8f5",opacity:"\
0.8"}),e.jsx("circle",{cx:"64",cy:"57",r:"3",fill:"#d3b8f5",opacity:"0.8"})]});case"moon":default:return e.jsxs("g",{children:[
e.jsx("circle",{cx:"48",cy:"48",r:"28",fill:"#2b3a67"}),e.jsx("path",{d:"M58 26 a26 26 0 1 0 12 44 a20 20 0 1 1 -12 -44",
fill:"#ffd97a"}),e.jsx("circle",{cx:"36",cy:"42",r:"2.6",fill:"#8fa3d9"}),e.jsx("circle",{cx:"30",cy:"56",r:"1.8",fill:"\
#8fa3d9"})]})}}function Cs({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(ee,{x:14,y:22,r:4,fill:"\
#ffe9a8"}),e.jsx(ee,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(ee,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(ee,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(ee,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(ee,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function Es({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(ee,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(ee,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function Rs({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
fill:"none",stroke:"#e05d7a",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("rect",{x:"19",y:"40",width:"10",height:"16",
rx:"5",fill:"#e05d7a"}),e.jsx("rect",{x:"67",y:"40",width:"10",height:"16",rx:"5",fill:"#e05d7a"})]});case"beanie":return e.
jsxs("g",{children:[e.jsx("path",{d:"M23 34 a25 22 0 0 1 50 0 z",fill:"#5b8def"}),e.jsx("rect",{x:"21",y:"32",width:"54",
height:"9",rx:"4.5",fill:"#7ba4f4"}),e.jsx("circle",{cx:"48",cy:"11",r:"5",fill:"#dce7ff"})]});case"halo":return e.jsx("\
ellipse",{cx:"48",cy:"12",rx:"16",ry:"4.6",fill:"none",stroke:"#ffe08a",strokeWidth:"3.4"});case"crown":return e.jsxs("g",
{children:[e.jsx("polygon",{points:"30,30 33,12 42,22 48,8 54,22 63,12 66,30",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4",strokeLinejoin:"round"}),e.jsx("rect",{x:"29",y:"29",width:"38",height:"6",rx:"3",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4"}),e.jsx("circle",{cx:"48",cy:"18",r:"2.4",fill:"#e05d7a"})]});case"wizard":return e.jsxs("g",{children:[e.jsx("poly\
gon",{points:"48,2 30,34 66,34",fill:"#5a4a8a"}),e.jsx("polygon",{points:"40,20 48,2 52,12",fill:"#6d5ba6"}),e.jsx("elli\
pse",{cx:"48",cy:"34",rx:"27",ry:"5.4",fill:"#4a3d75"}),e.jsx(ee,{x:44,y:22,r:2.6,fill:"#ffe08a"})]});case"laurel":return e.
jsxs("g",{fill:"none",stroke:"#7fb069",strokeWidth:"3",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 36 q6 -16 22\
 -20"}),e.jsx("path",{d:"M70 36 q-6 -16 -22 -20"}),e.jsx("path",{d:"M32 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 \
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function Ls({frame:t}){const s=Ns[t];return s?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const wt=G.memo(function({spec:s,size:n=96}){return e.jsxs("svg",{width:n,
height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(Cs,{aura:s.aura}),e.jsx(Ms,{base:s.base}),e.jsx(Es,{eyes:s.eyes}),e.jsx(Rs,{hat:s.hat}),
e.jsx(Ls,{frame:s.frame})]})}),As=2,Is=25,Ps=15;function St(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function $s(t,s,n){var g,N,M;const i=t.days||{};let o=0,l=0,
d=0,m=0;const f=Object.keys(i).sort();for(const T of f){const C=i[T];C&&(o+=C.focusSec||0,l+=C.sessions||0,(C.focusSec||
0)>d&&(d=C.focusSec||0),(C.sessions||0)>0&&m++)}let p=0;const y=new Date;for((((g=i[St(y)])==null?void 0:g.sessions)||0)>
0||y.setDate(y.getDate()-1);(((N=i[St(y)])==null?void 0:N.sessions)||0)>0;)p++,y.setDate(y.getDate()-1);let w=0,b=0,S=null;
for(const T of f){if(!((((M=i[T])==null?void 0:M.sessions)||0)>0))continue;const C=new Date(T+"T12:00:00");S?b=Math.round(
(C.getTime()-S.getTime())/864e5)===1?b+1:1:b=1,b>w&&(w=b),S=C}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:p,bestStreak:w,bestDayMin:Math.round(d/60),activeDays:m}}function Ts(t){return t.totalFocusMin*As+t.totalSessions*
Is+t.totalTasksCompleted*Ps}function ze(t){return 100+50*(t-1)}function Ds(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=ze(s);)n-=ze(s),s++;const i=ze(s);return{level:s,xp:t,intoLevel:n,needed:i,progress:i>0?n/i:0}}const Nt=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function Os(t){let s=Nt[0].name;for(const n of Nt)t>=n.level&&(s=n.name);return s}const Je=[{id:"none-hat",slot:"\
hat",name:"No hat",level:1,hint:""},{id:"headphones",slot:"hat",name:"Headphones",level:2,hint:"Unlocked at level 2"},{id:"\
beanie",slot:"hat",name:"Beanie",level:4,hint:"Unlocked at level 4"},{id:"halo",slot:"hat",name:"Halo",level:8,hint:"Unl\
ocked at level 8"},{id:"crown",slot:"hat",name:"Focus crown",level:12,hint:"Unlocked at level 12"},{id:"wizard",slot:"ha\
t",name:"Wizard hat",level:16,hint:"Unlocked at level 16"},{id:"laurel",slot:"hat",name:"Laurel wreath",level:20,hint:"U\
nlocked at level 20"},{id:"none-eyes",slot:"eyes",name:"No eyewear",level:1,hint:""},{id:"glasses",slot:"eyes",name:"Rou\
nd glasses",level:3,hint:"Unlocked at level 3"},{id:"shades",slot:"eyes",name:"Cool shades",level:6,hint:"Unlocked at le\
vel 6"},{id:"monocle",slot:"eyes",name:"Monocle",level:10,hint:"Unlocked at level 10"},{id:"star-eyes",slot:"eyes",name:"\
Starry eyes",level:15,hint:"Unlocked at level 15"},{id:"none-aura",slot:"aura",name:"No aura",level:1,hint:""},{id:"spar\
kle",slot:"aura",name:"Sparkles",level:5,hint:"Unlocked at level 5"},{id:"calm-ring",slot:"aura",name:"Calm ring",level:9,
hint:"Unlocked at level 9"},{id:"ember",slot:"aura",name:"Ember glow",level:13,hint:"Unlocked at level 13"},{id:"galaxy",
slot:"aura",name:"Galaxy ring",level:18,hint:"Unlocked at level 18"},{id:"none-frame",slot:"frame",name:"No frame",level:1,
hint:""},{id:"frame-bronze",slot:"frame",name:"Bronze frame",level:2,hint:"Unlocked at level 2"},{id:"frame-silver",slot:"\
frame",name:"Silver frame",level:6,hint:"Unlocked at level 6"},{id:"frame-gold",slot:"frame",name:"Gold frame",level:11,
hint:"Unlocked at level 11"},{id:"frame-emerald",slot:"frame",name:"Emerald frame",level:16,hint:"Unlocked at level 16"},
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function Fs(t,s){return s>=
t.level}function Us(t){return Je.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const _s=[{id:"moon",name:"\
Moon"},{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},
{id:"sprout",name:"Sprout"},{id:"blob",name:"Blob"}],Mt=[{id:"first-session",name:"First steps",desc:"Complete your firs\
t focus session",unlocked:t=>t.totalSessions>=1},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessi\
ons",unlocked:t=>t.totalSessions>=10},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.totalTasksCompleted>=5},{id:"ta\
sks-25",name:"Task master",desc:"Finish 25 tasks",unlocked:t=>t.totalTasksCompleted>=25},{id:"streak-3",name:"Hat trick",
desc:"Study 3 days in a row",unlocked:t=>t.bestStreak>=3},{id:"streak-7",name:"Full week",desc:"Study 7 days in a row",unlocked:t=>t.
bestStreak>=7},{id:"streak-30",name:"Unstoppable",desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30},{id:"hour-\
day",name:"Solid hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60},{id:"deep-day",name:"Deep work d\
ay",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180},{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 \
total focus hours",unlocked:t=>t.totalFocusMin>=600},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus\
 hours",unlocked:t=>t.totalFocusMin>=6e3}];function Ct(t){if(t<60)return`${t} min`;const s=Math.floor(t/60),n=t%60;return n?
`${s}h ${n}m`:`${s}h`}const Ws="sft:ft-stats.v1",Ft="sft:ft-tasks.v1",zs="sft:ft-session.v1",Ut="sft:ft-profile.v1",et="\
sft:ft-progress-ledger.v1";function tt(){const t=fe(et);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function _t(t){const s=tt();let n=!1;s.migratedAt===
null&&(s.migratedAt=Date.now(),n=!0);for(const i of t.tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in s.tasks)&&
(s.tasks[i.id]=Date.now(),n=!0);if(n)try{window.localStorage.setItem(et,JSON.stringify(s))}catch{}return s}function Et(){
const t=fe(Ft)||{tasks:[]};_t(t)}function Bs(t){if(!t)return;const s=tt();let n=!1;if(s.migratedAt===null&&(s.migratedAt=
Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.now(),n=!0),n)try{window.localStorage.setItem(et,JSON.stringify(s))}catch{}}
const qs={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function fe(t){
try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{return null}}function Vs(){const t=fe(Ut);return{
...qs,...t||{}}}function Rt(t){try{window.localStorage.setItem(Ut,JSON.stringify(t))}catch{}}function Ks(){const t=fe("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function Lt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function Wt(){const t=fe(zs);return!!(t&&t.running&&t.phase==="focu\
s")}function Ys(t){const[s,n]=a.useState(0),[i,o]=a.useState(()=>Vs()),[l,d]=a.useState(()=>Ks()),[m,f]=a.useState("");a.
useEffect(()=>{const P=()=>n(j=>j+1),L=window.setInterval(P,2e3);return window.addEventListener("focus",P),window.addEventListener(
"sft:progress",P),()=>{window.clearInterval(L),window.removeEventListener("focus",P),window.removeEventListener("sft:pro\
gress",P)}},[t]);const p=a.useMemo(()=>fe(Ws)||{days:{}},[s]),y=a.useMemo(()=>fe(Ft)||{tasks:[],activeId:null},[s]),[w,b]=a.
useState(()=>tt());a.useEffect(()=>{b(_t(y))},[y]);const S=a.useMemo(()=>$s(p,y,Object.keys(w.tasks).length),[p,y,w]),g=a.
useMemo(()=>Ds(Ts(S)),[S]),N=a.useCallback(P=>{o(L=>{const j={...L,...P,updatedAt:Date.now()};try{Rt(j)}catch{f("This br\
owser blocked saving. Profile changes last until the tab closes.")}return j})},[]),M=a.useCallback(P=>{o(()=>{try{Rt(P)}catch{}
return P})},[]),T=a.useCallback(P=>{d(L=>{const j={...L,seenAchievements:Array.from(new Set([...L.seenAchievements,...P]))};
return Lt(j),j})},[]),C=a.useCallback(P=>{d(L=>{const j={...L,celebratedLevel:Math.max(L.celebratedLevel,P)};return Lt(j),
j})},[]);return{ready:!0,snapshot:S,levelInfo:g,profile:i,setProfile:N,replaceProfile:M,meta:l,markAchievementsSeen:T,celebrateLevel:C,
storageMessage:m}}const Ie={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},V=!!(Ie.apiKey&&Ie.databaseURL&&
Ie.authDomain),Be="10.14.1",qe={app:`https://www.gstatic.com/firebasejs/${Be}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${Be}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Be}/firebase-database.js`};let je=null;
function Ve(t){return new Function("u","return import(u)")(t)}function ue(){if(!je){const t=Promise.all([Ve(qe.app),Ve(qe.
auth),Ve(qe.database)]).then(([s,n,i])=>{const o=s.initializeApp(Ie);return{auth:n.getAuth(o),db:i.getDatabase(o),authApi:n,
dbApi:i}});t.catch(()=>{je===t&&(je=null)}),je=t}return je}function Gs(){const[t,s]=a.useState(V?"loading":"off"),[n,i]=a.
useState(null),[o,l]=a.useState("");a.useEffect(()=>{if(!V)return;let f,p=!0;return ue().then(({auth:y,authApi:w})=>{p&&
(f=w.onAuthStateChanged(y,b=>{p&&(b?(i({uid:b.uid,name:b.displayName||(b.isAnonymous?"Guest":"Scholar"),email:b.email||null,
anonymous:!!b.isAnonymous}),s("signed-in")):(i(null),s("signed-out")))}))}).catch(()=>{p&&(s("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{p=!1,f&&f()}},[]);const d=a.useCallback(()=>{
V&&(l(""),ue().then(({auth:f,authApi:p})=>p.signInWithPopup(f,new p.GoogleAuthProvider)).catch(f=>{f&&(f.code==="auth/po\
pup-closed-by-user"||f.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),m=a.useCallback(()=>{V&&ue().then(({auth:f,authApi:p})=>p.signOut(f)).catch(()=>{})},[]);return{status:t,
user:n,error:o,signInWithGoogle:d,signOut:m}}async function Hs(t){if(!V)return null;const{db:s,dbApi:n}=await ue(),i=await n.
get(n.child(n.ref(s),`profiles/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function At(t,s){if(!V)return;const{db:n,dbApi:i}=await ue();
await i.set(i.ref(n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,
updatedAt:s.updatedAt})}function zt(t,s){const[n,i]=a.useState(null),[o,l]=a.useState(V?"connecting":"off"),d=a.useRef(t);
return d.current=t,a.useEffect(()=>{if(!V||!s){l("off"),i(null);return}let m=!0,f;return l("connecting"),(async()=>{try{
const{auth:p,db:y,authApi:w,dbApi:b}=await ue();let S=p.currentUser;if(S||(S=(await w.signInAnonymously(p)).user),!m)return;
const g=b.ref(y,`presence/${S.uid}`),N=()=>b.set(g,{studying:d.current,ts:Date.now()}).catch(()=>{});await N(),b.onDisconnect(
g).remove().catch(()=>{});const M=window.setInterval(N,3e4),T=b.onValue(b.ref(y,"presence"),C=>{if(!m)return;const P=Date.
now();let L=0;const j=C&&C.val?C.val():{};for(const D of Object.keys(j||{})){const A=j[D];A&&A.studying===!0&&typeof A.ts==
"number"&&P-A.ts<9e4&&L++}i(L),l("live")},()=>{m&&l("error")});f=()=>{window.clearInterval(M),T&&T(),b.remove(g).catch(()=>{})}}catch{
m&&l("error")}})(),()=>{m=!1,f&&f()}},[s]),a.useEffect(()=>{!V||!s||o!=="live"||ue().then(({auth:m,db:f,dbApi:p})=>{const y=m.
currentUser;y&&p.set(p.ref(f,`presence/${y.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,
status:o}}function Zs(){const[t,s]=a.useState(!1);return a.useEffect(()=>{Et();const n=()=>Et(),i=window.setInterval(n,15e3);
if(!V)return()=>window.clearInterval(i);const o=()=>s(Wt());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(i)}},[]),zt(t,V),null}const Xs=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],Js=G.memo(function({onClose:s}){const n=Ys(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:d,replaceProfile:m,meta:f}=n,p=Gs(),[y,w]=a.useState(!1);a.useEffect(()=>{if(!V)return;const v=()=>w(Wt());v();
const x=window.setInterval(v,5e3);return()=>window.clearInterval(x)},[]);const b=zt(y,V),[S,g]=a.useState(!1),[N,M]=a.useState(
""),[T,C]=a.useState(""),P=a.useRef("");a.useEffect(()=>{if(!V||p.status!=="signed-in"||!p.user||p.user.anonymous)return;
const v=p.user.uid;P.current!==v&&(P.current=v,Hs(v).then(x=>{x&&x.updatedAt>l.updatedAt?(m(x),C("Profile synced from yo\
ur account.")):At(v,l).then(()=>C("Profile saved to your account.")).catch(()=>C("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>C("Could not sync right now; your local profile is safe.")))},[p.status,p.user]),a.useEffect(
()=>{if(!V||p.status!=="signed-in"||!p.user||p.user.anonymous||!l.updatedAt)return;const v=window.setTimeout(()=>{At(p.user.
uid,l).catch(()=>C("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(v)},[l.
updatedAt,p.status,p.user]);const L=o.level,j=Os(L),A=a.useMemo(()=>Mt.filter(v=>v.unlocked(i)),[i]).filter(v=>!f.seenAchievements.
includes(v.id)),O=L>f.celebratedLevel,W=Us(L),_=()=>{const v=N.trim().slice(0,24);d({name:v}),g(!1)},E=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:s,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(wt,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[S?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:N,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:v=>M(v.target.value),onKeyDown:v=>{v.key==="E\
nter"&&_(),v.key==="Escape"&&g(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:_,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{M(l.name),g(!0)},children:[
E," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:j}),b.status==="live"&&b.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",b.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${L}`,children:["Lv ",L]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${L}, ${o.intoLevel} of ${o.needed} experience toward level ${L+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),O?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",L," reached - ",j,"!",W.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>n.celebrateLevel(L),children:"Nice"})]}):null,A.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",A.map(v=>v.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>n.markAchievementsSeen(A.map(v=>v.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Ct(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Ct(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:_s.map(v=>e.jsx("button",{type:"button",title:v.name,"aria-label":`Avatar ${v.name}`,
className:`pf-basebtn ${l.base===v.id?"is-active":""}`,onClick:()=>d({base:v.id}),children:e.jsx(wt,{spec:{...l,base:v.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},v.id))}),Xs.map(({slot:v,label:x})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:x}),e.jsx("div",{className:"pf-gear",children:Je.filter(h=>h.
slot===v).map(h=>{const R=Fs(h,L),I=l[v]===h.id||h.id.startsWith("none")&&!Je.some(z=>z.slot===v&&l[v]===z.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${I?"is-active":""} ${R?"":"is-locked"}`,title:R?h.name:`${h.name} - ${h.
hint}`,onClick:()=>{R&&d({[v]:h.id})},children:R?h.name:`🔒 ${h.name} · Lv ${h.level}`},h.id)})})]},v)),W.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",W[0].name," at level ",W[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:Mt.
map(v=>{const x=v.unlocked(i);return e.jsxs("li",{className:x?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:x?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:v.
name}),e.jsx("span",{children:v.desc})]})]},v.id)})}),e.jsx("h3",{children:"Account"}),V?e.jsxs(e.Fragment,{children:[p.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,p.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:p.signInWithGoogle,children:"Sign in with Google"}):null,p.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,p.status==="signed-in"&&p.user?e.jsx("div",{className:"\
pf-account",children:p.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:p.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[p.user.name,p.user.
email?` · ${p.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:p.signOut,children:"\
Sign out"})]})}):null,p.error?e.jsx("p",{className:"ft-field-hint",children:p.error}):null,T?e.jsx("p",{className:"ft-fi\
eld-hint",children:T}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),n.storageMessage?e.jsx("p",{className:"ft-field-hint",children:n.storageMessage}):null]})});
function be(t,s){const[n,i]=a.useState(s),[o,l]=a.useState(!1),[d,m]=a.useState("");a.useEffect(()=>{try{const p=window.
localStorage.getItem("sft:"+t);if(p!=null){const y=JSON.parse(p),w=s!==null&&typeof s=="object"&&!Array.isArray(s)&&y!==
null&&typeof y=="object"&&!Array.isArray(y)?{...s,...y}:y;i(w)}}catch{m("Saved data on this browser could not be read.")}
l(!0)},[t]);const f=a.useCallback(p=>{i(y=>{const w=typeof p=="function"?p(y):p;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(w))}catch{m("This browser blocked saving. Changes last until the tab closes.")}return w})},[t]);return[n,
f,{ready:o,message:d}]}const Qs={v2cat:["images/images/v2cat-0.txt","images/images/v2cat-1.txt"],longer:["images/images/\
longer-0.txt","images/images/longer-1.txt","images/images/longer-2.txt","images/images/longer-3.txt","images/images/long\
er-4.txt","images/images/longer-5.txt"],curated:["images/images/curated-0.txt"],rain:["images/images/rain-0.txt","images\
/images/rain-1.txt"],"thumb-rain":["images/images/thumb-rain-0.txt"],library:["images/images/library-0.txt","images/imag\
es/library-1.txt","images/images/library-2.txt","images/images/library-3.txt","images/images/library-4.txt"],"thumb-libr\
ary":["images/images/thumb-library-0.txt"],coffee:["images/images/coffee-0.txt","images/images/coffee-1.txt","images/ima\
ges/coffee-2.txt"],"thumb-coffee":["images/images/thumb-coffee-0.txt"],desk:["images/images/desk-0.txt","images/images/d\
esk-1.txt","images/images/desk-2.txt"],"thumb-desk":["images/images/thumb-desk-0.txt"],mountains:["images/images/mountai\
ns-0.txt","images/images/mountains-1.txt","images/images/mountains-2.txt","images/images/mountains-3.txt","images/images\
/mountains-4.txt","images/images/mountains-5.txt"],"thumb-mountains":["images/images/thumb-mountains-0.txt"],forest:["im\
ages/images/forest-0.txt","images/images/forest-1.txt","images/images/forest-2.txt","images/images/forest-3.txt"],"thumb\
-forest":["images/images/thumb-forest-0.txt"],stars:["images/images/stars-0.txt"],"thumb-stars":["images/images/thumb-st\
ars-0.txt"],ocean:["images/images/ocean-0.txt","images/images/ocean-1.txt","images/images/ocean-2.txt"],"thumb-ocean":["\
images/images/thumb-ocean-0.txt"],catalog:["images/images/catalog-0.txt","images/images/catalog-1.txt","images/images/ca\
talog-2.txt","images/images/catalog-3.txt","images/images/catalog-4.txt","images/images/catalog-5.txt","images/images/ca\
talog-6.txt"]},Ke={};function st(t){return Ke[t]||(Ke[t]=Promise.all(Qs[t].map(async s=>{const n=await fetch(s);if(!n.ok)
throw Error("Image unavailable");return n.text()})).then(s=>"data:image/jpeg;base64,"+s.join("").replace(/\s/g,"")))}function en(t){
const[s,n]=a.useState("");return a.useEffect(()=>{let i=!0;return st(t).then(o=>{i&&n(o)}).catch(()=>{}),()=>{i=!1}},[t]),
s}const tn={rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk\
.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-oce\
an.jpg"},sn={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-des\
k.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-oc\
ean.jpg"},It=Object.fromEntries(Object.keys(tn).map(t=>[t,()=>st(t).then(s=>({default:s}))])),Pt=Object.fromEntries(Object.
keys(sn).map(t=>[t,()=>st("thumb-"+t).then(s=>({default:s}))])),Ye={},Ge={},He={focusMin:25,shortMin:5,longMin:15,longEvery:4,
autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,
notifications:!1,keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,
accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,clockOnly:!1,spotify:null,
spotifyOpen:!1,musicOpen:!0,musicMode:"radio",radio:{index:0,playing:!1,volume:.7}},nn=[{id:"rain",name:"Rainy window"},
{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountains",name:"Moun\
tains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],an=[{id:"#101418",name:"\
Ink"},{id:"#16213a",name:"Midnight"},{id:"#122b21",name:"Forest"},{id:"#2e1a33",name:"Plum"},{id:"#33191f",name:"Wine"},
{id:"#232a30",name:"Slate"},{id:"#3a2e1e",name:"Cocoa"},{id:"#d8cfc0",name:"Paper"}],te=[{id:"chillhop-jazz",title:"Chil\
lhop Jazz Coffee Shop",artist:"alex-morgan",url:"https://cdn.pixabay.com/download/audio/2026/06/16/audio_912babebe1.mp3?\
filename=alex-morgan-chillhop-jazz-coffee-shop-552792.mp3",cover:"https://cdn.pixabay.com/audio/2026/06/16/18-47-53-884_\
200x200.jpg",seconds:173},{id:"subclair-lofi",title:"Lofi",artist:"Sub_Clair",url:"https://cdn.pixabay.com/download/audi\
o/2026/08/15/audio_7249b5f798.mp3?filename=sub_clair-lofi-586095.mp3",cover:"https://cdn.pixabay.com/audio/2026/08/15/08\
-51-29-850_200x200.jpg",seconds:214},{id:"kulakovka-relax",title:"LoFi Relax",artist:"Kulakovka",url:"https://cdn.pixaba\
y.com/download/audio/2026/07/20/audio_d3e4d47bc2.mp3?filename=kulakovka-lofi-relax-570489.mp3",cover:"https://cdn.pixaba\
y.com/gradients/82bfb5-eac560_200x200.png",seconds:140},{id:"apalon-lofi",title:"Lofi",artist:"APALONBeats",url:"https:/\
/cdn.pixabay.com/download/audio/2026/07/29/audio_453d7bbab8.mp3?filename=apalonbeats-lofi-576261.mp3",cover:"https://cdn\
.pixabay.com/audio/2026/07/29/14-51-13-130_200x200.jpg",seconds:128},{id:"monda-lofi",title:"LoFi Music",artist:"MondaMu\
sic",url:"https://cdn.pixabay.com/download/audio/2026/08/20/audio_cd7ca920a0.mp3?filename=mondamusic-lofi-lofi-music-589\
107.mp3",cover:"https://cdn.pixabay.com/audio/2026/08/20/09-14-53-672_200x200.jpg",seconds:98},{id:"zephira-chill",title:"\
Chill Lofi",artist:"ZephiraMusic",url:"https://cdn.pixabay.com/download/audio/2026/08/14/audio_a5f2abd4d3.mp3?filename=z\
ephiramusic-chill-lofi-585360.mp3",cover:"https://cdn.pixabay.com/gradients/67a871-909cf2_200x200.png",seconds:137},{id:"\
coffee-shop",title:"Lofi Coffee Shop",artist:"alex-morgan",url:"https://cdn.pixabay.com/download/audio/2026/07/15/audio_\
6353298add.mp3?filename=alex-morgan-lofi-coffee-shop-568150.mp3",cover:"https://cdn.pixabay.com/audio/2026/07/15/21-20-4\
5-679_200x200.jpg",seconds:114},{id:"midnight-club",title:"Lofi Midnight Club",artist:"alex-morgan",url:"https://cdn.pix\
abay.com/download/audio/2026/07/15/audio_53935e58bb.mp3?filename=alex-morgan-lofi-midnight-club-568164.mp3",cover:"https\
://cdn.pixabay.com/audio/2026/07/15/21-18-58-754_200x200.jpg",seconds:137}];function $t(t){const s=t.replace("#",""),n=parseInt(
s.slice(0,2),16)/255,i=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255,l=Math.max(n,i,o),d=Math.min(n,i,o),
m=(l+d)/2;if(l===d)return{h:0,s:0,l:m};const f=l-d,p=m>.5?f/(2-l-d):f/(l+d);let y=0;return l===n?y=(i-o)/f+(i<o?6:0):l===
i?y=(o-n)/f+2:y=(n-i)/f+4,{h:y*60,s:p,l:m}}function Ze(t,s,n){const i=o=>{const l=(o+t/30)%12,d=s*Math.min(n,1-n),m=n-d*
Math.max(-1,Math.min(l-3,9-l,1));return Math.round(m*255).toString(16).padStart(2,"0")};return`#${i(0)}${i(8)}${i(4)}`}function on(t){
const s=t.replace("#","");if(!/^[0-9a-f]{6}$/i.test(s))return 0;const n=i=>{const o=parseInt(s.slice(i,i+2),16)/255;return o<=
.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)};return .2126*n(0)+.7152*n(2)+.0722*n(4)}const nt=[{id:"lofi-246243",name:"W\
indowsill cat",url:"https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4",tile:0,preview:"v2cat",duration:76.71},{
id:"lofi-246535",name:"Sunset cat",url:"https://cdn.pixabay.com/video/2024/12/13/246535_medium.mp4",tile:1,preview:"v2ca\
t",duration:58.56},{id:"lofi-246241",name:"Night room cat",url:"https://cdn.pixabay.com/video/2024/12/11/246241_medium.m\
p4",tile:2,preview:"v2cat",duration:75.34},{id:"lofi-246242",name:"Fireplace cat",url:"https://cdn.pixabay.com/video/202\
4/12/11/246242_medium.mp4",tile:3,preview:"v2cat",duration:58.69},{id:"lofi-270983",name:"Mountain cafe",url:"https://cd\
n.pixabay.com/video/2025/04/09/270983_medium.mp4",tile:4,preview:"v2cat",duration:5.33},{id:"lofi-73663",name:"Attic nap",
url:"https://cdn.pixabay.com/video/2021/05/09/73663-549527825_medium.mp4",tile:5,preview:"v2cat",duration:60.01},{id:"lo\
fi-215407",name:"Rainy study desk",url:"https://cdn.pixabay.com/video/2024/06/05/215407_medium.mp4",tile:6,preview:"v2ca\
t",duration:60.09},{id:"photo-107976",name:"Tropical waterfall",url:"https://cdn.pixabay.com/video/2022/02/17/107976-678\
971242_medium.mp4",tile:7,preview:"v2cat",duration:60.01,blend:!0},{id:"photo-22589",name:"Waterfall streams",url:"https\
://cdn.pixabay.com/video/2019/04/04/22589-328624822_medium.mp4",tile:8,preview:"v2cat",duration:36.31,blend:!0},{id:"lof\
i-312345",name:"Rainy reading cat",url:"https://cdn.pixabay.com/video/2025/10/27/312345_medium.mp4",tile:9,preview:"v2ca\
t",duration:64},{id:"lofi-345856",name:"City window cat",url:"https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4",
tile:10,preview:"v2cat",duration:64},{id:"lofi-310025",name:"Cozy study rain",url:"https://cdn.pixabay.com/video/2025/10\
/15/310025_medium.mp4",tile:11,preview:"v2cat",duration:64},{id:"lofi-270507",name:"Sunset fence cat",url:"https://cdn.p\
ixabay.com/video/2025/04/07/270507_medium.mp4",tile:12,preview:"v2cat",duration:59.97},{id:"photo-292827",name:"Alpine l\
ake",url:"https://cdn.pixabay.com/video/2025/07/22/292827_medium.mp4",tile:13,preview:"v2cat",duration:20.03,blend:!0},{
id:"photo-20451",name:"Golden surf",url:"https://cdn.pixabay.com/video/2019/01/04/20451-309694501_medium.mp4",tile:14,preview:"\
v2cat",duration:43.32,blend:!0},{id:"photo-198488",name:"Shoreline waves",url:"https://cdn.pixabay.com/video/2024/01/29/\
198488-907576442_medium.mp4",tile:15,preview:"v2cat",duration:60,blend:!0},{id:"lofi-214500",name:"Warm library desk",url:"\
https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4",tile:16,preview:"v2cat",duration:63.23},{id:"lofi-301247",name:"\
Retro train cat",url:"https://cdn.pixabay.com/video/2025/09/02/301247_medium.mp4",tile:17,preview:"v2cat",duration:29.87},
{id:"lofi-345838",name:"Sleeping dog desk",url:"https://cdn.pixabay.com/video/2026/04/11/345838_medium.mp4",tile:18,preview:"\
v2cat",duration:61.4},{id:"lofi-345955",name:"Night reading",url:"https://cdn.pixabay.com/video/2026/04/12/345955_medium\
.mp4",tile:19,preview:"v2cat",duration:64}],rn=new Map(nt.map(t=>[t.id,t]));function ln(t,s){const n=d=>t.replace(/_(tiny|small|medium|large)\.mp4/,
d),i=[n("_medium.mp4"),n("_large.mp4"),n("_small.mp4"),n("_tiny.mp4")],o=[...new Set(i)],l=n(s?"_small.mp4":"_medium.mp4");
return[l,...o.filter(d=>d!==l)]}function Tt(t){var n;return((n=window.__SFT_POSTERS)==null?void 0:n[t.id])||t.poster}const cn={
"balcony-dusk-l.jpg":"53-balcony-dusk-l.jpg","balcony-dusk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balco\
ny-dusk-p.jpg","balcony-dusk-p.mp4":"31-balcony-dusk-p.mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp\
4":"30-cozy-window-l.mp4","cozy-window-p.jpg":"50-cozy-window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-s\
treet-l.jpg":"49-japan-street-l.jpg","japan-street-l.mp4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-\
p.jpg","japan-street-p.mp4":"35-japan-street-p.mp4","misty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-m\
isty-river-l.mp4","misty-river-p.jpg":"39-misty-river-p.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.j\
pg":"47-night-train-l.jpg","night-train-l.mp4":"28-night-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-\
train-p.mp4":"27-night-train-p.mp4","rainy-window-l.jpg":"41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l\
.mp4","rainy-window-p.jpg":"37-rainy-window-p.jpg","rainy-window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45\
-sakura-night-l.jpg","sakura-night-l.mp4":"26-sakura-night-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-n\
ight-p.mp4":"25-sakura-night-p.mp4","shrine-l.jpg":"10-shrine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-\
shrine-p.jpg","shrine-p.mp4":"18-shrine-p.mp4","water-garden-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-wat\
er-garden-l.mp4","water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},Bt=(t,s,n)=>`\
scenes/${cn[`${t}-${s}.${n}`]}`,dn=(t,s)=>Bt(t.id,s,"jpg"),un=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"S\
ky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"\
Violet",value:"#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],qt=[{id:"sans",name:"Sans",css:"system-ui, -apple-sy\
stem, 'Segoe UI', Roboto, sans-serif"},{id:"serif",name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"\
Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, \
sans-serif"}],fn=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",bg:{kind:"color",id:"#101418"}},{id:"dusk",name:"D\
usk",accent:"#ffcf99",font:"serif",bg:{kind:"color",id:"#3b2f4a"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",
bg:{kind:"color",id:"#0f2e25"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"color",id:"#4a2f3d"}}],mn=[
{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Wo\
odblock"},{id:"custom",name:"My sound"}],Vt=[{id:"none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"\
storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"\
forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",
name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"\
wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown n\
oise"},{id:"white",name:"White noise"}],Kt=[{id:"lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9\
xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",
name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"}],oe={focus:"Focus",short:"Short br\
eak",long:"Long break"};let we=null;function Pe(){return we||(we=new(window.AudioContext||window.webkitAudioContext)),we.
state==="suspended"&&we.resume(),we}function re(t,s,n){const i=t.createOscillator(),o=t.createGain();i.type=n.type||"sin\
e",i.frequency.value=n.freq,o.gain.setValueAtTime(1e-4,n.start),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),
n.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),i.connect(o),o.connect(s),i.start(n.start),i.stop(
n.start+n.dur+.05)}function Se(t,s,n){const i=Pe(),o=i.createGain();o.gain.value=s,o.connect(i.destination);const l=n?2:
1,d=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let m=0;m<l;m++){const f=i.currentTime+.02+m*(d+.35);if(t==="bell")[[660,.5],[
1320,.28],[1760,.14],[2240,.07]].forEach(([p,y])=>re(i,o,{freq:p,start:f,dur:2.2,gain:y}));else if(t==="chime")re(i,o,{freq:783.99,
start:f,dur:1.3,gain:.4}),re(i,o,{freq:1046.5,start:f+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,.42],[294,.24],[392,
.17],[523,.09]].forEach(([p,y])=>re(i,o,{freq:p,start:f,dur:3.4,gain:y}));else if(t==="beep")for(let p=0;p<3;p++)re(i,o,
{freq:880,type:"square",start:f+p*.3,dur:.16,gain:.22});else t==="wood"&&(re(i,o,{freq:1400,type:"triangle",start:f,dur:.07,
gain:.5}),re(i,o,{freq:1400,type:"triangle",start:f+.22,dur:.07,gain:.4}))}}function pn(t){const s=Pe(),n=s.createGain();
n.gain.value=.35*t,n.connect(s.destination),re(s,n,{freq:1800,start:s.currentTime,dur:.035,gain:.5})}function hn(t,s){const n=2*
t.sampleRate,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);let l=0;for(let d=0;d<n;d++){const m=Math.random()*
2-1;s==="brown"?(l=(l+.02*m)/1.02,o[d]=l*3.2):o[d]=m}return i}const gn={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
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
"sounds/stream-5.txt"]},Le={};let Dt=!1;function yn(t,s){return Le[s]||(Le[s]=Promise.all((gn[s]||[]).map(async n=>{const i=await fetch(
n);if(!i.ok)throw new Error(`HTTP ${i.status}`);return(await i.text()).trim()})).then(n=>{if(!n.length)throw new Error("\
Recording unavailable");const i=atob(n.join(""));return t.decodeAudioData(Uint8Array.from(i,o=>o.charCodeAt(0)).buffer)}).
catch(n=>{throw delete Le[s],n})),Le[s]}function xn(t,s){if(t==="none")return null;const n=Vt.find(m=>m.id===t),i=Pe(),o=i.
createGain();if(o.gain.value=s,o.connect(i.destination),n!=null&&n.file){let m=!1,f=null;return yn(i,n.file).then(p=>{m||
(f=i.createBufferSource(),f.buffer=p,f.loop=!0,f.connect(o),f.start())}).catch(()=>{}),()=>{m=!0;try{f==null||f.stop()}catch{}
try{o.disconnect()}catch{}}}const l=i.createBufferSource();l.buffer=hn(i,t==="white"?"white":"brown"),l.loop=!0;let d=l;
if(t==="brown"){const m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=900,d.connect(m),d=m}return d.connect(
o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function bn(t){return/^https:\/\/.+/i.test(t.trim())}async function Qe(t){
const s=await fetch(t);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.blob()}async function Ot(t){try{const s=await Qe(
t);if(s.type.startsWith("image/"))return s;throw new Error("not an image")}catch{const s=`https://images.weserv.nl/?url=${encodeURIComponent(
t.replace(/^https?:\/\//,""))}`,n=await Qe(s);if(!n.type.startsWith("image/"))throw new Error("not an image");return n}}
async function kn(t){var d;const s=t.trim();if(/pin\.it\//i.test(s))throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let i=s;if(n){const m=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!m.ok)throw new Error("pin lookup failed");const f=await m.json();if((f==null?void 0:f.status)!=="success"||!Array.isArray(
f==null?void 0:f.data)||f.data.length===0)throw new Error("pin unavailable");const p=(d=f.data[0])==null?void 0:d.images;
if(!p)throw new Error("pin has no image");const y=p.originals||p["736x"]||p["564x"]||p["236x"];if(!(y!=null&&y.url))throw new Error(
"pin has no image");i=y.url}const o=i.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{const m=`${o[1]}\
/originals${o[2]}`;return{blob:await Ot(m),finalUrl:m}}catch{}if(!/^https:\/\//i.test(i))throw new Error("not a link");return{
blob:await Ot(i),finalUrl:i}}function Yt(t){const s=Kt.find(o=>o.id===t),i=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const se=({d:t,vb:s=24})=>e.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,i)=>e.jsx("path",{d:n},i))}),vn="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",jn="M5 12h14",wn="M4 6h16|M4 12h16|M4 18h10",Sn="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Gt="M6 6l12 12|M18 6L6 18",Nn="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function le(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),i=s%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function Ne(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function Ae({label:t,value:s,min:n,max:i,onChange:o,unit:l}){const d=m=>{const f=parseInt(m,10);Number.
isFinite(f)&&o(Math.min(i,Math.max(n,f)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:i,value:s,onChange:m=>d(m.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,s+1)),children:"\
+"})]})]})}function Z({label:t,hint:s,checked:n,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>i(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const Mn=G.memo(function({scene:s,token:n,
paused:i,animate:o,onReady:l,onFail:d}){const m=a.useRef(null),[f,p]=a.useState(!1),[y,w]=a.useState(0),b=a.useMemo(()=>window.
matchMedia("(max-width: 900px), (orientation: portrait)").matches,[]),S=a.useMemo(()=>s.url?ln(s.url,b):[Bt(s.id,"p","mp\
4")],[s,b]),g=S[Math.min(y,S.length-1)],N=a.useRef({paused:i,animate:o});N.current={paused:i,animate:o};const M=a.useRef(
{onReady:l,onFail:d});return M.current={onReady:l,onFail:d},a.useEffect(()=>{p(!1);const T=m.current;if(!T)return;let C=!1,
P=!1,L=0,j=!1,D=!1;const A=I=>I.play().catch(()=>{}),O=()=>!N.current.paused&&N.current.animate&&!document.hidden,W=()=>{
const I=document.createElement("video");return I.className="ft-bg ft-bgvideo",I.muted=!0,I.playsInline=!0,I.setAttribute(
"playsinline",""),I.setAttribute("disablepictureinpicture",""),I.setAttribute("disableremoteplayback",""),I.preload="aut\
o",I.src=g,I.setAttribute("aria-hidden","true"),I.loop=!s.blend,I},_=()=>{D||P||(D=!0,w(I=>I<S.length-1?I+1:(p(!0),x&&(x.
remove(),x=null),M.current.onFail(n),I)))};let E=null;const v=()=>{P||(x&&(x.currentTime=0,x.style.opacity="1",O()&&A(x)),
E&&(E.remove(),E=null),C=!1)};let x=W();x.addEventListener("error",_),x.addEventListener("ended",v),T.appendChild(x);const h=()=>{
O()?j&&x&&(A(x),E&&A(E)):(x==null||x.pause(),E==null||E.pause())},R=()=>{if(!(P||!x)){if(!j&&x.readyState>=2&&(j=!0,m.current&&
(m.current.style.opacity="1"),M.current.onReady(n),O()&&A(x)),O()&&j){x.paused&&!x.ended&&A(x);const I=s.duration||x.duration,
z=Math.min(1.5,I/4);if(!s.blend){L=requestAnimationFrame(R);return}if(!C&&Number.isFinite(I)&&x.currentTime>=I-z&&(C=!0,
E=W(),E.style.opacity="0",E.style.zIndex="2",E.addEventListener("error",()=>{}),T.appendChild(E),E.currentTime=0,A(E)),C&&
E&&E.readyState>=2){E.paused&&A(E);const r=Math.min(1,E.currentTime/z);x.style.opacity=String(1-r),E.style.opacity="1",r>=
1&&(x.remove(),x=E,E=null,C=!1,x.addEventListener("error",_),x.addEventListener("ended",v),T.dataset.wraps=String(Number(
T.dataset.wraps||0)+1))}}L=requestAnimationFrame(R)}};return L=requestAnimationFrame(R),document.addEventListener("visib\
ilitychange",h),window.addEventListener("pointerdown",h),()=>{P=!0,cancelAnimationFrame(L),x==null||x.pause(),E==null||E.
pause(),x==null||x.remove(),E==null||E.remove(),document.removeEventListener("visibilitychange",h),window.removeEventListener(
"pointerdown",h)}},[g]),e.jsx("div",{ref:m,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:f&&
e.jsx("span",{className:"ft-stream-status",children:"This scene could not load right now. Try another background."})},g)}),
Cn=G.memo(function({scene:s,paused:n,animate:i}){const[o,l]=a.useState([{s,key:0}]),[d,m]=a.useState(null),[f,p]=a.useState(
null),y=a.useRef(0),w=a.useRef(o),b=a.useRef(0),S=a.useRef(new Set),g=a.useRef(null),N=j=>{w.current=j,l(j)};a.useEffect(
()=>{const j=w.current,D=j[j.length-1];if(D&&D.s.id===s.id){b.current=D.key;const W=D.key;window.setTimeout(()=>{b.current===
W&&g.current===W&&N(w.current.filter(_=>_.key===W))},400);return}const A=++y.current;p(null),b.current=A;const O=j.filter(
W=>S.current.has(W.key)).slice(-1);N([...O,{s,key:A}])},[s]);const M=a.useCallback(j=>{S.current.add(j),j===b.current&&(g.
current=j,m(j),window.setTimeout(()=>{b.current===j&&N(w.current.filter(D=>D.key===j))},400))},[]),T=a.useCallback(j=>{if(p(
j),j!==b.current)return;const D=w.current.filter(O=>O.key!==j);if(!D.length)return;const A=D[D.length-1];b.current=A.key,
N(D),S.current.has(A.key)?(g.current=A.key,m(A.key)):(g.current=null,m(null))},[]),C=d===null||d!==b.current,P=o.some(j=>S.
current.has(j.key)),L=f!==null&&f===b.current;return e.jsxs(e.Fragment,{children:[P?null:e.jsx("div",{className:"ft-bg",
style:{backgroundColor:"#101418"}}),o.map(j=>e.jsx(Mn,{scene:j.s,token:j.key,paused:n,animate:i,onReady:M,onFail:T},j.key)),
C&&!L?e.jsx("div",{className:"ft-scene-switching",role:"status","aria-label":"Loading selected background",children:e.jsx(
"i",{})}):null,f!==null?e.jsxs("div",{className:"ft-scene-error",role:"status",children:["Could not load ",s.name,". ",P?
"Your previous background is still playing.":"Choose another background to try again."]}):null]})}),En=G.memo(function({
kind:s,id:n,scrim:i,builtinSrc:o,linkBg:l,uploadBg:d,paused:m,animate:f,customFit:p,enhance:y}){let w={};s==="builtin"&&
o?w={backgroundImage:`url(${o})`}:s==="color"?w={backgroundColor:/^#[0-9a-f]{6}$/i.test(n||"")?n:"#101418"}:s==="link"&&
(l==null?void 0:l.kind)==="image"?w={backgroundImage:`url(${l.url})`}:s==="upload"&&(d==null?void 0:d.kind)==="image"?w=
{backgroundImage:`url(${d.url})`}:(s==="link"||s==="upload"||s==="builtin")&&(w={backgroundColor:"#101418"}),(s==="link"||
s==="upload")&&w.backgroundImage&&(w={...w,backgroundSize:p,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},y!==
!1&&(w={...w,filter:"url(#ft-sharpen) saturate(1.08) contrast(1.05)"}));const b=s==="scene"?rn.get(n)||nt[0]:void 0,S=s===
"link"&&(l==null?void 0:l.kind)==="video"?l.url:s==="upload"&&(d==null?void 0:d.kind)==="video"?d.url:null,g=s==="color"?
Math.max(i,Math.min(.78,Math.pow(on(n||"#101418"),1.15)*.9)):i;return e.jsxs(e.Fragment,{children:[b?e.jsx(Cn,{scene:b,paused:!!m,
animate:f}):S?e.jsx(Rn,{src:S,paused:!!m,animate:f,fit:p}):e.jsx("div",{className:"ft-bg",style:w}),e.jsx("div",{className:"\
ft-scrim",style:{opacity:g}}),e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.
jsx("filter",{id:"ft-sharpen",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),
Rn=G.memo(function({src:s,paused:n,animate:i,fit:o}){const l=a.useRef(null);return a.useEffect(()=>{const d=l.current;if(!d)
return;const m=()=>{n||!i||document.hidden?d.pause():d.play().catch(()=>{})};m();const f=()=>{!n&&i&&!document.hidden&&d.
play().catch(()=>{})};return document.addEventListener("visibilitychange",m),window.addEventListener("pointerdown",f),()=>{
document.removeEventListener("visibilitychange",m),window.removeEventListener("pointerdown",f)}},[n,i,s]),i?e.jsx("video",
{ref:l,className:"ft-bg ft-bgvideo",style:{objectFit:o,backgroundColor:"#101418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,
preload:"auto","aria-hidden":"true"}):null}),Ln=G.memo(function({scene:s,active:n,onPick:i}){const o=en(s.preview||"cata\
log"),l=s.preview==="v2cat"?5:s.preview==="curated"?3:8,d=s.preview==="v2cat"?4:s.preview==="curated"?3:13;return e.jsxs(
"button",{type:"button",className:`ft-bgswatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${s.name} animated s\
cene`,onClick:i,children:[Tt(s)?e.jsx("img",{className:"ft-bgswatch-img",src:Tt(s),alt:"",loading:"lazy",decoding:"async"}):
s.tile!=null?e.jsx("span",{className:"ft-bgswatch-img",style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}\
% ${d*100}%`,backgroundPosition:`${s.tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*100/(d-1)}%`}}):e.jsx("img",{className:"f\
t-bgswatch-img",src:dn(s,"p"),alt:"",loading:"lazy",decoding:"async"}),e.jsx("span",{className:"ft-bgswatch-name",children:s.
name})]})}),An=G.memo(function({id:s,name:n,active:i,onPick:o}){const[l,d]=a.useState(Ge[s]||null);return a.useEffect(()=>{
let m=!0;return!Ge[s]&&Pt[s]&&Pt[s]().then(f=>{Ge[s]=f.default,m&&d(f.default)}).catch(()=>{}),()=>{m=!1}},[s]),e.jsx("b\
utton",{type:"button",className:`ft-bgswatch ${i?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-lab\
el":n,onClick:o})}),In=G.memo(function({color:s,onChange:n}){const o=a.useRef(null),l=/^#[0-9a-f]{6}$/i.test(s)?s:"#1014\
18",d=$t(l),[m,f]=a.useState(d.l);a.useEffect(()=>{f($t(/^#[0-9a-f]{6}$/i.test(s)?s:"#101418").l)},[s]),a.useEffect(()=>{
var M;const b=(M=o.current)==null?void 0:M.getContext("2d");if(!b)return;const S=b.createImageData(168,168),g=S.data,N=168/
2;for(let T=0;T<168;T++)for(let C=0;C<168;C++){const P=C-N+.5,L=T-N+.5,j=Math.sqrt(P*P+L*L)/N,D=(T*168+C)*4;if(j>1){g[D+
3]=0;continue}const A=(Math.atan2(L,P)*180/Math.PI+360)%360,O=Ze(A,j,m);g[D]=parseInt(O.slice(1,3),16),g[D+1]=parseInt(O.
slice(3,5),16),g[D+2]=parseInt(O.slice(5,7),16),g[D+3]=255}b.putImageData(S,0,0)},[m]);const p=b=>{var C;const S=(C=o.current)==
null?void 0:C.getBoundingClientRect();if(!S)return;const g=b.clientX-S.left-S.width/2,N=b.clientY-S.top-S.height/2,M=Math.
min(1,Math.sqrt(g*g+N*N)/(S.width/2)),T=(Math.atan2(N,g)*180/Math.PI+360)%360;n(Ze(T,M,m))},y=d.h*Math.PI/180,w=d.s*(168/
2);return e.jsxs("div",{className:"ft-wheelwrap",children:[e.jsxs("span",{className:"ft-wheelbox",children:[e.jsx("canva\
s",{ref:o,width:168,height:168,className:"ft-wheel","aria-label":"Color wheel: drag to pick a background color",onPointerDown:b=>{
b.target.setPointerCapture(b.pointerId),p(b)},onPointerMove:b=>{b.buttons&1&&p(b)}}),e.jsx("span",{className:"ft-wheel-d\
ot",style:{left:168/2+Math.cos(y)*w,top:168/2+Math.sin(y)*w,background:l}})]}),e.jsxs("span",{className:"ft-wheel-side",
children:[e.jsx("span",{className:"ft-wheel-preview",style:{background:l},children:l}),e.jsx("input",{type:"range",min:.05,
max:.95,step:.01,value:m,"aria-label":"Color lightness",onChange:b=>{const S=parseFloat(b.target.value);f(S),n(Ze(d.h,d.
s,S))}}),e.jsx("span",{className:"ft-field-hint",children:"Drag the wheel for hue, slide for lightness. Light colors are\
 dimmed behind the timer so text stays readable."})]})]})});function Pn(t){return t.kind!=="image"||!t.thumb?"":`https:/\
/images.weserv.nl/?url=${encodeURIComponent(t.thumb.replace(/^https?:\/\//,""))}&w=200&h=200&fit=cover&q=70`}function Xe(t){
try{const s=new URL(t);if(/pinterest\./i.test(s.host))return"Pinterest pin";const n=decodeURIComponent(s.pathname.split(
"/").pop()||"");return n.length>4&&/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(n)?n.slice(0,26):s.host.replace(
/^www\./,"")}catch{return"Saved link"}}const $n=G.memo(function({link:s,active:n,onPick:i,onRemove:o}){const l=Pn(s);return e.
jsxs("span",{className:`ft-bgswatch ft-bgswatch-named ft-linksw ${n?"is-active":""}`,children:[e.jsxs("button",{type:"bu\
tton",className:"ft-linksw-pick","aria-label":`Use saved background ${Xe(s.source)}`,onClick:i,children:[s.kind==="video"?
e.jsx("video",{className:"ft-bgswatch-img",src:s.source,muted:!0,playsInline:!0,preload:"metadata"}):l?e.jsx("img",{className:"\
ft-bgswatch-img",src:l,alt:"",loading:"lazy",decoding:"async"}):null,e.jsx("span",{className:"ft-bgswatch-name",children:Xe(
s.source)})]}),e.jsx("button",{type:"button",className:"ft-linksw-del","aria-label":`Remove saved background ${Xe(s.source)}`,
onClick:o,children:"×"})]})}),Tn=G.memo(function({settings:s,patch:n,spotifySrc:i,onOpenSettings:o}){const l=s.musicMode===
"spotify"?"spotify":"radio",d=s.radio&&typeof s.radio.index=="number"?s.radio:{index:0,playing:!1,volume:.7},m=te[Math.min(
Math.max(0,d.index),te.length-1)]||te[0],f=a.useRef(d);f.current=d;const p=a.useRef(l);p.current=l;const y=a.useRef(null),
[w,b]=a.useState(0),[S,g]=a.useState(""),N=a.useRef(0),[M,T]=a.useState(!1),C=a.useRef(null),[P,L]=a.useState(()=>{try{const h=window.
localStorage.getItem("sft:ft-player-pos.v1");if(h){const R=JSON.parse(h);if(R&&typeof R.x=="number"&&typeof R.y=="number")
return R}}catch{}return null}),j=a.useRef(null),D=(h,R)=>{const I=C.current,z=I?I.offsetWidth:320,r=I?I.offsetHeight:180;
return{x:Math.max(4,Math.min(Math.max(4,window.innerWidth-z-4),h)),y:Math.max(4,Math.min(Math.max(4,window.innerHeight-r-
4),R))}},A=h=>{var I;const R=(I=C.current)==null?void 0:I.getBoundingClientRect();R&&(j.current={dx:h.clientX-R.left,dy:h.
clientY-R.top},h.currentTarget.setPointerCapture(h.pointerId))},O=h=>{j.current&&L(D(h.clientX-j.current.dx,h.clientY-j.
current.dy))},W=()=>{j.current&&(j.current=null,L(h=>{if(!h)return h;const R=D(h.x,h.y);try{window.localStorage.setItem(
"sft:ft-player-pos.v1",JSON.stringify(R))}catch{}return R}))};a.useEffect(()=>{const h=()=>L(R=>R&&D(R.x,R.y));return window.
addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),a.useEffect(()=>{const h=new Audio;h.preload=
"none",y.current=h;const R=()=>{const r=h.currentTime||0;b(U=>Math.floor(U)===Math.floor(r)?U:r)},I=()=>{N.current=0,g(""),
n({radio:{...f.current,index:(f.current.index+1)%te.length,playing:!0}})},z=()=>{!y.current||y.current.dataset.track!==m.
id||(N.current+=1,N.current>=te.length?(g("Radio tracks cannot load on this connection right now."),n({radio:{...f.current,
playing:!1}})):(g("That track could not load - skipped it."),n({radio:{...f.current,index:(f.current.index+1)%te.length,
playing:!0}})))};return h.addEventListener("timeupdate",R),h.addEventListener("ended",I),h.addEventListener("error",z),()=>{
h.pause(),h.removeEventListener("timeupdate",R),h.removeEventListener("ended",I),h.removeEventListener("error",z),y.current=
null}},[]),a.useEffect(()=>{const h=y.current;if(!h)return;const R=l==="radio"&&d.playing;h.dataset.track!==m.id&&(R||h.
dataset.track)&&(h.dataset.track=m.id,h.src=m.url,h.preload="auto",N.current=0,b(0))},[m.id,l,d.playing]),a.useEffect(()=>{
const h=y.current;h&&(h.volume=d.volume,l==="radio"&&d.playing?h.play().catch(()=>{}):h.pause())},[l,d.playing,d.volume,
m.id]),a.useEffect(()=>{const h=()=>{const R=y.current;R&&p.current==="radio"&&f.current.playing&&R.paused&&R.play().catch(
()=>{})};return window.addEventListener("pointerdown",h),()=>window.removeEventListener("pointerdown",h)},[]),a.useEffect(
()=>{l==="spotify"&&f.current.playing&&n({radio:{...f.current,playing:!1}})},[l]);const _=h=>{const R=y.current;if(!R)return;
const I=h.currentTarget.getBoundingClientRect(),z=Math.min(1,Math.max(0,(h.clientX-I.left)/I.width)),r=Number.isFinite(R.
duration)&&R.duration>0?R.duration:m.seconds;R.currentTime=z*r,b(R.currentTime)},E=m.seconds,v=E>0?Math.min(100,w/E*100):
0;return e.jsxs("div",{ref:C,className:`ft-player ${M?"is-mini":""}`,style:P?{left:P.x,top:P.y,right:"auto",bottom:"auto"}:
void 0,"data-testid":"music-player",children:[e.jsxs("span",{className:"ft-player-head",title:"Drag to move",onPointerDown:A,
onPointerMove:O,onPointerUp:W,onPointerCancel:W,children:[e.jsx(se,{d:"M9 6h.01|M15 6h.01|M9 12h.01|M15 12h.01|M9 18h.01\
|M15 18h.01"}),e.jsxs("span",{className:"ft-player-mode",children:[e.jsx("button",{type:"button",className:`ft-player-mo\
debtn ${l==="radio"?"is-active":""}`,onPointerDown:h=>h.stopPropagation(),onClick:()=>n({musicMode:"radio"}),children:"F\
ocus radio"}),e.jsx("button",{type:"button",className:`ft-player-modebtn ${l==="spotify"?"is-active":""}`,onPointerDown:h=>h.
stopPropagation(),onClick:()=>n({musicMode:"spotify"}),children:"Spotify"})]}),e.jsx("button",{type:"button",className:"\
ft-player-x","aria-label":M?"Expand player":"Minimize player",onPointerDown:h=>h.stopPropagation(),onClick:()=>T(h=>!h),
children:M?"❐":"–"}),e.jsx("button",{type:"button",className:"ft-player-x","aria-label":"Hide player",onPointerDown:h=>h.
stopPropagation(),onClick:()=>n({musicOpen:!1}),children:"×"})]}),M?e.jsx("div",{className:"ft-player-minrow",children:l===
"radio"?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"ft-player-play is-small","aria-label":d.playing?
"Pause radio":"Play radio",onClick:()=>n({radio:{...d,playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("s\
pan",{className:"ft-player-mintitle",children:m.title})]}):e.jsx("span",{className:"ft-player-mintitle",children:"Spotif\
y player"})}):null,l==="radio"?e.jsxs("div",{className:"ft-player-body",children:[e.jsxs("span",{className:"ft-player-ro\
w",children:[e.jsx("img",{className:"ft-player-cover",src:m.cover,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("span",
{className:"ft-player-meta",children:[e.jsx("span",{className:"ft-player-title",children:m.title}),e.jsxs("span",{className:"\
ft-player-artist",children:[m.artist," · instrumental lofi"]}),e.jsx("span",{className:"ft-player-bar",onClick:_,role:"\
slider","aria-label":"Track progress","aria-valuemin":0,"aria-valuemax":E,"aria-valuenow":Math.round(w),children:e.jsx("\
span",{style:{width:`${v}%`}})}),e.jsxs("span",{className:"ft-player-times",children:[le(w*1e3)," / ",le(E*1e3)]})]})]}),
e.jsxs("span",{className:"ft-player-controls",children:[e.jsx("button",{type:"button",className:"ft-player-btn","aria-la\
bel":"Previous track",onClick:()=>n({radio:{...d,index:(d.index-1+te.length)%te.length,playing:!0}}),children:"⏮"}),e.
jsx("button",{type:"button",className:"ft-player-play","aria-label":d.playing?"Pause":"Play",onClick:()=>n({radio:{...d,
playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-player-btn","aria-\
label":"Next track",onClick:()=>n({radio:{...d,index:(d.index+1)%te.length,playing:!0}}),children:"⏭"}),e.jsx("input",
{type:"range",className:"ft-player-vol",min:0,max:1,step:.05,value:d.volume,"aria-label":"Radio volume",onChange:h=>n({radio:{
...d,volume:parseFloat(h.target.value)}})})]}),S?e.jsx("span",{className:"ft-player-status",children:S}):null]}):e.jsx("\
div",{className:"ft-player-body",children:i?e.jsx("iframe",{className:"ft-player-iframe",src:i,width:"100%",height:"152",
frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"\
Spotify player"}):e.jsxs("span",{className:"ft-player-status",children:["Pick a Spotify playlist or paste a Spotify link\
 in Settings. ",e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:o,children:"Open settings"})]})})]})}),
Dn=G.memo(function({chip:s,panel:n,fullscreenSupported:i,onFullscreen:o,onTasks:l,onSettings:d,onMinimize:m,onPopout:f,onProfile:p}){
return e.jsxs("header",{className:"ft-topbar",children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),s?e.
jsx("span",{className:"ft-chip",title:"Today's completed focus time",children:s}):null,e.jsxs("span",{className:"ft-topb\
ar-actions",children:[i?e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.
jsx(se,{d:vn})}):null,e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"\
Open timer in its own window",onClick:f,children:e.jsx(se,{d:Nn})}),e.jsx("button",{type:"button",className:"ft-iconbtn",
"aria-label":"Minimize to a small timer",title:"Minimize to a small timer",onClick:m,children:e.jsx(se,{d:jn})}),e.jsx("\
button",{type:"button",className:`ft-iconbtn ${n==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"\
Profile and progress",onClick:p,children:e.jsx(se,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5\
s8 2.5 8 6.5"})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",
onClick:l,children:e.jsx(se,{d:wn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,
"aria-label":"Settings",onClick:d,children:e.jsx(se,{d:Sn})})]})]})}),On=G.memo(function({tasksState:s,setTasksState:n,week:i,
ready:o,savedMessage:l,onClose:d}){const[m,f]=a.useState(""),[p,y]=a.useState(1),w=s.tasks,b=Math.max(1,...i.map(g=>g.minutes)),
S=()=>{const g=m.trim();if(!g)return;const N={id:`t${Date.now()}`,title:g,est:p,done:0,completed:!1};n(M=>({tasks:[...M.
tasks,N],activeId:M.activeId||N.id})),f(""),y(1)};return e.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[
e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Tasks"}),e.jsx("button",{type:"button",className:"\
ft-sheet-close","aria-label":"Close tasks",onClick:d,children:e.jsx(se,{d:Gt})})]}),e.jsxs("div",{className:"ft-addtask",
children:[e.jsx("input",{value:m,placeholder:"What are you studying?",onChange:g=>f(g.target.value),onKeyDown:g=>{g.key===
"Enter"&&S()},maxLength:120}),e.jsxs("span",{className:"ft-stepper is-small",children:[e.jsx("button",{type:"button","ar\
ia-label":"Fewer pomodoros",onClick:()=>y(Math.max(1,p-1)),children:"-"}),e.jsxs("span",{className:"ft-stepper-value",children:[
p,e.jsx("em",{children:"est"})]}),e.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>y(Math.min(20,
p+1)),children:"+"})]}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:S,disabled:!o,children:"\
Add"})]}),w.length===0?e.jsx("p",{className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against i\
t, or just run the timer."}):null,e.jsx("ul",{className:"ft-tasklist",children:w.map(g=>e.jsxs("li",{className:`${g.id===
s.activeId?"is-active":""} ${g.completed?"is-done":""}`,children:[e.jsx("button",{type:"button",className:"ft-taskcheck",
"aria-label":g.completed?"Mark not done":"Mark done",onClick:()=>{g.completed||Bs(g.id),n(N=>({...N,tasks:N.tasks.map(M=>M.
id===g.id?{...M,completed:!M.completed}:M)}))},children:g.completed?"✓":""}),e.jsx("button",{type:"button",className:"\
ft-taskname",onClick:()=>n(N=>({...N,activeId:g.id})),children:g.title}),e.jsxs("span",{className:"ft-taskcount",children:[
g.done,"/",g.est]}),e.jsx("button",{type:"button",className:"ft-taskdel","aria-label":`Delete ${g.title}`,onClick:()=>n(
N=>({tasks:N.tasks.filter(M=>M.id!==g.id),activeId:N.activeId===g.id?null:N.activeId})),children:"×"})]},g.id))}),w.some(
g=>g.completed)?e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(g=>({...g,tasks:g.tasks.filter(
N=>!N.completed)})),children:"Clear completed"}):null,e.jsxs("div",{className:"ft-week",children:[e.jsx("h3",{children:"\
This week"}),e.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focus minutes by day: ${i.map(g=>`${g.label} ${g.
minutes}`).join(", ")}`,children:i.map((g,N)=>e.jsxs("span",{className:"ft-weekcol",children:[e.jsx("span",{className:"f\
t-weekbar",style:{height:`${Math.round(g.minutes/b*64)}px`}}),e.jsx("span",{className:"ft-weekday",children:g.label})]},
N))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});function Fn(){const[t,s]=a.useState(null),[,n]=a.useState(
0),i=a.useRef(null);a.useEffect(()=>{const f=new BroadcastChannel("sft-sync");i.current=f,f.onmessage=y=>{var w;((w=y.data)==
null?void 0:w.t)==="state"&&s(y.data)};const p=window.setInterval(()=>n(y=>y+1),500);return()=>{window.clearInterval(p),
f.close()}},[]);const o=f=>{var p;return(p=i.current)==null?void 0:p.postMessage({t:"cmd",cmd:f})};let l=t?t.remaining:0;
t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));const d=!t||Date.now()-t.at>4e3,m=t&&t.dur>0?Math.round(
(1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},
children:[e.jsx("div",{className:"ft-popout-phase",children:t?oe[t.phase]:"Study focus"}),e.jsx("div",{className:"ft-pop\
out-time",children:t?le(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar","aria-hidden":"true",children:e.jsx("span",{
style:{width:`${m}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[e.jsx("button",{type:"button",className:"ft\
-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pause":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.jsx("button",{type:"button",className:"ft-gh\
ost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),d?e.jsx("p",{className:"ft-popout-note",children:"Open the st\
udy timer in another tab to control it from here."}):null]})}const Un=G.memo(function({settings:s,patch:n,bgStatus:i,soundStatus:o,
lastBgSrcRef:l,lastSndSrcRef:d,resolveLinkBg:m,resolveCustomSound:f,uploadBg:p,uploadSound:y,previewAlarm:w,requestNotifications:b,
notificationsSupported:S,wakeLockSupported:g,onResetSettings:N,savedMessage:M,onClose:T,savedLinks:C,onSaveLink:P,onRemoveLink:L}){
const[j,D]=a.useState(""),[A,O]=a.useState(""),[W,_]=a.useState(""),[E,v]=a.useState(""),x=s.background,h=()=>{const r=j.
trim();r&&m(r).then(U=>{U&&(l.current=r,n({background:{kind:"link",source:r}}),C.some(X=>X.source===r)||P({id:`l${Date.now()}`,
source:r,kind:U.kind,thumb:U.kind==="image"?U.finalUrl:void 0,addedAt:Date.now()}),D(""))})},R=r=>{x.kind==="link"&&x.source===
r.source||m(r.source).then(U=>{U&&(l.current=r.source,n({background:{kind:"link",source:r.source}}))})},I=()=>{const r=A.
trim();bn(r)&&f(r).then(U=>{var X;U&&(d.current=r,n({alarmSound:"custom",customAlarm:{source:r,name:((X=r.split("/").pop())==
null?void 0:X.split("?")[0])||"Custom sound"}}))})},z=()=>{const r=W.trim();if(r){if(!Yt(r)){v("That is not a Spotify li\
nk. Copy a link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current player\
 is unchanged.");return}v(""),n({spotify:r,spotifyOpen:!0})}};return e.jsxs("aside",{className:"ft-sheet","aria-label":"\
Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Settings"}),e.jsx("button",{
type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:T,children:e.jsx(se,{d:Gt})})]}),e.jsxs("\
section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"ft-chips",children:fn.map(r=>e.jsxs("but\
ton",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:r.accent,font:r.font,background:{kind:r.bg.kind,id:r.bg.
id}}),children:[r.name," theme"]},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"\
ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",children:[un.map(r=>e.jsx("button",{type:"\
button",className:`ft-colorswatch ${s.accent.toLowerCase()===r.value?"is-active":""}`,style:{background:r.value},"aria-l\
abel":`${r.name} accent`,onClick:()=>n({accent:r.value})},r.id)),e.jsxs("label",{className:"ft-colorcustom",children:[e.
jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:r=>n(
{accent:r.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[
e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx("div",{className:"ft-chips",children:qt.map(r=>e.jsx("b\
utton",{type:"button",className:`ft-chipbtn ${s.font===r.id?"is-active":""}`,style:r.css==="inherit"?void 0:{fontFamily:r.
css},onClick:()=>n({font:r.id}),children:r.name},r.id))})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx(
"span",{className:"ft-field-label",children:"Clock style"}),e.jsx("div",{className:"ft-chips",children:[["ring","Ring"],
["bar","Bar"],["minimal","Minimal"]].map(([r,U])=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.clockStyle===r?
"is-active":""}`,onClick:()=>n({clockStyle:r}),children:U},r))})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[
e.jsx("span",{className:"ft-field-label",children:"Clock size"}),e.jsx("div",{className:"ft-chips",children:[["s","Small"],
["m","Medium"],["l","Large"]].map(([r,U])=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.clockSize===r?"is-act\
ive":""}`,onClick:()=>n({clockSize:r}),children:U},r))})]}),e.jsx(Z,{label:"Clock-only mode",hint:"Hides the mode tabs a\
nd buttons so only the clock shows. Drag the clock anywhere and resize it from its corner handle; use the round button u\
nder it to bring the controls back.",checked:s.clockOnly===!0,onChange:r=>n({clockOnly:r})}),e.jsx(Z,{label:"Cycle dots",
checked:s.showDots,onChange:r=>n({showDots:r})}),e.jsx(Z,{label:"Today's stats chip",checked:s.showChip,onChange:r=>n({showChip:r})}),
e.jsx(Z,{label:"Shortcut hints",checked:s.showHint,onChange:r=>n({showHint:r})})]}),e.jsxs("section",{children:[e.jsx("h\
3",{children:"Music"}),e.jsxs("div",{className:"ft-chips",children:[e.jsx("button",{type:"button",className:`ft-chipbtn ${s.
musicMode!=="spotify"?"is-active":""}`,onClick:()=>n({musicMode:"radio",musicOpen:!0}),children:"Focus radio"}),e.jsx("b\
utton",{type:"button",className:`ft-chipbtn ${s.musicMode==="spotify"?"is-active":""}`,onClick:()=>n({musicMode:"spotify",
musicOpen:!0}),children:"Spotify"})]}),e.jsx("span",{className:"ft-field-hint",children:"Focus radio is built-in instrum\
ental lofi that streams from Pixabay (free license, no account needed). The mini player floats on the page - drag it any\
where by its top bar. It shows the current track and its cover live. The tracks are instrumentals, so there are no lyric\
s to display."}),e.jsx(Z,{label:"Show mini player",checked:s.musicOpen!==!1,onChange:r=>n({musicOpen:r})}),e.jsx("h4",{className:"\
ft-subhead",children:"Spotify playlists"}),e.jsx("div",{className:"ft-chips",children:Kt.map(r=>e.jsx("button",{type:"bu\
tton",className:`ft-chipbtn ${s.spotify===r.id?"is-active":""}`,onClick:()=>{v(""),n({spotify:r.id,spotifyOpen:!0,musicMode:"\
spotify",musicOpen:!0})},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",
{className:"ft-field-label",children:"Any Spotify link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste an ope\
n.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official \
player inside the mini player, with the album art shown by Spotify; this is not account sync. Spotify decides what plays\
: usually full songs when you sign in to Spotify inside the player, 30-second previews when signed out; podcast episodes\
 usually play in full. Live lyrics are not possible here: Spotify only shares the current song with connected apps, not \
with an embedded player."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:W,
placeholder:"https://open.spotify.com/playlist/…",onChange:r=>_(r.target.value),inputMode:"url"}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:z,children:"Use link"})]}),s.spotify?e.jsxs("span",{className:"ft-inrow",
children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({musicMode:"spotify",musicOpen:!0}),
children:"Show player"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1,
musicMode:"radio"}),children:"Remove player"})]}):null,E?e.jsx("span",{className:"ft-field-hint",children:E}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(Ae,{label:"Focus",value:s.focusMin,min:1,max:180,unit:"\
min",onChange:r=>n({focusMin:r})}),e.jsx(Ae,{label:"Short break",value:s.shortMin,min:1,max:60,unit:"min",onChange:r=>n(
{shortMin:r})}),e.jsx(Ae,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:r=>n({longMin:r})}),e.jsx(
Ae,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:r=>n({longEvery:r})}),e.jsx(Z,{label:"\
Auto-start breaks",checked:s.autoBreaks,onChange:r=>n({autoBreaks:r})}),e.jsx(Z,{label:"Auto-start focus",checked:s.autoFocus,
onChange:r=>n({autoFocus:r})}),S?e.jsx(Z,{label:"Browser notifications",hint:"Alerts when a session ends in another tab.",
checked:s.notifications,onChange:b}):null,g?e.jsx(Z,{label:"Keep screen awake",checked:s.keepAwake,onChange:r=>n({keepAwake:r})}):
null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"ft-chips",children:mn.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===r.id?"is-active":""}`,onClick:()=>{n({alarmSound:r.id}),
w(r.id)},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,"aria-label":"Alarm volume",onChange:r=>n(
{alarmVolume:parseFloat(r.target.value)})})]}),e.jsx(Z,{label:"Ring twice",checked:s.alarmRepeat,onChange:r=>n({alarmRepeat:r})}),
e.jsx(Z,{label:"Ticking while running",checked:s.tick,onChange:r=>n({tick:r})}),e.jsxs("div",{className:"ft-field is-sta\
cked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from a link"}),e.jsx("span",{className:"ft-f\
ield-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when the file's host allows cross-site loadin\
g; many do not. Uploading a file always works until the tab reloads; a saved link reloads each visit."}),e.jsxs("span",{
className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:A,placeholder:"https://…/sound.mp3",onChange:r=>O(
r.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:I,children:"Use \
link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Upload alarm sound file",className:"ft-fileinpu\
t",onChange:r=>{var U;return y((U=r.target.files)==null?void 0:U[0])}})]}),s.customAlarm?e.jsxs("span",{className:"ft-fi\
eld-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"ft-field-hint",children:o}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"ft-chips",children:Vt.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.ambient===r.id?"is-active":""}`,onClick:()=>n({ambient:r.id}),children:r.
name},r.id))}),s.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.ambientVolume,"aria-label":"Ambient\
 volume",onChange:r=>n({ambientVolume:parseFloat(r.target.value)})})]}):null]}),e.jsxs("section",{children:[e.jsx("h3",{
children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Scenes"}),e.jsx("div",{className:"ft-bggrid",children:nt.
map(r=>e.jsx(Ln,{scene:r,active:x.kind==="scene"&&x.id===r.id,onPick:()=>n({background:{kind:"scene",id:r.id}})},r.id))}),
e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Illustrated scenes are drawn to loop seamle\
ssly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay only when chosen.\
 While a scene loads, your previous background stays on screen (a still photo on your first visit); a scene that cannot \
load keeps it rather than going black or swapping to something else."}),e.jsx(Z,{label:"Animate backgrounds",hint:"Motio\
n starts by itself. Turn off to pause motion and save battery.",checked:s.bgAnimate!==!1,onChange:r=>n({bgAnimate:r})}),
e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:nn.map(r=>e.jsx(An,{id:r.
id,name:r.name,active:x.kind==="builtin"&&x.id===r.id,onPick:()=>n({background:{kind:"builtin",id:r.id}})},r.id))}),e.jsx(
"h4",{className:"ft-subhead",children:"Solid color"}),e.jsx("div",{className:"ft-bggrid",children:an.map(r=>e.jsx("butto\
n",{type:"button",className:`ft-bgswatch ${x.kind==="color"&&(x.id||"").toLowerCase()===r.id?"is-active":""}`,style:{background:r.
id},"aria-label":`${r.name} background color`,onClick:()=>n({background:{kind:"color",id:r.id}})},r.id))}),e.jsx(In,{color:x.
kind==="color"&&x.id?x.id:"#101418",onChange:r=>n({background:{kind:"color",id:r}})}),e.jsxs("div",{className:"ft-field \
is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),e.jsx("span",
{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image link (\
JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match its o\
wn shape, never stretched. Every link you add is saved under My saved backgrounds below and reloads each visit - paste o\
nce, keep forever. When a direct image load is blocked, the link you paste is fetched through a public image relay (wese\
rv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"\
ft-textinput",value:j,placeholder:"https://www.pinterest.com/pin/…",onChange:r=>D(r.target.value),inputMode:"url"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:h,children:"Use link"})]}),C.length?e.jsxs(e.Fragment,
{children:[e.jsx("h4",{className:"ft-subhead",children:"My saved backgrounds"}),e.jsx("div",{className:"ft-bggrid",children:C.
map(r=>e.jsx($n,{link:r,active:x.kind==="link"&&x.source===r.source,onPick:()=>R(r),onRemove:()=>L(r.id)},r.id))}),e.jsx(
"span",{className:"ft-field-hint",children:"Tap one to use it again, × to forget it. Saved on this device."})]}):null,e.
jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:["Upload\
 image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or video file",
className:"ft-fileinput",onChange:r=>{var U;return p((U=r.target.files)==null?void 0:U[0])}})]}),e.jsx("span",{className:"\
ft-field-hint",children:"Lasts until the tab reloads."})]}),i?e.jsx("span",{className:"ft-field-hint",children:i}):null]}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Imported imag\
e or video fit"}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:`ft-chipbtn ${s.
customFit!=="contain"?"is-active":""}`,onClick:()=>n({customFit:"cover"}),children:"Crop to fill"}),e.jsx("button",{type:"\
button",className:`ft-chipbtn ${s.customFit==="contain"?"is-active":""}`,onClick:()=>n({customFit:"contain"}),children:"\
Show whole image"})]}),e.jsx("span",{className:"ft-field-hint",children:"Crop fills the screen. Show whole image preserv\
es the full composition with plain dark space where needed. No blur-fill or stretching."})]}),e.jsx(Z,{label:"Sharpen im\
ported images",hint:"A local sharpen filter for images you paste or upload - it cannot add detail a small original never\
 had. Runs on your device only; images never leave this browser.",checked:s.enhance!==!1,onChange:r=>n({enhance:r})}),e.
jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"Darken background"}),e.jsx(
"input",{type:"range",min:.15,max:.85,step:.05,value:s.scrim,"aria-label":"Background darkness",onChange:r=>n({scrim:parseFloat(
r.target.value)})})]})]}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"\
Start over"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:N,children:"Reset settings"})]}),e.jsxs(
"p",{className:"ft-field-hint",children:["Your settings, saved backgrounds, tasks and stats stay in this browser. Link b\
ackgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is bloc\
ked; Spotify playback happens inside Spotify's official player; selected catalog videos and focus-radio tracks stream fr\
om Pixabay's CDN. ",M]})]})});function _n(){return typeof window<"u"&&/[?&]popout=1/.test(window.location.search)?e.jsx(
Fn,{}):e.jsx(Wn,{})}function Wn(){var jt;const[t,s,n]=be("ft-settings.v2",He),[i,o]=be("ft-clockfree.v1",null),l=a.useRef(
null),d=a.useRef(null),m=a.useCallback(c=>u=>{var F,q;const k=l.current;if(!k)return;const $=k.getBoundingClientRect();o(
xe=>{const Q=xe||{x:$.left,y:$.top,s:1};return d.current={mode:c,id:u.pointerId,sx:u.clientX,sy:u.clientY,ox:Q.x,oy:Q.y,
ss:Q.s},Q}),(q=(F=u.target).setPointerCapture)==null||q.call(F,u.pointerId),u.preventDefault()},[o]),f=a.useCallback(c=>{
const u=d.current;if(!(!u||u.id!==c.pointerId))if(u.mode==="move")o(k=>k&&{...k,x:Math.min(Math.max(u.ox+c.clientX-u.sx,
-40),window.innerWidth-60),y:Math.min(Math.max(u.oy+c.clientY-u.sy,0),window.innerHeight-60)});else{const k=l.current;if(!k)
return;const $=k.getBoundingClientRect(),F=$.left+$.width/2,q=$.top+$.height/2,xe=Math.max(30,Math.hypot(u.sx-F,u.sy-q)),
Q=Math.hypot(c.clientX-F,c.clientY-q);o(ie=>ie&&{...ie,s:Math.min(2.6,Math.max(.45,u.ss*(Q/xe)))})}},[o]),p=a.useCallback(
c=>{d.current&&d.current.id===c.pointerId&&(d.current=null)},[]),[y,w,b]=be("ft-tasks.v1",{tasks:[],activeId:null}),[S,g,
N]=be("ft-stats.v1",{days:{}}),[M,T,C]=be("ft-session.v1",null),[P,L]=be("ft-links.v1",[]),j=a.useCallback(c=>L(u=>[c,...u.
filter(k=>k.source!==c.source)].slice(0,24)),[L]),D=a.useCallback(c=>L(u=>u.filter(k=>k.id!==c)),[L]),A=a.useMemo(()=>({
focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,t.longMin]),[O,W]=a.useState("focu\
s"),[_,E]=a.useState(!1),[v,x]=a.useState(A.focus),[h,R]=a.useState(0),[I,z]=a.useState("none"),[r,U]=a.useState(!1),X=a.
useRef(0),me=a.useRef(!1);me.current=_;const H=a.useRef(O);H.current=O;const pe=a.useRef(v);pe.current=v;const at=a.useRef(
t.accent);at.current=t.accent;const[Ht,it]=a.useState(null),[Zt,Xt]=a.useState(null),[Jt,$e]=a.useState(null),[Qt,ce]=a.
useState(""),[Te,ot]=a.useState(null),[es,ne]=a.useState(""),Y=a.useRef(null),de=a.useRef(null),Me=a.useRef(null),rt=a.useCallback(
async c=>{ce("Loading background…");try{const u=c.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(u)&&!/pin(it)?\./i.test(
u))return it(q=>(q&&q.url.startsWith("blob:")&&URL.revokeObjectURL(q.url),{url:u,kind:"video"})),ce("Background applied."),
{kind:"video",finalUrl:u};const{blob:k,finalUrl:$}=await kn(c),F=k.type.startsWith("video/")?"video":"image";return it(q=>(q&&
q.url.startsWith("blob:")&&URL.revokeObjectURL(q.url),{url:URL.createObjectURL(k),kind:F})),ce("Background applied."),{kind:F,
finalUrl:$}}catch(u){const k=u instanceof Error&&u.message==="short pin link"?"Short pin.it links cannot be resolved her\
e. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background is unchanged.":"Coul\
d not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct image link, or uplo\
ad the image below. Your previous background is unchanged.";return ce(k),!1}},[]),lt=a.useCallback(async c=>{ne("Loading\
 sound…");try{const u=await Qe(c);if(!/^audio\//.test(u.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(c))throw new Error(
"not audio");return ot(k=>(k&&URL.revokeObjectURL(k),URL.createObjectURL(u))),ne("Sound saved. It will ring when a sessi\
on ends."),!0}catch{return ne("That link blocks cross-site loading. Download the sound to your device and upload it inst\
ead. Your previous sound is unchanged."),!1}},[]),De=a.useRef(""),Oe=a.useRef("");a.useEffect(()=>{n.ready&&t.background.
kind==="link"&&t.background.source&&t.background.source!==De.current&&(De.current=t.background.source,rt(t.background.source))},
[n.ready,t.background]),a.useEffect(()=>{var u;if(!n.ready)return;const c=((u=t.customAlarm)==null?void 0:u.source)||"";
t.alarmSound==="custom"&&c&&c!==Oe.current&&(Oe.current=c,lt(c))},[n.ready,t.alarmSound,t.customAlarm]);const ct=a.useRef(
!1);a.useEffect(()=>{var c;!n.ready||ct.current||(ct.current=!0,t.background.kind==="upload"&&(B({background:{kind:"colo\
r",id:"#101418"}}),ce("Your uploaded image resets when the tab reloads. Upload it again, or save a link instead.")),!((c=
t.customAlarm)!=null&&c.source)&&t.alarmSound==="custom"&&(B({alarmSound:"bell"}),ne("Your uploaded sound resets when th\
e tab reloads. Upload it again, or save a link instead.")))},[n.ready]),a.useEffect(()=>{n.ready&&(!t.accent||!t.font||!t.
clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||typeof t.bgAnimate!=
"boolean")&&s(c=>({...He,...c}))},[n.ready]),a.useEffect(()=>{if(!n.ready)return;const c=t.background;c.kind==="gradient"?
B({background:{kind:"color",id:{dusk:"#3b2f4a",moss:"#0f2e25",ink:"#101418",dawn:"#4a2f3d"}[c.id||""]||"#101418"}}):c.kind===
"animated"&&B({background:{kind:"builtin",id:"rain"}})},[n.ready,t.background]),a.useEffect(()=>{if(n.ready)try{t.spotify&&
!window.localStorage.getItem("sft:ft-musicmig.v1")&&(window.localStorage.setItem("sft:ft-musicmig.v1","1"),B({musicMode:"\
spotify",musicOpen:t.spotifyOpen!==!1}))}catch{}},[n.ready]);const ae=t.background;a.useEffect(()=>{let c=!0;if(n.ready){
if(ae.kind==="builtin"){const u=ae.id&&It[ae.id]?ae.id:"rain";Ye[u]?$e(Ye[u]):($e(null),It[u]().then(k=>{Ye[u]=k.default,
c&&$e(k.default)}).catch(()=>{}))}return()=>{c=!1}}},[n.ready,ae.kind,ae.id]);const dt=a.useRef(!1),J=a.useCallback(c=>{
C.ready&&T({phase:c.phase,running:c.running,endAt:c.endAt||0,remainingMs:c.remainingMs,cycleCount:c.cycleCount})},[C.ready]);
a.useEffect(()=>{if(!C.ready||!n.ready||dt.current||(dt.current=!0,!M))return;const c=M.phase==="short"||M.phase==="long"?
M.phase:"focus";if(W(c),R(M.cycleCount||0),M.running&&M.endAt>Date.now()+500)X.current=M.endAt,x(M.endAt-Date.now()),E(!0);else if(M.
running)x(K.current[c]),E(!1);else{const u=typeof M.remainingMs=="number"&&M.remainingMs>0?Math.min(M.remainingMs,K.current[c]):
K.current[c];x(u),E(!1)}},[C.ready,n.ready]);const he=a.useRef({}),K=a.useRef(A);K.current=A;const ut=a.useCallback(c=>{
const u=H.current;let k="focus",$=h;if(u==="focus"){if($=c?h:h+1,R($),k=$%Math.max(1,t.longEvery)===0&&$>0?"long":"short",
!c){const q=Ne(),xe=S.days[q]||{focusSec:0,sessions:0};g({days:{...S.days,[q]:{focusSec:xe.focusSec+Math.round(K.current.
focus/1e3),sessions:xe.sessions+1}}}),y.activeId&&w(Q=>({...Q,tasks:Q.tasks.map(ie=>ie.id===Q.activeId?{...ie,done:ie.done+
1}:ie)}))}}else k="focus";if(t.alarmSound==="custom"&&Y.current)try{Y.current.currentTime=0,Y.current.volume=t.alarmVolume,
Y.current.play().catch(()=>Se("bell",t.alarmVolume,t.alarmRepeat))}catch{Se("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound===
"custom"?Se("bell",t.alarmVolume,t.alarmRepeat):Se(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${oe[u]} finished`,{body:k==="focus"?"Time to focus.":`Ti\
me for a ${oe[k].toLowerCase()}.`})}catch{}delete he.current[u],W(k),x(K.current[k]);const F=k==="focus"?t.autoFocus:t.autoBreaks;
F?(X.current=Date.now()+K.current[k],E(!0)):E(!1),J({phase:k,running:F,endAt:F?Date.now()+K.current[k]:0,remainingMs:K.current[k],
cycleCount:$})},[h,t,S,g,w,J]),Ce=a.useRef(ut);Ce.current=ut,a.useEffect(()=>{if(!_)return;const c=window.setInterval(()=>{
const u=X.current-Date.now();u<=0?Ce.current(!1):x(k=>Math.ceil(k/1e3)!==Math.ceil(u/1e3)?u:k)},250);return()=>window.clearInterval(
c)},[_]);const ft=a.useRef(A),mt=a.useRef(!1);a.useEffect(()=>{const c=ft.current;if(ft.current=A,!!n.ready){if(!mt.current){
mt.current=!0;return}c.focus===A.focus&&c.short===A.short&&c.long===A.long||me.current||(delete he.current[H.current],x(
A[H.current]))}},[A,n.ready]);const pt=a.useRef(0);a.useEffect(()=>{if(!_||!t.tick)return;const c=window.setInterval(()=>{
const u=Math.ceil((X.current-Date.now())/1e3);u!==pt.current&&(pt.current=u,pn(t.alarmVolume))},250);return()=>window.clearInterval(
c)},[_,t.tick,t.alarmVolume]),a.useEffect(()=>{document.title=`${le(v)} - ${oe[O]} - Study focus timer`},[v,O]),a.useEffect(
()=>{let c=0;const u=()=>{de.current&&(de.current(),de.current=null),t.ambient!=="none"&&(de.current=xn(t.ambient,t.ambientVolume))};
return t.ambient!=="none"&&!Dt?(Dt=!0,c=window.setTimeout(u,1500)):u(),()=>{window.clearTimeout(c),de.current&&(de.current(),
de.current=null)}},[t.ambient,t.ambientVolume]),a.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let c=!1;
const u=()=>{navigator.wakeLock.request("screen").then($=>{c||(Me.current=$)}).catch(()=>{})};u();const k=()=>{document.
visibilityState==="visible"&&u()};return document.addEventListener("visibilitychange",k),()=>{if(c=!0,document.removeEventListener(
"visibilitychange",k),Me.current){try{Me.current.release()}catch{}Me.current=null}}},[t.keepAwake]),a.useEffect(()=>{Te?
(Y.current=new Audio(Te),Y.current.preload="auto"):Y.current=null},[Te]);const ht=a.useRef(()=>{}),gt=a.useRef(()=>{}),yt=a.
useRef(()=>{}),ge=a.useCallback(()=>{if(Pe(),Y.current)try{Y.current.pause(),Y.current.currentTime=0}catch{}X.current=Date.
now()+pe.current,E(!0),J({phase:H.current,running:!0,endAt:X.current,remainingMs:pe.current,cycleCount:h})},[J,h]),ye=a.
useCallback(()=>{E(!1),J({phase:H.current,running:!1,remainingMs:pe.current,cycleCount:h})},[J,h]),ke=a.useCallback(()=>{
delete he.current[H.current],E(!1),x(K.current[H.current]),J({phase:H.current,running:!1,remainingMs:K.current[H.current],
cycleCount:h})},[J,h]),Ee=a.useCallback(()=>{Ce.current(!0)},[]);ht.current=ge,gt.current=ye,yt.current=ke;const ve=a.useCallback(
c=>{const u=H.current;if(c===u)return;const k=me.current?Math.max(0,X.current-Date.now()):pe.current;k>0&&k<K.current[u]?
he.current[u]=k:delete he.current[u];const $=he.current[c],F=typeof $=="number"&&$>0?Math.min($,K.current[c]):K.current[c];
E(!1),W(c),x(F),J({phase:c,running:!1,remainingMs:F,cycleCount:h})},[J,h]),Fe=a.useCallback(()=>{document.fullscreenElement?
document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[xt,bt]=a.useState(
null),ts=a.useCallback(()=>{const c=window.documentPictureInPicture;if(c!=null&&c.requestWindow){c.requestWindow({width:320,
height:200}).then(u=>{for(const k of Array.from(document.styleSheets))try{const $=Array.from(k.cssRules||[]).map(q=>q.cssText).
join(`
`),F=u.document.createElement("style");F.textContent=$,u.document.head.appendChild(F)}catch{const $=k.href;if($){const F=u.
document.createElement("link");F.rel="stylesheet",F.href=$,u.document.head.appendChild(F)}}u.document.body.className="ft\
-pip-body",u.addEventListener("pagehide",()=>bt(null)),bt(u)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);a.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const c=new BroadcastChannel(
"sft-sync"),u=()=>c.postMessage({t:"state",phase:H.current,remaining:pe.current,running:me.current,dur:K.current[H.current],
accent:at.current,at:Date.now()});u();const k=window.setInterval(u,1e3);return c.onmessage=$=>{const F=$.data;(F==null?void 0:
F.t)==="cmd"&&(F.cmd==="toggle"?me.current?gt.current():ht.current():F.cmd==="reset"?yt.current():F.cmd==="skip"&&Ce.current(
!0))},()=>{window.clearInterval(k),c.close()}},[]);const ss=a.useCallback(()=>{z("none"),U(!0)},[]),ns=I==="tasks",as=I===
"settings",is=a.useCallback(()=>z(c=>c==="tasks"?"none":"tasks"),[]),os=a.useCallback(()=>z(c=>c==="settings"?"none":"se\
ttings"),[]),rs=a.useCallback(()=>z("settings"),[]),ls=a.useCallback(()=>z(c=>c==="profile"?"none":"profile"),[]);a.useEffect(
()=>{const c=u=>{var $;const k=($=u.target)==null?void 0:$.tagName;k==="INPUT"||k==="TEXTAREA"||k==="SELECT"||(u.code===
"Space"?(u.preventDefault(),me.current?ye():ge()):u.key==="r"||u.key==="R"?ke():u.key==="s"||u.key==="S"?Ee():u.key==="1"?
ve("focus"):u.key==="2"?ve("short"):u.key==="3"?ve("long"):u.key==="m"||u.key==="M"?U(F=>!F):(u.key==="f"||u.key==="F")&&
Fe())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[ge,ye,ke,Ee,ve,Fe]);const B=a.
useCallback(c=>s(u=>({...u,...c})),[s]),cs=a.useCallback(c=>{if(!c)return;const u=c.type.startsWith("video/");if(!u&&!c.
type.startsWith("image/")){ce("That file is not an image or video.");return}Xt(k=>(k&&URL.revokeObjectURL(k.url),{url:URL.
createObjectURL(c),kind:u?"video":"image"})),B({background:{kind:"upload"}}),ce("Background applied for this visit. Use \
a link to keep it across visits.")},[B]),ds=a.useCallback(c=>{if(c){if(!c.type.startsWith("audio/")){ne("That file is no\
t an audio file.");return}ot(u=>(u&&URL.revokeObjectURL(u),URL.createObjectURL(c))),B({alarmSound:"custom",customAlarm:{
source:"",name:c.name}}),ne(`Using "${c.name}" for this visit. Use a link to keep it across visits.`)}},[B]),us=a.useCallback(
c=>{var u;if(c==="custom"){if(Y.current)try{Y.current.currentTime=0,Y.current.volume=t.alarmVolume,Y.current.play().catch(
()=>ne("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else ne((u=t.
customAlarm)!=null&&u.source?"Still loading your sound.":"Add a link or upload a file first.");return}Se(c,t.alarmVolume,
!1)},[t.alarmVolume,t.customAlarm]),fs=a.useCallback(c=>{if(!c){B({notifications:!1});return}if(!(typeof Notification>"u"))
try{const u=Notification.requestPermission();u&&typeof u.then=="function"?u.then(k=>B({notifications:k==="granted"})).catch(
()=>B({notifications:!1})):B({notifications:Notification.permission==="granted"})}catch{B({notifications:!1})}},[B]),ms=a.
useCallback(()=>s(He),[s]),ps=a.useMemo(()=>({focusSec:0,sessions:0}),[]),Re=S.days[Ne()]||ps,Ue=a.useMemo(()=>{var k,$;
let c=0;const u=new Date;for(((k=S.days[Ne(u)])==null?void 0:k.sessions)>0||u.setDate(u.getDate()-1);(($=S.days[Ne(u)])==
null?void 0:$.sessions)>0;)c++,u.setDate(u.getDate()-1);return c},[S.days]),hs=a.useMemo(()=>{const c=[];for(let u=6;u>=
0;u--){const k=new Date;k.setDate(k.getDate()-u);const $=S.days[Ne(k)];c.push({label:`${"SMTWTFS"[k.getDay()]}`,minutes:Math.
round((($==null?void 0:$.focusSec)||0)/60)})}return c},[S.days]),gs=a.useMemo(()=>t.showChip?`${Re.sessions} ${Re.sessions===
1?"session":"sessions"} · ${Math.round(Re.focusSec/60)} min${Ue>1?` · ${Ue}-day streak`:""}`:null,[t.showChip,Re,Ue]),
ys=n.ready&&b.ready&&N.ready,xs=((jt=qt.find(c=>c.id===t.font))==null?void 0:jt.css)||"inherit",_e=1-v/Math.max(1,A[O]),
We=118,kt=2*Math.PI*We,bs=typeof Notification<"u",ks=typeof navigator<"u"&&"wakeLock"in navigator,vs=typeof document<"u"&&
document.fullscreenEnabled,vt=y.tasks.find(c=>c.id===y.activeId)||null,js=t.spotify?Yt(t.spotify):null;return e.jsxs("di\
v",{className:`ft-root ${r?"is-compact":""}`,style:{"--ft-accent":t.accent,"--ft-font":xs},children:[e.jsx(En,{kind:ae.kind,
id:ae.id,scrim:t.scrim,builtinSrc:Jt,linkBg:Ht,uploadBg:Zt,paused:r,animate:t.bgAnimate!==!1,customFit:t.customFit||"cov\
er",enhance:t.enhance!==!1}),e.jsx(Dn,{chip:gs,panel:I,fullscreenSupported:vs,onFullscreen:Fe,onTasks:is,onSettings:os,onMinimize:ss,
onPopout:ts,onProfile:ls}),e.jsxs("main",{ref:l,className:`ft-center ${t.clockOnly===!0?"is-clockonly":""}`,style:t.clockOnly===
!0&&i?{left:i.x,top:i.y,transform:`scale(${i.s})`,transformOrigin:"top left"}:void 0,onPointerMove:t.clockOnly===!0?f:void 0,
onPointerUp:t.clockOnly===!0?p:void 0,onPointerCancel:t.clockOnly===!0?p:void 0,children:[t.clockOnly!==!0?e.jsx("nav",{
className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(c=>e.jsx("button",{type:"button",className:`\
ft-mode ${O===c?"is-active":""}`,onClick:()=>ve(c),children:oe[c]},c))}):null,t.clockOnly!==!0&&t.showDots?e.jsx("div",{
className:"ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((c,u)=>e.jsx(
"span",{className:`ft-dot ${u<h%Math.max(1,t.longEvery)||h>0&&h%Math.max(1,t.longEvery)===0&&O!=="focus"?"is-done":""}`},
u))}):null,e.jsxs("div",{className:`ft-clock is-${t.clockSize} ${t.clockOnly===!0?"is-free":""}`,role:"timer","aria-live":"\
off","aria-label":`${oe[O]} timer, ${le(v)} remaining`,onPointerDown:t.clockOnly===!0?m("move"):void 0,title:t.clockOnly===
!0?"Drag to move":void 0,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-h\
idden":"true",children:[e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:We}),e.jsx("circle",{className:"ft\
-ring-fill",cx:"130",cy:"130",r:We,strokeDasharray:kt,strokeDashoffset:kt*(1-_e)})]}):null,e.jsxs("div",{className:"ft-t\
ime-wrap",children:[e.jsx("div",{className:"ft-time",children:le(v)}),e.jsx("div",{className:"ft-taskline",children:vt?vt.
title:O==="focus"?"Pick a task or just focus":"Rest up"})]})]}),t.clockOnly===!0?e.jsxs("div",{className:"ft-clockonly-t\
ools",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact ft-clockonly-exit","aria-label":"Show timer\
 controls",onPointerDown:c=>c.stopPropagation(),onClick:()=>B({clockOnly:!1}),children:"Show controls"}),e.jsx("button",
{type:"button",className:"ft-clock-resize","aria-label":"Drag to resize the clock",onPointerDown:m("resize"),children:"⤡"})]}):
null,t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(_e*100)}%`}})}):null,t.clockOnly!==!0?e.jsxs("div",{className:"ft-controls",children:[e.jsx("button",{type:"button",
className:"ft-primary",onClick:()=>_?ye():ge(),children:_?"Pause":v<A[O]?"Resume":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost",onClick:ke,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:Ee,children:"\
Skip"})]}):null,t.clockOnly!==!0&&t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R reset · S\
 skip · M minimize · F fullscreen"}):null]}),r?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-label":"Mi\
nimized timer",children:[e.jsx("span",{className:"ft-compactphase",children:oe[O]}),e.jsx("span",{className:"ft-compactt\
ime",children:le(v)}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":_?"Pause":"Start",onClick:()=>_?
ye():ge(),children:_?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>U(!1),children:"⤢"})]}):null,I==="profile"?e.jsx(Js,{onClose:()=>z("none")}):null,e.jsx(Zs,{}),ns?e.jsx(On,
{tasksState:y,setTasksState:w,week:hs,ready:ys,savedMessage:b.message||N.message||"",onClose:()=>z("none")}):null,as?e.jsx(
Un,{settings:t,patch:B,bgStatus:Qt,soundStatus:es,lastBgSrcRef:De,lastSndSrcRef:Oe,resolveLinkBg:rt,resolveCustomSound:lt,
uploadBg:cs,uploadSound:ds,previewAlarm:us,requestNotifications:fs,notificationsSupported:bs,wakeLockSupported:ks,onResetSettings:ms,
savedMessage:n.message||"",onClose:()=>z("none"),savedLinks:P,onSaveLink:j,onRemoveLink:D}):null,xt?ws.createPortal(e.jsxs(
"div",{className:"ft-pip",children:[e.jsx("div",{className:"ft-pip-phase",children:oe[O]}),e.jsx("div",{className:"ft-pi\
p-time",children:le(v)}),e.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(_e*100)}%`}})}),e.jsxs("div",{className:"ft-pip-btns",children:[e.jsx("button",{type:"button",className:"ft-primar\
y is-compact",onClick:()=>_?ye():ge(),children:_?"Pause":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:ke,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Ee,children:"\
Skip"})]})]}),xt.document.body):null,t.musicOpen!==!1?e.jsx(Tn,{settings:t,patch:B,spotifySrc:js,onOpenSettings:rs}):null]})}
Ss(document.getElementById("root")).render(e.jsx(_n,{}));
