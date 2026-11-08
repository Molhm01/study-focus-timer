import{R as z,j as e,r,a as os,c as ls}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").relList;
if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))
a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.
rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.
integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const cs={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function G({x:t,y:s,r:n,fill:a}){const o=[];for(let l=0;l<10;l++){
const f=Math.PI/5*l-Math.PI/2,h=l%2===0?n:n*.45;o.push(`${(t+h*Math.cos(f)).toFixed(1)},${(s+h*Math.sin(f)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:a})}function ds({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#123f3a",opacity:"0.7"})]});case"star":return e.jsxs("g",{children:[e.jsx(G,{x:48,y:48,r:30,fill:"#ffd166"}),e.jsx("circ\
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
#8fa3d9"})]})}}function us({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(G,{x:14,y:22,r:4,fill:"#\
ffe9a8"}),e.jsx(G,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(G,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(G,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(G,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(G,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function fs({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(G,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(G,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function ms({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
fill:"none",stroke:"#e05d7a",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("rect",{x:"19",y:"40",width:"10",height:"16",
rx:"5",fill:"#e05d7a"}),e.jsx("rect",{x:"67",y:"40",width:"10",height:"16",rx:"5",fill:"#e05d7a"})]});case"beanie":return e.
jsxs("g",{children:[e.jsx("path",{d:"M23 34 a25 22 0 0 1 50 0 z",fill:"#5b8def"}),e.jsx("rect",{x:"21",y:"32",width:"54",
height:"9",rx:"4.5",fill:"#7ba4f4"}),e.jsx("circle",{cx:"48",cy:"11",r:"5",fill:"#dce7ff"})]});case"halo":return e.jsx("\
ellipse",{cx:"48",cy:"12",rx:"16",ry:"4.6",fill:"none",stroke:"#ffe08a",strokeWidth:"3.4"});case"crown":return e.jsxs("g",
{children:[e.jsx("polygon",{points:"30,30 33,12 42,22 48,8 54,22 63,12 66,30",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4",strokeLinejoin:"round"}),e.jsx("rect",{x:"29",y:"29",width:"38",height:"6",rx:"3",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4"}),e.jsx("circle",{cx:"48",cy:"18",r:"2.4",fill:"#e05d7a"})]});case"wizard":return e.jsxs("g",{children:[e.jsx("poly\
gon",{points:"48,2 30,34 66,34",fill:"#5a4a8a"}),e.jsx("polygon",{points:"40,20 48,2 52,12",fill:"#6d5ba6"}),e.jsx("elli\
pse",{cx:"48",cy:"34",rx:"27",ry:"5.4",fill:"#4a3d75"}),e.jsx(G,{x:44,y:22,r:2.6,fill:"#ffe08a"})]});case"laurel":return e.
jsxs("g",{fill:"none",stroke:"#7fb069",strokeWidth:"3",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 36 q6 -16 22\
 -20"}),e.jsx("path",{d:"M70 36 q-6 -16 -22 -20"}),e.jsx("path",{d:"M32 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 \
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function ps({frame:t}){const s=cs[t];return s?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const ft=z.memo(function({spec:s,size:n=96}){return e.jsxs("svg",{width:n,
height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(us,{aura:s.aura}),e.jsx(ds,{base:s.base}),e.jsx(fs,{eyes:s.eyes}),e.jsx(ms,{hat:s.hat}),
e.jsx(ps,{frame:s.frame})]})}),hs=2,gs=25,ys=15;function mt(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function xs(t,s,n){var g,k,E;const a=t.days||{};let o=0,l=0,
f=0,h=0;const p=Object.keys(a).sort();for(const R of p){const M=a[R];M&&(o+=M.focusSec||0,l+=M.sessions||0,(M.focusSec||
0)>f&&(f=M.focusSec||0),(M.sessions||0)>0&&h++)}let c=0;const b=new Date;for((((g=a[mt(b)])==null?void 0:g.sessions)||0)>
0||b.setDate(b.getDate()-1);(((k=a[mt(b)])==null?void 0:k.sessions)||0)>0;)c++,b.setDate(b.getDate()-1);let j=0,w=0,y=null;
for(const R of p){if(!((((E=a[R])==null?void 0:E.sessions)||0)>0))continue;const M=new Date(R+"T12:00:00");y?w=Math.round(
(M.getTime()-y.getTime())/864e5)===1?w+1:1:w=1,w>j&&(j=w),y=M}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:c,bestStreak:j,bestDayMin:Math.round(f/60),activeDays:h}}function bs(t){return t.totalFocusMin*hs+t.totalSessions*
gs+t.totalTasksCompleted*ys}function Pe(t){return 100+50*(t-1)}function ks(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=Pe(s);)n-=Pe(s),s++;const a=Pe(s);return{level:s,xp:t,intoLevel:n,needed:a,progress:a>0?n/a:0}}const pt=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function js(t){let s=pt[0].name;for(const n of pt)t>=n.level&&(s=n.name);return s}const qe=[{id:"none-hat",slot:"\
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
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function vs(t,s){return s>=
t.level}function ws(t){return qe.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const Ss=[{id:"moon",name:"\
Moon"},{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},
{id:"sprout",name:"Sprout"},{id:"blob",name:"Blob"}],ht=[{id:"first-session",name:"First steps",desc:"Complete your firs\
t focus session",unlocked:t=>t.totalSessions>=1},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessi\
ons",unlocked:t=>t.totalSessions>=10},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.totalTasksCompleted>=5},{id:"ta\
sks-25",name:"Task master",desc:"Finish 25 tasks",unlocked:t=>t.totalTasksCompleted>=25},{id:"streak-3",name:"Hat trick",
desc:"Study 3 days in a row",unlocked:t=>t.bestStreak>=3},{id:"streak-7",name:"Full week",desc:"Study 7 days in a row",unlocked:t=>t.
bestStreak>=7},{id:"streak-30",name:"Unstoppable",desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30},{id:"hour-\
day",name:"Solid hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60},{id:"deep-day",name:"Deep work d\
ay",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180},{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 \
total focus hours",unlocked:t=>t.totalFocusMin>=600},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus\
 hours",unlocked:t=>t.totalFocusMin>=6e3}];function gt(t){if(t<60)return`${t} min`;const s=Math.floor(t/60),n=t%60;return n?
`${s}h ${n}m`:`${s}h`}const Ns="sft:ft-stats.v1",Nt="sft:ft-tasks.v1",Cs="sft:ft-session.v1",Ct="sft:ft-profile.v1",Ve="\
sft:ft-progress-ledger.v1";function Ge(){const t=ne(Ve);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function Mt(t){const s=Ge();let n=!1;s.migratedAt===
null&&(s.migratedAt=Date.now(),n=!0);for(const a of t.tasks||[])a.completed&&typeof a.id=="string"&&a.id&&!(a.id in s.tasks)&&
(s.tasks[a.id]=Date.now(),n=!0);if(n)try{window.localStorage.setItem(Ve,JSON.stringify(s))}catch{}return s}function yt(){
const t=ne(Nt)||{tasks:[]};Mt(t)}function Ms(t){if(!t)return;const s=Ge();let n=!1;if(s.migratedAt===null&&(s.migratedAt=
Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.now(),n=!0),n)try{window.localStorage.setItem(Ve,JSON.stringify(s))}catch{}}
const Es={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function ne(t){
try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{return null}}function As(){const t=ne(Ct);return{
...Es,...t||{}}}function xt(t){try{window.localStorage.setItem(Ct,JSON.stringify(t))}catch{}}function Rs(){const t=ne("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function bt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function Et(){const t=ne(Cs);return!!(t&&t.running&&t.phase==="focu\
s")}function Ls(t){const[s,n]=r.useState(0),[a,o]=r.useState(()=>As()),[l,f]=r.useState(()=>Rs()),[h,p]=r.useState("");r.
useEffect(()=>{const N=()=>n(L=>L+1),A=window.setInterval(N,2e3);return window.addEventListener("focus",N),window.addEventListener(
"sft:progress",N),()=>{window.clearInterval(A),window.removeEventListener("focus",N),window.removeEventListener("sft:pro\
gress",N)}},[t]);const c=r.useMemo(()=>ne(Ns)||{days:{}},[s]),b=r.useMemo(()=>ne(Nt)||{tasks:[],activeId:null},[s]),[j,w]=r.
useState(()=>Ge());r.useEffect(()=>{w(Mt(b))},[b]);const y=r.useMemo(()=>xs(c,b,Object.keys(j.tasks).length),[c,b,j]),g=r.
useMemo(()=>ks(bs(y)),[y]),k=r.useCallback(N=>{o(A=>{const L={...A,...N,updatedAt:Date.now()};try{xt(L)}catch{p("This br\
owser blocked saving. Profile changes last until the tab closes.")}return L})},[]),E=r.useCallback(N=>{o(()=>{try{xt(N)}catch{}
return N})},[]),R=r.useCallback(N=>{f(A=>{const L={...A,seenAchievements:Array.from(new Set([...A.seenAchievements,...N]))};
return bt(L),L})},[]),M=r.useCallback(N=>{f(A=>{const L={...A,celebratedLevel:Math.max(A.celebratedLevel,N)};return bt(L),
L})},[]);return{ready:!0,snapshot:y,levelInfo:g,profile:a,setProfile:k,replaceProfile:E,meta:l,markAchievementsSeen:R,celebrateLevel:M,
storageMessage:h}}const we={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},O=!!(we.apiKey&&we.databaseURL&&
we.authDomain),De="10.14.1",Fe={app:`https://www.gstatic.com/firebasejs/${De}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${De}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${De}/firebase-database.js`};let de=null;
function Oe(t){return new Function("u","return import(u)")(t)}function se(){if(!de){const t=Promise.all([Oe(Fe.app),Oe(Fe.
auth),Oe(Fe.database)]).then(([s,n,a])=>{const o=s.initializeApp(we);return{auth:n.getAuth(o),db:a.getDatabase(o),authApi:n,
dbApi:a}});t.catch(()=>{de===t&&(de=null)}),de=t}return de}function Is(){const[t,s]=r.useState(O?"loading":"off"),[n,a]=r.
useState(null),[o,l]=r.useState("");r.useEffect(()=>{if(!O)return;let p,c=!0;return se().then(({auth:b,authApi:j})=>{c&&
(p=j.onAuthStateChanged(b,w=>{c&&(w?(a({uid:w.uid,name:w.displayName||(w.isAnonymous?"Guest":"Scholar"),email:w.email||null,
anonymous:!!w.isAnonymous}),s("signed-in")):(a(null),s("signed-out")))}))}).catch(()=>{c&&(s("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{c=!1,p&&p()}},[]);const f=r.useCallback(()=>{
O&&(l(""),se().then(({auth:p,authApi:c})=>c.signInWithPopup(p,new c.GoogleAuthProvider)).catch(p=>{p&&(p.code==="auth/po\
pup-closed-by-user"||p.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),h=r.useCallback(()=>{O&&se().then(({auth:p,authApi:c})=>c.signOut(p)).catch(()=>{})},[]);return{status:t,
user:n,error:o,signInWithGoogle:f,signOut:h}}async function $s(t){if(!O)return null;const{db:s,dbApi:n}=await se(),a=await n.
get(n.child(n.ref(s),`profiles/${t}`)),o=a&&a.val?a.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function kt(t,s){if(!O)return;const{db:n,dbApi:a}=await se();
await a.set(a.ref(n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,
updatedAt:s.updatedAt})}function At(t,s){const[n,a]=r.useState(null),[o,l]=r.useState(O?"connecting":"off"),f=r.useRef(t);
return f.current=t,r.useEffect(()=>{if(!O||!s){l("off"),a(null);return}let h=!0,p;return l("connecting"),(async()=>{try{
const{auth:c,db:b,authApi:j,dbApi:w}=await se();let y=c.currentUser;if(y||(y=(await j.signInAnonymously(c)).user),!h)return;
const g=w.ref(b,`presence/${y.uid}`),k=()=>w.set(g,{studying:f.current,ts:Date.now()}).catch(()=>{});await k(),w.onDisconnect(
g).remove().catch(()=>{});const E=window.setInterval(k,3e4),R=w.onValue(w.ref(b,"presence"),M=>{if(!h)return;const N=Date.
now();let A=0;const L=M&&M.val?M.val():{};for(const $ of Object.keys(L||{})){const D=L[$];D&&D.studying===!0&&typeof D.ts==
"number"&&N-D.ts<9e4&&A++}a(A),l("live")},()=>{h&&l("error")});p=()=>{window.clearInterval(E),R&&R(),w.remove(g).catch(()=>{})}}catch{
h&&l("error")}})(),()=>{h=!1,p&&p()}},[s]),r.useEffect(()=>{!O||!s||o!=="live"||se().then(({auth:h,db:p,dbApi:c})=>{const b=h.
currentUser;b&&c.set(c.ref(p,`presence/${b.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,
status:o}}function Ts(){const[t,s]=r.useState(!1);return r.useEffect(()=>{yt();const n=()=>yt(),a=window.setInterval(n,15e3);
if(!O)return()=>window.clearInterval(a);const o=()=>s(Et());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(a)}},[]),At(t,O),null}const Ps=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],Ds=z.memo(function({onClose:s}){const n=Ls(!0),{snapshot:a,levelInfo:o,profile:l,
setProfile:f,replaceProfile:h,meta:p}=n,c=Is(),[b,j]=r.useState(!1);r.useEffect(()=>{if(!O)return;const m=()=>j(Et());m();
const P=window.setInterval(m,5e3);return()=>window.clearInterval(P)},[]);const w=At(b,O),[y,g]=r.useState(!1),[k,E]=r.useState(
""),[R,M]=r.useState(""),N=r.useRef("");r.useEffect(()=>{if(!O||c.status!=="signed-in"||!c.user||c.user.anonymous)return;
const m=c.user.uid;N.current!==m&&(N.current=m,$s(m).then(P=>{P&&P.updatedAt>l.updatedAt?(h(P),M("Profile synced from yo\
ur account.")):kt(m,l).then(()=>M("Profile saved to your account.")).catch(()=>M("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>M("Could not sync right now; your local profile is safe.")))},[c.status,c.user]),r.useEffect(
()=>{if(!O||c.status!=="signed-in"||!c.user||c.user.anonymous||!l.updatedAt)return;const m=window.setTimeout(()=>{kt(c.user.
uid,l).catch(()=>M("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(m)},[l.
updatedAt,c.status,c.user]);const A=o.level,L=js(A),D=r.useMemo(()=>ht.filter(m=>m.unlocked(a)),[a]).filter(m=>!p.seenAchievements.
includes(m.id)),B=A>p.celebratedLevel,F=ws(A),v=()=>{const m=k.trim().slice(0,24);f({name:m}),g(!1)},T=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:s,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(ft,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[y?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:k,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:m=>E(m.target.value),onKeyDown:m=>{m.key==="E\
nter"&&v(),m.key==="Escape"&&g(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:v,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{E(l.name),g(!0)},children:[
T," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:L}),w.status==="live"&&w.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",w.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${A}`,children:["Lv ",A]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${A}, ${o.intoLevel} of ${o.needed} experience toward level ${A+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),B?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",A," reached - ",L,"!",F.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>n.celebrateLevel(A),children:"Nice"})]}):null,D.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",D.map(m=>m.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>n.markAchievementsSeen(D.map(m=>m.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:gt(a.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:a.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:a.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
a.currentStreak," ",a.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[a.bestStreak," ",a.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:gt(a.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:Ss.map(m=>e.jsx("button",{type:"button",title:m.name,"aria-label":`Avatar ${m.name}`,
className:`pf-basebtn ${l.base===m.id?"is-active":""}`,onClick:()=>f({base:m.id}),children:e.jsx(ft,{spec:{...l,base:m.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},m.id))}),Ps.map(({slot:m,label:P})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:P}),e.jsx("div",{className:"pf-gear",children:qe.filter(i=>i.
slot===m).map(i=>{const S=vs(i,A),Y=l[m]===i.id||i.id.startsWith("none")&&!qe.some(Q=>Q.slot===m&&l[m]===Q.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${Y?"is-active":""} ${S?"":"is-locked"}`,title:S?i.name:`${i.name} - ${i.
hint}`,onClick:()=>{S&&f({[m]:i.id})},children:S?i.name:`🔒 ${i.name} · Lv ${i.level}`},i.id)})})]},m)),F.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",F[0].name," at level ",F[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:ht.
map(m=>{const P=m.unlocked(a);return e.jsxs("li",{className:P?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:P?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:m.
name}),e.jsx("span",{children:m.desc})]})]},m.id)})}),e.jsx("h3",{children:"Account"}),O?e.jsxs(e.Fragment,{children:[c.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,c.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:c.signInWithGoogle,children:"Sign in with Google"}):null,c.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,c.status==="signed-in"&&c.user?e.jsx("div",{className:"\
pf-account",children:c.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:c.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[c.user.name,c.user.
email?` · ${c.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:c.signOut,children:"\
Sign out"})]})}):null,c.error?e.jsx("p",{className:"ft-field-hint",children:c.error}):null,R?e.jsx("p",{className:"ft-fi\
eld-hint",children:R}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),n.storageMessage?e.jsx("p",{className:"ft-field-hint",children:n.storageMessage}):null]})});
function ke(t,s){const[n,a]=r.useState(s),[o,l]=r.useState(!1),[f,h]=r.useState("");r.useEffect(()=>{try{const c=window.
localStorage.getItem("sft:"+t);if(c!=null){const b=JSON.parse(c),j=s!==null&&typeof s=="object"&&!Array.isArray(s)&&b!==
null&&typeof b=="object"&&!Array.isArray(b)?{...s,...b}:b;a(j)}}catch{h("Saved data on this browser could not be read.")}
l(!0)},[t]);const p=r.useCallback(c=>{a(b=>{const j=typeof c=="function"?c(b):c;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(j))}catch{h("This browser blocked saving. Changes last until the tab closes.")}return j})},[t]);return[n,
p,{ready:o,message:f}]}const Fs={v2cat:["images/images/v2cat-0.txt"],longer:["images/images/longer-0.txt","images/images\
/longer-1.txt","images/images/longer-2.txt","images/images/longer-3.txt","images/images/longer-4.txt","images/images/lon\
ger-5.txt"],curated:["images/images/curated-0.txt"],rain:["images/images/rain-0.txt","images/images/rain-1.txt"],"thumb-\
rain":["images/images/thumb-rain-0.txt"],library:["images/images/library-0.txt","images/images/library-1.txt","images/im\
ages/library-2.txt","images/images/library-3.txt","images/images/library-4.txt"],"thumb-library":["images/images/thumb-l\
ibrary-0.txt"],coffee:["images/images/coffee-0.txt","images/images/coffee-1.txt","images/images/coffee-2.txt"],"thumb-co\
ffee":["images/images/thumb-coffee-0.txt"],desk:["images/images/desk-0.txt","images/images/desk-1.txt","images/images/de\
sk-2.txt"],"thumb-desk":["images/images/thumb-desk-0.txt"],mountains:["images/images/mountains-0.txt","images/images/mou\
ntains-1.txt","images/images/mountains-2.txt","images/images/mountains-3.txt","images/images/mountains-4.txt","images/im\
ages/mountains-5.txt"],"thumb-mountains":["images/images/thumb-mountains-0.txt"],forest:["images/images/forest-0.txt","i\
mages/images/forest-1.txt","images/images/forest-2.txt","images/images/forest-3.txt"],"thumb-forest":["images/images/thu\
mb-forest-0.txt"],stars:["images/images/stars-0.txt"],"thumb-stars":["images/images/thumb-stars-0.txt"],ocean:["images/i\
mages/ocean-0.txt","images/images/ocean-1.txt","images/images/ocean-2.txt"],"thumb-ocean":["images/images/thumb-ocean-0.\
txt"],catalog:["images/images/catalog-0.txt","images/images/catalog-1.txt","images/images/catalog-2.txt","images/images/\
catalog-3.txt","images/images/catalog-4.txt","images/images/catalog-5.txt","images/images/catalog-6.txt"]},Ue={};function Ye(t){
return Ue[t]||(Ue[t]=Promise.all(Fs[t].map(async s=>{const n=await fetch(s);if(!n.ok)throw Error("Image unavailable");return n.
text()})).then(s=>"data:image/jpeg;base64,"+s.join("").replace(/\s/g,"")))}function Rt(t){const[s,n]=r.useState("");return r.
useEffect(()=>{let a=!0;return Ye(t).then(o=>{a&&n(o)}).catch(()=>{}),()=>{a=!1}},[t]),s}const Os={rain:"photos/12-rain.\
jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk.jpg",mountains:"photos/28-mounta\
ins.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-ocean.jpg"},Us={rain:"thumbs/20-rain\
.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-desk.jpg",mountains:"thumbs/24-mount\
ains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-ocean.jpg"},jt=Object.fromEntries(Object.
keys(Os).map(t=>[t,()=>Ye(t).then(s=>({default:s}))])),vt=Object.fromEntries(Object.keys(Us).map(t=>[t,()=>Ye("thumb-"+t).
then(s=>({default:s}))])),_e={},We={},Be={focusMin:25,shortMin:5,longMin:15,longEvery:4,autoBreaks:!1,autoFocus:!1,alarmSound:"\
bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,notifications:!1,keepAwake:!1,
background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,accent:"#9fd8c6",font:"sans",clockStyle:"\
ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,spotify:null,spotifyOpen:!1},_s=[{id:"rain",name:"Rainy window"},
{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountains",name:"Moun\
tains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],Se=[{id:"dusk",name:"\
Dusk",css:"linear-gradient(160deg, #232453 0%, #6b3f63 55%, #c96f4a 100%)"},{id:"moss",name:"Moss",css:"linear-gradient(\
160deg, #0f2e25 0%, #1d5c46 60%, #7ea87b 100%)"},{id:"ink",name:"Ink",css:"linear-gradient(160deg, #101418 0%, #1f2a33 1\
00%)"},{id:"dawn",name:"Dawn",css:"linear-gradient(160deg, #3b2f4a 0%, #8a5a6e 55%, #e8a87c 100%)"}],Lt=[{id:"aurora",name:"\
Aurora"},{id:"meteor",name:"Falling stars"},{id:"waves",name:"Night waves"},{id:"rainfall",name:"Rain streaks"}],Ke=[{id:"\
lofi-246243",name:"Windowsill cat",url:"https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4",tile:0,preview:"v2ca\
t",duration:76.71},{id:"lofi-246535",name:"Sunset cat",url:"https://cdn.pixabay.com/video/2024/12/13/246535_medium.mp4",
tile:1,preview:"v2cat",duration:58.56},{id:"lofi-246241",name:"Night room cat",url:"https://cdn.pixabay.com/video/2024/1\
2/11/246241_medium.mp4",tile:2,preview:"v2cat",duration:75.34},{id:"lofi-246242",name:"Fireplace cat",url:"https://cdn.p\
ixabay.com/video/2024/12/11/246242_medium.mp4",tile:3,preview:"v2cat",duration:58.69},{id:"lofi-270983",name:"Mountain c\
afe",url:"https://cdn.pixabay.com/video/2025/04/09/270983_medium.mp4",tile:4,preview:"v2cat",duration:5.33},{id:"lofi-73\
663",name:"Attic nap",url:"https://cdn.pixabay.com/video/2021/05/09/73663-549527825_medium.mp4",tile:5,preview:"v2cat",duration:60.01},
{id:"lofi-215407",name:"Rainy study desk",url:"https://cdn.pixabay.com/video/2024/06/05/215407_medium.mp4",tile:6,preview:"\
v2cat",duration:60.09},{id:"photo-107976",name:"Tropical waterfall",url:"https://cdn.pixabay.com/video/2022/02/17/107976\
-678971242_medium.mp4",tile:7,preview:"v2cat",duration:60.01,blend:!0},{id:"photo-22589",name:"Waterfall streams",url:"h\
ttps://cdn.pixabay.com/video/2019/04/04/22589-328624822_medium.mp4",tile:8,preview:"v2cat",duration:36.31,blend:!0},{id:"\
lofi-312345",name:"Rainy reading cat",url:"https://cdn.pixabay.com/video/2025/10/27/312345_medium.mp4",tile:9,preview:"v\
2cat",duration:64},{id:"lofi-345856",name:"City window cat",url:"https://cdn.pixabay.com/video/2026/04/11/345856_medium.\
mp4",tile:10,preview:"v2cat",duration:64},{id:"lofi-310025",name:"Cozy study rain",url:"https://cdn.pixabay.com/video/20\
25/10/15/310025_medium.mp4",tile:11,preview:"v2cat",duration:64},{id:"lofi-270507",name:"Sunset fence cat",url:"https://\
cdn.pixabay.com/video/2025/04/07/270507_medium.mp4",tile:12,preview:"v2cat",duration:59.97},{id:"photo-292827",name:"Alp\
ine lake",url:"https://cdn.pixabay.com/video/2025/07/22/292827_medium.mp4",tile:13,preview:"v2cat",duration:20.03,blend:!0},
{id:"photo-20451",name:"Golden surf",url:"https://cdn.pixabay.com/video/2019/01/04/20451-309694501_medium.mp4",tile:14,preview:"\
v2cat",duration:43.32,blend:!0},{id:"photo-198488",name:"Shoreline waves",url:"https://cdn.pixabay.com/video/2024/01/29/\
198488-907576442_medium.mp4",tile:15,preview:"v2cat",duration:60,blend:!0}],Ws=new Map(Ke.map(t=>[t.id,t]));function Bs(t,s){
const n=f=>t.replace(/_(tiny|small|medium|large)\.mp4/,f),a=[n("_medium.mp4"),n("_large.mp4"),n("_small.mp4"),n("_tiny.m\
p4")],o=[...new Set(a)],l=n(s?"_small.mp4":"_medium.mp4");return[l,...o.filter(f=>f!==l)]}function wt(t){var n;return((n=
window.__SFT_POSTERS)==null?void 0:n[t.id])||t.poster}const qs={"balcony-dusk-l.jpg":"53-balcony-dusk-l.jpg","balcony-du\
sk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-dusk-p.jpg","balcony-dusk-p.mp4":"31-balcony-dusk-p.m\
p4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"30-cozy-window-l.mp4","cozy-window-p.jpg":"50-cozy-w\
indow-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-street-l.jpg":"49-japan-street-l.jpg","japan-street-l.mp4":"\
34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jpg","japan-street-p.mp4":"35-japan-street-p.mp4","misty-\
river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty-river-l.mp4","misty-river-p.jpg":"39-misty-river-p.jpg",
"misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"47-night-train-l.jpg","night-train-l.mp4":"28-night-trai\
n-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train-p.mp4":"27-night-train-p.mp4","rainy-window-l.jpg":"41-\
rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4","rainy-window-p.jpg":"37-rainy-window-p.jpg","rainy-win\
dow-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakura-night-l.jpg","sakura-night-l.mp4":"26-sakura-night-l.\
mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p.mp4":"25-sakura-night-p.mp4","shrine-l.jpg":"10-shrine\
-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine-p.jpg","shrine-p.mp4":"18-shrine-p.mp4","water-garden-\
l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-garden-l.mp4","water-garden-p.jpg":"42-water-garden-p.jpg",
"water-garden-p.mp4":"23-water-garden-p.mp4"},It=(t,s,n)=>`scenes/${qs[`${t}-${s}.${n}`]}`,zs=(t,s)=>It(t.id,s,"jpg"),Vs=[
{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"\
amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],
$t=[{id:"sans",name:"Sans",css:"system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"},{id:"serif",name:"Serif",css:"\
Georgia, 'Times New Roman', serif"},{id:"mono",name:"Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},{id:"\
round",name:"Round",css:"'Trebuchet MS', Verdana, sans-serif"}],Gs=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",
bg:{kind:"gradient",id:"ink"}},{id:"dusk",name:"Dusk",accent:"#ffcf99",font:"serif",bg:{kind:"gradient",id:"dusk"}},{id:"\
moss",name:"Moss",accent:"#7ea87b",font:"round",bg:{kind:"gradient",id:"moss"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",
font:"serif",bg:{kind:"gradient",id:"dawn"}}],Ys=[{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"Gon\
g"},{id:"beep",name:"Digital"},{id:"wood",name:"Woodblock"},{id:"custom",name:"My sound"}],Tt=[{id:"none",name:"Off"},{id:"\
rain",name:"Rain",file:"sounds/rain.m4a"},{id:"storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"\
Ocean waves",file:"sounds/ocean.m4a"},{id:"forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"Firepl\
ace",file:"sounds/fireplace.m4a"},{id:"cafe",name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"\
Field cricket",file:"sounds/crickets.m4a"},{id:"wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"\
sounds/stream.m4a"},{id:"brown",name:"Brown noise"},{id:"white",name:"White noise"}],Pt=[{id:"lofi",name:"Lofi Girl",url:"\
https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/pl\
aylist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWS\
pwq3LiO"}],X={focus:"Focus",short:"Short break",long:"Long break"};let ue=null;function Ne(){return ue||(ue=new(window.AudioContext||
window.webkitAudioContext)),ue.state==="suspended"&&ue.resume(),ue}function J(t,s,n){const a=t.createOscillator(),o=t.createGain();
a.type=n.type||"sine",a.frequency.value=n.freq,o.gain.setValueAtTime(1e-4,n.start),o.gain.exponentialRampToValueAtTime(Math.
max(2e-4,n.gain),n.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),a.connect(o),o.connect(s),a.start(
n.start),a.stop(n.start+n.dur+.05)}function fe(t,s,n){const a=Ne(),o=a.createGain();o.gain.value=s,o.connect(a.destination);
const l=n?2:1,f=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let h=0;h<l;h++){const p=a.currentTime+.02+h*(f+.35);if(t==="bell")
[[660,.5],[1320,.28],[1760,.14],[2240,.07]].forEach(([c,b])=>J(a,o,{freq:c,start:p,dur:2.2,gain:b}));else if(t==="chime")
J(a,o,{freq:783.99,start:p,dur:1.3,gain:.4}),J(a,o,{freq:1046.5,start:p+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,
.42],[294,.24],[392,.17],[523,.09]].forEach(([c,b])=>J(a,o,{freq:c,start:p,dur:3.4,gain:b}));else if(t==="beep")for(let c=0;c<
3;c++)J(a,o,{freq:880,type:"square",start:p+c*.3,dur:.16,gain:.22});else t==="wood"&&(J(a,o,{freq:1400,type:"triangle",start:p,
dur:.07,gain:.5}),J(a,o,{freq:1400,type:"triangle",start:p+.22,dur:.07,gain:.4}))}}function Ks(t){const s=Ne(),n=s.createGain();
n.gain.value=.35*t,n.connect(s.destination),J(s,n,{freq:1800,start:s.currentTime,dur:.035,gain:.5})}function Hs(t,s){const n=2*
t.sampleRate,a=t.createBuffer(1,n,t.sampleRate),o=a.getChannelData(0);let l=0;for(let f=0;f<n;f++){const h=Math.random()*
2-1;s==="brown"?(l=(l+.02*h)/1.02,o[f]=l*3.2):o[f]=h}return a}const Xs={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
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
"sounds/stream-5.txt"]},je={};function Js(t,s){return je[s]||(je[s]=Promise.all((Xs[s]||[]).map(async n=>{const a=await fetch(
n);if(!a.ok)throw new Error(`HTTP ${a.status}`);return(await a.text()).trim()})).then(n=>{if(!n.length)throw new Error("\
Recording unavailable");const a=atob(n.join(""));return t.decodeAudioData(Uint8Array.from(a,o=>o.charCodeAt(0)).buffer)}).
catch(n=>{throw delete je[s],n})),je[s]}function Zs(t,s){if(t==="none")return null;const n=Tt.find(h=>h.id===t),a=Ne(),o=a.
createGain();if(o.gain.value=s,o.connect(a.destination),n!=null&&n.file){let h=!1,p=null;return Js(a,n.file).then(c=>{h||
(p=a.createBufferSource(),p.buffer=c,p.loop=!0,p.connect(o),p.start())}).catch(()=>{}),()=>{h=!0;try{p==null||p.stop()}catch{}
try{o.disconnect()}catch{}}}const l=a.createBufferSource();l.buffer=Hs(a,t==="white"?"white":"brown"),l.loop=!0;let f=l;
if(t==="brown"){const h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=900,f.connect(h),f=h}return f.connect(
o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function Qs(t){return/^https:\/\/.+/i.test(t.trim())}async function ze(t){
const s=await fetch(t);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.blob()}async function St(t){try{const s=await ze(
t);if(s.type.startsWith("image/"))return s;throw new Error("not an image")}catch{const s=`https://images.weserv.nl/?url=${encodeURIComponent(
t.replace(/^https?:\/\//,""))}`,n=await ze(s);if(!n.type.startsWith("image/"))throw new Error("not an image");return n}}
async function en(t){var l;const s=t.trim();if(/pin\.it\//i.test(s))throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let a=s;if(n){const f=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!f.ok)throw new Error("pin lookup failed");const h=await f.json();if((h==null?void 0:h.status)!=="success"||!Array.isArray(
h==null?void 0:h.data)||h.data.length===0)throw new Error("pin unavailable");const p=(l=h.data[0])==null?void 0:l.images;
if(!p)throw new Error("pin has no image");const c=p.originals||p["736x"]||p["564x"]||p["236x"];if(!(c!=null&&c.url))throw new Error(
"pin has no image");a=c.url}const o=a.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{return await St(
`${o[1]}/originals${o[2]}`)}catch{}if(!/^https:\/\//i.test(a))throw new Error("not a link");return St(a)}function Dt(t){
const s=Pt.find(o=>o.id===t),a=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return a?`https://open.spotify.com/embed/${a[1].toLowerCase()}/${a[2]}?theme=0`:null}const Z=({d:t,vb:s=24})=>e.jsx("svg",
{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",
strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,a)=>e.jsx("path",{d:n},a))}),tn="M4 9V4h5|M20 9\
V4h-5|M4 15v5h5|M20 15v5h-5",sn="M5 12h14",nn="M4 6h16|M4 12h16|M4 18h10",an="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-\
7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",Ft="\
M6 6l12 12|M18 6L6 18",rn="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function oe(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),a=s%60;return`${String(n).padStart(2,"0")}:${String(a).padStart(
2,"0")}`}function me(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function ve({label:t,value:s,min:n,max:a,onChange:o,unit:l}){const f=h=>{const p=parseInt(h,10);Number.
isFinite(p)&&o(Math.min(a,Math.max(n,p)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:a,value:s,onChange:h=>f(h.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(a,s+1)),children:"\
+"})]})]})}function q({label:t,hint:s,checked:n,onChange:a}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>a(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const on=z.memo(function({scene:s,paused:n,
animate:a,onReady:o,onFail:l}){const f=r.useRef(null),[h,p]=r.useState(!1),[c,b]=r.useState(0),j=r.useMemo(()=>window.matchMedia(
"(max-width: 900px), (orientation: portrait)").matches,[]),w=r.useMemo(()=>s.url?Bs(s.url,j):[It(s.id,"p","mp4")],[s,j]),
y=w[Math.min(c,w.length-1)],g=r.useRef({paused:n,animate:a});g.current={paused:n,animate:a};const k=r.useRef({onReady:o,
onFail:l});return k.current={onReady:o,onFail:l},r.useEffect(()=>{p(!1);const E=f.current;if(!E)return;let R=!1,M=!1,N=0,
A=!1,L=!1;const $=S=>S.play().catch(()=>{}),D=()=>!g.current.paused&&g.current.animate&&!document.hidden,B=()=>{const S=document.
createElement("video");return S.className="ft-bg ft-bgvideo",S.muted=!0,S.playsInline=!0,S.setAttribute("playsinline",""),
S.setAttribute("disablepictureinpicture",""),S.setAttribute("disableremoteplayback",""),S.preload="auto",S.src=y,S.setAttribute(
"aria-hidden","true"),S.loop=!s.blend,S},F=()=>{L||M||(L=!0,b(S=>S<w.length-1?S+1:(p(!0),m&&(m.remove(),m=null),k.current.
onFail(s),S)))};let v=null;const T=()=>{M||(m&&(m.currentTime=0,m.style.opacity="1",D()&&$(m)),v&&(v.remove(),v=null),R=
!1)};let m=B();m.addEventListener("error",F),m.addEventListener("ended",T),E.appendChild(m);const P=()=>{D()?A&&m&&($(m),
v&&$(v)):(m==null||m.pause(),v==null||v.pause())},i=()=>{if(!(M||!m)){if(!A&&m.readyState>=2&&(A=!0,f.current&&(f.current.
style.opacity="1"),k.current.onReady(s),D()&&$(m)),D()&&A){m.paused&&!m.ended&&$(m);const S=s.duration||m.duration,Y=Math.
min(1.5,S/4);if(!s.blend){N=requestAnimationFrame(i);return}if(!R&&Number.isFinite(S)&&m.currentTime>=S-Y&&(R=!0,v=B(),v.
style.opacity="0",v.style.zIndex="2",v.addEventListener("error",()=>{}),E.appendChild(v),v.currentTime=0,$(v)),R&&v&&v.readyState>=
2){v.paused&&$(v);const Q=Math.min(1,v.currentTime/Y);m.style.opacity=String(1-Q),v.style.opacity="1",Q>=1&&(m.remove(),
m=v,v=null,R=!1,m.addEventListener("error",F),m.addEventListener("ended",T),E.dataset.wraps=String(Number(E.dataset.wraps||
0)+1))}}N=requestAnimationFrame(i)}};return N=requestAnimationFrame(i),document.addEventListener("visibilitychange",P),window.
addEventListener("pointerdown",P),()=>{M=!0,cancelAnimationFrame(N),m==null||m.pause(),v==null||v.pause(),m==null||m.remove(),
v==null||v.remove(),document.removeEventListener("visibilitychange",P),window.removeEventListener("pointerdown",P)}},[y]),
e.jsx("div",{ref:f,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:h&&e.jsx("span",{className:"\
ft-stream-status",children:"This scene could not load right now. Try another background."})},y)}),ln=z.memo(function({scene:s,
paused:n,animate:a}){const[o,l]=r.useState([s]),[f,h]=r.useState(null),p=Rt("rain"),c=r.useRef(s.id);r.useEffect(()=>{c.
current=s.id,l(y=>y.length&&y[y.length-1].id===s.id?y:[...y.filter(g=>g.id!==s.id).slice(-1),s])},[s]);const b=r.useCallback(
y=>{y.id===c.current&&(h(y.id),window.setTimeout(()=>{c.current===y.id&&l(g=>g.filter(k=>k.id===y.id))},400))},[]),j=r.useCallback(
y=>{},[]),w=f===null||!o.some(y=>y.id===f);return e.jsxs(e.Fragment,{children:[w?e.jsx("div",{className:"ft-bg",style:{backgroundColor:"\
#101418",backgroundImage:p?`url(${p})`:void 0,backgroundSize:"cover",backgroundPosition:"center"}}):null,o.map(y=>e.jsx(
on,{scene:y,paused:n,animate:a,onReady:b,onFail:j},y.id))]})}),cn=z.memo(function({kind:s,id:n,scrim:a,builtinSrc:o,linkBg:l,
uploadBg:f,paused:h,animate:p,customFit:c,enhance:b}){let j={};s==="builtin"&&o?j={backgroundImage:`url(${o})`}:s==="gra\
dient"?j={backgroundImage:(Se.find(k=>k.id===n)||Se[0]).css}:s==="link"&&(l==null?void 0:l.kind)==="image"?j={backgroundImage:`\
url(${l.url})`}:s==="upload"&&(f==null?void 0:f.kind)==="image"?j={backgroundImage:`url(${f.url})`}:(s==="link"||s==="up\
load"||s==="builtin")&&(j={backgroundImage:Se[0].css}),(s==="link"||s==="upload")&&j.backgroundImage&&(j={...j,backgroundSize:c,
backgroundRepeat:"no-repeat",backgroundColor:"#101418"},b!==!1&&(j={...j,filter:"url(#ft-sharpen) saturate(1.08) contras\
t(1.05)"}));const w=Lt.some(k=>k.id===n)?n:"aurora",y=s==="scene"?Ws.get(n)||Ke[0]:void 0,g=s==="link"&&(l==null?void 0:
l.kind)==="video"?l.url:s==="upload"&&(f==null?void 0:f.kind)==="video"?f.url:null;return e.jsxs(e.Fragment,{children:[y?
e.jsx(ln,{scene:y,paused:!!h,animate:p}):g?e.jsx(dn,{src:g,paused:!!h,animate:p,fit:c}):s==="animated"?e.jsxs("div",{className:`\
ft-anim ft-anim-${w}`,"aria-hidden":"true",children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}):e.jsx("div",{className:"\
ft-bg",style:j}),e.jsx("div",{className:"ft-scrim",style:{opacity:a}}),e.jsx("svg",{width:"0",height:"0",style:{position:"\
absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharpen",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"\
0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),dn=z.memo(function({src:s,paused:n,animate:a,fit:o}){const l=r.useRef(null);
return r.useEffect(()=>{const f=l.current;if(!f)return;const h=()=>{n||!a||document.hidden?f.pause():f.play().catch(()=>{})};
h();const p=()=>{!n&&a&&!document.hidden&&f.play().catch(()=>{})};return document.addEventListener("visibilitychange",h),
window.addEventListener("pointerdown",p),()=>{document.removeEventListener("visibilitychange",h),window.removeEventListener(
"pointerdown",p)}},[n,a,s]),a?e.jsx("video",{ref:l,className:"ft-bg ft-bgvideo",style:{objectFit:o,backgroundColor:"#101\
418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto","aria-hidden":"true"}):null}),un=z.memo(function({
scene:s,active:n,onPick:a}){const o=Rt(s.preview||"catalog"),l=s.preview==="v2cat"?4:s.preview==="curated"?3:8,f=s.preview===
"v2cat"?4:s.preview==="curated"?3:13;return e.jsxs("button",{type:"button",className:`ft-bgswatch ft-bgswatch-named ${n?
"is-active":""}`,"aria-label":`${s.name} animated scene`,onClick:a,children:[wt(s)?e.jsx("img",{className:"ft-bgswatch-i\
mg",src:wt(s),alt:"",loading:"lazy",decoding:"async"}):s.tile!=null?e.jsx("span",{className:"ft-bgswatch-img",style:{backgroundImage:o?
`url(${o})`:void 0,backgroundSize:`${l*100}% ${f*100}%`,backgroundPosition:`${s.tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*
100/(f-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:zs(s,"p"),alt:"",loading:"lazy",decoding:"async"}),e.jsx("s\
pan",{className:"ft-bgswatch-name",children:s.name})]})}),fn=z.memo(function({id:s,name:n,active:a,onPick:o}){const[l,f]=r.
useState(We[s]||null);return r.useEffect(()=>{let h=!0;return!We[s]&&vt[s]&&vt[s]().then(p=>{We[s]=p.default,h&&f(p.default)}).
catch(()=>{}),()=>{h=!1}},[s]),e.jsx("button",{type:"button",className:`ft-bgswatch ${a?"is-active":""}`,style:l?{backgroundImage:`\
url(${l})`}:void 0,"aria-label":n,onClick:o})}),mn=z.memo(function({chip:s,panel:n,fullscreenSupported:a,onFullscreen:o,
onTasks:l,onSettings:f,onMinimize:h,onPopout:p,onProfile:c}){return e.jsxs("header",{className:"ft-topbar",children:[e.jsx(
"span",{className:"ft-brand",children:"Study focus"}),s?e.jsx("span",{className:"ft-chip",title:"Today's completed focus\
 time",children:s}):null,e.jsxs("span",{className:"ft-topbar-actions",children:[a?e.jsx("button",{type:"button",className:"\
ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.jsx(Z,{d:tn})}):null,e.jsx("button",{type:"button",className:"\
ft-iconbtn","aria-label":"Open timer in its own window",title:"Open timer in its own window",onClick:p,children:e.jsx(Z,
{d:rn})}),e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Minimize to a small timer",title:"Minimize \
to a small timer",onClick:h,children:e.jsx(Z,{d:sn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="profil\
e"?"is-active":""}`,"aria-label":"Profile and progress",title:"Profile and progress",onClick:c,children:e.jsx(Z,{d:"M12 \
12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5"})}),e.jsx("button",{type:"button",className:`\
ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",onClick:l,children:e.jsx(Z,{d:nn})}),e.jsx("button",{type:"\
button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,"aria-label":"Settings",onClick:f,children:e.jsx(Z,{d:an})})]})]})}),
pn=z.memo(function({tasksState:s,setTasksState:n,week:a,ready:o,savedMessage:l,onClose:f}){const[h,p]=r.useState(""),[c,
b]=r.useState(1),j=s.tasks,w=Math.max(1,...a.map(g=>g.minutes)),y=()=>{const g=h.trim();if(!g)return;const k={id:`t${Date.
now()}`,title:g,est:c,done:0,completed:!1};n(E=>({tasks:[...E.tasks,k],activeId:E.activeId||k.id})),p(""),b(1)};return e.
jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx(
"h2",{children:"Tasks"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close tasks",onClick:f,children:e.
jsx(Z,{d:Ft})})]}),e.jsxs("div",{className:"ft-addtask",children:[e.jsx("input",{value:h,placeholder:"What are you study\
ing?",onChange:g=>p(g.target.value),onKeyDown:g=>{g.key==="Enter"&&y()},maxLength:120}),e.jsxs("span",{className:"ft-ste\
pper is-small",children:[e.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>b(Math.max(1,c-1)),children:"\
-"}),e.jsxs("span",{className:"ft-stepper-value",children:[c,e.jsx("em",{children:"est"})]}),e.jsx("button",{type:"butto\
n","aria-label":"More pomodoros",onClick:()=>b(Math.min(20,c+1)),children:"+"})]}),e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:y,disabled:!o,children:"Add"})]}),j.length===0?e.jsx("p",{className:"ft-field-hint",children:"\
No tasks yet. Add one to track pomodoros against it, or just run the timer."}):null,e.jsx("ul",{className:"ft-tasklist",
children:j.map(g=>e.jsxs("li",{className:`${g.id===s.activeId?"is-active":""} ${g.completed?"is-done":""}`,children:[e.jsx(
"button",{type:"button",className:"ft-taskcheck","aria-label":g.completed?"Mark not done":"Mark done",onClick:()=>{g.completed||
Ms(g.id),n(k=>({...k,tasks:k.tasks.map(E=>E.id===g.id?{...E,completed:!E.completed}:E)}))},children:g.completed?"✓":""}),
e.jsx("button",{type:"button",className:"ft-taskname",onClick:()=>n(k=>({...k,activeId:g.id})),children:g.title}),e.jsxs(
"span",{className:"ft-taskcount",children:[g.done,"/",g.est]}),e.jsx("button",{type:"button",className:"ft-taskdel","ari\
a-label":`Delete ${g.title}`,onClick:()=>n(k=>({tasks:k.tasks.filter(E=>E.id!==g.id),activeId:k.activeId===g.id?null:k.activeId})),
children:"×"})]},g.id))}),j.some(g=>g.completed)?e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(
g=>({...g,tasks:g.tasks.filter(k=>!k.completed)})),children:"Clear completed"}):null,e.jsxs("div",{className:"ft-week",children:[
e.jsx("h3",{children:"This week"}),e.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focus minutes by day: ${a.
map(g=>`${g.label} ${g.minutes}`).join(", ")}`,children:a.map((g,k)=>e.jsxs("span",{className:"ft-weekcol",children:[e.jsx(
"span",{className:"ft-weekbar",style:{height:`${Math.round(g.minutes/w*64)}px`}}),e.jsx("span",{className:"ft-weekday",children:g.
label})]},k))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});function hn(){const[t,s]=r.useState(null),[,n]=r.
useState(0),a=r.useRef(null);r.useEffect(()=>{const p=new BroadcastChannel("sft-sync");a.current=p,p.onmessage=b=>{var j;
((j=b.data)==null?void 0:j.t)==="state"&&s(b.data)};const c=window.setInterval(()=>n(b=>b+1),500);return()=>{window.clearInterval(
c),p.close()}},[]);const o=p=>{var c;return(c=a.current)==null?void 0:c.postMessage({t:"cmd",cmd:p})};let l=t?t.remaining:
0;t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));const f=!t||Date.now()-t.at>4e3,h=t&&t.dur>0?Math.round(
(1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},
children:[e.jsx("div",{className:"ft-popout-phase",children:t?X[t.phase]:"Study focus"}),e.jsx("div",{className:"ft-popo\
ut-time",children:t?oe(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar","aria-hidden":"true",children:e.jsx("span",{style:{
width:`${h}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[e.jsx("button",{type:"button",className:"ft-primar\
y is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pause":"Start"}),e.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost is-comp\
act",onClick:()=>o("skip"),children:"Skip"})]}),f?e.jsx("p",{className:"ft-popout-note",children:"Open the study timer i\
n another tab to control it from here."}):null]})}const gn=z.memo(function({settings:s,patch:n,bgStatus:a,soundStatus:o,
lastBgSrcRef:l,lastSndSrcRef:f,resolveLinkBg:h,resolveCustomSound:p,uploadBg:c,uploadSound:b,previewAlarm:j,requestNotifications:w,
notificationsSupported:y,wakeLockSupported:g,onResetSettings:k,savedMessage:E,onClose:R}){const[M,N]=r.useState(""),[A,L]=r.
useState(""),[$,D]=r.useState(""),[B,F]=r.useState(""),v=s.background,T=()=>{const i=M.trim();i&&h(i).then(S=>{S&&(l.current=
i,n({background:{kind:"link",source:i}}))})},m=()=>{const i=A.trim();Qs(i)&&p(i).then(S=>{var Y;S&&(f.current=i,n({alarmSound:"\
custom",customAlarm:{source:i,name:((Y=i.split("/").pop())==null?void 0:Y.split("?")[0])||"Custom sound"}}))})},P=()=>{const i=$.
trim();if(i){if(!Dt(i)){F("That is not a Spotify link. Copy a link that starts with https://open.spotify.com/ from the S\
potify app (Share - Copy link). Your current player is unchanged.");return}F(""),n({spotify:i,spotifyOpen:!0})}};return e.
jsxs("aside",{className:"ft-sheet","aria-label":"Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.
jsx("h2",{children:"Settings"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:R,
children:e.jsx(Z,{d:Ft})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"ft\
-chips",children:Gs.map(i=>e.jsxs("button",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:i.accent,font:i.font,
background:{kind:i.bg.kind,id:i.bg.id}}),children:[i.name," theme"]},i.id))}),e.jsxs("div",{className:"ft-field is-stack\
ed",children:[e.jsx("span",{className:"ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",children:[
Vs.map(i=>e.jsx("button",{type:"button",className:`ft-colorswatch ${s.accent.toLowerCase()===i.value?"is-active":""}`,style:{
background:i.value},"aria-label":`${i.name} accent`,onClick:()=>n({accent:i.value})},i.id)),e.jsxs("label",{className:"f\
t-colorcustom",children:[e.jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8c6","aria-lab\
el":"Custom accent color",onChange:i=>n({accent:i.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),e.jsxs("di\
v",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx("div",{className:"\
ft-chips",children:$t.map(i=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.font===i.id?"is-active":""}`,style:i.
css==="inherit"?void 0:{fontFamily:i.css},onClick:()=>n({font:i.id}),children:i.name},i.id))})]}),e.jsxs("div",{className:"\
ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Clock style"}),e.jsx("div",{className:"\
ft-chips",children:[["ring","Ring"],["bar","Bar"],["minimal","Minimal"]].map(([i,S])=>e.jsx("button",{type:"button",className:`\
ft-chipbtn ${s.clockStyle===i?"is-active":""}`,onClick:()=>n({clockStyle:i}),children:S},i))})]}),e.jsxs("div",{className:"\
ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Clock size"}),e.jsx("div",{className:"\
ft-chips",children:[["s","Small"],["m","Medium"],["l","Large"]].map(([i,S])=>e.jsx("button",{type:"button",className:`ft\
-chipbtn ${s.clockSize===i?"is-active":""}`,onClick:()=>n({clockSize:i}),children:S},i))})]}),e.jsx(q,{label:"Cycle dots",
checked:s.showDots,onChange:i=>n({showDots:i})}),e.jsx(q,{label:"Today's stats chip",checked:s.showChip,onChange:i=>n({showChip:i})}),
e.jsx(q,{label:"Shortcut hints",checked:s.showHint,onChange:i=>n({showHint:i})})]}),e.jsxs("section",{children:[e.jsx("h\
3",{children:"Music (Spotify player)"}),e.jsx("div",{className:"ft-chips",children:Pt.map(i=>e.jsx("button",{type:"butto\
n",className:`ft-chipbtn ${s.spotify===i.id?"is-active":""}`,onClick:()=>{F(""),n({spotify:i.id,spotifyOpen:!0})},children:i.
name},i.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"\
Any Spotify link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste an open.spotify.com playlist, album, track o\
r podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official player at the bottom of the page; this\
 is not account sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-s\
econd previews when signed out; podcast episodes usually play in full."}),e.jsxs("span",{className:"ft-inrow",children:[
e.jsx("input",{className:"ft-textinput",value:$,placeholder:"https://open.spotify.com/playlist/…",onChange:i=>D(i.target.
value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:P,children:"Use link"})]}),
s.spotify?e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(
{spotifyOpen:!s.spotifyOpen}),children:s.spotifyOpen?"Minimize player":"Show player"}),e.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1}),children:"Remove player"})]}):null,B?e.jsx("span",{className:"\
ft-field-hint",children:B}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(ve,{label:"Focus",
value:s.focusMin,min:1,max:180,unit:"min",onChange:i=>n({focusMin:i})}),e.jsx(ve,{label:"Short break",value:s.shortMin,min:1,
max:60,unit:"min",onChange:i=>n({shortMin:i})}),e.jsx(ve,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:i=>n(
{longMin:i})}),e.jsx(ve,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:i=>n({longEvery:i})}),
e.jsx(q,{label:"Auto-start breaks",checked:s.autoBreaks,onChange:i=>n({autoBreaks:i})}),e.jsx(q,{label:"Auto-start focus",
checked:s.autoFocus,onChange:i=>n({autoFocus:i})}),y?e.jsx(q,{label:"Browser notifications",hint:"Alerts when a session \
ends in another tab.",checked:s.notifications,onChange:w}):null,g?e.jsx(q,{label:"Keep screen awake",checked:s.keepAwake,
onChange:i=>n({keepAwake:i})}):null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"\
ft-chips",children:Ys.map(i=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===i.id?"is-active":""}`,
onClick:()=>{n({alarmSound:i.id}),j(i.id)},children:i.name},i.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx(
"span",{className:"ft-field-label",children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,
"aria-label":"Alarm volume",onChange:i=>n({alarmVolume:parseFloat(i.target.value)})})]}),e.jsx(q,{label:"Ring twice",checked:s.
alarmRepeat,onChange:i=>n({alarmRepeat:i})}),e.jsx(q,{label:"Ticking while running",checked:s.tick,onChange:i=>n({tick:i})}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:A,placeholder:"\
https://…/sound.mp3",onChange:i=>L(i.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:m,children:"Use link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:i=>{var S;return b((S=i.target.files)==null?void 0:S[0])}})]}),s.customAlarm?
e.jsxs("span",{className:"ft-field-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"\
ft-field-hint",children:o}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"\
ft-chips",children:Tt.map(i=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.ambient===i.id?"is-active":""}`,onClick:()=>n(
{ambient:i.id}),children:i.name},i.id))}),s.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{
className:"ft-field-label",children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.ambientVolume,
"aria-label":"Ambient volume",onChange:i=>n({ambientVolume:parseFloat(i.target.value)})})]}):null]}),e.jsxs("section",{children:[
e.jsx("h3",{children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Scenes"}),e.jsx("div",{className:"ft-bg\
grid",children:Ke.map(i=>e.jsx(un,{scene:i,active:v.kind==="scene"&&v.id===i.id,onPick:()=>n({background:{kind:"scene",id:i.
id}})},i.id))}),e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Illustrated scenes are draw\
n to loop seamlessly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay o\
nly when chosen. While a scene loads, your previous background stays on screen (a still photo on your first visit); a sc\
ene that cannot load keeps it rather than going black or swapping to something else."}),e.jsx(q,{label:"Animate backgrou\
nds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:s.bgAnimate!==!1,onChange:i=>n({
bgAnimate:i})}),e.jsx("h4",{className:"ft-subhead",children:"Animated"}),e.jsx("div",{className:"ft-bggrid",children:Lt.
map(i=>e.jsx("button",{type:"button",className:`ft-bgswatch ft-animsw ft-animsw-${i.id} ${v.kind==="animated"&&v.id===i.
id?"is-active":""}`,"aria-label":`${i.name} animated background`,onClick:()=>n({background:{kind:"animated",id:i.id}})},
i.id))}),e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:_s.map(i=>e.
jsx(fn,{id:i.id,name:i.name,active:v.kind==="builtin"&&v.id===i.id,onPick:()=>n({background:{kind:"builtin",id:i.id}})},
i.id))}),e.jsx("h4",{className:"ft-subhead",children:"Colors"}),e.jsx("div",{className:"ft-bggrid",children:Se.map(i=>e.
jsx("button",{type:"button",className:`ft-bgswatch ${v.kind==="gradient"&&v.id===i.id?"is-active":""}`,style:{backgroundImage:i.
css},"aria-label":i.name,onClick:()=>n({background:{kind:"gradient",id:i.id}})},i.id))}),e.jsxs("div",{className:"ft-fie\
ld is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),e.jsx("spa\
n",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image lin\
k (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match it\
s own shape, never stretched. Saved links reload each visit. When a direct image load is blocked, the link you paste is \
fetched through a public image relay (weserv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"\
ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:M,placeholder:"https://www.pinterest.com/pin/…",onChange:i=>N(
i.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:T,children:"Use \
link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or vid\
eo file",className:"ft-fileinput",onChange:i=>{var S;return c((S=i.target.files)==null?void 0:S[0])}})]}),e.jsx("span",{
className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),a?e.jsx("span",{className:"ft-field-hint",children:a}):
null]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Impor\
ted image or video fit"}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:`ft-chip\
btn ${s.customFit!=="contain"?"is-active":""}`,onClick:()=>n({customFit:"cover"}),children:"Crop to fill"}),e.jsx("butto\
n",{type:"button",className:`ft-chipbtn ${s.customFit==="contain"?"is-active":""}`,onClick:()=>n({customFit:"contain"}),
children:"Show whole image"})]}),e.jsx("span",{className:"ft-field-hint",children:"Crop fills the screen. Show whole ima\
ge preserves the full composition with plain dark space where needed. No blur-fill or stretching."})]}),e.jsx(q,{label:"\
Sharpen imported images",hint:"A local sharpen filter for images you paste or upload - it cannot add detail a small orig\
inal never had. Runs on your device only; images never leave this browser.",checked:s.enhance!==!1,onChange:i=>n({enhance:i})}),
e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"Darken background"}),e.jsx(
"input",{type:"range",min:.15,max:.85,step:.05,value:s.scrim,"aria-label":"Background darkness",onChange:i=>n({scrim:parseFloat(
i.target.value)})})]})]}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"\
Start over"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:k,children:"Reset settings"})]}),e.jsxs(
"p",{className:"ft-field-hint",children:["Your settings, tasks and stats stay in this browser. Link backgrounds and soun\
ds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is blocked; Spotify playba\
ck happens inside Spotify's official player; selected catalog videos stream from Pixabay's CDN. ",E]})]})});function yn(){
return typeof window<"u"&&/[?&]popout=1/.test(window.location.search)?e.jsx(hn,{}):e.jsx(xn,{})}function xn(){var dt;const[
t,s,n]=ke("ft-settings.v2",Be),[a,o,l]=ke("ft-tasks.v1",{tasks:[],activeId:null}),[f,h,p]=ke("ft-stats.v1",{days:{}}),[c,
b,j]=ke("ft-session.v1",null),w=r.useMemo(()=>({focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,
t.shortMin,t.longMin]),[y,g]=r.useState("focus"),[k,E]=r.useState(!1),[R,M]=r.useState(w.focus),[N,A]=r.useState(0),[L,$]=r.
useState("none"),[D,B]=r.useState(!1),F=r.useRef(0),v=r.useRef(!1);v.current=k;const T=r.useRef(y);T.current=y;const m=r.
useRef(R);m.current=R;const P=r.useRef(t.accent);P.current=t.accent;const[i,S]=r.useState(null),[Y,Q]=r.useState(null),[
Ot,Ce]=r.useState(null),[Ut,ee]=r.useState(""),[Me,He]=r.useState(null),[_t,K]=r.useState(""),_=r.useRef(null),te=r.useRef(
null),pe=r.useRef(null),Xe=r.useCallback(async d=>{ee("Loading background…");try{const u=d.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.
test(u)&&!/pin(it)?\./i.test(u))return S(C=>(C&&C.url.startsWith("blob:")&&URL.revokeObjectURL(C.url),{url:u,kind:"video"})),
ee("Background applied."),!0;const x=await en(d);return x.type.startsWith("video/")?S(C=>(C&&C.url.startsWith("blob:")&&
URL.revokeObjectURL(C.url),{url:URL.createObjectURL(x),kind:"video"})):S(C=>(C&&C.url.startsWith("blob:")&&URL.revokeObjectURL(
C.url),{url:URL.createObjectURL(x),kind:"image"})),ee("Background applied."),!0}catch(u){const x=u instanceof Error&&u.message===
"short pin link"?"Short pin.it links cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/\
pin/… link. Your previous background is unchanged.":"Could not load that pin or link. Private or deleted pins cannot b\
e read. Use a public pin link, a direct image link, or upload the image below. Your previous background is unchanged.";return ee(
x),!1}},[]),Je=r.useCallback(async d=>{K("Loading sound…");try{const u=await ze(d);if(!/^audio\//.test(u.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.
test(d))throw new Error("not audio");return He(x=>(x&&URL.revokeObjectURL(x),URL.createObjectURL(u))),K("Sound saved. It\
 will ring when a session ends."),!0}catch{return K("That link blocks cross-site loading. Download the sound to your dev\
ice and upload it instead. Your previous sound is unchanged."),!1}},[]),Ee=r.useRef(""),Ae=r.useRef("");r.useEffect(()=>{
n.ready&&t.background.kind==="link"&&t.background.source&&t.background.source!==Ee.current&&(Ee.current=t.background.source,
Xe(t.background.source))},[n.ready,t.background]),r.useEffect(()=>{var u;if(!n.ready)return;const d=((u=t.customAlarm)==
null?void 0:u.source)||"";t.alarmSound==="custom"&&d&&d!==Ae.current&&(Ae.current=d,Je(d))},[n.ready,t.alarmSound,t.customAlarm]);
const Ze=r.useRef(!1);r.useEffect(()=>{var d;!n.ready||Ze.current||(Ze.current=!0,t.background.kind==="upload"&&(W({background:{
kind:"gradient",id:"dusk"}}),ee("Your uploaded image resets when the tab reloads. Upload it again, or save a link instea\
d.")),!((d=t.customAlarm)!=null&&d.source)&&t.alarmSound==="custom"&&(W({alarmSound:"bell"}),K("Your uploaded sound rese\
ts when the tab reloads. Upload it again, or save a link instead.")))},[n.ready]),r.useEffect(()=>{n.ready&&(!t.accent||
!t.font||!t.clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||
typeof t.bgAnimate!="boolean")&&s(d=>({...Be,...d}))},[n.ready]);const H=t.background;r.useEffect(()=>{let d=!0;if(n.ready){
if(H.kind==="builtin"){const u=H.id&&jt[H.id]?H.id:"rain";_e[u]?Ce(_e[u]):(Ce(null),jt[u]().then(x=>{_e[u]=x.default,d&&
Ce(x.default)}).catch(()=>{}))}return()=>{d=!1}}},[n.ready,H.kind,H.id]);const Qe=r.useRef(!1),V=r.useCallback(d=>{j.ready&&
b({phase:d.phase,running:d.running,endAt:d.endAt||0,remainingMs:d.remainingMs,cycleCount:d.cycleCount})},[j.ready]);r.useEffect(
()=>{if(!j.ready||Qe.current||(Qe.current=!0,!c))return;const d=c.phase==="short"||c.phase==="long"?c.phase:"focus";if(g(
d),A(c.cycleCount||0),c.running&&c.endAt>Date.now()+500)F.current=c.endAt,M(c.endAt-Date.now()),E(!0);else if(c.running)
M(U.current[d]),E(!1);else{const u=typeof c.remainingMs=="number"&&c.remainingMs>0?Math.min(c.remainingMs,U.current[d]):
U.current[d];M(u),E(!1)}},[j.ready]);const ae=r.useRef({}),U=r.useRef(w);U.current=w;const et=r.useCallback(d=>{const u=T.
current;let x="focus",C=N;if(u==="focus"){if(C=d?N:N+1,A(C),x=C%Math.max(1,t.longEvery)===0&&C>0?"long":"short",!d){const xe=me(),
ut=f.days[xe]||{focusSec:0,sessions:0};h({days:{...f.days,[xe]:{focusSec:ut.focusSec+Math.round(U.current.focus/1e3),sessions:ut.
sessions+1}}}),a.activeId&&o(Te=>({...Te,tasks:Te.tasks.map(be=>be.id===Te.activeId?{...be,done:be.done+1}:be)}))}}else x=
"focus";if(t.alarmSound==="custom"&&_.current)try{_.current.currentTime=0,_.current.volume=t.alarmVolume,_.current.play().
catch(()=>fe("bell",t.alarmVolume,t.alarmRepeat))}catch{fe("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound==="cust\
om"?fe("bell",t.alarmVolume,t.alarmRepeat):fe(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${X[u]} finished`,{body:x==="focus"?"Time to focus.":`Tim\
e for a ${X[x].toLowerCase()}.`})}catch{}delete ae.current[u],g(x),M(U.current[x]);const I=x==="focus"?t.autoFocus:t.autoBreaks;
I?(F.current=Date.now()+U.current[x],E(!0)):E(!1),V({phase:x,running:I,endAt:I?Date.now()+U.current[x]:0,remainingMs:U.current[x],
cycleCount:C})},[N,t,f,h,o,V]),he=r.useRef(et);he.current=et,r.useEffect(()=>{if(!k)return;const d=window.setInterval(()=>{
const u=F.current-Date.now();u<=0?he.current(!1):M(x=>Math.ceil(x/1e3)!==Math.ceil(u/1e3)?u:x)},250);return()=>window.clearInterval(
d)},[k]),r.useEffect(()=>{v.current||(delete ae.current[T.current],M(w[T.current]))},[w]);const tt=r.useRef(0);r.useEffect(
()=>{if(!k||!t.tick)return;const d=window.setInterval(()=>{const u=Math.ceil((F.current-Date.now())/1e3);u!==tt.current&&
(tt.current=u,Ks(t.alarmVolume))},250);return()=>window.clearInterval(d)},[k,t.tick,t.alarmVolume]),r.useEffect(()=>{document.
title=`${oe(R)} - ${X[y]} - Study focus timer`},[R,y]),r.useEffect(()=>(te.current&&(te.current(),te.current=null),t.ambient!==
"none"&&(te.current=Zs(t.ambient,t.ambientVolume)),()=>{te.current&&(te.current(),te.current=null)}),[t.ambient,t.ambientVolume]),
r.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let d=!1;const u=()=>{navigator.wakeLock.request("scr\
een").then(C=>{d||(pe.current=C)}).catch(()=>{})};u();const x=()=>{document.visibilityState==="visible"&&u()};return document.
addEventListener("visibilitychange",x),()=>{if(d=!0,document.removeEventListener("visibilitychange",x),pe.current){try{pe.
current.release()}catch{}pe.current=null}}},[t.keepAwake]),r.useEffect(()=>{Me?(_.current=new Audio(Me),_.current.preload=
"auto"):_.current=null},[Me]);const st=r.useRef(()=>{}),nt=r.useRef(()=>{}),at=r.useRef(()=>{}),ie=r.useCallback(()=>{if(Ne(),
_.current)try{_.current.pause(),_.current.currentTime=0}catch{}F.current=Date.now()+m.current,E(!0),V({phase:T.current,running:!0,
endAt:F.current,remainingMs:m.current,cycleCount:N})},[V,N]),re=r.useCallback(()=>{E(!1),V({phase:T.current,running:!1,remainingMs:m.
current,cycleCount:N})},[V,N]),le=r.useCallback(()=>{delete ae.current[T.current],E(!1),M(U.current[T.current]),V({phase:T.
current,running:!1,remainingMs:U.current[T.current],cycleCount:N})},[V,N]),ge=r.useCallback(()=>{he.current(!0)},[]);st.
current=ie,nt.current=re,at.current=le;const ce=r.useCallback(d=>{const u=T.current;if(d===u)return;const x=v.current?Math.
max(0,F.current-Date.now()):m.current;x>0&&x<U.current[u]?ae.current[u]=x:delete ae.current[u];const C=ae.current[d],I=typeof C==
"number"&&C>0?Math.min(C,U.current[d]):U.current[d];E(!1),g(d),M(I),V({phase:d,running:!1,remainingMs:I,cycleCount:N})},
[V,N]),Re=r.useCallback(()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.
requestFullscreen().catch(()=>{})},[]),[it,rt]=r.useState(null),Wt=r.useCallback(()=>{const d=window.documentPictureInPicture;
if(d!=null&&d.requestWindow){d.requestWindow({width:320,height:200}).then(u=>{for(const x of Array.from(document.styleSheets))
try{const C=Array.from(x.cssRules||[]).map(xe=>xe.cssText).join(`
`),I=u.document.createElement("style");I.textContent=C,u.document.head.appendChild(I)}catch{const C=x.href;if(C){const I=u.
document.createElement("link");I.rel="stylesheet",I.href=C,u.document.head.appendChild(I)}}u.document.body.className="ft\
-pip-body",u.addEventListener("pagehide",()=>rt(null)),rt(u)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);r.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const d=new BroadcastChannel(
"sft-sync"),u=()=>d.postMessage({t:"state",phase:T.current,remaining:m.current,running:v.current,dur:U.current[T.current],
accent:P.current,at:Date.now()});u();const x=window.setInterval(u,1e3);return d.onmessage=C=>{const I=C.data;(I==null?void 0:
I.t)==="cmd"&&(I.cmd==="toggle"?v.current?nt.current():st.current():I.cmd==="reset"?at.current():I.cmd==="skip"&&he.current(
!0))},()=>{window.clearInterval(x),d.close()}},[]);const Bt=r.useCallback(()=>{$("none"),B(!0)},[]),qt=L==="tasks",zt=L===
"settings",Vt=r.useCallback(()=>$(d=>d==="tasks"?"none":"tasks"),[]),Gt=r.useCallback(()=>$(d=>d==="settings"?"none":"se\
ttings"),[]),Yt=r.useCallback(()=>$(d=>d==="profile"?"none":"profile"),[]);r.useEffect(()=>{const d=u=>{var C;const x=(C=
u.target)==null?void 0:C.tagName;x==="INPUT"||x==="TEXTAREA"||x==="SELECT"||(u.code==="Space"?(u.preventDefault(),v.current?
re():ie()):u.key==="r"||u.key==="R"?le():u.key==="s"||u.key==="S"?ge():u.key==="1"?ce("focus"):u.key==="2"?ce("short"):u.
key==="3"?ce("long"):u.key==="m"||u.key==="M"?B(I=>!I):(u.key==="f"||u.key==="F")&&Re())};return window.addEventListener(
"keydown",d),()=>window.removeEventListener("keydown",d)},[ie,re,le,ge,ce,Re]);const W=r.useCallback(d=>s(u=>({...u,...d})),
[s]),Kt=r.useCallback(d=>{if(!d)return;const u=d.type.startsWith("video/");if(!u&&!d.type.startsWith("image/")){ee("That\
 file is not an image or video.");return}Q(x=>(x&&URL.revokeObjectURL(x.url),{url:URL.createObjectURL(d),kind:u?"video":
"image"})),W({background:{kind:"upload"}}),ee("Background applied for this visit. Use a link to keep it across visits.")},
[W]),Ht=r.useCallback(d=>{if(d){if(!d.type.startsWith("audio/")){K("That file is not an audio file.");return}He(u=>(u&&URL.
revokeObjectURL(u),URL.createObjectURL(d))),W({alarmSound:"custom",customAlarm:{source:"",name:d.name}}),K(`Using "${d.name}\
" for this visit. Use a link to keep it across visits.`)}},[W]),Xt=r.useCallback(d=>{var u;if(d==="custom"){if(_.current)
try{_.current.currentTime=0,_.current.volume=t.alarmVolume,_.current.play().catch(()=>K("Your browser blocked playback b\
efore the first tap. Press Start once, then preview again."))}catch{}else K((u=t.customAlarm)!=null&&u.source?"Still loa\
ding your sound.":"Add a link or upload a file first.");return}fe(d,t.alarmVolume,!1)},[t.alarmVolume,t.customAlarm]),Jt=r.
useCallback(d=>{if(!d){W({notifications:!1});return}if(!(typeof Notification>"u"))try{const u=Notification.requestPermission();
u&&typeof u.then=="function"?u.then(x=>W({notifications:x==="granted"})).catch(()=>W({notifications:!1})):W({notifications:Notification.
permission==="granted"})}catch{W({notifications:!1})}},[W]),Zt=r.useCallback(()=>s(Be),[s]),Qt=r.useMemo(()=>({focusSec:0,
sessions:0}),[]),ye=f.days[me()]||Qt,Le=r.useMemo(()=>{var x,C;let d=0;const u=new Date;for(((x=f.days[me(u)])==null?void 0:
x.sessions)>0||u.setDate(u.getDate()-1);((C=f.days[me(u)])==null?void 0:C.sessions)>0;)d++,u.setDate(u.getDate()-1);return d},
[f.days]),es=r.useMemo(()=>{const d=[];for(let u=6;u>=0;u--){const x=new Date;x.setDate(x.getDate()-u);const C=f.days[me(
x)];d.push({label:`${"SMTWTFS"[x.getDay()]}`,minutes:Math.round(((C==null?void 0:C.focusSec)||0)/60)})}return d},[f.days]),
ts=r.useMemo(()=>t.showChip?`${ye.sessions} ${ye.sessions===1?"session":"sessions"} · ${Math.round(ye.focusSec/60)} min${Le>
1?` · ${Le}-day streak`:""}`:null,[t.showChip,ye,Le]),ss=n.ready&&l.ready&&p.ready,ns=((dt=$t.find(d=>d.id===t.font))==
null?void 0:dt.css)||"inherit",Ie=1-R/Math.max(1,w[y]),$e=118,ot=2*Math.PI*$e,as=typeof Notification<"u",is=typeof navigator<
"u"&&"wakeLock"in navigator,rs=typeof document<"u"&&document.fullscreenEnabled,lt=a.tasks.find(d=>d.id===a.activeId)||null,
ct=t.spotify?Dt(t.spotify):null;return e.jsxs("div",{className:`ft-root ${D?"is-compact":""}`,style:{"--ft-accent":t.accent,
"--ft-font":ns},children:[e.jsx(cn,{kind:H.kind,id:H.id,scrim:t.scrim,builtinSrc:Ot,linkBg:i,uploadBg:Y,paused:D,animate:t.
bgAnimate!==!1,customFit:t.customFit||"cover",enhance:t.enhance!==!1}),e.jsx(mn,{chip:ts,panel:L,fullscreenSupported:rs,
onFullscreen:Re,onTasks:Vt,onSettings:Gt,onMinimize:Bt,onPopout:Wt,onProfile:Yt}),e.jsxs("main",{className:"ft-center",children:[
e.jsx("nav",{className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(d=>e.jsx("button",{type:"\
button",className:`ft-mode ${y===d?"is-active":""}`,onClick:()=>ce(d),children:X[d]},d))}),t.showDots?e.jsx("div",{className:"\
ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((d,u)=>e.jsx("span",{className:`\
ft-dot ${u<N%Math.max(1,t.longEvery)||N>0&&N%Math.max(1,t.longEvery)===0&&y!=="focus"?"is-done":""}`},u))}):null,e.jsxs(
"div",{className:`ft-clock is-${t.clockSize}`,role:"timer","aria-live":"off","aria-label":`${X[y]} timer, ${oe(R)} remai\
ning`,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-hidden":"true",children:[
e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:$e}),e.jsx("circle",{className:"ft-ring-fill",cx:"130",cy:"\
130",r:$e,strokeDasharray:ot,strokeDashoffset:ot*(1-Ie)})]}):null,e.jsxs("div",{className:"ft-time-wrap",children:[e.jsx(
"div",{className:"ft-time",children:oe(R)}),e.jsx("div",{className:"ft-taskline",children:lt?lt.title:y==="focus"?"Pick \
a task or just focus":"Rest up"})]})]}),t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",
children:e.jsx("span",{style:{width:`${Math.round(Ie*100)}%`}})}):null,e.jsxs("div",{className:"ft-controls",children:[e.
jsx("button",{type:"button",className:"ft-primary",onClick:()=>k?re():ie(),children:k?"Pause":R<w[y]?"Resume":"Start"}),
e.jsx("button",{type:"button",className:"ft-ghost",onClick:le,children:"Reset"}),e.jsx("button",{type:"button",className:"\
ft-ghost",onClick:ge,children:"Skip"})]}),t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R r\
eset · S skip · M minimize · F fullscreen"}):null]}),D?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-l\
abel":"Minimized timer",children:[e.jsx("span",{className:"ft-compactphase",children:X[y]}),e.jsx("span",{className:"ft-\
compacttime",children:oe(R)}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":k?"Pause":"Start",onClick:()=>k?
re():ie(),children:k?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>B(!1),children:"⤢"})]}):null,L==="profile"?e.jsx(Ds,{onClose:()=>$("none")}):null,e.jsx(Ts,{}),qt?e.jsx(pn,
{tasksState:a,setTasksState:o,week:es,ready:ss,savedMessage:l.message||p.message||"",onClose:()=>$("none")}):null,zt?e.jsx(
gn,{settings:t,patch:W,bgStatus:Ut,soundStatus:_t,lastBgSrcRef:Ee,lastSndSrcRef:Ae,resolveLinkBg:Xe,resolveCustomSound:Je,
uploadBg:Kt,uploadSound:Ht,previewAlarm:Xt,requestNotifications:Jt,notificationsSupported:as,wakeLockSupported:is,onResetSettings:Zt,
savedMessage:n.message||"",onClose:()=>$("none")}):null,it?os.createPortal(e.jsxs("div",{className:"ft-pip",children:[e.
jsx("div",{className:"ft-pip-phase",children:X[y]}),e.jsx("div",{className:"ft-pip-time",children:oe(R)}),e.jsx("div",{className:"\
ft-pip-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.round(Ie*100)}%`}})}),e.jsxs("div",{className:"\
ft-pip-btns",children:[e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>k?re():ie(),children:k?
"Pause":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:le,children:"Reset"}),e.jsx("but\
ton",{type:"button",className:"ft-ghost is-compact",onClick:ge,children:"Skip"})]})]}),it.document.body):null,ct?e.jsxs(
"div",{className:`ft-spotify ${t.spotifyOpen?"is-open":""}`,children:[e.jsx("div",{className:"ft-spotify-frame","aria-hi\
dden":!t.spotifyOpen,children:e.jsx("iframe",{src:ct,width:"100%",height:"152",frameBorder:"0",allow:"autoplay; clipboar\
d-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"Spotify player"})}),e.jsx("button",{type:"\
button",className:"ft-spotify-toggle","aria-expanded":t.spotifyOpen,onClick:()=>W({spotifyOpen:!t.spotifyOpen}),children:t.
spotifyOpen?"Hide player":"♫ Music"})]}):null]})}ls(document.getElementById("root")).render(e.jsx(yn,{}));
