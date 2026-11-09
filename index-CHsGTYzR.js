import{R as Y,j as e,r as a,a as Ss,c as Ns}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").
relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulep\
reload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName===
"LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&
(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const Ms={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function ee({x:t,y:s,r:n,fill:i}){const o=[];for(let l=0;l<10;l++){
const d=Math.PI/5*l-Math.PI/2,f=l%2===0?n:n*.45;o.push(`${(t+f*Math.cos(d)).toFixed(1)},${(s+f*Math.sin(d)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function Cs({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#8fa3d9"})]})}}function Es({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(ee,{x:14,y:22,r:4,fill:"\
#ffe9a8"}),e.jsx(ee,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(ee,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(ee,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(ee,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(ee,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function Rs({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(ee,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(ee,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function Ls({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
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
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function As({frame:t}){const s=Ms[t];return s?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const wt=Y.memo(function({spec:s,size:n=96}){return e.jsxs("svg",{width:n,
height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(Es,{aura:s.aura}),e.jsx(Cs,{base:s.base}),e.jsx(Rs,{eyes:s.eyes}),e.jsx(Ls,{hat:s.hat}),
e.jsx(As,{frame:s.frame})]})}),Is=2,Ps=25,$s=15;function St(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ts(t,s,n){var g,N,M;const i=t.days||{};let o=0,l=0,
d=0,f=0;const m=Object.keys(i).sort();for(const D of m){const C=i[D];C&&(o+=C.focusSec||0,l+=C.sessions||0,(C.focusSec||
0)>d&&(d=C.focusSec||0),(C.sessions||0)>0&&f++)}let p=0;const y=new Date;for((((g=i[St(y)])==null?void 0:g.sessions)||0)>
0||y.setDate(y.getDate()-1);(((N=i[St(y)])==null?void 0:N.sessions)||0)>0;)p++,y.setDate(y.getDate()-1);let w=0,k=0,S=null;
for(const D of m){if(!((((M=i[D])==null?void 0:M.sessions)||0)>0))continue;const C=new Date(D+"T12:00:00");S?k=Math.round(
(C.getTime()-S.getTime())/864e5)===1?k+1:1:k=1,k>w&&(w=k),S=C}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:p,bestStreak:w,bestDayMin:Math.round(d/60),activeDays:f}}function Ds(t){return t.totalFocusMin*Is+t.totalSessions*
Ps+t.totalTasksCompleted*$s}function ze(t){return 100+50*(t-1)}function Os(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=ze(s);)n-=ze(s),s++;const i=ze(s);return{level:s,xp:t,intoLevel:n,needed:i,progress:i>0?n/i:0}}const Nt=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function Fs(t){let s=Nt[0].name;for(const n of Nt)t>=n.level&&(s=n.name);return s}const Je=[{id:"none-hat",slot:"\
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
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function Us(t,s){return s>=
t.level}function _s(t){return Je.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const Ws=[{id:"moon",name:"\
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
`${s}h ${n}m`:`${s}h`}const zs="sft:ft-stats.v1",Ft="sft:ft-tasks.v1",Bs="sft:ft-session.v1",Ut="sft:ft-profile.v1",et="\
sft:ft-progress-ledger.v1";function tt(){const t=fe(et);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function _t(t){const s=tt();let n=!1;s.migratedAt===
null&&(s.migratedAt=Date.now(),n=!0);for(const i of t.tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in s.tasks)&&
(s.tasks[i.id]=Date.now(),n=!0);if(n)try{window.localStorage.setItem(et,JSON.stringify(s))}catch{}return s}function Et(){
const t=fe(Ft)||{tasks:[]};_t(t)}function qs(t){if(!t)return;const s=tt();let n=!1;if(s.migratedAt===null&&(s.migratedAt=
Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.now(),n=!0),n)try{window.localStorage.setItem(et,JSON.stringify(s))}catch{}}
const Vs={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function fe(t){
try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{return null}}function Ks(){const t=fe(Ut);return{
...Vs,...t||{}}}function Rt(t){try{window.localStorage.setItem(Ut,JSON.stringify(t))}catch{}}function Gs(){const t=fe("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function Lt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function Wt(){const t=fe(Bs);return!!(t&&t.running&&t.phase==="focu\
s")}function Ys(t){const[s,n]=a.useState(0),[i,o]=a.useState(()=>Ks()),[l,d]=a.useState(()=>Gs()),[f,m]=a.useState("");a.
useEffect(()=>{const $=()=>n(I=>I+1),R=window.setInterval($,2e3);return window.addEventListener("focus",$),window.addEventListener(
"sft:progress",$),()=>{window.clearInterval(R),window.removeEventListener("focus",$),window.removeEventListener("sft:pro\
gress",$)}},[t]);const p=a.useMemo(()=>fe(zs)||{days:{}},[s]),y=a.useMemo(()=>fe(Ft)||{tasks:[],activeId:null},[s]),[w,k]=a.
useState(()=>tt());a.useEffect(()=>{k(_t(y))},[y]);const S=a.useMemo(()=>Ts(p,y,Object.keys(w.tasks).length),[p,y,w]),g=a.
useMemo(()=>Os(Ds(S)),[S]),N=a.useCallback($=>{o(R=>{const I={...R,...$,updatedAt:Date.now()};try{Rt(I)}catch{m("This br\
owser blocked saving. Profile changes last until the tab closes.")}return I})},[]),M=a.useCallback($=>{o(()=>{try{Rt($)}catch{}
return $})},[]),D=a.useCallback($=>{d(R=>{const I={...R,seenAchievements:Array.from(new Set([...R.seenAchievements,...$]))};
return Lt(I),I})},[]),C=a.useCallback($=>{d(R=>{const I={...R,celebratedLevel:Math.max(R.celebratedLevel,$)};return Lt(I),
I})},[]);return{ready:!0,snapshot:S,levelInfo:g,profile:i,setProfile:N,replaceProfile:M,meta:l,markAchievementsSeen:D,celebrateLevel:C,
storageMessage:f}}const Ie={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},V=!!(Ie.apiKey&&Ie.databaseURL&&
Ie.authDomain),Be="10.14.1",qe={app:`https://www.gstatic.com/firebasejs/${Be}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${Be}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Be}/firebase-database.js`};let je=null;
function Ve(t){return new Function("u","return import(u)")(t)}function ue(){if(!je){const t=Promise.all([Ve(qe.app),Ve(qe.
auth),Ve(qe.database)]).then(([s,n,i])=>{const o=s.initializeApp(Ie);return{auth:n.getAuth(o),db:i.getDatabase(o),authApi:n,
dbApi:i}});t.catch(()=>{je===t&&(je=null)}),je=t}return je}function Hs(){const[t,s]=a.useState(V?"loading":"off"),[n,i]=a.
useState(null),[o,l]=a.useState("");a.useEffect(()=>{if(!V)return;let m,p=!0;return ue().then(({auth:y,authApi:w})=>{p&&
(m=w.onAuthStateChanged(y,k=>{p&&(k?(i({uid:k.uid,name:k.displayName||(k.isAnonymous?"Guest":"Scholar"),email:k.email||null,
anonymous:!!k.isAnonymous}),s("signed-in")):(i(null),s("signed-out")))}))}).catch(()=>{p&&(s("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{p=!1,m&&m()}},[]);const d=a.useCallback(()=>{
V&&(l(""),ue().then(({auth:m,authApi:p})=>p.signInWithPopup(m,new p.GoogleAuthProvider)).catch(m=>{m&&(m.code==="auth/po\
pup-closed-by-user"||m.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),f=a.useCallback(()=>{V&&ue().then(({auth:m,authApi:p})=>p.signOut(m)).catch(()=>{})},[]);return{status:t,
user:n,error:o,signInWithGoogle:d,signOut:f}}async function Zs(t){if(!V)return null;const{db:s,dbApi:n}=await ue(),i=await n.
get(n.child(n.ref(s),`profiles/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function At(t,s){if(!V)return;const{db:n,dbApi:i}=await ue();
await i.set(i.ref(n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,
updatedAt:s.updatedAt})}function zt(t,s){const[n,i]=a.useState(null),[o,l]=a.useState(V?"connecting":"off"),d=a.useRef(t);
return d.current=t,a.useEffect(()=>{if(!V||!s){l("off"),i(null);return}let f=!0,m;return l("connecting"),(async()=>{try{
const{auth:p,db:y,authApi:w,dbApi:k}=await ue();let S=p.currentUser;if(S||(S=(await w.signInAnonymously(p)).user),!f)return;
const g=k.ref(y,`presence/${S.uid}`),N=()=>k.set(g,{studying:d.current,ts:Date.now()}).catch(()=>{});await N(),k.onDisconnect(
g).remove().catch(()=>{});const M=window.setInterval(N,3e4),D=k.onValue(k.ref(y,"presence"),C=>{if(!f)return;const $=Date.
now();let R=0;const I=C&&C.val?C.val():{};for(const _ of Object.keys(I||{})){const P=I[_];P&&P.studying===!0&&typeof P.ts==
"number"&&$-P.ts<9e4&&R++}i(R),l("live")},()=>{f&&l("error")});m=()=>{window.clearInterval(M),D&&D(),k.remove(g).catch(()=>{})}}catch{
f&&l("error")}})(),()=>{f=!1,m&&m()}},[s]),a.useEffect(()=>{!V||!s||o!=="live"||ue().then(({auth:f,db:m,dbApi:p})=>{const y=f.
currentUser;y&&p.set(p.ref(m,`presence/${y.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,
status:o}}function Xs(){const[t,s]=a.useState(!1);return a.useEffect(()=>{Et();const n=()=>Et(),i=window.setInterval(n,15e3);
if(!V)return()=>window.clearInterval(i);const o=()=>s(Wt());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(i)}},[]),zt(t,V),null}const Js=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],Qs=Y.memo(function({onClose:s}){const n=Ys(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:d,replaceProfile:f,meta:m}=n,p=Hs(),[y,w]=a.useState(!1);a.useEffect(()=>{if(!V)return;const b=()=>w(Wt());b();
const x=window.setInterval(b,5e3);return()=>window.clearInterval(x)},[]);const k=zt(y,V),[S,g]=a.useState(!1),[N,M]=a.useState(
""),[D,C]=a.useState(""),$=a.useRef("");a.useEffect(()=>{if(!V||p.status!=="signed-in"||!p.user||p.user.anonymous)return;
const b=p.user.uid;$.current!==b&&($.current=b,Zs(b).then(x=>{x&&x.updatedAt>l.updatedAt?(f(x),C("Profile synced from yo\
ur account.")):At(b,l).then(()=>C("Profile saved to your account.")).catch(()=>C("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>C("Could not sync right now; your local profile is safe.")))},[p.status,p.user]),a.useEffect(
()=>{if(!V||p.status!=="signed-in"||!p.user||p.user.anonymous||!l.updatedAt)return;const b=window.setTimeout(()=>{At(p.user.
uid,l).catch(()=>C("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(b)},[l.
updatedAt,p.status,p.user]);const R=o.level,I=Fs(R),P=a.useMemo(()=>Mt.filter(b=>b.unlocked(i)),[i]).filter(b=>!m.seenAchievements.
includes(b.id)),F=R>m.celebratedLevel,W=_s(R),L=()=>{const b=N.trim().slice(0,24);d({name:b}),g(!1)},j=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:s,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(wt,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[S?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:N,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:b=>M(b.target.value),onKeyDown:b=>{b.key==="E\
nter"&&L(),b.key==="Escape"&&g(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:L,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{M(l.name),g(!0)},children:[
j," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:I}),k.status==="live"&&k.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",k.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${R}`,children:["Lv ",R]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${R}, ${o.intoLevel} of ${o.needed} experience toward level ${R+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),F?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",R," reached - ",I,"!",W.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>n.celebrateLevel(R),children:"Nice"})]}):null,P.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",P.map(b=>b.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>n.markAchievementsSeen(P.map(b=>b.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Ct(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Ct(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:Ws.map(b=>e.jsx("button",{type:"button",title:b.name,"aria-label":`Avatar ${b.name}`,
className:`pf-basebtn ${l.base===b.id?"is-active":""}`,onClick:()=>d({base:b.id}),children:e.jsx(wt,{spec:{...l,base:b.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},b.id))}),Js.map(({slot:b,label:x})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:x}),e.jsx("div",{className:"pf-gear",children:Je.filter(h=>h.
slot===b).map(h=>{const E=Us(h,R),A=l[b]===h.id||h.id.startsWith("none")&&!Je.some(z=>z.slot===b&&l[b]===z.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${A?"is-active":""} ${E?"":"is-locked"}`,title:E?h.name:`${h.name} - ${h.
hint}`,onClick:()=>{E&&d({[b]:h.id})},children:E?h.name:`🔒 ${h.name} · Lv ${h.level}`},h.id)})})]},b)),W.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",W[0].name," at level ",W[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:Mt.
map(b=>{const x=b.unlocked(i);return e.jsxs("li",{className:x?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:x?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:b.
name}),e.jsx("span",{children:b.desc})]})]},b.id)})}),e.jsx("h3",{children:"Account"}),V?e.jsxs(e.Fragment,{children:[p.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,p.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:p.signInWithGoogle,children:"Sign in with Google"}):null,p.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,p.status==="signed-in"&&p.user?e.jsx("div",{className:"\
pf-account",children:p.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:p.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[p.user.name,p.user.
email?` · ${p.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:p.signOut,children:"\
Sign out"})]})}):null,p.error?e.jsx("p",{className:"ft-field-hint",children:p.error}):null,D?e.jsx("p",{className:"ft-fi\
eld-hint",children:D}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),n.storageMessage?e.jsx("p",{className:"ft-field-hint",children:n.storageMessage}):null]})});
function be(t,s){const[n,i]=a.useState(s),[o,l]=a.useState(!1),[d,f]=a.useState("");a.useEffect(()=>{try{const p=window.
localStorage.getItem("sft:"+t);if(p!=null){const y=JSON.parse(p),w=s!==null&&typeof s=="object"&&!Array.isArray(s)&&y!==
null&&typeof y=="object"&&!Array.isArray(y)?{...s,...y}:y;i(w)}}catch{f("Saved data on this browser could not be read.")}
l(!0)},[t]);const m=a.useCallback(p=>{i(y=>{const w=typeof p=="function"?p(y):p;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(w))}catch{f("This browser blocked saving. Changes last until the tab closes.")}return w})},[t]);return[n,
m,{ready:o,message:d}]}const en={v2cat:["images/images/v2cat-0.txt","images/images/v2cat-1.txt"],longer:["images/images/\
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
talog-6.txt"]},Ke={};function st(t){return Ke[t]||(Ke[t]=Promise.all(en[t].map(async s=>{const n=await fetch(s);if(!n.ok)
throw Error("Image unavailable");return n.text()})).then(s=>"data:image/jpeg;base64,"+s.join("").replace(/\s/g,"")))}function Bt(t){
const[s,n]=a.useState("");return a.useEffect(()=>{let i=!0;return st(t).then(o=>{i&&n(o)}).catch(()=>{}),()=>{i=!1}},[t]),
s}const tn={rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk\
.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-oce\
an.jpg"},sn={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-des\
k.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-oc\
ean.jpg"},It=Object.fromEntries(Object.keys(tn).map(t=>[t,()=>st(t).then(s=>({default:s}))])),Pt=Object.fromEntries(Object.
keys(sn).map(t=>[t,()=>st("thumb-"+t).then(s=>({default:s}))])),Ge={},Ye={},He={focusMin:25,shortMin:5,longMin:15,longEvery:4,
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
f=(l+d)/2;if(l===d)return{h:0,s:0,l:f};const m=l-d,p=f>.5?m/(2-l-d):m/(l+d);let y=0;return l===n?y=(i-o)/m+(i<o?6:0):l===
i?y=(o-n)/m+2:y=(n-i)/m+4,{h:y*60,s:p,l:f}}function Ze(t,s,n){const i=o=>{const l=(o+t/30)%12,d=s*Math.min(n,1-n),f=n-d*
Math.max(-1,Math.min(l-3,9-l,1));return Math.round(f*255).toString(16).padStart(2,"0")};return`#${i(0)}${i(8)}${i(4)}`}function on(t){
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
er-garden-l.mp4","water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},qt=(t,s,n)=>`\
scenes/${cn[`${t}-${s}.${n}`]}`,dn=(t,s)=>qt(t.id,s,"jpg"),un=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"S\
ky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"\
Violet",value:"#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],Vt=[{id:"sans",name:"Sans",css:"system-ui, -apple-sy\
stem, 'Segoe UI', Roboto, sans-serif"},{id:"serif",name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"\
Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, \
sans-serif"}],fn=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",bg:{kind:"color",id:"#101418"}},{id:"dusk",name:"D\
usk",accent:"#ffcf99",font:"serif",bg:{kind:"color",id:"#3b2f4a"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",
bg:{kind:"color",id:"#0f2e25"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"color",id:"#4a2f3d"}}],mn=[
{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Wo\
odblock"},{id:"custom",name:"My sound"}],Kt=[{id:"none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"\
storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"\
forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",
name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"\
wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown n\
oise"},{id:"white",name:"White noise"}],Gt=[{id:"lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9\
xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",
name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"}],oe={focus:"Focus",short:"Short br\
eak",long:"Long break"};let we=null;function Pe(){return we||(we=new(window.AudioContext||window.webkitAudioContext)),we.
state==="suspended"&&we.resume(),we}function re(t,s,n){const i=t.createOscillator(),o=t.createGain();i.type=n.type||"sin\
e",i.frequency.value=n.freq,o.gain.setValueAtTime(1e-4,n.start),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),
n.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),i.connect(o),o.connect(s),i.start(n.start),i.stop(
n.start+n.dur+.05)}function Se(t,s,n){const i=Pe(),o=i.createGain();o.gain.value=s,o.connect(i.destination);const l=n?2:
1,d=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let f=0;f<l;f++){const m=i.currentTime+.02+f*(d+.35);if(t==="bell")[[660,.5],[
1320,.28],[1760,.14],[2240,.07]].forEach(([p,y])=>re(i,o,{freq:p,start:m,dur:2.2,gain:y}));else if(t==="chime")re(i,o,{freq:783.99,
start:m,dur:1.3,gain:.4}),re(i,o,{freq:1046.5,start:m+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,.42],[294,.24],[392,
.17],[523,.09]].forEach(([p,y])=>re(i,o,{freq:p,start:m,dur:3.4,gain:y}));else if(t==="beep")for(let p=0;p<3;p++)re(i,o,
{freq:880,type:"square",start:m+p*.3,dur:.16,gain:.22});else t==="wood"&&(re(i,o,{freq:1400,type:"triangle",start:m,dur:.07,
gain:.5}),re(i,o,{freq:1400,type:"triangle",start:m+.22,dur:.07,gain:.4}))}}function pn(t){const s=Pe(),n=s.createGain();
n.gain.value=.35*t,n.connect(s.destination),re(s,n,{freq:1800,start:s.currentTime,dur:.035,gain:.5})}function hn(t,s){const n=2*
t.sampleRate,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);let l=0;for(let d=0;d<n;d++){const f=Math.random()*
2-1;s==="brown"?(l=(l+.02*f)/1.02,o[d]=l*3.2):o[d]=f}return i}const gn={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
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
catch(n=>{throw delete Le[s],n})),Le[s]}function xn(t,s){if(t==="none")return null;const n=Kt.find(f=>f.id===t),i=Pe(),o=i.
createGain();if(o.gain.value=s,o.connect(i.destination),n!=null&&n.file){let f=!1,m=null;return yn(i,n.file).then(p=>{f||
(m=i.createBufferSource(),m.buffer=p,m.loop=!0,m.connect(o),m.start())}).catch(()=>{}),()=>{f=!0;try{m==null||m.stop()}catch{}
try{o.disconnect()}catch{}}}const l=i.createBufferSource();l.buffer=hn(i,t==="white"?"white":"brown"),l.loop=!0;let d=l;
if(t==="brown"){const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=900,d.connect(f),d=f}return d.connect(
o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function bn(t){return/^https:\/\/.+/i.test(t.trim())}async function Qe(t){
const s=await fetch(t);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.blob()}async function Ot(t){try{const s=await Qe(
t);if(s.type.startsWith("image/"))return s;throw new Error("not an image")}catch{const s=`https://images.weserv.nl/?url=${encodeURIComponent(
t.replace(/^https?:\/\//,""))}`,n=await Qe(s);if(!n.type.startsWith("image/"))throw new Error("not an image");return n}}
async function kn(t){var d;const s=t.trim();if(/pin\.it\//i.test(s))throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let i=s;if(n){const f=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!f.ok)throw new Error("pin lookup failed");const m=await f.json();if((m==null?void 0:m.status)!=="success"||!Array.isArray(
m==null?void 0:m.data)||m.data.length===0)throw new Error("pin unavailable");const p=(d=m.data[0])==null?void 0:d.images;
if(!p)throw new Error("pin has no image");const y=p.originals||p["736x"]||p["564x"]||p["236x"];if(!(y!=null&&y.url))throw new Error(
"pin has no image");i=y.url}const o=i.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{const f=`${o[1]}\
/originals${o[2]}`;return{blob:await Ot(f),finalUrl:f}}catch{}if(!/^https:\/\//i.test(i))throw new Error("not a link");return{
blob:await Ot(i),finalUrl:i}}function Yt(t){const s=Gt.find(o=>o.id===t),i=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const se=({d:t,vb:s=24})=>e.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,i)=>e.jsx("path",{d:n},i))}),vn="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",jn="M5 12h14",wn="M4 6h16|M4 12h16|M4 18h10",Sn="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Ht="M6 6l12 12|M18 6L6 18",Nn="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function le(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),i=s%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function Ne(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function Ae({label:t,value:s,min:n,max:i,onChange:o,unit:l}){const d=f=>{const m=parseInt(f,10);Number.
isFinite(m)&&o(Math.min(i,Math.max(n,m)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:i,value:s,onChange:f=>d(f.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,s+1)),children:"\
+"})]})]})}function Z({label:t,hint:s,checked:n,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>i(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const Mn=Y.memo(function({scene:s,token:n,
paused:i,animate:o,onReady:l,onFail:d}){const f=a.useRef(null),[m,p]=a.useState(!1),[y,w]=a.useState(0),k=a.useMemo(()=>window.
matchMedia("(max-width: 900px), (orientation: portrait)").matches,[]),S=a.useMemo(()=>s.url?ln(s.url,k):[qt(s.id,"p","mp\
4")],[s,k]),g=S[Math.min(y,S.length-1)],N=a.useRef({paused:i,animate:o});N.current={paused:i,animate:o};const M=a.useRef(
{onReady:l,onFail:d});return M.current={onReady:l,onFail:d},a.useEffect(()=>{p(!1);const D=f.current;if(!D)return;let C=!1,
$=!1,R=0,I=!1,_=!1;const P=A=>A.play().catch(()=>{}),F=()=>!N.current.paused&&N.current.animate&&!document.hidden,W=()=>{
const A=document.createElement("video");return A.className="ft-bg ft-bgvideo",A.muted=!0,A.playsInline=!0,A.setAttribute(
"playsinline",""),A.setAttribute("disablepictureinpicture",""),A.setAttribute("disableremoteplayback",""),A.preload="aut\
o",A.src=g,A.setAttribute("aria-hidden","true"),A.loop=!s.blend,A},L=()=>{_||$||(_=!0,w(A=>A<S.length-1?A+1:(p(!0),x&&(x.
remove(),x=null),M.current.onFail(n),A)))};let j=null;const b=()=>{$||(x&&(x.currentTime=0,x.style.opacity="1",F()&&P(x)),
j&&(j.remove(),j=null),C=!1)};let x=W();x.addEventListener("error",L),x.addEventListener("ended",b),D.appendChild(x);const h=()=>{
F()?I&&x&&(P(x),j&&P(j)):(x==null||x.pause(),j==null||j.pause())},E=()=>{if(!($||!x)){if(!I&&x.readyState>=2&&(I=!0,f.current&&
(f.current.style.opacity="1"),M.current.onReady(n),F()&&P(x)),F()&&I){x.paused&&!x.ended&&P(x);const A=s.duration||x.duration,
z=Math.min(1.5,A/4);if(!s.blend){R=requestAnimationFrame(E);return}if(!C&&Number.isFinite(A)&&x.currentTime>=A-z&&(C=!0,
j=W(),j.style.opacity="0",j.style.zIndex="2",j.addEventListener("error",()=>{}),D.appendChild(j),j.currentTime=0,P(j)),C&&
j&&j.readyState>=2){j.paused&&P(j);const r=Math.min(1,j.currentTime/z);x.style.opacity=String(1-r),j.style.opacity="1",r>=
1&&(x.remove(),x=j,j=null,C=!1,x.addEventListener("error",L),x.addEventListener("ended",b),D.dataset.wraps=String(Number(
D.dataset.wraps||0)+1))}}R=requestAnimationFrame(E)}};return R=requestAnimationFrame(E),document.addEventListener("visib\
ilitychange",h),window.addEventListener("pointerdown",h),()=>{$=!0,cancelAnimationFrame(R),x==null||x.pause(),j==null||j.
pause(),x==null||x.remove(),j==null||j.remove(),document.removeEventListener("visibilitychange",h),window.removeEventListener(
"pointerdown",h)}},[g]),e.jsx("div",{ref:f,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:m&&
e.jsx("span",{className:"ft-stream-status",children:"This scene could not load right now. Try another background."})},g)}),
Cn=Y.memo(function({scene:s,paused:n,animate:i}){const[o,l]=a.useState([{s,key:0}]),[d,f]=a.useState(null),[m,p]=a.useState(
null),y=a.useRef(0),w=a.useRef(o),k=a.useRef(0),S=a.useRef(new Set),g=a.useRef(null),N=L=>{w.current=L,l(L)};a.useEffect(
()=>{const L=w.current,j=L[L.length-1];if(j&&j.s.id===s.id){k.current=j.key;const x=j.key;window.setTimeout(()=>{k.current===
x&&g.current===x&&N(w.current.filter(h=>h.key===x))},400);return}const b=++y.current;k.current=b,N([...L.filter(x=>x.s.id!==
s.id).slice(-1),{s,key:b}])},[s]);const M=a.useCallback(L=>{L===k.current&&(S.current.add(L),g.current=L,f(L),window.setTimeout(
()=>{k.current===L&&N(w.current.filter(j=>j.key===L))},400))},[]),D=a.useCallback(L=>{if(p(L),L!==k.current)return;const j=w.
current.filter(x=>x.key!==L);if(!j.length)return;const b=j[j.length-1];k.current=b.key,N(j),S.current.has(b.key)?(g.current=
b.key,f(b.key)):(g.current=null,f(null))},[]),C=d===null||d!==k.current,$=o.some(L=>S.current.has(L.key)),R=m!==null&&m===
k.current,I=o[o.length-1].s,_=Bt(I.preview||"catalog"),P=I.preview==="v2cat"?5:I.preview==="curated"?3:8,F=I.preview==="\
v2cat"?4:I.preview==="curated"?3:13,W=I.tile;return e.jsxs(e.Fragment,{children:[!$&&!R?e.jsx("div",{className:"ft-bg",style:{
backgroundColor:"#101418",backgroundImage:_&&W!=null?`url(${_})`:void 0,backgroundSize:W!=null?`${P*100}% ${F*100}%`:void 0,
backgroundPosition:W!=null?`${W%P*100/(P-1)}% ${Math.floor(W/P)*100/(F-1)}%`:void 0,filter:"blur(16px) brightness(.6)",transform:"\
scale(1.15)"}}):null,o.map(L=>e.jsx(Mn,{scene:L.s,token:L.key,paused:n,animate:i,onReady:M,onFail:D},L.key)),C&&!R?e.jsx(
"div",{className:"ft-scene-switching","aria-hidden":"true",children:e.jsx("i",{})}):null]})}),En=Y.memo(function({kind:s,
id:n,scrim:i,builtinSrc:o,linkBg:l,uploadBg:d,paused:f,animate:m,customFit:p,enhance:y}){let w={};s==="builtin"&&o?w={backgroundImage:`\
url(${o})`}:s==="color"?w={backgroundColor:/^#[0-9a-f]{6}$/i.test(n||"")?n:"#101418"}:s==="link"&&(l==null?void 0:l.kind)===
"image"?w={backgroundImage:`url(${l.url})`}:s==="upload"&&(d==null?void 0:d.kind)==="image"?w={backgroundImage:`url(${d.
url})`}:(s==="link"||s==="upload"||s==="builtin")&&(w={backgroundColor:"#101418"}),(s==="link"||s==="upload")&&w.backgroundImage&&
(w={...w,backgroundSize:p,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},y!==!1&&(w={...w,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const k=s==="scene"?rn.get(n)||nt[0]:void 0,S=s==="link"&&(l==null?void 0:l.kind)===
"video"?l.url:s==="upload"&&(d==null?void 0:d.kind)==="video"?d.url:null,g=s==="color"?Math.max(i,Math.min(.78,Math.pow(
on(n||"#101418"),1.15)*.9)):i;return e.jsxs(e.Fragment,{children:[k?e.jsx(Cn,{scene:k,paused:!!f,animate:m}):S?e.jsx(Rn,
{src:S,paused:!!f,animate:m,fit:p}):e.jsx("div",{className:"ft-bg",style:w}),e.jsx("div",{className:"ft-scrim",style:{opacity:g}}),
e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharp\
en",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),Rn=Y.memo(function({
src:s,paused:n,animate:i,fit:o}){const l=a.useRef(null);return a.useEffect(()=>{const d=l.current;if(!d)return;const f=()=>{
n||!i||document.hidden?d.pause():d.play().catch(()=>{})};f();const m=()=>{!n&&i&&!document.hidden&&d.play().catch(()=>{})};
return document.addEventListener("visibilitychange",f),window.addEventListener("pointerdown",m),()=>{document.removeEventListener(
"visibilitychange",f),window.removeEventListener("pointerdown",m)}},[n,i,s]),i?e.jsx("video",{ref:l,className:"ft-bg ft-\
bgvideo",style:{objectFit:o,backgroundColor:"#101418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",
"aria-hidden":"true"}):null}),Ln=Y.memo(function({scene:s,active:n,onPick:i}){const o=Bt(s.preview||"catalog"),l=s.preview===
"v2cat"?5:s.preview==="curated"?3:8,d=s.preview==="v2cat"?4:s.preview==="curated"?3:13;return e.jsxs("button",{type:"but\
ton",className:`ft-bgswatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${s.name} animated scene`,onClick:i,children:[
Tt(s)?e.jsx("img",{className:"ft-bgswatch-img",src:Tt(s),alt:"",loading:"lazy",decoding:"async"}):s.tile!=null?e.jsx("sp\
an",{className:"ft-bgswatch-img",style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}% ${d*100}%`,backgroundPosition:`${s.
tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*100/(d-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:dn(s,"p"),alt:"",
loading:"lazy",decoding:"async"}),e.jsx("span",{className:"ft-bgswatch-name",children:s.name})]})}),An=Y.memo(function({
id:s,name:n,active:i,onPick:o}){const[l,d]=a.useState(Ye[s]||null);return a.useEffect(()=>{let f=!0;return!Ye[s]&&Pt[s]&&
Pt[s]().then(m=>{Ye[s]=m.default,f&&d(m.default)}).catch(()=>{}),()=>{f=!1}},[s]),e.jsx("button",{type:"button",className:`\
ft-bgswatch ${i?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:o})}),In=Y.memo(function({
color:s,onChange:n}){const o=a.useRef(null),l=/^#[0-9a-f]{6}$/i.test(s)?s:"#101418",d=$t(l),[f,m]=a.useState(d.l);a.useEffect(
()=>{m($t(/^#[0-9a-f]{6}$/i.test(s)?s:"#101418").l)},[s]),a.useEffect(()=>{var M;const k=(M=o.current)==null?void 0:M.getContext(
"2d");if(!k)return;const S=k.createImageData(168,168),g=S.data,N=168/2;for(let D=0;D<168;D++)for(let C=0;C<168;C++){const $=C-
N+.5,R=D-N+.5,I=Math.sqrt($*$+R*R)/N,_=(D*168+C)*4;if(I>1){g[_+3]=0;continue}const P=(Math.atan2(R,$)*180/Math.PI+360)%360,
F=Ze(P,I,f);g[_]=parseInt(F.slice(1,3),16),g[_+1]=parseInt(F.slice(3,5),16),g[_+2]=parseInt(F.slice(5,7),16),g[_+3]=255}
k.putImageData(S,0,0)},[f]);const p=k=>{var C;const S=(C=o.current)==null?void 0:C.getBoundingClientRect();if(!S)return;
const g=k.clientX-S.left-S.width/2,N=k.clientY-S.top-S.height/2,M=Math.min(1,Math.sqrt(g*g+N*N)/(S.width/2)),D=(Math.atan2(
N,g)*180/Math.PI+360)%360;n(Ze(D,M,f))},y=d.h*Math.PI/180,w=d.s*(168/2);return e.jsxs("div",{className:"ft-wheelwrap",children:[
e.jsxs("span",{className:"ft-wheelbox",children:[e.jsx("canvas",{ref:o,width:168,height:168,className:"ft-wheel","aria-l\
abel":"Color wheel: drag to pick a background color",onPointerDown:k=>{k.target.setPointerCapture(k.pointerId),p(k)},onPointerMove:k=>{
k.buttons&1&&p(k)}}),e.jsx("span",{className:"ft-wheel-dot",style:{left:168/2+Math.cos(y)*w,top:168/2+Math.sin(y)*w,background:l}})]}),
e.jsxs("span",{className:"ft-wheel-side",children:[e.jsx("span",{className:"ft-wheel-preview",style:{background:l},children:l}),
e.jsx("input",{type:"range",min:.05,max:.95,step:.01,value:f,"aria-label":"Color lightness",onChange:k=>{const S=parseFloat(
k.target.value);m(S),n(Ze(d.h,d.s,S))}}),e.jsx("span",{className:"ft-field-hint",children:"Drag the wheel for hue, slide\
 for lightness. Light colors are dimmed behind the timer so text stays readable."})]})]})});function Pn(t){return t.kind!==
"image"||!t.thumb?"":`https://images.weserv.nl/?url=${encodeURIComponent(t.thumb.replace(/^https?:\/\//,""))}&w=200&h=20\
0&fit=cover&q=70`}function Xe(t){try{const s=new URL(t);if(/pinterest\./i.test(s.host))return"Pinterest pin";const n=decodeURIComponent(
s.pathname.split("/").pop()||"");return n.length>4&&/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(n)?n.slice(0,26):
s.host.replace(/^www\./,"")}catch{return"Saved link"}}const $n=Y.memo(function({link:s,active:n,onPick:i,onRemove:o}){const l=Pn(
s);return e.jsxs("span",{className:`ft-bgswatch ft-bgswatch-named ft-linksw ${n?"is-active":""}`,children:[e.jsxs("butto\
n",{type:"button",className:"ft-linksw-pick","aria-label":`Use saved background ${Xe(s.source)}`,onClick:i,children:[s.kind===
"video"?e.jsx("video",{className:"ft-bgswatch-img",src:s.source,muted:!0,playsInline:!0,preload:"metadata"}):l?e.jsx("im\
g",{className:"ft-bgswatch-img",src:l,alt:"",loading:"lazy",decoding:"async"}):null,e.jsx("span",{className:"ft-bgswatch\
-name",children:Xe(s.source)})]}),e.jsx("button",{type:"button",className:"ft-linksw-del","aria-label":`Remove saved bac\
kground ${Xe(s.source)}`,onClick:o,children:"×"})]})}),Tn=Y.memo(function({settings:s,patch:n,spotifySrc:i,onOpenSettings:o}){
const l=s.musicMode==="spotify"?"spotify":"radio",d=s.radio&&typeof s.radio.index=="number"?s.radio:{index:0,playing:!1,
volume:.7},f=te[Math.min(Math.max(0,d.index),te.length-1)]||te[0],m=a.useRef(d);m.current=d;const p=a.useRef(l);p.current=
l;const y=a.useRef(null),[w,k]=a.useState(0),[S,g]=a.useState(""),N=a.useRef(0),[M,D]=a.useState(!1),C=a.useRef(null),[$,
R]=a.useState(()=>{try{const h=window.localStorage.getItem("sft:ft-player-pos.v1");if(h){const E=JSON.parse(h);if(E&&typeof E.
x=="number"&&typeof E.y=="number")return E}}catch{}return null}),I=a.useRef(null),_=(h,E)=>{const A=C.current,z=A?A.offsetWidth:
320,r=A?A.offsetHeight:180;return{x:Math.max(4,Math.min(Math.max(4,window.innerWidth-z-4),h)),y:Math.max(4,Math.min(Math.
max(4,window.innerHeight-r-4),E))}},P=h=>{var A;const E=(A=C.current)==null?void 0:A.getBoundingClientRect();E&&(I.current=
{dx:h.clientX-E.left,dy:h.clientY-E.top},h.currentTarget.setPointerCapture(h.pointerId))},F=h=>{I.current&&R(_(h.clientX-
I.current.dx,h.clientY-I.current.dy))},W=()=>{I.current&&(I.current=null,R(h=>{if(!h)return h;const E=_(h.x,h.y);try{window.
localStorage.setItem("sft:ft-player-pos.v1",JSON.stringify(E))}catch{}return E}))};a.useEffect(()=>{const h=()=>R(E=>E&&
_(E.x,E.y));return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),a.useEffect(()=>{
const h=new Audio;h.preload="none",y.current=h;const E=()=>{const r=h.currentTime||0;k(U=>Math.floor(U)===Math.floor(r)?
U:r)},A=()=>{N.current=0,g(""),n({radio:{...m.current,index:(m.current.index+1)%te.length,playing:!0}})},z=()=>{!y.current||
y.current.dataset.track!==f.id||(N.current+=1,N.current>=te.length?(g("Radio tracks cannot load on this connection right\
 now."),n({radio:{...m.current,playing:!1}})):(g("That track could not load - skipped it."),n({radio:{...m.current,index:(m.
current.index+1)%te.length,playing:!0}})))};return h.addEventListener("timeupdate",E),h.addEventListener("ended",A),h.addEventListener(
"error",z),()=>{h.pause(),h.removeEventListener("timeupdate",E),h.removeEventListener("ended",A),h.removeEventListener("\
error",z),y.current=null}},[]),a.useEffect(()=>{const h=y.current;if(!h)return;const E=l==="radio"&&d.playing;h.dataset.
track!==f.id&&(E||h.dataset.track)&&(h.dataset.track=f.id,h.src=f.url,h.preload="auto",N.current=0,k(0))},[f.id,l,d.playing]),
a.useEffect(()=>{const h=y.current;h&&(h.volume=d.volume,l==="radio"&&d.playing?h.play().catch(()=>{}):h.pause())},[l,d.
playing,d.volume,f.id]),a.useEffect(()=>{const h=()=>{const E=y.current;E&&p.current==="radio"&&m.current.playing&&E.paused&&
E.play().catch(()=>{})};return window.addEventListener("pointerdown",h),()=>window.removeEventListener("pointerdown",h)},
[]),a.useEffect(()=>{l==="spotify"&&m.current.playing&&n({radio:{...m.current,playing:!1}})},[l]);const L=h=>{const E=y.
current;if(!E)return;const A=h.currentTarget.getBoundingClientRect(),z=Math.min(1,Math.max(0,(h.clientX-A.left)/A.width)),
r=Number.isFinite(E.duration)&&E.duration>0?E.duration:f.seconds;E.currentTime=z*r,k(E.currentTime)},j=f.seconds,b=j>0?Math.
min(100,w/j*100):0;return e.jsxs("div",{ref:C,className:`ft-player ${M?"is-mini":""}`,style:$?{left:$.x,top:$.y,right:"a\
uto",bottom:"auto"}:void 0,"data-testid":"music-player",children:[e.jsxs("span",{className:"ft-player-head",title:"Drag \
to move",onPointerDown:P,onPointerMove:F,onPointerUp:W,onPointerCancel:W,children:[e.jsx(se,{d:"M9 6h.01|M15 6h.01|M9 12\
h.01|M15 12h.01|M9 18h.01|M15 18h.01"}),e.jsxs("span",{className:"ft-player-mode",children:[e.jsx("button",{type:"button",
className:`ft-player-modebtn ${l==="radio"?"is-active":""}`,onPointerDown:h=>h.stopPropagation(),onClick:()=>n({musicMode:"\
radio"}),children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-player-modebtn ${l==="spotify"?"is-active":
""}`,onPointerDown:h=>h.stopPropagation(),onClick:()=>n({musicMode:"spotify"}),children:"Spotify"})]}),e.jsx("button",{type:"\
button",className:"ft-player-x","aria-label":M?"Expand player":"Minimize player",onPointerDown:h=>h.stopPropagation(),onClick:()=>D(
h=>!h),children:M?"❐":"–"}),e.jsx("button",{type:"button",className:"ft-player-x","aria-label":"Hide player",onPointerDown:h=>h.
stopPropagation(),onClick:()=>n({musicOpen:!1}),children:"×"})]}),M?e.jsx("div",{className:"ft-player-minrow",children:l===
"radio"?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"ft-player-play is-small","aria-label":d.playing?
"Pause radio":"Play radio",onClick:()=>n({radio:{...d,playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("s\
pan",{className:"ft-player-mintitle",children:f.title})]}):e.jsx("span",{className:"ft-player-mintitle",children:"Spotif\
y player"})}):null,l==="radio"?e.jsxs("div",{className:"ft-player-body",children:[e.jsxs("span",{className:"ft-player-ro\
w",children:[e.jsx("img",{className:"ft-player-cover",src:f.cover,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("span",
{className:"ft-player-meta",children:[e.jsx("span",{className:"ft-player-title",children:f.title}),e.jsxs("span",{className:"\
ft-player-artist",children:[f.artist," · instrumental lofi"]}),e.jsx("span",{className:"ft-player-bar",onClick:L,role:"\
slider","aria-label":"Track progress","aria-valuemin":0,"aria-valuemax":j,"aria-valuenow":Math.round(w),children:e.jsx("\
span",{style:{width:`${b}%`}})}),e.jsxs("span",{className:"ft-player-times",children:[le(w*1e3)," / ",le(j*1e3)]})]})]}),
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
Dn=Y.memo(function({chip:s,panel:n,fullscreenSupported:i,onFullscreen:o,onTasks:l,onSettings:d,onMinimize:f,onPopout:m,onProfile:p}){
return e.jsxs("header",{className:"ft-topbar",children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),s?e.
jsx("span",{className:"ft-chip",title:"Today's completed focus time",children:s}):null,e.jsxs("span",{className:"ft-topb\
ar-actions",children:[i?e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.
jsx(se,{d:vn})}):null,e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"\
Open timer in its own window",onClick:m,children:e.jsx(se,{d:Nn})}),e.jsx("button",{type:"button",className:"ft-iconbtn",
"aria-label":"Minimize to a small timer",title:"Minimize to a small timer",onClick:f,children:e.jsx(se,{d:jn})}),e.jsx("\
button",{type:"button",className:`ft-iconbtn ${n==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"\
Profile and progress",onClick:p,children:e.jsx(se,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5\
s8 2.5 8 6.5"})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",
onClick:l,children:e.jsx(se,{d:wn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,
"aria-label":"Settings",onClick:d,children:e.jsx(se,{d:Sn})})]})]})}),On=Y.memo(function({tasksState:s,setTasksState:n,week:i,
ready:o,savedMessage:l,onClose:d}){const[f,m]=a.useState(""),[p,y]=a.useState(1),w=s.tasks,k=Math.max(1,...i.map(g=>g.minutes)),
S=()=>{const g=f.trim();if(!g)return;const N={id:`t${Date.now()}`,title:g,est:p,done:0,completed:!1};n(M=>({tasks:[...M.
tasks,N],activeId:M.activeId||N.id})),m(""),y(1)};return e.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[
e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Tasks"}),e.jsx("button",{type:"button",className:"\
ft-sheet-close","aria-label":"Close tasks",onClick:d,children:e.jsx(se,{d:Ht})})]}),e.jsxs("div",{className:"ft-addtask",
children:[e.jsx("input",{value:f,placeholder:"What are you studying?",onChange:g=>m(g.target.value),onKeyDown:g=>{g.key===
"Enter"&&S()},maxLength:120}),e.jsxs("span",{className:"ft-stepper is-small",children:[e.jsx("button",{type:"button","ar\
ia-label":"Fewer pomodoros",onClick:()=>y(Math.max(1,p-1)),children:"-"}),e.jsxs("span",{className:"ft-stepper-value",children:[
p,e.jsx("em",{children:"est"})]}),e.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>y(Math.min(20,
p+1)),children:"+"})]}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:S,disabled:!o,children:"\
Add"})]}),w.length===0?e.jsx("p",{className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against i\
t, or just run the timer."}):null,e.jsx("ul",{className:"ft-tasklist",children:w.map(g=>e.jsxs("li",{className:`${g.id===
s.activeId?"is-active":""} ${g.completed?"is-done":""}`,children:[e.jsx("button",{type:"button",className:"ft-taskcheck",
"aria-label":g.completed?"Mark not done":"Mark done",onClick:()=>{g.completed||qs(g.id),n(N=>({...N,tasks:N.tasks.map(M=>M.
id===g.id?{...M,completed:!M.completed}:M)}))},children:g.completed?"✓":""}),e.jsx("button",{type:"button",className:"\
ft-taskname",onClick:()=>n(N=>({...N,activeId:g.id})),children:g.title}),e.jsxs("span",{className:"ft-taskcount",children:[
g.done,"/",g.est]}),e.jsx("button",{type:"button",className:"ft-taskdel","aria-label":`Delete ${g.title}`,onClick:()=>n(
N=>({tasks:N.tasks.filter(M=>M.id!==g.id),activeId:N.activeId===g.id?null:N.activeId})),children:"×"})]},g.id))}),w.some(
g=>g.completed)?e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(g=>({...g,tasks:g.tasks.filter(
N=>!N.completed)})),children:"Clear completed"}):null,e.jsxs("div",{className:"ft-week",children:[e.jsx("h3",{children:"\
This week"}),e.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focus minutes by day: ${i.map(g=>`${g.label} ${g.
minutes}`).join(", ")}`,children:i.map((g,N)=>e.jsxs("span",{className:"ft-weekcol",children:[e.jsx("span",{className:"f\
t-weekbar",style:{height:`${Math.round(g.minutes/k*64)}px`}}),e.jsx("span",{className:"ft-weekday",children:g.label})]},
N))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});function Fn(){const[t,s]=a.useState(null),[,n]=a.useState(
0),i=a.useRef(null);a.useEffect(()=>{const m=new BroadcastChannel("sft-sync");i.current=m,m.onmessage=y=>{var w;((w=y.data)==
null?void 0:w.t)==="state"&&s(y.data)};const p=window.setInterval(()=>n(y=>y+1),500);return()=>{window.clearInterval(p),
m.close()}},[]);const o=m=>{var p;return(p=i.current)==null?void 0:p.postMessage({t:"cmd",cmd:m})};let l=t?t.remaining:0;
t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));const d=!t||Date.now()-t.at>4e3,f=t&&t.dur>0?Math.round(
(1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},
children:[e.jsx("div",{className:"ft-popout-phase",children:t?oe[t.phase]:"Study focus"}),e.jsx("div",{className:"ft-pop\
out-time",children:t?le(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar","aria-hidden":"true",children:e.jsx("span",{
style:{width:`${f}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[e.jsx("button",{type:"button",className:"ft\
-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pause":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.jsx("button",{type:"button",className:"ft-gh\
ost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),d?e.jsx("p",{className:"ft-popout-note",children:"Open the st\
udy timer in another tab to control it from here."}):null]})}const Un=Y.memo(function({settings:s,patch:n,bgStatus:i,soundStatus:o,
lastBgSrcRef:l,lastSndSrcRef:d,resolveLinkBg:f,resolveCustomSound:m,uploadBg:p,uploadSound:y,previewAlarm:w,requestNotifications:k,
notificationsSupported:S,wakeLockSupported:g,onResetSettings:N,savedMessage:M,onClose:D,savedLinks:C,onSaveLink:$,onRemoveLink:R}){
const[I,_]=a.useState(""),[P,F]=a.useState(""),[W,L]=a.useState(""),[j,b]=a.useState(""),x=s.background,h=()=>{const r=I.
trim();r&&f(r).then(U=>{U&&(l.current=r,n({background:{kind:"link",source:r}}),C.some(X=>X.source===r)||$({id:`l${Date.now()}`,
source:r,kind:U.kind,thumb:U.kind==="image"?U.finalUrl:void 0,addedAt:Date.now()}),_(""))})},E=r=>{x.kind==="link"&&x.source===
r.source||f(r.source).then(U=>{U&&(l.current=r.source,n({background:{kind:"link",source:r.source}}))})},A=()=>{const r=P.
trim();bn(r)&&m(r).then(U=>{var X;U&&(d.current=r,n({alarmSound:"custom",customAlarm:{source:r,name:((X=r.split("/").pop())==
null?void 0:X.split("?")[0])||"Custom sound"}}))})},z=()=>{const r=W.trim();if(r){if(!Yt(r)){b("That is not a Spotify li\
nk. Copy a link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current player\
 is unchanged.");return}b(""),n({spotify:r,spotifyOpen:!0})}};return e.jsxs("aside",{className:"ft-sheet","aria-label":"\
Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Settings"}),e.jsx("button",{
type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:D,children:e.jsx(se,{d:Ht})})]}),e.jsxs("\
section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"ft-chips",children:fn.map(r=>e.jsxs("but\
ton",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:r.accent,font:r.font,background:{kind:r.bg.kind,id:r.bg.
id}}),children:[r.name," theme"]},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"\
ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",children:[un.map(r=>e.jsx("button",{type:"\
button",className:`ft-colorswatch ${s.accent.toLowerCase()===r.value?"is-active":""}`,style:{background:r.value},"aria-l\
abel":`${r.name} accent`,onClick:()=>n({accent:r.value})},r.id)),e.jsxs("label",{className:"ft-colorcustom",children:[e.
jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:r=>n(
{accent:r.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[
e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx("div",{className:"ft-chips",children:Vt.map(r=>e.jsx("b\
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
ft-subhead",children:"Spotify playlists"}),e.jsx("div",{className:"ft-chips",children:Gt.map(r=>e.jsx("button",{type:"bu\
tton",className:`ft-chipbtn ${s.spotify===r.id?"is-active":""}`,onClick:()=>{b(""),n({spotify:r.id,spotifyOpen:!0,musicMode:"\
spotify",musicOpen:!0})},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",
{className:"ft-field-label",children:"Any Spotify link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste an ope\
n.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official \
player inside the mini player, with the album art shown by Spotify; this is not account sync. Spotify decides what plays\
: usually full songs when you sign in to Spotify inside the player, 30-second previews when signed out; podcast episodes\
 usually play in full. Live lyrics are not possible here: Spotify only shares the current song with connected apps, not \
with an embedded player."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:W,
placeholder:"https://open.spotify.com/playlist/…",onChange:r=>L(r.target.value),inputMode:"url"}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:z,children:"Use link"})]}),s.spotify?e.jsxs("span",{className:"ft-inrow",
children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({musicMode:"spotify",musicOpen:!0}),
children:"Show player"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1,
musicMode:"radio"}),children:"Remove player"})]}):null,j?e.jsx("span",{className:"ft-field-hint",children:j}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(Ae,{label:"Focus",value:s.focusMin,min:1,max:180,unit:"\
min",onChange:r=>n({focusMin:r})}),e.jsx(Ae,{label:"Short break",value:s.shortMin,min:1,max:60,unit:"min",onChange:r=>n(
{shortMin:r})}),e.jsx(Ae,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:r=>n({longMin:r})}),e.jsx(
Ae,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:r=>n({longEvery:r})}),e.jsx(Z,{label:"\
Auto-start breaks",checked:s.autoBreaks,onChange:r=>n({autoBreaks:r})}),e.jsx(Z,{label:"Auto-start focus",checked:s.autoFocus,
onChange:r=>n({autoFocus:r})}),S?e.jsx(Z,{label:"Browser notifications",hint:"Alerts when a session ends in another tab.",
checked:s.notifications,onChange:k}):null,g?e.jsx(Z,{label:"Keep screen awake",checked:s.keepAwake,onChange:r=>n({keepAwake:r})}):
null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"ft-chips",children:mn.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===r.id?"is-active":""}`,onClick:()=>{n({alarmSound:r.id}),
w(r.id)},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,"aria-label":"Alarm volume",onChange:r=>n(
{alarmVolume:parseFloat(r.target.value)})})]}),e.jsx(Z,{label:"Ring twice",checked:s.alarmRepeat,onChange:r=>n({alarmRepeat:r})}),
e.jsx(Z,{label:"Ticking while running",checked:s.tick,onChange:r=>n({tick:r})}),e.jsxs("div",{className:"ft-field is-sta\
cked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from a link"}),e.jsx("span",{className:"ft-f\
ield-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when the file's host allows cross-site loadin\
g; many do not. Uploading a file always works until the tab reloads; a saved link reloads each visit."}),e.jsxs("span",{
className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:P,placeholder:"https://…/sound.mp3",onChange:r=>F(
r.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:A,children:"Use \
link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Upload alarm sound file",className:"ft-fileinpu\
t",onChange:r=>{var U;return y((U=r.target.files)==null?void 0:U[0])}})]}),s.customAlarm?e.jsxs("span",{className:"ft-fi\
eld-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"ft-field-hint",children:o}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"ft-chips",children:Kt.map(r=>e.
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
ft-textinput",value:I,placeholder:"https://www.pinterest.com/pin/…",onChange:r=>_(r.target.value),inputMode:"url"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:h,children:"Use link"})]}),C.length?e.jsxs(e.Fragment,
{children:[e.jsx("h4",{className:"ft-subhead",children:"My saved backgrounds"}),e.jsx("div",{className:"ft-bggrid",children:C.
map(r=>e.jsx($n,{link:r,active:x.kind==="link"&&x.source===r.source,onPick:()=>E(r),onRemove:()=>R(r.id)},r.id))}),e.jsx(
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
null),d=a.useRef(null),f=a.useCallback(c=>u=>{var O,q;const v=l.current;if(!v)return;const T=v.getBoundingClientRect();o(
xe=>{const Q=xe||{x:T.left,y:T.top,s:1};return d.current={mode:c,id:u.pointerId,sx:u.clientX,sy:u.clientY,ox:Q.x,oy:Q.y,
ss:Q.s},Q}),(q=(O=u.target).setPointerCapture)==null||q.call(O,u.pointerId),u.preventDefault()},[o]),m=a.useCallback(c=>{
const u=d.current;if(!(!u||u.id!==c.pointerId))if(u.mode==="move")o(v=>v&&{...v,x:Math.min(Math.max(u.ox+c.clientX-u.sx,
-40),window.innerWidth-60),y:Math.min(Math.max(u.oy+c.clientY-u.sy,0),window.innerHeight-60)});else{const v=l.current;if(!v)
return;const T=v.getBoundingClientRect(),O=T.left+T.width/2,q=T.top+T.height/2,xe=Math.max(30,Math.hypot(u.sx-O,u.sy-q)),
Q=Math.hypot(c.clientX-O,c.clientY-q);o(ie=>ie&&{...ie,s:Math.min(2.6,Math.max(.45,u.ss*(Q/xe)))})}},[o]),p=a.useCallback(
c=>{d.current&&d.current.id===c.pointerId&&(d.current=null)},[]),[y,w,k]=be("ft-tasks.v1",{tasks:[],activeId:null}),[S,g,
N]=be("ft-stats.v1",{days:{}}),[M,D,C]=be("ft-session.v1",null),[$,R]=be("ft-links.v1",[]),I=a.useCallback(c=>R(u=>[c,...u.
filter(v=>v.source!==c.source)].slice(0,24)),[R]),_=a.useCallback(c=>R(u=>u.filter(v=>v.id!==c)),[R]),P=a.useMemo(()=>({
focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,t.longMin]),[F,W]=a.useState("focu\
s"),[L,j]=a.useState(!1),[b,x]=a.useState(P.focus),[h,E]=a.useState(0),[A,z]=a.useState("none"),[r,U]=a.useState(!1),X=a.
useRef(0),me=a.useRef(!1);me.current=L;const H=a.useRef(F);H.current=F;const pe=a.useRef(b);pe.current=b;const at=a.useRef(
t.accent);at.current=t.accent;const[Zt,it]=a.useState(null),[Xt,Jt]=a.useState(null),[Qt,$e]=a.useState(null),[es,ce]=a.
useState(""),[Te,ot]=a.useState(null),[ts,ne]=a.useState(""),G=a.useRef(null),de=a.useRef(null),Me=a.useRef(null),rt=a.useCallback(
async c=>{ce("Loading background…");try{const u=c.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(u)&&!/pin(it)?\./i.test(
u))return it(q=>(q&&q.url.startsWith("blob:")&&URL.revokeObjectURL(q.url),{url:u,kind:"video"})),ce("Background applied."),
{kind:"video",finalUrl:u};const{blob:v,finalUrl:T}=await kn(c),O=v.type.startsWith("video/")?"video":"image";return it(q=>(q&&
q.url.startsWith("blob:")&&URL.revokeObjectURL(q.url),{url:URL.createObjectURL(v),kind:O})),ce("Background applied."),{kind:O,
finalUrl:T}}catch(u){const v=u instanceof Error&&u.message==="short pin link"?"Short pin.it links cannot be resolved her\
e. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background is unchanged.":"Coul\
d not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct image link, or uplo\
ad the image below. Your previous background is unchanged.";return ce(v),!1}},[]),lt=a.useCallback(async c=>{ne("Loading\
 sound…");try{const u=await Qe(c);if(!/^audio\//.test(u.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(c))throw new Error(
"not audio");return ot(v=>(v&&URL.revokeObjectURL(v),URL.createObjectURL(u))),ne("Sound saved. It will ring when a sessi\
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
if(ae.kind==="builtin"){const u=ae.id&&It[ae.id]?ae.id:"rain";Ge[u]?$e(Ge[u]):($e(null),It[u]().then(v=>{Ge[u]=v.default,
c&&$e(v.default)}).catch(()=>{}))}return()=>{c=!1}}},[n.ready,ae.kind,ae.id]);const dt=a.useRef(!1),J=a.useCallback(c=>{
C.ready&&D({phase:c.phase,running:c.running,endAt:c.endAt||0,remainingMs:c.remainingMs,cycleCount:c.cycleCount})},[C.ready]);
a.useEffect(()=>{if(!C.ready||!n.ready||dt.current||(dt.current=!0,!M))return;const c=M.phase==="short"||M.phase==="long"?
M.phase:"focus";if(W(c),E(M.cycleCount||0),M.running&&M.endAt>Date.now()+500)X.current=M.endAt,x(M.endAt-Date.now()),j(!0);else if(M.
running)x(K.current[c]),j(!1);else{const u=typeof M.remainingMs=="number"&&M.remainingMs>0?Math.min(M.remainingMs,K.current[c]):
K.current[c];x(u),j(!1)}},[C.ready,n.ready]);const he=a.useRef({}),K=a.useRef(P);K.current=P;const ut=a.useCallback(c=>{
const u=H.current;let v="focus",T=h;if(u==="focus"){if(T=c?h:h+1,E(T),v=T%Math.max(1,t.longEvery)===0&&T>0?"long":"short",
!c){const q=Ne(),xe=S.days[q]||{focusSec:0,sessions:0};g({days:{...S.days,[q]:{focusSec:xe.focusSec+Math.round(K.current.
focus/1e3),sessions:xe.sessions+1}}}),y.activeId&&w(Q=>({...Q,tasks:Q.tasks.map(ie=>ie.id===Q.activeId?{...ie,done:ie.done+
1}:ie)}))}}else v="focus";if(t.alarmSound==="custom"&&G.current)try{G.current.currentTime=0,G.current.volume=t.alarmVolume,
G.current.play().catch(()=>Se("bell",t.alarmVolume,t.alarmRepeat))}catch{Se("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound===
"custom"?Se("bell",t.alarmVolume,t.alarmRepeat):Se(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${oe[u]} finished`,{body:v==="focus"?"Time to focus.":`Ti\
me for a ${oe[v].toLowerCase()}.`})}catch{}delete he.current[u],W(v),x(K.current[v]);const O=v==="focus"?t.autoFocus:t.autoBreaks;
O?(X.current=Date.now()+K.current[v],j(!0)):j(!1),J({phase:v,running:O,endAt:O?Date.now()+K.current[v]:0,remainingMs:K.current[v],
cycleCount:T})},[h,t,S,g,w,J]),Ce=a.useRef(ut);Ce.current=ut,a.useEffect(()=>{if(!L)return;const c=window.setInterval(()=>{
const u=X.current-Date.now();u<=0?Ce.current(!1):x(v=>Math.ceil(v/1e3)!==Math.ceil(u/1e3)?u:v)},250);return()=>window.clearInterval(
c)},[L]);const ft=a.useRef(P),mt=a.useRef(!1);a.useEffect(()=>{const c=ft.current;if(ft.current=P,!!n.ready){if(!mt.current){
mt.current=!0;return}c.focus===P.focus&&c.short===P.short&&c.long===P.long||me.current||(delete he.current[H.current],x(
P[H.current]))}},[P,n.ready]);const pt=a.useRef(0);a.useEffect(()=>{if(!L||!t.tick)return;const c=window.setInterval(()=>{
const u=Math.ceil((X.current-Date.now())/1e3);u!==pt.current&&(pt.current=u,pn(t.alarmVolume))},250);return()=>window.clearInterval(
c)},[L,t.tick,t.alarmVolume]),a.useEffect(()=>{document.title=`${le(b)} - ${oe[F]} - Study focus timer`},[b,F]),a.useEffect(
()=>{let c=0;const u=()=>{de.current&&(de.current(),de.current=null),t.ambient!=="none"&&(de.current=xn(t.ambient,t.ambientVolume))};
return t.ambient!=="none"&&!Dt?(Dt=!0,c=window.setTimeout(u,1500)):u(),()=>{window.clearTimeout(c),de.current&&(de.current(),
de.current=null)}},[t.ambient,t.ambientVolume]),a.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let c=!1;
const u=()=>{navigator.wakeLock.request("screen").then(T=>{c||(Me.current=T)}).catch(()=>{})};u();const v=()=>{document.
visibilityState==="visible"&&u()};return document.addEventListener("visibilitychange",v),()=>{if(c=!0,document.removeEventListener(
"visibilitychange",v),Me.current){try{Me.current.release()}catch{}Me.current=null}}},[t.keepAwake]),a.useEffect(()=>{Te?
(G.current=new Audio(Te),G.current.preload="auto"):G.current=null},[Te]);const ht=a.useRef(()=>{}),gt=a.useRef(()=>{}),yt=a.
useRef(()=>{}),ge=a.useCallback(()=>{if(Pe(),G.current)try{G.current.pause(),G.current.currentTime=0}catch{}X.current=Date.
now()+pe.current,j(!0),J({phase:H.current,running:!0,endAt:X.current,remainingMs:pe.current,cycleCount:h})},[J,h]),ye=a.
useCallback(()=>{j(!1),J({phase:H.current,running:!1,remainingMs:pe.current,cycleCount:h})},[J,h]),ke=a.useCallback(()=>{
delete he.current[H.current],j(!1),x(K.current[H.current]),J({phase:H.current,running:!1,remainingMs:K.current[H.current],
cycleCount:h})},[J,h]),Ee=a.useCallback(()=>{Ce.current(!0)},[]);ht.current=ge,gt.current=ye,yt.current=ke;const ve=a.useCallback(
c=>{const u=H.current;if(c===u)return;const v=me.current?Math.max(0,X.current-Date.now()):pe.current;v>0&&v<K.current[u]?
he.current[u]=v:delete he.current[u];const T=he.current[c],O=typeof T=="number"&&T>0?Math.min(T,K.current[c]):K.current[c];
j(!1),W(c),x(O),J({phase:c,running:!1,remainingMs:O,cycleCount:h})},[J,h]),Fe=a.useCallback(()=>{document.fullscreenElement?
document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[xt,bt]=a.useState(
null),ss=a.useCallback(()=>{const c=window.documentPictureInPicture;if(c!=null&&c.requestWindow){c.requestWindow({width:320,
height:200}).then(u=>{for(const v of Array.from(document.styleSheets))try{const T=Array.from(v.cssRules||[]).map(q=>q.cssText).
join(`
`),O=u.document.createElement("style");O.textContent=T,u.document.head.appendChild(O)}catch{const T=v.href;if(T){const O=u.
document.createElement("link");O.rel="stylesheet",O.href=T,u.document.head.appendChild(O)}}u.document.body.className="ft\
-pip-body",u.addEventListener("pagehide",()=>bt(null)),bt(u)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);a.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const c=new BroadcastChannel(
"sft-sync"),u=()=>c.postMessage({t:"state",phase:H.current,remaining:pe.current,running:me.current,dur:K.current[H.current],
accent:at.current,at:Date.now()});u();const v=window.setInterval(u,1e3);return c.onmessage=T=>{const O=T.data;(O==null?void 0:
O.t)==="cmd"&&(O.cmd==="toggle"?me.current?gt.current():ht.current():O.cmd==="reset"?yt.current():O.cmd==="skip"&&Ce.current(
!0))},()=>{window.clearInterval(v),c.close()}},[]);const ns=a.useCallback(()=>{z("none"),U(!0)},[]),as=A==="tasks",is=A===
"settings",os=a.useCallback(()=>z(c=>c==="tasks"?"none":"tasks"),[]),rs=a.useCallback(()=>z(c=>c==="settings"?"none":"se\
ttings"),[]),ls=a.useCallback(()=>z("settings"),[]),cs=a.useCallback(()=>z(c=>c==="profile"?"none":"profile"),[]);a.useEffect(
()=>{const c=u=>{var T;const v=(T=u.target)==null?void 0:T.tagName;v==="INPUT"||v==="TEXTAREA"||v==="SELECT"||(u.code===
"Space"?(u.preventDefault(),me.current?ye():ge()):u.key==="r"||u.key==="R"?ke():u.key==="s"||u.key==="S"?Ee():u.key==="1"?
ve("focus"):u.key==="2"?ve("short"):u.key==="3"?ve("long"):u.key==="m"||u.key==="M"?U(O=>!O):(u.key==="f"||u.key==="F")&&
Fe())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[ge,ye,ke,Ee,ve,Fe]);const B=a.
useCallback(c=>s(u=>({...u,...c})),[s]),ds=a.useCallback(c=>{if(!c)return;const u=c.type.startsWith("video/");if(!u&&!c.
type.startsWith("image/")){ce("That file is not an image or video.");return}Jt(v=>(v&&URL.revokeObjectURL(v.url),{url:URL.
createObjectURL(c),kind:u?"video":"image"})),B({background:{kind:"upload"}}),ce("Background applied for this visit. Use \
a link to keep it across visits.")},[B]),us=a.useCallback(c=>{if(c){if(!c.type.startsWith("audio/")){ne("That file is no\
t an audio file.");return}ot(u=>(u&&URL.revokeObjectURL(u),URL.createObjectURL(c))),B({alarmSound:"custom",customAlarm:{
source:"",name:c.name}}),ne(`Using "${c.name}" for this visit. Use a link to keep it across visits.`)}},[B]),fs=a.useCallback(
c=>{var u;if(c==="custom"){if(G.current)try{G.current.currentTime=0,G.current.volume=t.alarmVolume,G.current.play().catch(
()=>ne("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else ne((u=t.
customAlarm)!=null&&u.source?"Still loading your sound.":"Add a link or upload a file first.");return}Se(c,t.alarmVolume,
!1)},[t.alarmVolume,t.customAlarm]),ms=a.useCallback(c=>{if(!c){B({notifications:!1});return}if(!(typeof Notification>"u"))
try{const u=Notification.requestPermission();u&&typeof u.then=="function"?u.then(v=>B({notifications:v==="granted"})).catch(
()=>B({notifications:!1})):B({notifications:Notification.permission==="granted"})}catch{B({notifications:!1})}},[B]),ps=a.
useCallback(()=>s(He),[s]),hs=a.useMemo(()=>({focusSec:0,sessions:0}),[]),Re=S.days[Ne()]||hs,Ue=a.useMemo(()=>{var v,T;
let c=0;const u=new Date;for(((v=S.days[Ne(u)])==null?void 0:v.sessions)>0||u.setDate(u.getDate()-1);((T=S.days[Ne(u)])==
null?void 0:T.sessions)>0;)c++,u.setDate(u.getDate()-1);return c},[S.days]),gs=a.useMemo(()=>{const c=[];for(let u=6;u>=
0;u--){const v=new Date;v.setDate(v.getDate()-u);const T=S.days[Ne(v)];c.push({label:`${"SMTWTFS"[v.getDay()]}`,minutes:Math.
round(((T==null?void 0:T.focusSec)||0)/60)})}return c},[S.days]),ys=a.useMemo(()=>t.showChip?`${Re.sessions} ${Re.sessions===
1?"session":"sessions"} · ${Math.round(Re.focusSec/60)} min${Ue>1?` · ${Ue}-day streak`:""}`:null,[t.showChip,Re,Ue]),
xs=n.ready&&k.ready&&N.ready,bs=((jt=Vt.find(c=>c.id===t.font))==null?void 0:jt.css)||"inherit",_e=1-b/Math.max(1,P[F]),
We=118,kt=2*Math.PI*We,ks=typeof Notification<"u",vs=typeof navigator<"u"&&"wakeLock"in navigator,js=typeof document<"u"&&
document.fullscreenEnabled,vt=y.tasks.find(c=>c.id===y.activeId)||null,ws=t.spotify?Yt(t.spotify):null;return e.jsxs("di\
v",{className:`ft-root ${r?"is-compact":""}`,style:{"--ft-accent":t.accent,"--ft-font":bs},children:[e.jsx(En,{kind:ae.kind,
id:ae.id,scrim:t.scrim,builtinSrc:Qt,linkBg:Zt,uploadBg:Xt,paused:r,animate:t.bgAnimate!==!1,customFit:t.customFit||"cov\
er",enhance:t.enhance!==!1}),e.jsx(Dn,{chip:ys,panel:A,fullscreenSupported:js,onFullscreen:Fe,onTasks:os,onSettings:rs,onMinimize:ns,
onPopout:ss,onProfile:cs}),e.jsxs("main",{ref:l,className:`ft-center ${t.clockOnly===!0?"is-clockonly":""}`,style:t.clockOnly===
!0&&i?{left:i.x,top:i.y,transform:`scale(${i.s})`,transformOrigin:"top left"}:void 0,onPointerMove:t.clockOnly===!0?m:void 0,
onPointerUp:t.clockOnly===!0?p:void 0,onPointerCancel:t.clockOnly===!0?p:void 0,children:[t.clockOnly!==!0?e.jsx("nav",{
className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(c=>e.jsx("button",{type:"button",className:`\
ft-mode ${F===c?"is-active":""}`,onClick:()=>ve(c),children:oe[c]},c))}):null,t.clockOnly!==!0&&t.showDots?e.jsx("div",{
className:"ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((c,u)=>e.jsx(
"span",{className:`ft-dot ${u<h%Math.max(1,t.longEvery)||h>0&&h%Math.max(1,t.longEvery)===0&&F!=="focus"?"is-done":""}`},
u))}):null,e.jsxs("div",{className:`ft-clock is-${t.clockSize} ${t.clockOnly===!0?"is-free":""}`,role:"timer","aria-live":"\
off","aria-label":`${oe[F]} timer, ${le(b)} remaining`,onPointerDown:t.clockOnly===!0?f("move"):void 0,title:t.clockOnly===
!0?"Drag to move":void 0,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-h\
idden":"true",children:[e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:We}),e.jsx("circle",{className:"ft\
-ring-fill",cx:"130",cy:"130",r:We,strokeDasharray:kt,strokeDashoffset:kt*(1-_e)})]}):null,e.jsxs("div",{className:"ft-t\
ime-wrap",children:[e.jsx("div",{className:"ft-time",children:le(b)}),e.jsx("div",{className:"ft-taskline",children:vt?vt.
title:F==="focus"?"Pick a task or just focus":"Rest up"})]})]}),t.clockOnly===!0?e.jsxs("div",{className:"ft-clockonly-t\
ools",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact ft-clockonly-exit","aria-label":"Show timer\
 controls",onPointerDown:c=>c.stopPropagation(),onClick:()=>B({clockOnly:!1}),children:"Show controls"}),e.jsx("button",
{type:"button",className:"ft-clock-resize","aria-label":"Drag to resize the clock",onPointerDown:f("resize"),children:"⤡"})]}):
null,t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(_e*100)}%`}})}):null,t.clockOnly!==!0?e.jsxs("div",{className:"ft-controls",children:[e.jsx("button",{type:"button",
className:"ft-primary",onClick:()=>L?ye():ge(),children:L?"Pause":b<P[F]?"Resume":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost",onClick:ke,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:Ee,children:"\
Skip"})]}):null,t.clockOnly!==!0&&t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R reset · S\
 skip · M minimize · F fullscreen"}):null]}),r?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-label":"Mi\
nimized timer",children:[e.jsx("span",{className:"ft-compactphase",children:oe[F]}),e.jsx("span",{className:"ft-compactt\
ime",children:le(b)}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":L?"Pause":"Start",onClick:()=>L?
ye():ge(),children:L?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>U(!1),children:"⤢"})]}):null,A==="profile"?e.jsx(Qs,{onClose:()=>z("none")}):null,e.jsx(Xs,{}),as?e.jsx(On,
{tasksState:y,setTasksState:w,week:gs,ready:xs,savedMessage:k.message||N.message||"",onClose:()=>z("none")}):null,is?e.jsx(
Un,{settings:t,patch:B,bgStatus:es,soundStatus:ts,lastBgSrcRef:De,lastSndSrcRef:Oe,resolveLinkBg:rt,resolveCustomSound:lt,
uploadBg:ds,uploadSound:us,previewAlarm:fs,requestNotifications:ms,notificationsSupported:ks,wakeLockSupported:vs,onResetSettings:ps,
savedMessage:n.message||"",onClose:()=>z("none"),savedLinks:$,onSaveLink:I,onRemoveLink:_}):null,xt?Ss.createPortal(e.jsxs(
"div",{className:"ft-pip",children:[e.jsx("div",{className:"ft-pip-phase",children:oe[F]}),e.jsx("div",{className:"ft-pi\
p-time",children:le(b)}),e.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(_e*100)}%`}})}),e.jsxs("div",{className:"ft-pip-btns",children:[e.jsx("button",{type:"button",className:"ft-primar\
y is-compact",onClick:()=>L?ye():ge(),children:L?"Pause":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:ke,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Ee,children:"\
Skip"})]})]}),xt.document.body):null,t.musicOpen!==!1?e.jsx(Tn,{settings:t,patch:B,spotifySrc:ws,onOpenSettings:ls}):null]})}
Ns(document.getElementById("root")).render(e.jsx(_n,{}));
