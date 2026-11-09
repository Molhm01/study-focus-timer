import{R as G,j as e,r as a,a as Cs,c as Ms}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").
relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulep\
reload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName===
"LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&
(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const Es={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function Q({x:t,y:s,r:n,fill:i}){const o=[];for(let l=0;l<10;l++){
const f=Math.PI/5*l-Math.PI/2,p=l%2===0?n:n*.45;o.push(`${(t+p*Math.cos(f)).toFixed(1)},${(s+p*Math.sin(f)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function Rs({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#123f3a",opacity:"0.7"})]});case"star":return e.jsxs("g",{children:[e.jsx(Q,{x:48,y:48,r:30,fill:"#ffd166"}),e.jsx("circ\
le",{cx:"40",cy:"46",r:"3.4",fill:"#5c4400"}),e.jsx("circle",{cx:"56",cy:"46",r:"3.4",fill:"#5c4400"}),e.jsx("path",{d:"\
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
#8fa3d9"})]})}}function Ls({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(Q,{x:14,y:22,r:4,fill:"#\
ffe9a8"}),e.jsx(Q,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(Q,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(Q,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(Q,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(Q,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function As({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(Q,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(Q,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function Is({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
fill:"none",stroke:"#e05d7a",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("rect",{x:"19",y:"40",width:"10",height:"16",
rx:"5",fill:"#e05d7a"}),e.jsx("rect",{x:"67",y:"40",width:"10",height:"16",rx:"5",fill:"#e05d7a"})]});case"beanie":return e.
jsxs("g",{children:[e.jsx("path",{d:"M23 34 a25 22 0 0 1 50 0 z",fill:"#5b8def"}),e.jsx("rect",{x:"21",y:"32",width:"54",
height:"9",rx:"4.5",fill:"#7ba4f4"}),e.jsx("circle",{cx:"48",cy:"11",r:"5",fill:"#dce7ff"})]});case"halo":return e.jsx("\
ellipse",{cx:"48",cy:"12",rx:"16",ry:"4.6",fill:"none",stroke:"#ffe08a",strokeWidth:"3.4"});case"crown":return e.jsxs("g",
{children:[e.jsx("polygon",{points:"30,30 33,12 42,22 48,8 54,22 63,12 66,30",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4",strokeLinejoin:"round"}),e.jsx("rect",{x:"29",y:"29",width:"38",height:"6",rx:"3",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4"}),e.jsx("circle",{cx:"48",cy:"18",r:"2.4",fill:"#e05d7a"})]});case"wizard":return e.jsxs("g",{children:[e.jsx("poly\
gon",{points:"48,2 30,34 66,34",fill:"#5a4a8a"}),e.jsx("polygon",{points:"40,20 48,2 52,12",fill:"#6d5ba6"}),e.jsx("elli\
pse",{cx:"48",cy:"34",rx:"27",ry:"5.4",fill:"#4a3d75"}),e.jsx(Q,{x:44,y:22,r:2.6,fill:"#ffe08a"})]});case"laurel":return e.
jsxs("g",{fill:"none",stroke:"#7fb069",strokeWidth:"3",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 36 q6 -16 22\
 -20"}),e.jsx("path",{d:"M70 36 q-6 -16 -22 -20"}),e.jsx("path",{d:"M32 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 \
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function Ps({frame:t}){const s=Es[t];return s?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const Ct=G.memo(function({spec:s,size:n=96}){return e.jsxs("svg",{width:n,
height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(Ls,{aura:s.aura}),e.jsx(Rs,{base:s.base}),e.jsx(As,{eyes:s.eyes}),e.jsx(Is,{hat:s.hat}),
e.jsx(Ps,{frame:s.frame})]})}),$s=2,Ts=25,Ds=15;function Mt(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Os(t,s,n){var E,I,R;const i=t.days||{};let o=0,l=0,
f=0,p=0;const m=Object.keys(i).sort();for(const D of m){const N=i[D];N&&(o+=N.focusSec||0,l+=N.sessions||0,(N.focusSec||
0)>f&&(f=N.focusSec||0),(N.sessions||0)>0&&p++)}let h=0;const x=new Date;for((((E=i[Mt(x)])==null?void 0:E.sessions)||0)>
0||x.setDate(x.getDate()-1);(((I=i[Mt(x)])==null?void 0:I.sessions)||0)>0;)h++,x.setDate(x.getDate()-1);let w=0,v=0,S=null;
for(const D of m){if(!((((R=i[D])==null?void 0:R.sessions)||0)>0))continue;const N=new Date(D+"T12:00:00");S?v=Math.round(
(N.getTime()-S.getTime())/864e5)===1?v+1:1:v=1,v>w&&(w=v),S=N}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:h,bestStreak:w,bestDayMin:Math.round(f/60),activeDays:p}}function Fs(t){return t.totalFocusMin*$s+t.totalSessions*
Ts+t.totalTasksCompleted*Ds}function Ve(t){return 100+50*(t-1)}function Us(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=Ve(s);)n-=Ve(s),s++;const i=Ve(s);return{level:s,xp:t,intoLevel:n,needed:i,progress:i>0?n/i:0}}const Et=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function _s(t){let s=Et[0].name;for(const n of Et)t>=n.level&&(s=n.name);return s}const tt=[{id:"none-hat",slot:"\
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
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function Ws(t,s){return s>=
t.level}function zs(t){return tt.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const Bs=[{id:"moon",name:"\
Moon"},{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},
{id:"sprout",name:"Sprout"},{id:"blob",name:"Blob"}],Rt=[{id:"first-session",name:"First steps",desc:"Complete your firs\
t focus session",unlocked:t=>t.totalSessions>=1},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessi\
ons",unlocked:t=>t.totalSessions>=10},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.totalTasksCompleted>=5},{id:"ta\
sks-25",name:"Task master",desc:"Finish 25 tasks",unlocked:t=>t.totalTasksCompleted>=25},{id:"streak-3",name:"Hat trick",
desc:"Study 3 days in a row",unlocked:t=>t.bestStreak>=3},{id:"streak-7",name:"Full week",desc:"Study 7 days in a row",unlocked:t=>t.
bestStreak>=7},{id:"streak-30",name:"Unstoppable",desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30},{id:"hour-\
day",name:"Solid hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60},{id:"deep-day",name:"Deep work d\
ay",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180},{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 \
total focus hours",unlocked:t=>t.totalFocusMin>=600},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus\
 hours",unlocked:t=>t.totalFocusMin>=6e3}];function Lt(t){if(t<60)return`${t} min`;const s=Math.floor(t/60),n=t%60;return n?
`${s}h ${n}m`:`${s}h`}const qs="sft:ft-stats.v1",Wt="sft:ft-tasks.v1",Vs="sft:ft-session.v1",zt="sft:ft-profile.v1",nt="\
sft:ft-progress-ledger.v1";function at(){const t=me(nt);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function Bt(t){const s=at();let n=!1;s.migratedAt===
null&&(s.migratedAt=Date.now(),n=!0);for(const i of t.tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in s.tasks)&&
(s.tasks[i.id]=Date.now(),n=!0);if(n)try{window.localStorage.setItem(nt,JSON.stringify(s))}catch{}return s}function At(){
const t=me(Wt)||{tasks:[]};Bt(t)}function Ks(t){if(!t)return;const s=at();let n=!1;if(s.migratedAt===null&&(s.migratedAt=
Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.now(),n=!0),n)try{window.localStorage.setItem(nt,JSON.stringify(s))}catch{}}
const Ys={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function me(t){
try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{return null}}function Gs(){const t=me(zt);return{
...Ys,...t||{}}}function It(t){try{window.localStorage.setItem(zt,JSON.stringify(t))}catch{}}function Hs(){const t=me("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function Pt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function qt(){const t=me(Vs);return!!(t&&t.running&&t.phase==="focu\
s")}function Zs(t){const[s,n]=a.useState(0),[i,o]=a.useState(()=>Gs()),[l,f]=a.useState(()=>Hs()),[p,m]=a.useState("");a.
useEffect(()=>{const y=()=>n(k=>k+1),j=window.setInterval(y,2e3);return window.addEventListener("focus",y),window.addEventListener(
"sft:progress",y),()=>{window.clearInterval(j),window.removeEventListener("focus",y),window.removeEventListener("sft:pro\
gress",y)}},[t]);const h=a.useMemo(()=>me(qs)||{days:{}},[s]),x=a.useMemo(()=>me(Wt)||{tasks:[],activeId:null},[s]),[w,v]=a.
useState(()=>at());a.useEffect(()=>{v(Bt(x))},[x]);const S=a.useMemo(()=>Os(h,x,Object.keys(w.tasks).length),[h,x,w]),E=a.
useMemo(()=>Us(Fs(S)),[S]),I=a.useCallback(y=>{o(j=>{const k={...j,...y,updatedAt:Date.now()};try{It(k)}catch{m("This br\
owser blocked saving. Profile changes last until the tab closes.")}return k})},[]),R=a.useCallback(y=>{o(()=>{try{It(y)}catch{}
return y})},[]),D=a.useCallback(y=>{f(j=>{const k={...j,seenAchievements:Array.from(new Set([...j.seenAchievements,...y]))};
return Pt(k),k})},[]),N=a.useCallback(y=>{f(j=>{const k={...j,celebratedLevel:Math.max(j.celebratedLevel,y)};return Pt(k),
k})},[]);return{ready:!0,snapshot:S,levelInfo:E,profile:i,setProfile:I,replaceProfile:R,meta:l,markAchievementsSeen:D,celebrateLevel:N,
storageMessage:p}}const Te={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},K=!!(Te.apiKey&&Te.databaseURL&&
Te.authDomain),Ke="10.14.1",Ye={app:`https://www.gstatic.com/firebasejs/${Ke}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${Ke}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Ke}/firebase-database.js`};let Se=null;
function Ge(t){return new Function("u","return import(u)")(t)}function fe(){if(!Se){const t=Promise.all([Ge(Ye.app),Ge(Ye.
auth),Ge(Ye.database)]).then(([s,n,i])=>{const o=s.initializeApp(Te);return{auth:n.getAuth(o),db:i.getDatabase(o),authApi:n,
dbApi:i}});t.catch(()=>{Se===t&&(Se=null)}),Se=t}return Se}function Xs(){const[t,s]=a.useState(K?"loading":"off"),[n,i]=a.
useState(null),[o,l]=a.useState("");a.useEffect(()=>{if(!K)return;let m,h=!0;return fe().then(({auth:x,authApi:w})=>{h&&
(m=w.onAuthStateChanged(x,v=>{h&&(v?(i({uid:v.uid,name:v.displayName||(v.isAnonymous?"Guest":"Scholar"),email:v.email||null,
anonymous:!!v.isAnonymous}),s("signed-in")):(i(null),s("signed-out")))}))}).catch(()=>{h&&(s("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{h=!1,m&&m()}},[]);const f=a.useCallback(()=>{
K&&(l(""),fe().then(({auth:m,authApi:h})=>h.signInWithPopup(m,new h.GoogleAuthProvider)).catch(m=>{m&&(m.code==="auth/po\
pup-closed-by-user"||m.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),p=a.useCallback(()=>{K&&fe().then(({auth:m,authApi:h})=>h.signOut(m)).catch(()=>{})},[]);return{status:t,
user:n,error:o,signInWithGoogle:f,signOut:p}}async function Js(t){if(!K)return null;const{db:s,dbApi:n}=await fe(),i=await n.
get(n.child(n.ref(s),`profiles/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function $t(t,s){if(!K)return;const{db:n,dbApi:i}=await fe();
await i.set(i.ref(n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,
updatedAt:s.updatedAt})}function Vt(t,s){const[n,i]=a.useState(null),[o,l]=a.useState(K?"connecting":"off"),f=a.useRef(t);
return f.current=t,a.useEffect(()=>{if(!K||!s){l("off"),i(null);return}let p=!0,m;return l("connecting"),(async()=>{try{
const{auth:h,db:x,authApi:w,dbApi:v}=await fe();let S=h.currentUser;if(S||(S=(await w.signInAnonymously(h)).user),!p)return;
const E=v.ref(x,`presence/${S.uid}`),I=()=>v.set(E,{studying:f.current,ts:Date.now()}).catch(()=>{});await I(),v.onDisconnect(
E).remove().catch(()=>{});const R=window.setInterval(I,3e4),D=v.onValue(v.ref(x,"presence"),N=>{if(!p)return;const y=Date.
now();let j=0;const k=N&&N.val?N.val():{};for(const P of Object.keys(k||{})){const $=k[P];$&&$.studying===!0&&typeof $.ts==
"number"&&y-$.ts<9e4&&j++}i(j),l("live")},()=>{p&&l("error")});m=()=>{window.clearInterval(R),D&&D(),v.remove(E).catch(()=>{})}}catch{
p&&l("error")}})(),()=>{p=!1,m&&m()}},[s]),a.useEffect(()=>{!K||!s||o!=="live"||fe().then(({auth:p,db:m,dbApi:h})=>{const x=p.
currentUser;x&&h.set(h.ref(m,`presence/${x.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,
status:o}}function Qs(){const[t,s]=a.useState(!1);return a.useEffect(()=>{At();const n=()=>At(),i=window.setInterval(n,15e3);
if(!K)return()=>window.clearInterval(i);const o=()=>s(qt());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(i)}},[]),Vt(t,K),null}const en=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],tn=G.memo(function({onClose:s}){const n=Zs(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:f,replaceProfile:p,meta:m}=n,h=Xs(),[x,w]=a.useState(!1);a.useEffect(()=>{if(!K)return;const g=()=>w(qt());g();
const T=window.setInterval(g,5e3);return()=>window.clearInterval(T)},[]);const v=Vt(x,K),[S,E]=a.useState(!1),[I,R]=a.useState(
""),[D,N]=a.useState(""),y=a.useRef("");a.useEffect(()=>{if(!K||h.status!=="signed-in"||!h.user||h.user.anonymous)return;
const g=h.user.uid;y.current!==g&&(y.current=g,Js(g).then(T=>{T&&T.updatedAt>l.updatedAt?(p(T),N("Profile synced from yo\
ur account.")):$t(g,l).then(()=>N("Profile saved to your account.")).catch(()=>N("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>N("Could not sync right now; your local profile is safe.")))},[h.status,h.user]),a.useEffect(
()=>{if(!K||h.status!=="signed-in"||!h.user||h.user.anonymous||!l.updatedAt)return;const g=window.setTimeout(()=>{$t(h.user.
uid,l).catch(()=>N("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(g)},[l.
updatedAt,h.status,h.user]);const j=o.level,k=_s(j),$=a.useMemo(()=>Rt.filter(g=>g.unlocked(i)),[i]).filter(g=>!m.seenAchievements.
includes(g.id)),O=j>m.celebratedLevel,U=zs(j),z=()=>{const g=I.trim().slice(0,24);f({name:g}),E(!1)},B=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:s,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(Ct,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[S?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:I,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:g=>R(g.target.value),onKeyDown:g=>{g.key==="E\
nter"&&z(),g.key==="Escape"&&E(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:z,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{R(l.name),E(!0)},children:[
B," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:k}),v.status==="live"&&v.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",v.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${j}`,children:["Lv ",j]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${j}, ${o.intoLevel} of ${o.needed} experience toward level ${j+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),O?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",j," reached - ",k,"!",U.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>n.celebrateLevel(j),children:"Nice"})]}):null,$.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",$.map(g=>g.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>n.markAchievementsSeen($.map(g=>g.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Lt(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Lt(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:Bs.map(g=>e.jsx("button",{type:"button",title:g.name,"aria-label":`Avatar ${g.name}`,
className:`pf-basebtn ${l.base===g.id?"is-active":""}`,onClick:()=>f({base:g.id}),children:e.jsx(Ct,{spec:{...l,base:g.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},g.id))}),en.map(({slot:g,label:T})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:T}),e.jsx("div",{className:"pf-gear",children:tt.filter(u=>u.
slot===g).map(u=>{const C=Ws(u,j),W=l[g]===u.id||u.id.startsWith("none")&&!tt.some(L=>L.slot===g&&l[g]===L.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${W?"is-active":""} ${C?"":"is-locked"}`,title:C?u.name:`${u.name} - ${u.
hint}`,onClick:()=>{C&&f({[g]:u.id})},children:C?u.name:`🔒 ${u.name} · Lv ${u.level}`},u.id)})})]},g)),U.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",U[0].name," at level ",U[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:Rt.
map(g=>{const T=g.unlocked(i);return e.jsxs("li",{className:T?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:T?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:g.
name}),e.jsx("span",{children:g.desc})]})]},g.id)})}),e.jsx("h3",{children:"Account"}),K?e.jsxs(e.Fragment,{children:[h.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,h.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:h.signInWithGoogle,children:"Sign in with Google"}):null,h.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,h.status==="signed-in"&&h.user?e.jsx("div",{className:"\
pf-account",children:h.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:h.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[h.user.name,h.user.
email?` · ${h.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:h.signOut,children:"\
Sign out"})]})}):null,h.error?e.jsx("p",{className:"ft-field-hint",children:h.error}):null,D?e.jsx("p",{className:"ft-fi\
eld-hint",children:D}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),n.storageMessage?e.jsx("p",{className:"ft-field-hint",children:n.storageMessage}):null]})});
function ke(t,s){const[n,i]=a.useState(s),[o,l]=a.useState(!1),[f,p]=a.useState("");a.useEffect(()=>{try{const h=window.
localStorage.getItem("sft:"+t);if(h!=null){const x=JSON.parse(h),w=s!==null&&typeof s=="object"&&!Array.isArray(s)&&x!==
null&&typeof x=="object"&&!Array.isArray(x)?{...s,...x}:x;i(w)}}catch{p("Saved data on this browser could not be read.")}
l(!0)},[t]);const m=a.useCallback(h=>{i(x=>{const w=typeof h=="function"?h(x):h;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(w))}catch{p("This browser blocked saving. Changes last until the tab closes.")}return w})},[t]);return[n,
m,{ready:o,message:f}]}const sn={v2cat:["images/images/v2cat-0.txt","images/images/v2cat-1.txt"],longer:["images/images/\
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
talog-6.txt"]},He={};function it(t){return He[t]||(He[t]=Promise.all(sn[t].map(async s=>{const n=await fetch(s);if(!n.ok)
throw Error("Image unavailable");return n.text()})).then(s=>"data:image/jpeg;base64,"+s.join("").replace(/\s/g,"")))}function nn(t){
const[s,n]=a.useState("");return a.useEffect(()=>{let i=!0;return it(t).then(o=>{i&&n(o)}).catch(()=>{}),()=>{i=!1}},[t]),
s}const an={rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk\
.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-oce\
an.jpg"},on={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-des\
k.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-oc\
ean.jpg"},Tt=Object.fromEntries(Object.keys(an).map(t=>[t,()=>it(t).then(s=>({default:s}))])),Dt=Object.fromEntries(Object.
keys(on).map(t=>[t,()=>it("thumb-"+t).then(s=>({default:s}))])),Ze={},Xe={},Je={focusMin:25,shortMin:5,longMin:15,longEvery:4,
autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,
notifications:!1,keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,
accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,clockOnly:!1,spotify:null,
spotifyOpen:!1,musicOpen:!0,musicMode:"radio",radio:{index:0,playing:!1,volume:.7}},rn=[{id:"rain",name:"Rainy window"},
{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountains",name:"Moun\
tains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],ln=[{id:"#101418",name:"\
Ink"},{id:"#16213a",name:"Midnight"},{id:"#122b21",name:"Forest"},{id:"#2e1a33",name:"Plum"},{id:"#33191f",name:"Wine"},
{id:"#232a30",name:"Slate"},{id:"#3a2e1e",name:"Cocoa"},{id:"#d8cfc0",name:"Paper"}],ee=[{id:"chillhop-jazz",title:"Chil\
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
://cdn.pixabay.com/audio/2026/07/15/21-18-58-754_200x200.jpg",seconds:137}];function Ot(t){const s=t.replace("#",""),n=parseInt(
s.slice(0,2),16)/255,i=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255,l=Math.max(n,i,o),f=Math.min(n,i,o),
p=(l+f)/2;if(l===f)return{h:0,s:0,l:p};const m=l-f,h=p>.5?m/(2-l-f):m/(l+f);let x=0;return l===n?x=(i-o)/m+(i<o?6:0):l===
i?x=(o-n)/m+2:x=(n-i)/m+4,{h:x*60,s:h,l:p}}function Qe(t,s,n){const i=o=>{const l=(o+t/30)%12,f=s*Math.min(n,1-n),p=n-f*
Math.max(-1,Math.min(l-3,9-l,1));return Math.round(p*255).toString(16).padStart(2,"0")};return`#${i(0)}${i(8)}${i(4)}`}function cn(t){
const s=t.replace("#","");if(!/^[0-9a-f]{6}$/i.test(s))return 0;const n=i=>{const o=parseInt(s.slice(i,i+2),16)/255;return o<=
.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)};return .2126*n(0)+.7152*n(2)+.0722*n(4)}const ot=[{id:"lofi-246243",name:"W\
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
.mp4",tile:19,preview:"v2cat",duration:64}],dn=new Map(ot.map(t=>[t.id,t]));function un(t,s){const n=f=>t.replace(/_(tiny|small|medium|large)\.mp4/,
f),i=[n("_medium.mp4"),n("_large.mp4"),n("_small.mp4"),n("_tiny.mp4")],o=[...new Set(i)],l=n(s?"_small.mp4":"_medium.mp4");
return[l,...o.filter(f=>f!==l)]}function Ft(t){var n;return((n=window.__SFT_POSTERS)==null?void 0:n[t.id])||t.poster}const fn={
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
er-garden-l.mp4","water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},Kt=(t,s,n)=>`\
scenes/${fn[`${t}-${s}.${n}`]}`,mn=(t,s)=>Kt(t.id,s,"jpg"),pn=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"S\
ky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"\
Violet",value:"#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],Yt=[{id:"sans",name:"Sans",css:"system-ui, -apple-sy\
stem, 'Segoe UI', Roboto, sans-serif"},{id:"serif",name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"\
Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, \
sans-serif"}],hn=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",bg:{kind:"color",id:"#101418"}},{id:"dusk",name:"D\
usk",accent:"#ffcf99",font:"serif",bg:{kind:"color",id:"#3b2f4a"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",
bg:{kind:"color",id:"#0f2e25"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"color",id:"#4a2f3d"}}],gn=[
{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Wo\
odblock"},{id:"custom",name:"My sound"}],Gt=[{id:"none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"\
storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"\
forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",
name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"\
wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown n\
oise"},{id:"white",name:"White noise"}],Ht=[{id:"lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9\
xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",
name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"}],te={focus:"Focus",short:"Short br\
eak",long:"Long break"};let Ne=null;function De(){return Ne||(Ne=new(window.AudioContext||window.webkitAudioContext)),Ne.
state==="suspended"&&Ne.resume(),Ne}function oe(t,s,n){const i=t.createOscillator(),o=t.createGain();i.type=n.type||"sin\
e",i.frequency.value=n.freq,o.gain.setValueAtTime(1e-4,n.start),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),
n.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),i.connect(o),o.connect(s),i.start(n.start),i.stop(
n.start+n.dur+.05)}function Ce(t,s,n){const i=De(),o=i.createGain();o.gain.value=s,o.connect(i.destination);const l=n?2:
1,f=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let p=0;p<l;p++){const m=i.currentTime+.02+p*(f+.35);if(t==="bell")[[660,.5],[
1320,.28],[1760,.14],[2240,.07]].forEach(([h,x])=>oe(i,o,{freq:h,start:m,dur:2.2,gain:x}));else if(t==="chime")oe(i,o,{freq:783.99,
start:m,dur:1.3,gain:.4}),oe(i,o,{freq:1046.5,start:m+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,.42],[294,.24],[392,
.17],[523,.09]].forEach(([h,x])=>oe(i,o,{freq:h,start:m,dur:3.4,gain:x}));else if(t==="beep")for(let h=0;h<3;h++)oe(i,o,
{freq:880,type:"square",start:m+h*.3,dur:.16,gain:.22});else t==="wood"&&(oe(i,o,{freq:1400,type:"triangle",start:m,dur:.07,
gain:.5}),oe(i,o,{freq:1400,type:"triangle",start:m+.22,dur:.07,gain:.4}))}}function yn(t){const s=De(),n=s.createGain();
n.gain.value=.35*t,n.connect(s.destination),oe(s,n,{freq:1800,start:s.currentTime,dur:.035,gain:.5})}function xn(t,s){const n=2*
t.sampleRate,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);let l=0;for(let f=0;f<n;f++){const p=Math.random()*
2-1;s==="brown"?(l=(l+.02*p)/1.02,o[f]=l*3.2):o[f]=p}return i}const bn={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
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
"sounds/stream-5.txt"]},Pe={};let Ut=!1;function kn(t,s){return Pe[s]||(Pe[s]=Promise.all((bn[s]||[]).map(async n=>{const i=await fetch(
n);if(!i.ok)throw new Error(`HTTP ${i.status}`);return(await i.text()).trim()})).then(n=>{if(!n.length)throw new Error("\
Recording unavailable");const i=atob(n.join(""));return t.decodeAudioData(Uint8Array.from(i,o=>o.charCodeAt(0)).buffer)}).
catch(n=>{throw delete Pe[s],n})),Pe[s]}function vn(t,s){if(t==="none")return null;const n=Gt.find(p=>p.id===t),i=De(),o=i.
createGain();if(o.gain.value=s,o.connect(i.destination),n!=null&&n.file){let p=!1,m=null;return kn(i,n.file).then(h=>{p||
(m=i.createBufferSource(),m.buffer=h,m.loop=!0,m.connect(o),m.start())}).catch(()=>{}),()=>{p=!0;try{m==null||m.stop()}catch{}
try{o.disconnect()}catch{}}}const l=i.createBufferSource();l.buffer=xn(i,t==="white"?"white":"brown"),l.loop=!0;let f=l;
if(t==="brown"){const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=900,f.connect(p),f=p}return f.connect(
o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function jn(t){return/^https:\/\/.+/i.test(t.trim())}async function st(t){
const s=await fetch(t);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.blob()}async function _t(t){try{const s=await st(
t);if(s.type.startsWith("image/"))return s;throw new Error("not an image")}catch{const s=`https://images.weserv.nl/?url=${encodeURIComponent(
t.replace(/^https?:\/\//,""))}`,n=await st(s);if(!n.type.startsWith("image/"))throw new Error("not an image");return n}}
async function wn(t){var f;const s=t.trim();if(/pin\.it\//i.test(s))throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let i=s;if(n){const p=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!p.ok)throw new Error("pin lookup failed");const m=await p.json();if((m==null?void 0:m.status)!=="success"||!Array.isArray(
m==null?void 0:m.data)||m.data.length===0)throw new Error("pin unavailable");const h=(f=m.data[0])==null?void 0:f.images;
if(!h)throw new Error("pin has no image");const x=h.originals||h["736x"]||h["564x"]||h["236x"];if(!(x!=null&&x.url))throw new Error(
"pin has no image");i=x.url}const o=i.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{const p=`${o[1]}\
/originals${o[2]}`;return{blob:await _t(p),finalUrl:p}}catch{}if(!/^https:\/\//i.test(i))throw new Error("not a link");return{
blob:await _t(i),finalUrl:i}}function Zt(t){const s=Ht.find(o=>o.id===t),i=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const se=({d:t,vb:s=24})=>e.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,i)=>e.jsx("path",{d:n},i))}),Sn="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",Nn="M5 12h14",Cn="M4 6h16|M4 12h16|M4 18h10",Mn="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Xt="M6 6l12 12|M18 6L6 18",En="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function re(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),i=s%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function ve(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function $e({label:t,value:s,min:n,max:i,onChange:o,unit:l}){const f=p=>{const m=parseInt(p,10);Number.
isFinite(m)&&o(Math.min(i,Math.max(n,m)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:i,value:s,onChange:p=>f(p.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,s+1)),children:"\
+"})]})]})}function Z({label:t,hint:s,checked:n,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>i(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const Rn=G.memo(function({scene:s,token:n,
paused:i,animate:o,onReady:l,onFail:f}){const p=a.useRef(null),[m,h]=a.useState(!1),[x,w]=a.useState(0),v=a.useMemo(()=>window.
matchMedia("(max-width: 900px), (orientation: portrait)").matches,[]),S=a.useMemo(()=>s.url?un(s.url,v):[Kt(s.id,"p","mp\
4")],[s,v]),E=S[Math.min(x,S.length-1)],I=a.useRef({paused:i,animate:o});I.current={paused:i,animate:o};const R=a.useRef(
{onReady:l,onFail:f});R.current={onReady:l,onFail:f};const D=a.useRef(null);return a.useEffect(()=>{var N;(N=D.current)==
null||N.call(D)},[i,o]),a.useEffect(()=>{h(!1);const N=p.current;if(!N)return;let y=!1,j=!1,k=0,P=!1,$=!1;const O=L=>L.play().
catch(()=>{}),U=()=>!I.current.paused&&I.current.animate&&!document.hidden,z=()=>{const L=document.createElement("video");
return L.className="ft-bg ft-bgvideo",L.muted=!0,L.playsInline=!0,L.setAttribute("playsinline",""),L.setAttribute("disab\
lepictureinpicture",""),L.setAttribute("disableremoteplayback",""),L.preload="auto",L.src=E,L.setAttribute("aria-hidden",
"true"),L.loop=!s.blend,L},B=()=>{$||j||($=!0,w(L=>L<S.length-1?L+1:(h(!0),u&&(u.remove(),u=null),R.current.onFail(n),L)))};
let g=null;const T=()=>{j||(u&&(u.currentTime=0,u.style.opacity="1",U()&&O(u)),g&&(g.remove(),g=null),y=!1)};let u=z();u.
addEventListener("error",B),u.addEventListener("ended",T),N.appendChild(u);const C=()=>{U()?P&&u&&(O(u),g&&O(g)):(u==null||
u.pause(),g==null||g.pause())};D.current=C;const W=()=>{if(!(j||!u)){if(!P&&u.readyState>=2&&(P=!0,p.current&&(p.current.
style.opacity="1"),R.current.onReady(n),U()&&O(u)),U()&&P){u.paused&&!u.ended&&O(u);const L=s.duration||u.duration,r=Math.
min(1.5,L/4);if(!s.blend)return;if(!y&&Number.isFinite(L)&&u.currentTime>=L-r&&(y=!0,g=z(),g.style.opacity="0",g.style.zIndex=
"2",g.addEventListener("error",()=>{}),N.appendChild(g),g.currentTime=0,O(g)),y&&g&&g.readyState>=2){g.paused&&O(g);const F=Math.
min(1,g.currentTime/r);u.style.opacity=String(1-F),g.style.opacity="1",F>=1&&(u.remove(),u=g,g=null,y=!1,u.addEventListener(
"error",B),u.addEventListener("ended",T),N.dataset.wraps=String(Number(N.dataset.wraps||0)+1))}}(s.blend||!P)&&(k=requestAnimationFrame(
W))}};return k=requestAnimationFrame(W),document.addEventListener("visibilitychange",C),window.addEventListener("pointer\
down",C),()=>{j=!0,cancelAnimationFrame(k),D.current=null,u==null||u.pause(),g==null||g.pause(),u==null||u.remove(),g==null||
g.remove(),document.removeEventListener("visibilitychange",C),window.removeEventListener("pointerdown",C)}},[E]),e.jsx("\
div",{ref:p,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:m&&e.jsx("span",{className:"\
ft-stream-status",children:"This scene could not load right now. Try another background."})},E)}),Ln=G.memo(function({scene:s,
paused:n,animate:i}){const[o,l]=a.useState([{s,key:0}]),[f,p]=a.useState(null),[m,h]=a.useState(null),x=a.useRef(0),w=a.
useRef(o),v=a.useRef(0),S=a.useRef(new Set),E=a.useRef(null),I=k=>{w.current=k,l(k)};a.useEffect(()=>{const k=w.current,
P=k[k.length-1];if(P&&P.s.id===s.id){v.current=P.key;const U=P.key;window.setTimeout(()=>{v.current===U&&E.current===U&&
I(w.current.filter(z=>z.key===U))},400);return}const $=++x.current;h(null),v.current=$;const O=k.filter(U=>S.current.has(
U.key)).slice(-1);I([...O,{s,key:$}])},[s]);const R=a.useCallback(k=>{S.current.add(k),k===v.current&&(E.current=k,p(k),
window.setTimeout(()=>{v.current===k&&I(w.current.filter(P=>P.key===k))},400))},[]),D=a.useCallback(k=>{if(h(k),k!==v.current)
return;const P=w.current.filter(O=>O.key!==k);if(!P.length)return;const $=P[P.length-1];v.current=$.key,I(P),S.current.has(
$.key)?(E.current=$.key,p($.key)):(E.current=null,p(null))},[]),N=f===null||f!==v.current,y=o.some(k=>S.current.has(k.key)),
j=m!==null&&m===v.current;return e.jsxs(e.Fragment,{children:[y?null:e.jsx("div",{className:"ft-bg",style:{backgroundColor:"\
#101418"}}),o.map(k=>e.jsx(Rn,{scene:k.s,token:k.key,paused:n,animate:i,onReady:R,onFail:D},k.key)),N&&!j?e.jsx("div",{className:"\
ft-scene-switching",role:"status","aria-label":"Loading selected background",children:e.jsx("i",{})}):null,m!==null?e.jsxs(
"div",{className:"ft-scene-error",role:"status",children:["Could not load ",s.name,". ",y?"Your previous background is s\
till playing.":"Choose another background to try again."]}):null]})}),An=G.memo(function({kind:s,id:n,scrim:i,builtinSrc:o,
linkBg:l,uploadBg:f,paused:p,animate:m,customFit:h,enhance:x}){let w={};s==="builtin"&&o?w={backgroundImage:`url(${o})`}:
s==="color"?w={backgroundColor:/^#[0-9a-f]{6}$/i.test(n||"")?n:"#101418"}:s==="link"&&(l==null?void 0:l.kind)==="image"?
w={backgroundImage:`url(${l.url})`}:s==="upload"&&(f==null?void 0:f.kind)==="image"?w={backgroundImage:`url(${f.url})`}:
(s==="link"||s==="upload"||s==="builtin")&&(w={backgroundColor:"#101418"}),(s==="link"||s==="upload")&&w.backgroundImage&&
(w={...w,backgroundSize:h,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},x!==!1&&(w={...w,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const v=s==="scene"?dn.get(n)||ot[0]:void 0,S=s==="link"&&(l==null?void 0:l.kind)===
"video"?l.url:s==="upload"&&(f==null?void 0:f.kind)==="video"?f.url:null,E=s==="color"?Math.max(i,Math.min(.78,Math.pow(
cn(n||"#101418"),1.15)*.9)):i;return e.jsxs(e.Fragment,{children:[v?e.jsx(Ln,{scene:v,paused:!!p,animate:m}):S?e.jsx(In,
{src:S,paused:!!p,animate:m,fit:h}):e.jsx("div",{className:"ft-bg",style:w}),e.jsx("div",{className:"ft-scrim",style:{opacity:E}}),
e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharp\
en",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),In=G.memo(function({
src:s,paused:n,animate:i,fit:o}){const l=a.useRef(null);return a.useEffect(()=>{const f=l.current;if(!f)return;const p=()=>{
n||!i||document.hidden?f.pause():f.play().catch(()=>{})};p();const m=()=>{!n&&i&&!document.hidden&&f.play().catch(()=>{})};
return document.addEventListener("visibilitychange",p),window.addEventListener("pointerdown",m),()=>{document.removeEventListener(
"visibilitychange",p),window.removeEventListener("pointerdown",m)}},[n,i,s]),i?e.jsx("video",{ref:l,className:"ft-bg ft-\
bgvideo",style:{objectFit:o,backgroundColor:"#101418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",
"aria-hidden":"true"}):null}),Pn=G.memo(function({scene:s,active:n,onPick:i}){const o=nn(s.preview||"catalog"),l=s.preview===
"v2cat"?5:s.preview==="curated"?3:8,f=s.preview==="v2cat"?4:s.preview==="curated"?3:13;return e.jsxs("button",{type:"but\
ton",className:`ft-bgswatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${s.name} animated scene`,onClick:i,children:[
Ft(s)?e.jsx("img",{className:"ft-bgswatch-img",src:Ft(s),alt:"",loading:"lazy",decoding:"async"}):s.tile!=null?e.jsx("sp\
an",{className:"ft-bgswatch-img",style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}% ${f*100}%`,backgroundPosition:`${s.
tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*100/(f-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:mn(s,"p"),alt:"",
loading:"lazy",decoding:"async"}),e.jsx("span",{className:"ft-bgswatch-name",children:s.name})]})}),$n=G.memo(function({
id:s,name:n,active:i,onPick:o}){const[l,f]=a.useState(Xe[s]||null);return a.useEffect(()=>{let p=!0;return!Xe[s]&&Dt[s]&&
Dt[s]().then(m=>{Xe[s]=m.default,p&&f(m.default)}).catch(()=>{}),()=>{p=!1}},[s]),e.jsx("button",{type:"button",className:`\
ft-bgswatch ${i?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:o})}),Tn=G.memo(function({
color:s,onChange:n}){const o=a.useRef(null),l=/^#[0-9a-f]{6}$/i.test(s)?s:"#101418",f=Ot(l),[p,m]=a.useState(f.l);a.useEffect(
()=>{m(Ot(/^#[0-9a-f]{6}$/i.test(s)?s:"#101418").l)},[s]),a.useEffect(()=>{var R;const v=(R=o.current)==null?void 0:R.getContext(
"2d");if(!v)return;const S=v.createImageData(168,168),E=S.data,I=168/2;for(let D=0;D<168;D++)for(let N=0;N<168;N++){const y=N-
I+.5,j=D-I+.5,k=Math.sqrt(y*y+j*j)/I,P=(D*168+N)*4;if(k>1){E[P+3]=0;continue}const $=(Math.atan2(j,y)*180/Math.PI+360)%360,
O=Qe($,k,p);E[P]=parseInt(O.slice(1,3),16),E[P+1]=parseInt(O.slice(3,5),16),E[P+2]=parseInt(O.slice(5,7),16),E[P+3]=255}
v.putImageData(S,0,0)},[p]);const h=v=>{var N;const S=(N=o.current)==null?void 0:N.getBoundingClientRect();if(!S)return;
const E=v.clientX-S.left-S.width/2,I=v.clientY-S.top-S.height/2,R=Math.min(1,Math.sqrt(E*E+I*I)/(S.width/2)),D=(Math.atan2(
I,E)*180/Math.PI+360)%360;n(Qe(D,R,p))},x=f.h*Math.PI/180,w=f.s*(168/2);return e.jsxs("div",{className:"ft-wheelwrap",children:[
e.jsxs("span",{className:"ft-wheelbox",children:[e.jsx("canvas",{ref:o,width:168,height:168,className:"ft-wheel","aria-l\
abel":"Color wheel: drag to pick a background color",onPointerDown:v=>{v.target.setPointerCapture(v.pointerId),h(v)},onPointerMove:v=>{
v.buttons&1&&h(v)}}),e.jsx("span",{className:"ft-wheel-dot",style:{left:168/2+Math.cos(x)*w,top:168/2+Math.sin(x)*w,background:l}})]}),
e.jsxs("span",{className:"ft-wheel-side",children:[e.jsx("span",{className:"ft-wheel-preview",style:{background:l},children:l}),
e.jsx("input",{type:"range",min:.05,max:.95,step:.01,value:p,"aria-label":"Color lightness",onChange:v=>{const S=parseFloat(
v.target.value);m(S),n(Qe(f.h,f.s,S))}}),e.jsx("span",{className:"ft-field-hint",children:"Drag the wheel for hue, slide\
 for lightness. Light colors are dimmed behind the timer so text stays readable."})]})]})});function Dn(t){return t.kind!==
"image"||!t.thumb?"":`https://images.weserv.nl/?url=${encodeURIComponent(t.thumb.replace(/^https?:\/\//,""))}&w=200&h=20\
0&fit=cover&q=70`}function et(t){try{const s=new URL(t);if(/pinterest\./i.test(s.host))return"Pinterest pin";const n=decodeURIComponent(
s.pathname.split("/").pop()||"");return n.length>4&&/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(n)?n.slice(0,26):
s.host.replace(/^www\./,"")}catch{return"Saved link"}}const On=G.memo(function({link:s,active:n,onPick:i,onRemove:o}){const l=Dn(
s);return e.jsxs("span",{className:`ft-bgswatch ft-bgswatch-named ft-linksw ${n?"is-active":""}`,children:[e.jsxs("butto\
n",{type:"button",className:"ft-linksw-pick","aria-label":`Use saved background ${et(s.source)}`,onClick:i,children:[s.kind===
"video"?e.jsx("video",{className:"ft-bgswatch-img",src:s.source,muted:!0,playsInline:!0,preload:"metadata"}):l?e.jsx("im\
g",{className:"ft-bgswatch-img",src:l,alt:"",loading:"lazy",decoding:"async"}):null,e.jsx("span",{className:"ft-bgswatch\
-name",children:et(s.source)})]}),e.jsx("button",{type:"button",className:"ft-linksw-del","aria-label":`Remove saved bac\
kground ${et(s.source)}`,onClick:o,children:"×"})]})}),Fn=G.memo(function({settings:s,patch:n,spotifySrc:i,onOpenSettings:o}){
const l=s.musicMode==="spotify"?"spotify":"radio",f=s.radio&&typeof s.radio.index=="number"?s.radio:{index:0,playing:!1,
volume:.7},p=ee[Math.min(Math.max(0,f.index),ee.length-1)]||ee[0],m=a.useRef(f);m.current=f;const h=a.useRef(l);h.current=
l;const x=a.useRef(null),[w,v]=a.useState(0),[S,E]=a.useState(""),I=a.useRef(0),[R,D]=a.useState(!1),N=a.useRef(null),[y,
j]=a.useState(()=>{try{const u=window.localStorage.getItem("sft:ft-player-pos.v1");if(u){const C=JSON.parse(u);if(C&&typeof C.
x=="number"&&typeof C.y=="number")return C}}catch{}return null}),k=a.useRef(null),P=(u,C)=>{const W=N.current,L=W?W.offsetWidth:
320,r=W?W.offsetHeight:180;return{x:Math.max(4,Math.min(Math.max(4,window.innerWidth-L-4),u)),y:Math.max(4,Math.min(Math.
max(4,window.innerHeight-r-4),C))}},$=u=>{var W;const C=(W=N.current)==null?void 0:W.getBoundingClientRect();C&&(k.current=
{dx:u.clientX-C.left,dy:u.clientY-C.top},u.currentTarget.setPointerCapture(u.pointerId))},O=u=>{k.current&&j(P(u.clientX-
k.current.dx,u.clientY-k.current.dy))},U=()=>{k.current&&(k.current=null,j(u=>{if(!u)return u;const C=P(u.x,u.y);try{window.
localStorage.setItem("sft:ft-player-pos.v1",JSON.stringify(C))}catch{}return C}))};a.useEffect(()=>{const u=()=>j(C=>C&&
P(C.x,C.y));return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),a.useEffect(()=>{
const u=new Audio;u.preload="none",x.current=u;const C=()=>{const r=u.currentTime||0;v(F=>Math.floor(F)===Math.floor(r)?
F:r)},W=()=>{I.current=0,E(""),n({radio:{...m.current,index:(m.current.index+1)%ee.length,playing:!0}})},L=()=>{!x.current||
x.current.dataset.track!==p.id||(I.current+=1,I.current>=ee.length?(E("Radio tracks cannot load on this connection right\
 now."),n({radio:{...m.current,playing:!1}})):(E("That track could not load - skipped it."),n({radio:{...m.current,index:(m.
current.index+1)%ee.length,playing:!0}})))};return u.addEventListener("timeupdate",C),u.addEventListener("ended",W),u.addEventListener(
"error",L),()=>{u.pause(),u.removeEventListener("timeupdate",C),u.removeEventListener("ended",W),u.removeEventListener("\
error",L),x.current=null}},[]),a.useEffect(()=>{const u=x.current;if(!u)return;const C=l==="radio"&&f.playing;u.dataset.
track!==p.id&&(C||u.dataset.track)&&(u.dataset.track=p.id,u.src=p.url,u.preload="auto",I.current=0,v(0))},[p.id,l,f.playing]),
a.useEffect(()=>{const u=x.current;u&&(u.volume=f.volume,l==="radio"&&f.playing?u.play().catch(()=>{}):u.pause())},[l,f.
playing,f.volume,p.id]),a.useEffect(()=>{const u=()=>{const C=x.current;C&&h.current==="radio"&&m.current.playing&&C.paused&&
C.play().catch(()=>{})};return window.addEventListener("pointerdown",u),()=>window.removeEventListener("pointerdown",u)},
[]),a.useEffect(()=>{l==="spotify"&&m.current.playing&&n({radio:{...m.current,playing:!1}})},[l]);const z=u=>{const C=x.
current;if(!C)return;const W=u.currentTarget.getBoundingClientRect(),L=Math.min(1,Math.max(0,(u.clientX-W.left)/W.width)),
r=Number.isFinite(C.duration)&&C.duration>0?C.duration:p.seconds;C.currentTime=L*r,v(C.currentTime)},B=p.seconds,g=B>0?Math.
min(100,w/B*100):0;return e.jsxs("div",{ref:N,className:`ft-player ${R?"is-mini":""}`,style:y?{left:y.x,top:y.y,right:"a\
uto",bottom:"auto"}:void 0,"data-testid":"music-player",children:[e.jsxs("span",{className:"ft-player-head",title:"Drag \
to move",onPointerDown:$,onPointerMove:O,onPointerUp:U,onPointerCancel:U,children:[e.jsx(se,{d:"M9 6h.01|M15 6h.01|M9 12\
h.01|M15 12h.01|M9 18h.01|M15 18h.01"}),e.jsxs("span",{className:"ft-player-mode",children:[e.jsx("button",{type:"button",
className:`ft-player-modebtn ${l==="radio"?"is-active":""}`,onPointerDown:u=>u.stopPropagation(),onClick:()=>n({musicMode:"\
radio"}),children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-player-modebtn ${l==="spotify"?"is-active":
""}`,onPointerDown:u=>u.stopPropagation(),onClick:()=>n({musicMode:"spotify"}),children:"Spotify"})]}),e.jsx("button",{type:"\
button",className:"ft-player-x","aria-label":R?"Expand player":"Minimize player",onPointerDown:u=>u.stopPropagation(),onClick:()=>D(
u=>!u),children:R?"❐":"–"}),e.jsx("button",{type:"button",className:"ft-player-x","aria-label":"Hide player",onPointerDown:u=>u.
stopPropagation(),onClick:()=>n({musicOpen:!1}),children:"×"})]}),R?e.jsx("div",{className:"ft-player-minrow",children:l===
"radio"?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"ft-player-play is-small","aria-label":f.playing?
"Pause radio":"Play radio",onClick:()=>n({radio:{...f,playing:!f.playing}}),children:f.playing?"❚❚":"▶"}),e.jsx("s\
pan",{className:"ft-player-mintitle",children:p.title})]}):e.jsx("span",{className:"ft-player-mintitle",children:"Spotif\
y player"})}):null,l==="radio"?e.jsxs("div",{className:"ft-player-body",children:[e.jsxs("span",{className:"ft-player-ro\
w",children:[e.jsx("img",{className:"ft-player-cover",src:p.cover,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("span",
{className:"ft-player-meta",children:[e.jsx("span",{className:"ft-player-title",children:p.title}),e.jsxs("span",{className:"\
ft-player-artist",children:[p.artist," · instrumental lofi"]}),e.jsx("span",{className:"ft-player-bar",onClick:z,role:"\
slider","aria-label":"Track progress","aria-valuemin":0,"aria-valuemax":B,"aria-valuenow":Math.round(w),children:e.jsx("\
span",{style:{width:`${g}%`}})}),e.jsxs("span",{className:"ft-player-times",children:[re(w*1e3)," / ",re(B*1e3)]})]})]}),
e.jsxs("span",{className:"ft-player-controls",children:[e.jsx("button",{type:"button",className:"ft-player-btn","aria-la\
bel":"Previous track",onClick:()=>n({radio:{...f,index:(f.index-1+ee.length)%ee.length,playing:!0}}),children:"⏮"}),e.
jsx("button",{type:"button",className:"ft-player-play","aria-label":f.playing?"Pause":"Play",onClick:()=>n({radio:{...f,
playing:!f.playing}}),children:f.playing?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-player-btn","aria-\
label":"Next track",onClick:()=>n({radio:{...f,index:(f.index+1)%ee.length,playing:!0}}),children:"⏭"}),e.jsx("input",
{type:"range",className:"ft-player-vol",min:0,max:1,step:.05,value:f.volume,"aria-label":"Radio volume",onChange:u=>n({radio:{
...f,volume:parseFloat(u.target.value)}})})]}),S?e.jsx("span",{className:"ft-player-status",children:S}):null]}):e.jsx("\
div",{className:"ft-player-body",children:i?e.jsx("iframe",{className:"ft-player-iframe",src:i,width:"100%",height:"152",
frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"\
Spotify player"}):e.jsxs("span",{className:"ft-player-status",children:["Pick a Spotify playlist or paste a Spotify link\
 in Settings. ",e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:o,children:"Open settings"})]})})]})}),
Un=G.memo(function({chip:s,panel:n,fullscreenSupported:i,onFullscreen:o,onTasks:l,onSettings:f,onMinimize:p,onPopout:m,onProfile:h}){
return e.jsxs("header",{className:"ft-topbar",children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),s?e.
jsx("span",{className:"ft-chip",title:"Today's completed focus time",children:s}):null,e.jsxs("span",{className:"ft-topb\
ar-actions",children:[i?e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.
jsx(se,{d:Sn})}):null,e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"\
Open timer in its own window",onClick:m,children:e.jsx(se,{d:En})}),e.jsx("button",{type:"button",className:"ft-iconbtn",
"aria-label":"Minimize to a small timer",title:"Minimize to a small timer",onClick:p,children:e.jsx(se,{d:Nn})}),e.jsx("\
button",{type:"button",className:`ft-iconbtn ${n==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"\
Profile and progress",onClick:h,children:e.jsx(se,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5\
s8 2.5 8 6.5"})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",
onClick:l,children:e.jsx(se,{d:Cn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,
"aria-label":"Settings",onClick:f,children:e.jsx(se,{d:Mn})})]})]})}),_n=G.memo(function({tasksState:s,setTasksState:n,week:i,
ready:o,savedMessage:l,onClose:f}){const[p,m]=a.useState(""),[h,x]=a.useState(1),[w,v]=a.useState(null),[S,E]=a.useState(
""),I=s.tasks,R=y=>{const j=S.trim();v(null),j&&n(k=>({...k,tasks:k.tasks.map(P=>P.id===y?{...P,title:j}:P)}))},D=Math.max(
1,...i.map(y=>y.minutes)),N=()=>{const y=p.trim();if(!y)return;const j={id:`t${Date.now()}`,title:y,est:h,done:0,completed:!1};
n(k=>({tasks:[...k.tasks,j],activeId:k.activeId||j.id})),m(""),x(1)};return e.jsxs("aside",{className:"ft-sheet","aria-l\
abel":"Tasks",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Tasks"}),e.jsx("button",
{type:"button",className:"ft-sheet-close","aria-label":"Close tasks",onClick:f,children:e.jsx(se,{d:Xt})})]}),e.jsxs("di\
v",{className:"ft-addtask",children:[e.jsx("input",{value:p,placeholder:"What are you studying?",onChange:y=>m(y.target.
value),onKeyDown:y=>{y.key==="Enter"&&N()},maxLength:120}),e.jsxs("span",{className:"ft-stepper is-small",children:[e.jsx(
"button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>x(Math.max(1,h-1)),children:"-"}),e.jsxs("span",{className:"\
ft-stepper-value",children:[h,e.jsx("em",{children:"est"})]}),e.jsx("button",{type:"button","aria-label":"More pomodoros",
onClick:()=>x(Math.min(20,h+1)),children:"+"})]}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:N,
disabled:!o,children:"Add"})]}),I.length===0?e.jsx("p",{className:"ft-field-hint",children:"No tasks yet. Add one to tra\
ck pomodoros against it, or just run the timer."}):null,e.jsx("ul",{className:"ft-tasklist",children:I.map(y=>e.jsxs("li",
{className:`${y.id===s.activeId?"is-active":""} ${y.completed?"is-done":""}`,children:[e.jsx("button",{type:"button",className:"\
ft-taskcheck","aria-label":y.completed?"Mark not done":"Mark done",onClick:()=>{y.completed||Ks(y.id),n(j=>({...j,tasks:j.
tasks.map(k=>k.id===y.id?{...k,completed:!k.completed}:k)}))},children:y.completed?"✓":""}),w===y.id?e.jsx("input",{className:"\
ft-taskedit","aria-label":`Rename task ${y.title}`,value:S,autoFocus:!0,maxLength:120,onChange:j=>E(j.target.value),onKeyDown:j=>{
j.key==="Enter"&&R(y.id),j.key==="Escape"&&v(null)},onBlur:()=>R(y.id)}):e.jsx("button",{type:"button",className:"ft-tas\
kname",onClick:()=>n(j=>({...j,activeId:y.id})),children:y.title}),e.jsxs("span",{className:"ft-taskcount",children:[y.done,
"/",y.est]}),e.jsx("button",{type:"button",className:"ft-taskeditbtn","aria-label":`Rename ${y.title}`,onClick:()=>{v(y.
id),E(y.title)},children:"✎"}),e.jsx("button",{type:"button",className:"ft-taskdel","aria-label":`Delete ${y.title}`,onClick:()=>n(
j=>({tasks:j.tasks.filter(k=>k.id!==y.id),activeId:j.activeId===y.id?null:j.activeId})),children:"×"})]},y.id))}),I.some(
y=>y.completed)?e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(y=>({...y,tasks:y.tasks.filter(
j=>!j.completed)})),children:"Clear completed"}):null,e.jsxs("div",{className:"ft-week",children:[e.jsx("h3",{children:"\
This week"}),e.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focus minutes by day: ${i.map(y=>`${y.label} ${y.
minutes}`).join(", ")}`,children:i.map((y,j)=>e.jsxs("span",{className:"ft-weekcol",children:[e.jsx("span",{className:"f\
t-weekbar",style:{height:`${Math.round(y.minutes/D*64)}px`}}),e.jsx("span",{className:"ft-weekday",children:y.label})]},
j))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});function Wn(){const[t,s]=a.useState(null),[,n]=a.useState(
0),i=a.useRef(null);a.useEffect(()=>{const m=new BroadcastChannel("sft-sync");i.current=m,m.onmessage=x=>{var w;((w=x.data)==
null?void 0:w.t)==="state"&&s(x.data)};const h=window.setInterval(()=>n(x=>x+1),500);return()=>{window.clearInterval(h),
m.close()}},[]);const o=m=>{var h;return(h=i.current)==null?void 0:h.postMessage({t:"cmd",cmd:m})};let l=t?t.remaining:0;
t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));const f=!t||Date.now()-t.at>4e3,p=t&&t.dur>0?Math.round(
(1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},
children:[e.jsx("div",{className:"ft-popout-phase",children:t?te[t.phase]:"Study focus"}),e.jsx("div",{className:"ft-pop\
out-time",children:t?re(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar","aria-hidden":"true",children:e.jsx("span",{
style:{width:`${p}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[e.jsx("button",{type:"button",className:"ft\
-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pause":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.jsx("button",{type:"button",className:"ft-gh\
ost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),f?e.jsx("p",{className:"ft-popout-note",children:"Open the st\
udy timer in another tab to control it from here."}):null]})}const zn=G.memo(function({settings:s,patch:n,bgStatus:i,soundStatus:o,
lastBgSrcRef:l,lastSndSrcRef:f,resolveLinkBg:p,resolveCustomSound:m,uploadBg:h,uploadSound:x,previewAlarm:w,requestNotifications:v,
notificationsSupported:S,wakeLockSupported:E,onResetSettings:I,savedMessage:R,onClose:D,savedLinks:N,onSaveLink:y,onRemoveLink:j}){
const[k,P]=a.useState(""),[$,O]=a.useState(""),[U,z]=a.useState(""),[B,g]=a.useState(""),T=s.background,u=()=>{const r=k.
trim();r&&p(r).then(F=>{F&&(l.current=r,n({background:{kind:"link",source:r}}),N.some(le=>le.source===r)||y({id:`l${Date.
now()}`,source:r,kind:F.kind,thumb:F.kind==="image"?F.finalUrl:void 0,addedAt:Date.now()}),P(""))})},C=r=>{T.kind==="lin\
k"&&T.source===r.source||p(r.source).then(F=>{F&&(l.current=r.source,n({background:{kind:"link",source:r.source}}))})},W=()=>{
const r=$.trim();jn(r)&&m(r).then(F=>{var le;F&&(f.current=r,n({alarmSound:"custom",customAlarm:{source:r,name:((le=r.split(
"/").pop())==null?void 0:le.split("?")[0])||"Custom sound"}}))})},L=()=>{const r=U.trim();if(r){if(!Zt(r)){g("That is no\
t a Spotify link. Copy a link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your \
current player is unchanged.");return}g(""),n({spotify:r,spotifyOpen:!0})}};return e.jsxs("aside",{className:"ft-sheet",
"aria-label":"Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Settings"}),e.
jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:D,children:e.jsx(se,{d:Xt})})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"ft-chips",children:hn.map(r=>e.jsxs(
"button",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:r.accent,font:r.font,background:{kind:r.bg.kind,id:r.
bg.id}}),children:[r.name," theme"]},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"\
ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",children:[pn.map(r=>e.jsx("button",{type:"\
button",className:`ft-colorswatch ${s.accent.toLowerCase()===r.value?"is-active":""}`,style:{background:r.value},"aria-l\
abel":`${r.name} accent`,onClick:()=>n({accent:r.value})},r.id)),e.jsxs("label",{className:"ft-colorcustom",children:[e.
jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:r=>n(
{accent:r.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[
e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx("div",{className:"ft-chips",children:Yt.map(r=>e.jsx("b\
utton",{type:"button",className:`ft-chipbtn ${s.font===r.id?"is-active":""}`,style:r.css==="inherit"?void 0:{fontFamily:r.
css},onClick:()=>n({font:r.id}),children:r.name},r.id))})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx(
"span",{className:"ft-field-label",children:"Clock style"}),e.jsx("div",{className:"ft-chips",children:[["ring","Ring"],
["bar","Bar"],["minimal","Minimal"]].map(([r,F])=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.clockStyle===r?
"is-active":""}`,onClick:()=>n({clockStyle:r}),children:F},r))})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[
e.jsx("span",{className:"ft-field-label",children:"Clock size"}),e.jsx("div",{className:"ft-chips",children:[["s","Small"],
["m","Medium"],["l","Large"]].map(([r,F])=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.clockSize===r?"is-act\
ive":""}`,onClick:()=>n({clockSize:r}),children:F},r))})]}),e.jsx(Z,{label:"Clock-only mode",hint:"Hides the mode tabs a\
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
ft-subhead",children:"Spotify playlists"}),e.jsx("div",{className:"ft-chips",children:Ht.map(r=>e.jsx("button",{type:"bu\
tton",className:`ft-chipbtn ${s.spotify===r.id?"is-active":""}`,onClick:()=>{g(""),n({spotify:r.id,spotifyOpen:!0,musicMode:"\
spotify",musicOpen:!0})},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",
{className:"ft-field-label",children:"Any Spotify link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste an ope\
n.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official \
player inside the mini player, with the album art shown by Spotify; this is not account sync. Spotify decides what plays\
: usually full songs when you sign in to Spotify inside the player, 30-second previews when signed out; podcast episodes\
 usually play in full. Live lyrics are not possible here: Spotify only shares the current song with connected apps, not \
with an embedded player."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:U,
placeholder:"https://open.spotify.com/playlist/…",onChange:r=>z(r.target.value),inputMode:"url"}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:L,children:"Use link"})]}),s.spotify?e.jsxs("span",{className:"ft-inrow",
children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({musicMode:"spotify",musicOpen:!0}),
children:"Show player"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1,
musicMode:"radio"}),children:"Remove player"})]}):null,B?e.jsx("span",{className:"ft-field-hint",children:B}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx($e,{label:"Focus",value:s.focusMin,min:1,max:180,unit:"\
min",onChange:r=>n({focusMin:r})}),e.jsx($e,{label:"Short break",value:s.shortMin,min:1,max:60,unit:"min",onChange:r=>n(
{shortMin:r})}),e.jsx($e,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:r=>n({longMin:r})}),e.jsx(
$e,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:r=>n({longEvery:r})}),e.jsx(Z,{label:"\
Auto-start breaks",checked:s.autoBreaks,onChange:r=>n({autoBreaks:r})}),e.jsx(Z,{label:"Auto-start focus",checked:s.autoFocus,
onChange:r=>n({autoFocus:r})}),S?e.jsx(Z,{label:"Browser notifications",hint:"Alerts when a session ends in another tab.",
checked:s.notifications,onChange:v}):null,E?e.jsx(Z,{label:"Keep screen awake",checked:s.keepAwake,onChange:r=>n({keepAwake:r})}):
null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"ft-chips",children:gn.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===r.id?"is-active":""}`,onClick:()=>{n({alarmSound:r.id}),
w(r.id)},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,"aria-label":"Alarm volume",onChange:r=>n(
{alarmVolume:parseFloat(r.target.value)})})]}),e.jsx(Z,{label:"Ring twice",checked:s.alarmRepeat,onChange:r=>n({alarmRepeat:r})}),
e.jsx(Z,{label:"Ticking while running",checked:s.tick,onChange:r=>n({tick:r})}),e.jsxs("div",{className:"ft-field is-sta\
cked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from a link"}),e.jsx("span",{className:"ft-f\
ield-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when the file's host allows cross-site loadin\
g; many do not. Uploading a file always works until the tab reloads; a saved link reloads each visit."}),e.jsxs("span",{
className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:$,placeholder:"https://…/sound.mp3",onChange:r=>O(
r.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:W,children:"Use \
link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Upload alarm sound file",className:"ft-fileinpu\
t",onChange:r=>{var F;return x((F=r.target.files)==null?void 0:F[0])}})]}),s.customAlarm?e.jsxs("span",{className:"ft-fi\
eld-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"ft-field-hint",children:o}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"ft-chips",children:Gt.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.ambient===r.id?"is-active":""}`,onClick:()=>n({ambient:r.id}),children:r.
name},r.id))}),s.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.ambientVolume,"aria-label":"Ambient\
 volume",onChange:r=>n({ambientVolume:parseFloat(r.target.value)})})]}):null]}),e.jsxs("section",{children:[e.jsx("h3",{
children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Scenes"}),e.jsx("div",{className:"ft-bggrid",children:ot.
map(r=>e.jsx(Pn,{scene:r,active:T.kind==="scene"&&T.id===r.id,onPick:()=>n({background:{kind:"scene",id:r.id}})},r.id))}),
e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Illustrated scenes are drawn to loop seamle\
ssly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay only when chosen.\
 While a scene loads, your previous background stays on screen (a still photo on your first visit); a scene that cannot \
load keeps it rather than going black or swapping to something else."}),e.jsx(Z,{label:"Animate backgrounds",hint:"Motio\
n starts by itself. Turn off to pause motion and save battery.",checked:s.bgAnimate!==!1,onChange:r=>n({bgAnimate:r})}),
e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:rn.map(r=>e.jsx($n,{id:r.
id,name:r.name,active:T.kind==="builtin"&&T.id===r.id,onPick:()=>n({background:{kind:"builtin",id:r.id}})},r.id))}),e.jsx(
"h4",{className:"ft-subhead",children:"Solid color"}),e.jsx("div",{className:"ft-bggrid",children:ln.map(r=>e.jsx("butto\
n",{type:"button",className:`ft-bgswatch ${T.kind==="color"&&(T.id||"").toLowerCase()===r.id?"is-active":""}`,style:{background:r.
id},"aria-label":`${r.name} background color`,onClick:()=>n({background:{kind:"color",id:r.id}})},r.id))}),e.jsx(Tn,{color:T.
kind==="color"&&T.id?T.id:"#101418",onChange:r=>n({background:{kind:"color",id:r}})}),e.jsxs("div",{className:"ft-field \
is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),e.jsx("span",
{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image link (\
JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match its o\
wn shape, never stretched. Every link you add is saved under My saved backgrounds below and reloads each visit - paste o\
nce, keep forever. When a direct image load is blocked, the link you paste is fetched through a public image relay (wese\
rv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"\
ft-textinput",value:k,placeholder:"https://www.pinterest.com/pin/…",onChange:r=>P(r.target.value),inputMode:"url"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:u,children:"Use link"})]}),N.length?e.jsxs(e.Fragment,
{children:[e.jsx("h4",{className:"ft-subhead",children:"My saved backgrounds"}),e.jsx("div",{className:"ft-bggrid",children:N.
map(r=>e.jsx(On,{link:r,active:T.kind==="link"&&T.source===r.source,onPick:()=>C(r),onRemove:()=>j(r.id)},r.id))}),e.jsx(
"span",{className:"ft-field-hint",children:"Tap one to use it again, × to forget it. Saved on this device."})]}):null,e.
jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:["Upload\
 image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or video file",
className:"ft-fileinput",onChange:r=>{var F;return h((F=r.target.files)==null?void 0:F[0])}})]}),e.jsx("span",{className:"\
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
Start over"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:I,children:"Reset settings"})]}),e.jsxs(
"p",{className:"ft-field-hint",children:["Your settings, saved backgrounds, tasks and stats stay in this browser. Link b\
ackgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is bloc\
ked; Spotify playback happens inside Spotify's official player; selected catalog videos and focus-radio tracks stream fr\
om Pixabay's CDN. ",R]})]})});function Bn(){return typeof window<"u"&&/[?&]popout=1/.test(window.location.search)?e.jsx(
Wn,{}):e.jsx(qn,{})}function qn(){var Nt;const[t,s,n]=ke("ft-settings.v2",Je),[i,o]=ke("ft-clockfree.v1",null),l=a.useRef(
null),f=a.useRef(null),p=a.useCallback(c=>d=>{var A,_;const b=l.current;if(!b)return;const M=b.getBoundingClientRect();o(
be=>{const J=be||{x:M.left,y:M.top,s:1};return f.current={mode:c,id:d.pointerId,sx:d.clientX,sy:d.clientY,ox:J.x,oy:J.y,
ss:J.s},J}),(_=(A=d.target).setPointerCapture)==null||_.call(A,d.pointerId),d.preventDefault()},[o]),m=a.useCallback(c=>{
const d=f.current;if(!(!d||d.id!==c.pointerId))if(d.mode==="move")o(b=>b&&{...b,x:Math.min(Math.max(d.ox+c.clientX-d.sx,
-40),window.innerWidth-60),y:Math.min(Math.max(d.oy+c.clientY-d.sy,0),window.innerHeight-60)});else{const b=l.current;if(!b)
return;const M=b.getBoundingClientRect(),A=M.left+M.width/2,_=M.top+M.height/2,be=Math.max(30,Math.hypot(d.sx-A,d.sy-_)),
J=Math.hypot(c.clientX-A,c.clientY-_);o(ie=>ie&&{...ie,s:Math.min(2.6,Math.max(.45,d.ss*(J/be)))})}},[o]),h=a.useCallback(
c=>{f.current&&f.current.id===c.pointerId&&(f.current=null)},[]),[x,w,v]=ke("ft-tasks.v1",{tasks:[],activeId:null}),[S,E,
I]=ke("ft-stats.v1",{days:{}}),[R,D,N]=ke("ft-session.v1",null),[y,j]=ke("ft-links.v1",[]),k=a.useCallback(c=>j(d=>[c,...d.
filter(b=>b.source!==c.source)].slice(0,24)),[j]),P=a.useCallback(c=>j(d=>d.filter(b=>b.id!==c)),[j]),$=a.useMemo(()=>({
focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,t.longMin]),[O,U]=a.useState("focu\
s"),[z,B]=a.useState(!1),[g,T]=a.useState($.focus),[u,C]=a.useState(0),[W,L]=a.useState("none"),[r,F]=a.useState(!1),[le,
Me]=a.useState(""),ce=a.useRef(0),pe=a.useRef(!1);pe.current=z;const H=a.useRef(O);H.current=O;const he=a.useRef(g);he.current=
g;const rt=a.useRef(t.accent);rt.current=t.accent;const[Jt,lt]=a.useState(null),[Qt,es]=a.useState(null),[ts,Oe]=a.useState(
null),[ss,de]=a.useState(""),[Fe,ct]=a.useState(null),[ns,ne]=a.useState(""),Y=a.useRef(null),ue=a.useRef(null),Ee=a.useRef(
null),dt=a.useCallback(async c=>{de("Loading background…");try{const d=c.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(
d)&&!/pin(it)?\./i.test(d))return lt(_=>(_&&_.url.startsWith("blob:")&&URL.revokeObjectURL(_.url),{url:d,kind:"video"})),
de("Background applied."),{kind:"video",finalUrl:d};const{blob:b,finalUrl:M}=await wn(c),A=b.type.startsWith("video/")?"\
video":"image";return lt(_=>(_&&_.url.startsWith("blob:")&&URL.revokeObjectURL(_.url),{url:URL.createObjectURL(b),kind:A})),
de("Background applied."),{kind:A,finalUrl:M}}catch(d){const b=d instanceof Error&&d.message==="short pin link"?"Short p\
in.it links cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous\
 background is unchanged.":"Could not load that pin or link. Private or deleted pins cannot be read. Use a public pin li\
nk, a direct image link, or upload the image below. Your previous background is unchanged.";return de(b),!1}},[]),ut=a.useCallback(
async c=>{ne("Loading sound…");try{const d=await st(c);if(!/^audio\//.test(d.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.
test(c))throw new Error("not audio");return ct(b=>(b&&URL.revokeObjectURL(b),URL.createObjectURL(d))),ne("Sound saved. I\
t will ring when a session ends."),!0}catch{return ne("That link blocks cross-site loading. Download the sound to your d\
evice and upload it instead. Your previous sound is unchanged."),!1}},[]),Ue=a.useRef(""),_e=a.useRef("");a.useEffect(()=>{
n.ready&&t.background.kind==="link"&&t.background.source&&t.background.source!==Ue.current&&(Ue.current=t.background.source,
dt(t.background.source))},[n.ready,t.background]),a.useEffect(()=>{var d;if(!n.ready)return;const c=((d=t.customAlarm)==
null?void 0:d.source)||"";t.alarmSound==="custom"&&c&&c!==_e.current&&(_e.current=c,ut(c))},[n.ready,t.alarmSound,t.customAlarm]);
const ft=a.useRef(!1);a.useEffect(()=>{var c;!n.ready||ft.current||(ft.current=!0,t.background.kind==="upload"&&(q({background:{
kind:"color",id:"#101418"}}),de("Your uploaded image resets when the tab reloads. Upload it again, or save a link instea\
d.")),!((c=t.customAlarm)!=null&&c.source)&&t.alarmSound==="custom"&&(q({alarmSound:"bell"}),ne("Your uploaded sound res\
ets when the tab reloads. Upload it again, or save a link instead.")))},[n.ready]),a.useEffect(()=>{n.ready&&(!t.accent||
!t.font||!t.clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||
typeof t.bgAnimate!="boolean")&&s(c=>({...Je,...c}))},[n.ready]),a.useEffect(()=>{if(!n.ready)return;const c=t.background;
c.kind==="gradient"?q({background:{kind:"color",id:{dusk:"#3b2f4a",moss:"#0f2e25",ink:"#101418",dawn:"#4a2f3d"}[c.id||""]||
"#101418"}}):c.kind==="animated"&&q({background:{kind:"builtin",id:"rain"}})},[n.ready,t.background]),a.useEffect(()=>{if(n.
ready)try{t.spotify&&!window.localStorage.getItem("sft:ft-musicmig.v1")&&(window.localStorage.setItem("sft:ft-musicmig.v\
1","1"),q({musicMode:"spotify",musicOpen:t.spotifyOpen!==!1}))}catch{}},[n.ready]);const ae=t.background;a.useEffect(()=>{
let c=!0;if(n.ready){if(ae.kind==="builtin"){const d=ae.id&&Tt[ae.id]?ae.id:"rain";Ze[d]?Oe(Ze[d]):(Oe(null),Tt[d]().then(
b=>{Ze[d]=b.default,c&&Oe(b.default)}).catch(()=>{}))}return()=>{c=!1}}},[n.ready,ae.kind,ae.id]);const mt=a.useRef(!1),
X=a.useCallback(c=>{N.ready&&D({phase:c.phase,running:c.running,endAt:c.endAt||0,remainingMs:c.remainingMs,cycleCount:c.
cycleCount})},[N.ready]);a.useEffect(()=>{if(!N.ready||!n.ready||!I.ready||!v.ready||mt.current||(mt.current=!0,!R))return;
const c=R.phase==="short"||R.phase==="long"?R.phase:"focus";if(U(c),C(R.cycleCount||0),R.running&&R.endAt>Date.now()+500)
ce.current=R.endAt,T(R.endAt-Date.now()),B(!0);else if(R.running){let d="focus",b=R.cycleCount||0;if(c==="focus"){b+=1,d=
b%Math.max(1,t.longEvery)===0&&b>0?"long":"short";const M=ve(new Date(R.endAt));E(A=>{const _=A.days[M]||{focusSec:0,sessions:0};
return{days:{...A.days,[M]:{focusSec:_.focusSec+Math.round(V.current.focus/1e3),sessions:_.sessions+1}}}}),w(A=>A.activeId?
{...A,tasks:A.tasks.map(_=>_.id===A.activeId?{..._,done:_.done+1}:_)}:A)}C(b),U(d),T(V.current[d]),B(!1),Me(`Your ${te[c].
toLowerCase()} ended while you were away.`),X({phase:d,running:!1,remainingMs:V.current[d],cycleCount:b})}else{const d=typeof R.
remainingMs=="number"&&R.remainingMs>0?Math.min(R.remainingMs,V.current[c]):V.current[c];T(d),B(!1)}},[N.ready,n.ready]);
const ge=a.useRef({}),V=a.useRef($);V.current=$;const pt=a.useCallback(c=>{const d=H.current;let b="focus",M=u;if(d==="f\
ocus"){if(M=c?u:u+1,C(M),b=M%Math.max(1,t.longEvery)===0&&M>0?"long":"short",!c){const _=ve(),be=S.days[_]||{focusSec:0,
sessions:0};E({days:{...S.days,[_]:{focusSec:be.focusSec+Math.round(V.current.focus/1e3),sessions:be.sessions+1}}}),x.activeId&&
w(J=>({...J,tasks:J.tasks.map(ie=>ie.id===J.activeId?{...ie,done:ie.done+1}:ie)}))}}else b="focus";if(t.alarmSound==="cu\
stom"&&Y.current)try{Y.current.currentTime=0,Y.current.volume=t.alarmVolume,Y.current.play().catch(()=>Ce("bell",t.alarmVolume,
t.alarmRepeat))}catch{Ce("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound==="custom"?Ce("bell",t.alarmVolume,t.alarmRepeat):
Ce(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<"u"&&Notification.permission==="gra\
nted")try{new Notification(`${te[d]} finished`,{body:b==="focus"?"Time to focus.":`Time for a ${te[b].toLowerCase()}.`})}catch{}
delete ge.current[d],U(b),T(V.current[b]);const A=b==="focus"?t.autoFocus:t.autoBreaks;A?(ce.current=Date.now()+V.current[b],
B(!0)):B(!1),X({phase:b,running:A,endAt:A?Date.now()+V.current[b]:0,remainingMs:V.current[b],cycleCount:M})},[u,t,S,E,w,
X]),Re=a.useRef(pt);Re.current=pt;const Le=a.useRef(void 0);a.useEffect(()=>{if(!z)return;const c=()=>{const M=ce.current-
Date.now();M<=0?Re.current(!1):T(A=>Math.ceil(A/1e3)!==Math.ceil(M/1e3)?M:A)};if(Le.current===void 0)try{Le.current=typeof Worker<
"u"?new Worker(new URL(""+new URL("timerWorker-B03v4wmZ.js",import.meta.url).href,import.meta.url)):null}catch{Le.current=
null}const d=Le.current;if(d){const M=()=>c();return d.addEventListener("message",M),d.postMessage("start"),c(),()=>{d.removeEventListener(
"message",M),d.postMessage("stop")}}const b=window.setInterval(c,250);return()=>window.clearInterval(b)},[z]);const ht=a.
useRef($),gt=a.useRef(!1);a.useEffect(()=>{const c=ht.current;if(ht.current=$,!!n.ready){if(!gt.current){gt.current=!0;return}
c.focus===$.focus&&c.short===$.short&&c.long===$.long||pe.current||(delete ge.current[H.current],T($[H.current]))}},[$,n.
ready]);const yt=a.useRef(0);a.useEffect(()=>{if(!z||!t.tick)return;const c=window.setInterval(()=>{const d=Math.ceil((ce.
current-Date.now())/1e3);d!==yt.current&&(yt.current=d,yn(t.alarmVolume))},250);return()=>window.clearInterval(c)},[z,t.
tick,t.alarmVolume]),a.useEffect(()=>{document.title=`${re(g)} - ${te[O]} - Study focus timer`},[g,O]),a.useEffect(()=>{
let c=0;const d=()=>{ue.current&&(ue.current(),ue.current=null),t.ambient!=="none"&&(ue.current=vn(t.ambient,t.ambientVolume))};
return t.ambient!=="none"&&!Ut?(Ut=!0,c=window.setTimeout(d,1500)):d(),()=>{window.clearTimeout(c),ue.current&&(ue.current(),
ue.current=null)}},[t.ambient,t.ambientVolume]),a.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let c=!1;
const d=()=>{navigator.wakeLock.request("screen").then(M=>{c||(Ee.current=M)}).catch(()=>{})};d();const b=()=>{document.
visibilityState==="visible"&&d()};return document.addEventListener("visibilitychange",b),()=>{if(c=!0,document.removeEventListener(
"visibilitychange",b),Ee.current){try{Ee.current.release()}catch{}Ee.current=null}}},[t.keepAwake]),a.useEffect(()=>{Fe?
(Y.current=new Audio(Fe),Y.current.preload="auto"):Y.current=null},[Fe]);const xt=a.useRef(()=>{}),bt=a.useRef(()=>{}),kt=a.
useRef(()=>{}),ye=a.useCallback(()=>{if(Me(""),De(),Y.current)try{Y.current.pause(),Y.current.currentTime=0}catch{}ce.current=
Date.now()+he.current,B(!0),X({phase:H.current,running:!0,endAt:ce.current,remainingMs:he.current,cycleCount:u})},[X,u]),
xe=a.useCallback(()=>{B(!1),X({phase:H.current,running:!1,remainingMs:he.current,cycleCount:u})},[X,u]),je=a.useCallback(
()=>{Me(""),delete ge.current[H.current],B(!1),T(V.current[H.current]),X({phase:H.current,running:!1,remainingMs:V.current[H.
current],cycleCount:u})},[X,u]),Ae=a.useCallback(()=>{Re.current(!0)},[]);xt.current=ye,bt.current=xe,kt.current=je;const we=a.
useCallback(c=>{const d=H.current;if(c===d)return;const b=pe.current?Math.max(0,ce.current-Date.now()):he.current;b>0&&b<
V.current[d]?ge.current[d]=b:delete ge.current[d];const M=ge.current[c],A=typeof M=="number"&&M>0?Math.min(M,V.current[c]):
V.current[c];B(!1),U(c),T(A),X({phase:c,running:!1,remainingMs:A,cycleCount:u})},[X,u]),We=a.useCallback(()=>{document.fullscreenElement?
document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[vt,jt]=a.useState(
null),as=a.useCallback(()=>{const c=window.documentPictureInPicture;if(c!=null&&c.requestWindow){c.requestWindow({width:320,
height:200}).then(d=>{for(const b of Array.from(document.styleSheets))try{const M=Array.from(b.cssRules||[]).map(_=>_.cssText).
join(`
`),A=d.document.createElement("style");A.textContent=M,d.document.head.appendChild(A)}catch{const M=b.href;if(M){const A=d.
document.createElement("link");A.rel="stylesheet",A.href=M,d.document.head.appendChild(A)}}d.document.body.className="ft\
-pip-body",d.addEventListener("pagehide",()=>jt(null)),jt(d)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);a.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const c=new BroadcastChannel(
"sft-sync"),d=()=>c.postMessage({t:"state",phase:H.current,remaining:he.current,running:pe.current,dur:V.current[H.current],
accent:rt.current,at:Date.now()});d();const b=window.setInterval(d,1e3);return c.onmessage=M=>{const A=M.data;(A==null?void 0:
A.t)==="cmd"&&(A.cmd==="toggle"?pe.current?bt.current():xt.current():A.cmd==="reset"?kt.current():A.cmd==="skip"&&Re.current(
!0))},()=>{window.clearInterval(b),c.close()}},[]);const is=a.useCallback(()=>{L("none"),F(!0)},[]),os=W==="tasks",rs=W===
"settings",ls=a.useCallback(()=>L(c=>c==="tasks"?"none":"tasks"),[]),cs=a.useCallback(()=>L(c=>c==="settings"?"none":"se\
ttings"),[]),ds=a.useCallback(()=>L("settings"),[]),us=a.useCallback(()=>L(c=>c==="profile"?"none":"profile"),[]);a.useEffect(
()=>{const c=d=>{var M;const b=(M=d.target)==null?void 0:M.tagName;b==="INPUT"||b==="TEXTAREA"||b==="SELECT"||(d.code===
"Space"?(d.preventDefault(),pe.current?xe():ye()):d.key==="Escape"?L("none"):d.key==="r"||d.key==="R"?je():d.key==="s"||
d.key==="S"?Ae():d.key==="1"?we("focus"):d.key==="2"?we("short"):d.key==="3"?we("long"):d.key==="m"||d.key==="M"?F(A=>!A):
(d.key==="f"||d.key==="F")&&We())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",
c)},[ye,xe,je,Ae,we,We]);const q=a.useCallback(c=>s(d=>({...d,...c})),[s]),fs=a.useCallback(c=>{if(!c)return;const d=c.type.
startsWith("video/");if(!d&&!c.type.startsWith("image/")){de("That file is not an image or video.");return}es(b=>(b&&URL.
revokeObjectURL(b.url),{url:URL.createObjectURL(c),kind:d?"video":"image"})),q({background:{kind:"upload"}}),de("Backgro\
und applied for this visit. Use a link to keep it across visits.")},[q]),ms=a.useCallback(c=>{if(c){if(!c.type.startsWith(
"audio/")){ne("That file is not an audio file.");return}ct(d=>(d&&URL.revokeObjectURL(d),URL.createObjectURL(c))),q({alarmSound:"\
custom",customAlarm:{source:"",name:c.name}}),ne(`Using "${c.name}" for this visit. Use a link to keep it across visits.`)}},
[q]),ps=a.useCallback(c=>{var d;if(c==="custom"){if(Y.current)try{Y.current.currentTime=0,Y.current.volume=t.alarmVolume,
Y.current.play().catch(()=>ne("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else
ne((d=t.customAlarm)!=null&&d.source?"Still loading your sound.":"Add a link or upload a file first.");return}Ce(c,t.alarmVolume,
!1)},[t.alarmVolume,t.customAlarm]),hs=a.useCallback(c=>{if(!c){q({notifications:!1});return}if(!(typeof Notification>"u"))
try{const d=Notification.requestPermission();d&&typeof d.then=="function"?d.then(b=>q({notifications:b==="granted"})).catch(
()=>q({notifications:!1})):q({notifications:Notification.permission==="granted"})}catch{q({notifications:!1})}},[q]),gs=a.
useCallback(()=>s(Je),[s]),ys=a.useMemo(()=>({focusSec:0,sessions:0}),[]),Ie=S.days[ve()]||ys,ze=a.useMemo(()=>{var b,M;
let c=0;const d=new Date;for(((b=S.days[ve(d)])==null?void 0:b.sessions)>0||d.setDate(d.getDate()-1);((M=S.days[ve(d)])==
null?void 0:M.sessions)>0;)c++,d.setDate(d.getDate()-1);return c},[S.days]),xs=a.useMemo(()=>{const c=[];for(let d=6;d>=
0;d--){const b=new Date;b.setDate(b.getDate()-d);const M=S.days[ve(b)];c.push({label:`${"SMTWTFS"[b.getDay()]}`,minutes:Math.
round(((M==null?void 0:M.focusSec)||0)/60)})}return c},[S.days]),bs=a.useMemo(()=>t.showChip?`${Ie.sessions} ${Ie.sessions===
1?"session":"sessions"} · ${Math.round(Ie.focusSec/60)} min${ze>1?` · ${ze}-day streak`:""}`:null,[t.showChip,Ie,ze]),
ks=n.ready&&v.ready&&I.ready,vs=((Nt=Yt.find(c=>c.id===t.font))==null?void 0:Nt.css)||"inherit",Be=1-g/Math.max(1,$[O]),
qe=118,wt=2*Math.PI*qe,js=typeof Notification<"u",ws=typeof navigator<"u"&&"wakeLock"in navigator,Ss=typeof document<"u"&&
document.fullscreenEnabled,St=x.tasks.find(c=>c.id===x.activeId)||null,Ns=t.spotify?Zt(t.spotify):null;return e.jsxs("di\
v",{className:`ft-root ${r?"is-compact":""}`,style:{"--ft-accent":t.accent,"--ft-font":vs},children:[e.jsx(An,{kind:ae.kind,
id:ae.id,scrim:t.scrim,builtinSrc:ts,linkBg:Jt,uploadBg:Qt,paused:r,animate:t.bgAnimate!==!1,customFit:t.customFit||"cov\
er",enhance:t.enhance!==!1}),e.jsx(Un,{chip:bs,panel:W,fullscreenSupported:Ss,onFullscreen:We,onTasks:ls,onSettings:cs,onMinimize:is,
onPopout:as,onProfile:us}),e.jsxs("main",{ref:l,className:`ft-center ${t.clockOnly===!0?"is-clockonly":""}`,style:t.clockOnly===
!0&&i?{left:i.x,top:i.y,transform:`scale(${i.s})`,transformOrigin:"top left"}:void 0,onPointerMove:t.clockOnly===!0?m:void 0,
onPointerUp:t.clockOnly===!0?h:void 0,onPointerCancel:t.clockOnly===!0?h:void 0,children:[t.clockOnly!==!0?e.jsx("nav",{
className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(c=>e.jsx("button",{type:"button",className:`\
ft-mode ${O===c?"is-active":""}`,onClick:()=>we(c),children:te[c]},c))}):null,t.clockOnly!==!0&&t.showDots?e.jsx("div",{
className:"ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((c,d)=>e.jsx(
"span",{className:`ft-dot ${d<u%Math.max(1,t.longEvery)||u>0&&u%Math.max(1,t.longEvery)===0&&O!=="focus"?"is-done":""}`},
d))}):null,e.jsxs("div",{className:`ft-clock is-${t.clockSize} ${t.clockOnly===!0?"is-free":""}`,role:"timer","aria-live":"\
off","aria-label":`${te[O]} timer, ${re(g)} remaining`,onPointerDown:t.clockOnly===!0?p("move"):void 0,title:t.clockOnly===
!0?"Drag to move":void 0,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-h\
idden":"true",children:[e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:qe}),e.jsx("circle",{className:"ft\
-ring-fill",cx:"130",cy:"130",r:qe,strokeDasharray:wt,strokeDashoffset:wt*(1-Be)})]}):null,e.jsxs("div",{className:"ft-t\
ime-wrap",children:[e.jsx("div",{className:"ft-time",children:re(g)}),e.jsx("div",{className:"ft-taskline",children:St?St.
title:O==="focus"?"Pick a task or just focus":"Rest up"})]})]}),t.clockOnly===!0?e.jsxs("div",{className:"ft-clockonly-t\
ools",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact ft-clockonly-exit","aria-label":"Show timer\
 controls",onPointerDown:c=>c.stopPropagation(),onClick:()=>q({clockOnly:!1}),children:"Show controls"}),e.jsx("button",
{type:"button",className:"ft-clock-resize","aria-label":"Drag to resize the clock",onPointerDown:p("resize"),children:"⤡"})]}):
null,t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(Be*100)}%`}})}):null,t.clockOnly!==!0?e.jsxs("div",{className:"ft-controls",children:[e.jsx("button",{type:"button",
className:"ft-primary",onClick:()=>z?xe():ye(),children:z?"Pause":g<$[O]?"Resume":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost",onClick:je,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:Ae,children:"\
Skip"})]}):null,t.clockOnly!==!0&&t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R reset · S\
 skip · M minimize · F fullscreen · Esc close panels"}):null,le?e.jsxs("p",{className:"ft-awaytoast",role:"status",children:[
le,e.jsx("button",{type:"button",className:"ft-awaytoast-x","aria-label":"Dismiss note",onClick:()=>Me(""),children:"×"})]}):
null]}),r?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-label":"Minimized timer",children:[e.jsx("span",{
className:"ft-compactphase",children:te[O]}),e.jsx("span",{className:"ft-compacttime",children:re(g)}),e.jsx("button",{type:"\
button",className:"ft-compactbtn","aria-label":z?"Pause":"Start",onClick:()=>z?xe():ye(),children:z?"❚❚":"▶"}),e.jsx(
"button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",onClick:()=>F(!1),children:"⤢"})]}):null,
W==="profile"?e.jsx(tn,{onClose:()=>L("none")}):null,e.jsx(Qs,{}),os?e.jsx(_n,{tasksState:x,setTasksState:w,week:xs,ready:ks,
savedMessage:v.message||I.message||"",onClose:()=>L("none")}):null,rs?e.jsx(zn,{settings:t,patch:q,bgStatus:ss,soundStatus:ns,
lastBgSrcRef:Ue,lastSndSrcRef:_e,resolveLinkBg:dt,resolveCustomSound:ut,uploadBg:fs,uploadSound:ms,previewAlarm:ps,requestNotifications:hs,
notificationsSupported:js,wakeLockSupported:ws,onResetSettings:gs,savedMessage:n.message||"",onClose:()=>L("none"),savedLinks:y,
onSaveLink:k,onRemoveLink:P}):null,vt?Cs.createPortal(e.jsxs("div",{className:"ft-pip",children:[e.jsx("div",{className:"\
ft-pip-phase",children:te[O]}),e.jsx("div",{className:"ft-pip-time",children:re(g)}),e.jsx("div",{className:"ft-pip-bar",
"aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.round(Be*100)}%`}})}),e.jsxs("div",{className:"ft-pip-b\
tns",children:[e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>z?xe():ye(),children:z?"Pause":
"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:je,children:"Reset"}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:Ae,children:"Skip"})]})]}),vt.document.body):null,t.musicOpen!==!1?e.jsx(
Fn,{settings:t,patch:q,spotifySrc:Ns,onOpenSettings:ds}):null]})}Ms(document.getElementById("root")).render(e.jsx(Bn,{}));
