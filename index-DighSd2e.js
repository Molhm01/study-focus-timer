import{R as K,j as e,r as a,a as js,c as ws}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").
relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulep\
reload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName===
"LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&
(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const Ss={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function ee({x:t,y:s,r:n,fill:i}){const o=[];for(let l=0;l<10;l++){
const d=Math.PI/5*l-Math.PI/2,p=l%2===0?n:n*.45;o.push(`${(t+p*Math.cos(d)).toFixed(1)},${(s+p*Math.sin(d)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function Ns({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#8fa3d9"})]})}}function Ms({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(ee,{x:14,y:22,r:4,fill:"\
#ffe9a8"}),e.jsx(ee,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(ee,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(ee,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(ee,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(ee,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function Cs({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(ee,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(ee,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function Es({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
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
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function Rs({frame:t}){const s=Ss[t];return s?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const jt=K.memo(function({spec:s,size:n=96}){return e.jsxs("svg",{width:n,
height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(Ms,{aura:s.aura}),e.jsx(Ns,{base:s.base}),e.jsx(Cs,{eyes:s.eyes}),e.jsx(Es,{hat:s.hat}),
e.jsx(Rs,{frame:s.frame})]})}),Ls=2,As=25,Is=15;function wt(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ps(t,s,n){var y,M,N;const i=t.days||{};let o=0,l=0,
d=0,p=0;const f=Object.keys(i).sort();for(const C of f){const S=i[C];S&&(o+=S.focusSec||0,l+=S.sessions||0,(S.focusSec||
0)>d&&(d=S.focusSec||0),(S.sessions||0)>0&&p++)}let m=0;const g=new Date;for((((y=i[wt(g)])==null?void 0:y.sessions)||0)>
0||g.setDate(g.getDate()-1);(((M=i[wt(g)])==null?void 0:M.sessions)||0)>0;)m++,g.setDate(g.getDate()-1);let j=0,v=0,w=null;
for(const C of f){if(!((((N=i[C])==null?void 0:N.sessions)||0)>0))continue;const S=new Date(C+"T12:00:00");w?v=Math.round(
(S.getTime()-w.getTime())/864e5)===1?v+1:1:v=1,v>j&&(j=v),w=S}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:m,bestStreak:j,bestDayMin:Math.round(d/60),activeDays:p}}function $s(t){return t.totalFocusMin*Ls+t.totalSessions*
As+t.totalTasksCompleted*Is}function ze(t){return 100+50*(t-1)}function Ts(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=ze(s);)n-=ze(s),s++;const i=ze(s);return{level:s,xp:t,intoLevel:n,needed:i,progress:i>0?n/i:0}}const St=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function Ds(t){let s=St[0].name;for(const n of St)t>=n.level&&(s=n.name);return s}const Je=[{id:"none-hat",slot:"\
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
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function Os(t,s){return s>=
t.level}function Fs(t){return Je.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const Us=[{id:"moon",name:"\
Moon"},{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},
{id:"sprout",name:"Sprout"},{id:"blob",name:"Blob"}],Nt=[{id:"first-session",name:"First steps",desc:"Complete your firs\
t focus session",unlocked:t=>t.totalSessions>=1},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessi\
ons",unlocked:t=>t.totalSessions>=10},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.totalTasksCompleted>=5},{id:"ta\
sks-25",name:"Task master",desc:"Finish 25 tasks",unlocked:t=>t.totalTasksCompleted>=25},{id:"streak-3",name:"Hat trick",
desc:"Study 3 days in a row",unlocked:t=>t.bestStreak>=3},{id:"streak-7",name:"Full week",desc:"Study 7 days in a row",unlocked:t=>t.
bestStreak>=7},{id:"streak-30",name:"Unstoppable",desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30},{id:"hour-\
day",name:"Solid hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60},{id:"deep-day",name:"Deep work d\
ay",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180},{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 \
total focus hours",unlocked:t=>t.totalFocusMin>=600},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus\
 hours",unlocked:t=>t.totalFocusMin>=6e3}];function Mt(t){if(t<60)return`${t} min`;const s=Math.floor(t/60),n=t%60;return n?
`${s}h ${n}m`:`${s}h`}const _s="sft:ft-stats.v1",Dt="sft:ft-tasks.v1",Ws="sft:ft-session.v1",Ot="sft:ft-profile.v1",et="\
sft:ft-progress-ledger.v1";function tt(){const t=fe(et);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function Ft(t){const s=tt();let n=!1;s.migratedAt===
null&&(s.migratedAt=Date.now(),n=!0);for(const i of t.tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in s.tasks)&&
(s.tasks[i.id]=Date.now(),n=!0);if(n)try{window.localStorage.setItem(et,JSON.stringify(s))}catch{}return s}function Ct(){
const t=fe(Dt)||{tasks:[]};Ft(t)}function zs(t){if(!t)return;const s=tt();let n=!1;if(s.migratedAt===null&&(s.migratedAt=
Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.now(),n=!0),n)try{window.localStorage.setItem(et,JSON.stringify(s))}catch{}}
const Bs={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function fe(t){
try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{return null}}function qs(){const t=fe(Ot);return{
...Bs,...t||{}}}function Et(t){try{window.localStorage.setItem(Ot,JSON.stringify(t))}catch{}}function Vs(){const t=fe("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function Rt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function Ut(){const t=fe(Ws);return!!(t&&t.running&&t.phase==="focu\
s")}function Gs(t){const[s,n]=a.useState(0),[i,o]=a.useState(()=>qs()),[l,d]=a.useState(()=>Vs()),[p,f]=a.useState("");a.
useEffect(()=>{const I=()=>n(P=>P+1),E=window.setInterval(I,2e3);return window.addEventListener("focus",I),window.addEventListener(
"sft:progress",I),()=>{window.clearInterval(E),window.removeEventListener("focus",I),window.removeEventListener("sft:pro\
gress",I)}},[t]);const m=a.useMemo(()=>fe(_s)||{days:{}},[s]),g=a.useMemo(()=>fe(Dt)||{tasks:[],activeId:null},[s]),[j,v]=a.
useState(()=>tt());a.useEffect(()=>{v(Ft(g))},[g]);const w=a.useMemo(()=>Ps(m,g,Object.keys(j.tasks).length),[m,g,j]),y=a.
useMemo(()=>Ts($s(w)),[w]),M=a.useCallback(I=>{o(E=>{const P={...E,...I,updatedAt:Date.now()};try{Et(P)}catch{f("This br\
owser blocked saving. Profile changes last until the tab closes.")}return P})},[]),N=a.useCallback(I=>{o(()=>{try{Et(I)}catch{}
return I})},[]),C=a.useCallback(I=>{d(E=>{const P={...E,seenAchievements:Array.from(new Set([...E.seenAchievements,...I]))};
return Rt(P),P})},[]),S=a.useCallback(I=>{d(E=>{const P={...E,celebratedLevel:Math.max(E.celebratedLevel,I)};return Rt(P),
P})},[]);return{ready:!0,snapshot:w,levelInfo:y,profile:i,setProfile:M,replaceProfile:N,meta:l,markAchievementsSeen:C,celebrateLevel:S,
storageMessage:p}}const Ie={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},V=!!(Ie.apiKey&&Ie.databaseURL&&
Ie.authDomain),Be="10.14.1",qe={app:`https://www.gstatic.com/firebasejs/${Be}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${Be}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Be}/firebase-database.js`};let je=null;
function Ve(t){return new Function("u","return import(u)")(t)}function ue(){if(!je){const t=Promise.all([Ve(qe.app),Ve(qe.
auth),Ve(qe.database)]).then(([s,n,i])=>{const o=s.initializeApp(Ie);return{auth:n.getAuth(o),db:i.getDatabase(o),authApi:n,
dbApi:i}});t.catch(()=>{je===t&&(je=null)}),je=t}return je}function Ys(){const[t,s]=a.useState(V?"loading":"off"),[n,i]=a.
useState(null),[o,l]=a.useState("");a.useEffect(()=>{if(!V)return;let f,m=!0;return ue().then(({auth:g,authApi:j})=>{m&&
(f=j.onAuthStateChanged(g,v=>{m&&(v?(i({uid:v.uid,name:v.displayName||(v.isAnonymous?"Guest":"Scholar"),email:v.email||null,
anonymous:!!v.isAnonymous}),s("signed-in")):(i(null),s("signed-out")))}))}).catch(()=>{m&&(s("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{m=!1,f&&f()}},[]);const d=a.useCallback(()=>{
V&&(l(""),ue().then(({auth:f,authApi:m})=>m.signInWithPopup(f,new m.GoogleAuthProvider)).catch(f=>{f&&(f.code==="auth/po\
pup-closed-by-user"||f.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),p=a.useCallback(()=>{V&&ue().then(({auth:f,authApi:m})=>m.signOut(f)).catch(()=>{})},[]);return{status:t,
user:n,error:o,signInWithGoogle:d,signOut:p}}async function Ks(t){if(!V)return null;const{db:s,dbApi:n}=await ue(),i=await n.
get(n.child(n.ref(s),`profiles/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function Lt(t,s){if(!V)return;const{db:n,dbApi:i}=await ue();
await i.set(i.ref(n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,
updatedAt:s.updatedAt})}function _t(t,s){const[n,i]=a.useState(null),[o,l]=a.useState(V?"connecting":"off"),d=a.useRef(t);
return d.current=t,a.useEffect(()=>{if(!V||!s){l("off"),i(null);return}let p=!0,f;return l("connecting"),(async()=>{try{
const{auth:m,db:g,authApi:j,dbApi:v}=await ue();let w=m.currentUser;if(w||(w=(await j.signInAnonymously(m)).user),!p)return;
const y=v.ref(g,`presence/${w.uid}`),M=()=>v.set(y,{studying:d.current,ts:Date.now()}).catch(()=>{});await M(),v.onDisconnect(
y).remove().catch(()=>{});const N=window.setInterval(M,3e4),C=v.onValue(v.ref(g,"presence"),S=>{if(!p)return;const I=Date.
now();let E=0;const P=S&&S.val?S.val():{};for(const W of Object.keys(P||{})){const T=P[W];T&&T.studying===!0&&typeof T.ts==
"number"&&I-T.ts<9e4&&E++}i(E),l("live")},()=>{p&&l("error")});f=()=>{window.clearInterval(N),C&&C(),v.remove(y).catch(()=>{})}}catch{
p&&l("error")}})(),()=>{p=!1,f&&f()}},[s]),a.useEffect(()=>{!V||!s||o!=="live"||ue().then(({auth:p,db:f,dbApi:m})=>{const g=p.
currentUser;g&&m.set(m.ref(f,`presence/${g.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,
status:o}}function Hs(){const[t,s]=a.useState(!1);return a.useEffect(()=>{Ct();const n=()=>Ct(),i=window.setInterval(n,15e3);
if(!V)return()=>window.clearInterval(i);const o=()=>s(Ut());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(i)}},[]),_t(t,V),null}const Zs=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],Xs=K.memo(function({onClose:s}){const n=Gs(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:d,replaceProfile:p,meta:f}=n,m=Ys(),[g,j]=a.useState(!1);a.useEffect(()=>{if(!V)return;const k=()=>j(Ut());k();
const x=window.setInterval(k,5e3);return()=>window.clearInterval(x)},[]);const v=_t(g,V),[w,y]=a.useState(!1),[M,N]=a.useState(
""),[C,S]=a.useState(""),I=a.useRef("");a.useEffect(()=>{if(!V||m.status!=="signed-in"||!m.user||m.user.anonymous)return;
const k=m.user.uid;I.current!==k&&(I.current=k,Ks(k).then(x=>{x&&x.updatedAt>l.updatedAt?(p(x),S("Profile synced from yo\
ur account.")):Lt(k,l).then(()=>S("Profile saved to your account.")).catch(()=>S("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>S("Could not sync right now; your local profile is safe.")))},[m.status,m.user]),a.useEffect(
()=>{if(!V||m.status!=="signed-in"||!m.user||m.user.anonymous||!l.updatedAt)return;const k=window.setTimeout(()=>{Lt(m.user.
uid,l).catch(()=>S("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(k)},[l.
updatedAt,m.status,m.user]);const E=o.level,P=Ds(E),T=a.useMemo(()=>Nt.filter(k=>k.unlocked(i)),[i]).filter(k=>!f.seenAchievements.
includes(k.id)),O=E>f.celebratedLevel,q=Fs(E),_=()=>{const k=M.trim().slice(0,24);d({name:k}),y(!1)},R=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:s,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(jt,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[w?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:M,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:k=>N(k.target.value),onKeyDown:k=>{k.key==="E\
nter"&&_(),k.key==="Escape"&&y(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:_,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{N(l.name),y(!0)},children:[
R," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:P}),v.status==="live"&&v.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",v.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${E}`,children:["Lv ",E]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${E}, ${o.intoLevel} of ${o.needed} experience toward level ${E+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),O?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",E," reached - ",P,"!",q.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>n.celebrateLevel(E),children:"Nice"})]}):null,T.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",T.map(k=>k.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>n.markAchievementsSeen(T.map(k=>k.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Mt(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:Mt(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:Us.map(k=>e.jsx("button",{type:"button",title:k.name,"aria-label":`Avatar ${k.name}`,
className:`pf-basebtn ${l.base===k.id?"is-active":""}`,onClick:()=>d({base:k.id}),children:e.jsx(jt,{spec:{...l,base:k.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},k.id))}),Zs.map(({slot:k,label:x})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:x}),e.jsx("div",{className:"pf-gear",children:Je.filter(h=>h.
slot===k).map(h=>{const L=Os(h,E),A=l[k]===h.id||h.id.startsWith("none")&&!Je.some(U=>U.slot===k&&l[k]===U.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${A?"is-active":""} ${L?"":"is-locked"}`,title:L?h.name:`${h.name} - ${h.
hint}`,onClick:()=>{L&&d({[k]:h.id})},children:L?h.name:`🔒 ${h.name} · Lv ${h.level}`},h.id)})})]},k)),q.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",q[0].name," at level ",q[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:Nt.
map(k=>{const x=k.unlocked(i);return e.jsxs("li",{className:x?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:x?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:k.
name}),e.jsx("span",{children:k.desc})]})]},k.id)})}),e.jsx("h3",{children:"Account"}),V?e.jsxs(e.Fragment,{children:[m.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,m.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:m.signInWithGoogle,children:"Sign in with Google"}):null,m.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,m.status==="signed-in"&&m.user?e.jsx("div",{className:"\
pf-account",children:m.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:m.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[m.user.name,m.user.
email?` · ${m.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:m.signOut,children:"\
Sign out"})]})}):null,m.error?e.jsx("p",{className:"ft-field-hint",children:m.error}):null,C?e.jsx("p",{className:"ft-fi\
eld-hint",children:C}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),n.storageMessage?e.jsx("p",{className:"ft-field-hint",children:n.storageMessage}):null]})});
function be(t,s){const[n,i]=a.useState(s),[o,l]=a.useState(!1),[d,p]=a.useState("");a.useEffect(()=>{try{const m=window.
localStorage.getItem("sft:"+t);if(m!=null){const g=JSON.parse(m),j=s!==null&&typeof s=="object"&&!Array.isArray(s)&&g!==
null&&typeof g=="object"&&!Array.isArray(g)?{...s,...g}:g;i(j)}}catch{p("Saved data on this browser could not be read.")}
l(!0)},[t]);const f=a.useCallback(m=>{i(g=>{const j=typeof m=="function"?m(g):m;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(j))}catch{p("This browser blocked saving. Changes last until the tab closes.")}return j})},[t]);return[n,
f,{ready:o,message:d}]}const Js={v2cat:["images/images/v2cat-0.txt","images/images/v2cat-1.txt"],longer:["images/images/\
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
talog-6.txt"]},Ge={};function st(t){return Ge[t]||(Ge[t]=Promise.all(Js[t].map(async s=>{const n=await fetch(s);if(!n.ok)
throw Error("Image unavailable");return n.text()})).then(s=>"data:image/jpeg;base64,"+s.join("").replace(/\s/g,"")))}function Wt(t){
const[s,n]=a.useState("");return a.useEffect(()=>{let i=!0;return st(t).then(o=>{i&&n(o)}).catch(()=>{}),()=>{i=!1}},[t]),
s}const Qs={rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk\
.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-oce\
an.jpg"},en={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-des\
k.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-oc\
ean.jpg"},At=Object.fromEntries(Object.keys(Qs).map(t=>[t,()=>st(t).then(s=>({default:s}))])),It=Object.fromEntries(Object.
keys(en).map(t=>[t,()=>st("thumb-"+t).then(s=>({default:s}))])),Ye={},Ke={},He={focusMin:25,shortMin:5,longMin:15,longEvery:4,
autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,
notifications:!1,keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,
accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,clockOnly:!1,spotify:null,
spotifyOpen:!1,musicOpen:!0,musicMode:"radio",radio:{index:0,playing:!1,volume:.7}},tn=[{id:"rain",name:"Rainy window"},
{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountains",name:"Moun\
tains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],sn=[{id:"#101418",name:"\
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
://cdn.pixabay.com/audio/2026/07/15/21-18-58-754_200x200.jpg",seconds:137}];function Pt(t){const s=t.replace("#",""),n=parseInt(
s.slice(0,2),16)/255,i=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255,l=Math.max(n,i,o),d=Math.min(n,i,o),
p=(l+d)/2;if(l===d)return{h:0,s:0,l:p};const f=l-d,m=p>.5?f/(2-l-d):f/(l+d);let g=0;return l===n?g=(i-o)/f+(i<o?6:0):l===
i?g=(o-n)/f+2:g=(n-i)/f+4,{h:g*60,s:m,l:p}}function Ze(t,s,n){const i=o=>{const l=(o+t/30)%12,d=s*Math.min(n,1-n),p=n-d*
Math.max(-1,Math.min(l-3,9-l,1));return Math.round(p*255).toString(16).padStart(2,"0")};return`#${i(0)}${i(8)}${i(4)}`}function nn(t){
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
.mp4",tile:19,preview:"v2cat",duration:64}],an=new Map(nt.map(t=>[t.id,t]));function on(t,s){const n=d=>t.replace(/_(tiny|small|medium|large)\.mp4/,
d),i=[n("_medium.mp4"),n("_large.mp4"),n("_small.mp4"),n("_tiny.mp4")],o=[...new Set(i)],l=n(s?"_small.mp4":"_medium.mp4");
return[l,...o.filter(d=>d!==l)]}function $t(t){var n;return((n=window.__SFT_POSTERS)==null?void 0:n[t.id])||t.poster}const rn={
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
er-garden-l.mp4","water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},zt=(t,s,n)=>`\
scenes/${rn[`${t}-${s}.${n}`]}`,ln=(t,s)=>zt(t.id,s,"jpg"),cn=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"S\
ky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"\
Violet",value:"#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],Bt=[{id:"sans",name:"Sans",css:"system-ui, -apple-sy\
stem, 'Segoe UI', Roboto, sans-serif"},{id:"serif",name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"\
Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, \
sans-serif"}],dn=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",bg:{kind:"color",id:"#101418"}},{id:"dusk",name:"D\
usk",accent:"#ffcf99",font:"serif",bg:{kind:"color",id:"#3b2f4a"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",
bg:{kind:"color",id:"#0f2e25"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"color",id:"#4a2f3d"}}],un=[
{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Wo\
odblock"},{id:"custom",name:"My sound"}],qt=[{id:"none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"\
storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"\
forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",
name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"\
wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown n\
oise"},{id:"white",name:"White noise"}],Vt=[{id:"lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9\
xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",
name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"}],oe={focus:"Focus",short:"Short br\
eak",long:"Long break"};let we=null;function Pe(){return we||(we=new(window.AudioContext||window.webkitAudioContext)),we.
state==="suspended"&&we.resume(),we}function re(t,s,n){const i=t.createOscillator(),o=t.createGain();i.type=n.type||"sin\
e",i.frequency.value=n.freq,o.gain.setValueAtTime(1e-4,n.start),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),
n.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),i.connect(o),o.connect(s),i.start(n.start),i.stop(
n.start+n.dur+.05)}function Se(t,s,n){const i=Pe(),o=i.createGain();o.gain.value=s,o.connect(i.destination);const l=n?2:
1,d=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let p=0;p<l;p++){const f=i.currentTime+.02+p*(d+.35);if(t==="bell")[[660,.5],[
1320,.28],[1760,.14],[2240,.07]].forEach(([m,g])=>re(i,o,{freq:m,start:f,dur:2.2,gain:g}));else if(t==="chime")re(i,o,{freq:783.99,
start:f,dur:1.3,gain:.4}),re(i,o,{freq:1046.5,start:f+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,.42],[294,.24],[392,
.17],[523,.09]].forEach(([m,g])=>re(i,o,{freq:m,start:f,dur:3.4,gain:g}));else if(t==="beep")for(let m=0;m<3;m++)re(i,o,
{freq:880,type:"square",start:f+m*.3,dur:.16,gain:.22});else t==="wood"&&(re(i,o,{freq:1400,type:"triangle",start:f,dur:.07,
gain:.5}),re(i,o,{freq:1400,type:"triangle",start:f+.22,dur:.07,gain:.4}))}}function fn(t){const s=Pe(),n=s.createGain();
n.gain.value=.35*t,n.connect(s.destination),re(s,n,{freq:1800,start:s.currentTime,dur:.035,gain:.5})}function mn(t,s){const n=2*
t.sampleRate,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);let l=0;for(let d=0;d<n;d++){const p=Math.random()*
2-1;s==="brown"?(l=(l+.02*p)/1.02,o[d]=l*3.2):o[d]=p}return i}const pn={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
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
"sounds/stream-5.txt"]},Le={};function hn(t,s){return Le[s]||(Le[s]=Promise.all((pn[s]||[]).map(async n=>{const i=await fetch(
n);if(!i.ok)throw new Error(`HTTP ${i.status}`);return(await i.text()).trim()})).then(n=>{if(!n.length)throw new Error("\
Recording unavailable");const i=atob(n.join(""));return t.decodeAudioData(Uint8Array.from(i,o=>o.charCodeAt(0)).buffer)}).
catch(n=>{throw delete Le[s],n})),Le[s]}function gn(t,s){if(t==="none")return null;const n=qt.find(p=>p.id===t),i=Pe(),o=i.
createGain();if(o.gain.value=s,o.connect(i.destination),n!=null&&n.file){let p=!1,f=null;return hn(i,n.file).then(m=>{p||
(f=i.createBufferSource(),f.buffer=m,f.loop=!0,f.connect(o),f.start())}).catch(()=>{}),()=>{p=!0;try{f==null||f.stop()}catch{}
try{o.disconnect()}catch{}}}const l=i.createBufferSource();l.buffer=mn(i,t==="white"?"white":"brown"),l.loop=!0;let d=l;
if(t==="brown"){const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=900,d.connect(p),d=p}return d.connect(
o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function yn(t){return/^https:\/\/.+/i.test(t.trim())}async function Qe(t){
const s=await fetch(t);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.blob()}async function Tt(t){try{const s=await Qe(
t);if(s.type.startsWith("image/"))return s;throw new Error("not an image")}catch{const s=`https://images.weserv.nl/?url=${encodeURIComponent(
t.replace(/^https?:\/\//,""))}`,n=await Qe(s);if(!n.type.startsWith("image/"))throw new Error("not an image");return n}}
async function xn(t){var d;const s=t.trim();if(/pin\.it\//i.test(s))throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let i=s;if(n){const p=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!p.ok)throw new Error("pin lookup failed");const f=await p.json();if((f==null?void 0:f.status)!=="success"||!Array.isArray(
f==null?void 0:f.data)||f.data.length===0)throw new Error("pin unavailable");const m=(d=f.data[0])==null?void 0:d.images;
if(!m)throw new Error("pin has no image");const g=m.originals||m["736x"]||m["564x"]||m["236x"];if(!(g!=null&&g.url))throw new Error(
"pin has no image");i=g.url}const o=i.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{const p=`${o[1]}\
/originals${o[2]}`;return{blob:await Tt(p),finalUrl:p}}catch{}if(!/^https:\/\//i.test(i))throw new Error("not a link");return{
blob:await Tt(i),finalUrl:i}}function Gt(t){const s=Vt.find(o=>o.id===t),i=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const se=({d:t,vb:s=24})=>e.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,i)=>e.jsx("path",{d:n},i))}),bn="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",kn="M5 12h14",vn="M4 6h16|M4 12h16|M4 18h10",jn="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Yt="M6 6l12 12|M18 6L6 18",wn="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function le(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),i=s%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function Ne(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function Ae({label:t,value:s,min:n,max:i,onChange:o,unit:l}){const d=p=>{const f=parseInt(p,10);Number.
isFinite(f)&&o(Math.min(i,Math.max(n,f)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:i,value:s,onChange:p=>d(p.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,s+1)),children:"\
+"})]})]})}function Z({label:t,hint:s,checked:n,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>i(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const Sn=K.memo(function({scene:s,token:n,
paused:i,animate:o,onReady:l,onFail:d}){const p=a.useRef(null),[f,m]=a.useState(!1),[g,j]=a.useState(0),v=a.useMemo(()=>window.
matchMedia("(max-width: 900px), (orientation: portrait)").matches,[]),w=a.useMemo(()=>s.url?on(s.url,v):[zt(s.id,"p","mp\
4")],[s,v]),y=w[Math.min(g,w.length-1)],M=a.useRef({paused:i,animate:o});M.current={paused:i,animate:o};const N=a.useRef(
{onReady:l,onFail:d});return N.current={onReady:l,onFail:d},a.useEffect(()=>{m(!1);const C=p.current;if(!C)return;let S=!1,
I=!1,E=0,P=!1,W=!1;const T=A=>A.play().catch(()=>{}),O=()=>!M.current.paused&&M.current.animate&&!document.hidden,q=()=>{
const A=document.createElement("video");return A.className="ft-bg ft-bgvideo",A.muted=!0,A.playsInline=!0,A.setAttribute(
"playsinline",""),A.setAttribute("disablepictureinpicture",""),A.setAttribute("disableremoteplayback",""),A.preload="aut\
o",A.src=y,A.setAttribute("aria-hidden","true"),A.loop=!s.blend,A},_=()=>{W||I||(W=!0,j(A=>A<w.length-1?A+1:(m(!0),x&&(x.
remove(),x=null),N.current.onFail(n),A)))};let R=null;const k=()=>{I||(x&&(x.currentTime=0,x.style.opacity="1",O()&&T(x)),
R&&(R.remove(),R=null),S=!1)};let x=q();x.addEventListener("error",_),x.addEventListener("ended",k),C.appendChild(x);const h=()=>{
O()?P&&x&&(T(x),R&&T(R)):(x==null||x.pause(),R==null||R.pause())},L=()=>{if(!(I||!x)){if(!P&&x.readyState>=2&&(P=!0,p.current&&
(p.current.style.opacity="1"),N.current.onReady(n),O()&&T(x)),O()&&P){x.paused&&!x.ended&&T(x);const A=s.duration||x.duration,
U=Math.min(1.5,A/4);if(!s.blend){E=requestAnimationFrame(L);return}if(!S&&Number.isFinite(A)&&x.currentTime>=A-U&&(S=!0,
R=q(),R.style.opacity="0",R.style.zIndex="2",R.addEventListener("error",()=>{}),C.appendChild(R),R.currentTime=0,T(R)),S&&
R&&R.readyState>=2){R.paused&&T(R);const r=Math.min(1,R.currentTime/U);x.style.opacity=String(1-r),R.style.opacity="1",r>=
1&&(x.remove(),x=R,R=null,S=!1,x.addEventListener("error",_),x.addEventListener("ended",k),C.dataset.wraps=String(Number(
C.dataset.wraps||0)+1))}}E=requestAnimationFrame(L)}};return E=requestAnimationFrame(L),document.addEventListener("visib\
ilitychange",h),window.addEventListener("pointerdown",h),()=>{I=!0,cancelAnimationFrame(E),x==null||x.pause(),R==null||R.
pause(),x==null||x.remove(),R==null||R.remove(),document.removeEventListener("visibilitychange",h),window.removeEventListener(
"pointerdown",h)}},[y]),e.jsx("div",{ref:p,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:f&&
e.jsx("span",{className:"ft-stream-status",children:"This scene could not load right now. Try another background."})},y)}),
Nn=K.memo(function({scene:s,paused:n,animate:i}){const[o,l]=a.useState([{s,key:0}]),[d,p]=a.useState(null),f=Wt("rain"),
m=a.useRef(0),g=a.useRef(o),j=a.useRef(0),v=a.useRef(null),w=C=>{g.current=C,l(C)};a.useEffect(()=>{const C=g.current,S=C[C.
length-1];if(S&&S.s.id===s.id){j.current=S.key;const E=S.key;window.setTimeout(()=>{j.current===E&&v.current===E&&w(g.current.
filter(P=>P.key===E))},400);return}const I=++m.current;j.current=I,w([...C.filter(E=>E.s.id!==s.id).slice(-1),{s,key:I}])},
[s]);const y=a.useCallback(C=>{C===j.current&&(v.current=C,p(C),window.setTimeout(()=>{j.current===C&&w(g.current.filter(
S=>S.key===C))},400))},[]),M=a.useCallback(C=>{},[]),N=d===null||d!==j.current;return e.jsxs(e.Fragment,{children:[N?e.jsx(
"div",{className:"ft-bg",style:{backgroundColor:"#101418",backgroundImage:f?`url(${f})`:void 0,backgroundSize:"cover",backgroundPosition:"\
center"}}):null,o.map(C=>e.jsx(Sn,{scene:C.s,token:C.key,paused:n,animate:i,onReady:y,onFail:M},C.key)),N&&o.length>1?e.
jsx("div",{className:"ft-scene-switching","aria-hidden":"true",children:e.jsx("i",{})}):null]})}),Mn=K.memo(function({kind:s,
id:n,scrim:i,builtinSrc:o,linkBg:l,uploadBg:d,paused:p,animate:f,customFit:m,enhance:g}){let j={};s==="builtin"&&o?j={backgroundImage:`\
url(${o})`}:s==="color"?j={backgroundColor:/^#[0-9a-f]{6}$/i.test(n||"")?n:"#101418"}:s==="link"&&(l==null?void 0:l.kind)===
"image"?j={backgroundImage:`url(${l.url})`}:s==="upload"&&(d==null?void 0:d.kind)==="image"?j={backgroundImage:`url(${d.
url})`}:(s==="link"||s==="upload"||s==="builtin")&&(j={backgroundColor:"#101418"}),(s==="link"||s==="upload")&&j.backgroundImage&&
(j={...j,backgroundSize:m,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},g!==!1&&(j={...j,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const v=s==="scene"?an.get(n)||nt[0]:void 0,w=s==="link"&&(l==null?void 0:l.kind)===
"video"?l.url:s==="upload"&&(d==null?void 0:d.kind)==="video"?d.url:null,y=s==="color"?Math.max(i,Math.min(.78,Math.pow(
nn(n||"#101418"),1.15)*.9)):i;return e.jsxs(e.Fragment,{children:[v?e.jsx(Nn,{scene:v,paused:!!p,animate:f}):w?e.jsx(Cn,
{src:w,paused:!!p,animate:f,fit:m}):e.jsx("div",{className:"ft-bg",style:j}),e.jsx("div",{className:"ft-scrim",style:{opacity:y}}),
e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharp\
en",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),Cn=K.memo(function({
src:s,paused:n,animate:i,fit:o}){const l=a.useRef(null);return a.useEffect(()=>{const d=l.current;if(!d)return;const p=()=>{
n||!i||document.hidden?d.pause():d.play().catch(()=>{})};p();const f=()=>{!n&&i&&!document.hidden&&d.play().catch(()=>{})};
return document.addEventListener("visibilitychange",p),window.addEventListener("pointerdown",f),()=>{document.removeEventListener(
"visibilitychange",p),window.removeEventListener("pointerdown",f)}},[n,i,s]),i?e.jsx("video",{ref:l,className:"ft-bg ft-\
bgvideo",style:{objectFit:o,backgroundColor:"#101418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",
"aria-hidden":"true"}):null}),En=K.memo(function({scene:s,active:n,onPick:i}){const o=Wt(s.preview||"catalog"),l=s.preview===
"v2cat"?5:s.preview==="curated"?3:8,d=s.preview==="v2cat"?4:s.preview==="curated"?3:13;return e.jsxs("button",{type:"but\
ton",className:`ft-bgswatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${s.name} animated scene`,onClick:i,children:[
$t(s)?e.jsx("img",{className:"ft-bgswatch-img",src:$t(s),alt:"",loading:"lazy",decoding:"async"}):s.tile!=null?e.jsx("sp\
an",{className:"ft-bgswatch-img",style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}% ${d*100}%`,backgroundPosition:`${s.
tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*100/(d-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:ln(s,"p"),alt:"",
loading:"lazy",decoding:"async"}),e.jsx("span",{className:"ft-bgswatch-name",children:s.name})]})}),Rn=K.memo(function({
id:s,name:n,active:i,onPick:o}){const[l,d]=a.useState(Ke[s]||null);return a.useEffect(()=>{let p=!0;return!Ke[s]&&It[s]&&
It[s]().then(f=>{Ke[s]=f.default,p&&d(f.default)}).catch(()=>{}),()=>{p=!1}},[s]),e.jsx("button",{type:"button",className:`\
ft-bgswatch ${i?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:o})}),Ln=K.memo(function({
color:s,onChange:n}){const o=a.useRef(null),l=/^#[0-9a-f]{6}$/i.test(s)?s:"#101418",d=Pt(l),[p,f]=a.useState(d.l);a.useEffect(
()=>{f(Pt(/^#[0-9a-f]{6}$/i.test(s)?s:"#101418").l)},[s]),a.useEffect(()=>{var N;const v=(N=o.current)==null?void 0:N.getContext(
"2d");if(!v)return;const w=v.createImageData(168,168),y=w.data,M=168/2;for(let C=0;C<168;C++)for(let S=0;S<168;S++){const I=S-
M+.5,E=C-M+.5,P=Math.sqrt(I*I+E*E)/M,W=(C*168+S)*4;if(P>1){y[W+3]=0;continue}const T=(Math.atan2(E,I)*180/Math.PI+360)%360,
O=Ze(T,P,p);y[W]=parseInt(O.slice(1,3),16),y[W+1]=parseInt(O.slice(3,5),16),y[W+2]=parseInt(O.slice(5,7),16),y[W+3]=255}
v.putImageData(w,0,0)},[p]);const m=v=>{var S;const w=(S=o.current)==null?void 0:S.getBoundingClientRect();if(!w)return;
const y=v.clientX-w.left-w.width/2,M=v.clientY-w.top-w.height/2,N=Math.min(1,Math.sqrt(y*y+M*M)/(w.width/2)),C=(Math.atan2(
M,y)*180/Math.PI+360)%360;n(Ze(C,N,p))},g=d.h*Math.PI/180,j=d.s*(168/2);return e.jsxs("div",{className:"ft-wheelwrap",children:[
e.jsxs("span",{className:"ft-wheelbox",children:[e.jsx("canvas",{ref:o,width:168,height:168,className:"ft-wheel","aria-l\
abel":"Color wheel: drag to pick a background color",onPointerDown:v=>{v.target.setPointerCapture(v.pointerId),m(v)},onPointerMove:v=>{
v.buttons&1&&m(v)}}),e.jsx("span",{className:"ft-wheel-dot",style:{left:168/2+Math.cos(g)*j,top:168/2+Math.sin(g)*j,background:l}})]}),
e.jsxs("span",{className:"ft-wheel-side",children:[e.jsx("span",{className:"ft-wheel-preview",style:{background:l},children:l}),
e.jsx("input",{type:"range",min:.05,max:.95,step:.01,value:p,"aria-label":"Color lightness",onChange:v=>{const w=parseFloat(
v.target.value);f(w),n(Ze(d.h,d.s,w))}}),e.jsx("span",{className:"ft-field-hint",children:"Drag the wheel for hue, slide\
 for lightness. Light colors are dimmed behind the timer so text stays readable."})]})]})});function An(t){return t.kind!==
"image"||!t.thumb?"":`https://images.weserv.nl/?url=${encodeURIComponent(t.thumb.replace(/^https?:\/\//,""))}&w=200&h=20\
0&fit=cover&q=70`}function Xe(t){try{const s=new URL(t);if(/pinterest\./i.test(s.host))return"Pinterest pin";const n=decodeURIComponent(
s.pathname.split("/").pop()||"");return n.length>4&&/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(n)?n.slice(0,26):
s.host.replace(/^www\./,"")}catch{return"Saved link"}}const In=K.memo(function({link:s,active:n,onPick:i,onRemove:o}){const l=An(
s);return e.jsxs("span",{className:`ft-bgswatch ft-bgswatch-named ft-linksw ${n?"is-active":""}`,children:[e.jsxs("butto\
n",{type:"button",className:"ft-linksw-pick","aria-label":`Use saved background ${Xe(s.source)}`,onClick:i,children:[s.kind===
"video"?e.jsx("video",{className:"ft-bgswatch-img",src:s.source,muted:!0,playsInline:!0,preload:"metadata"}):l?e.jsx("im\
g",{className:"ft-bgswatch-img",src:l,alt:"",loading:"lazy",decoding:"async"}):null,e.jsx("span",{className:"ft-bgswatch\
-name",children:Xe(s.source)})]}),e.jsx("button",{type:"button",className:"ft-linksw-del","aria-label":`Remove saved bac\
kground ${Xe(s.source)}`,onClick:o,children:"×"})]})}),Pn=K.memo(function({settings:s,patch:n,spotifySrc:i,onOpenSettings:o}){
const l=s.musicMode==="spotify"?"spotify":"radio",d=s.radio&&typeof s.radio.index=="number"?s.radio:{index:0,playing:!1,
volume:.7},p=te[Math.min(Math.max(0,d.index),te.length-1)]||te[0],f=a.useRef(d);f.current=d;const m=a.useRef(l);m.current=
l;const g=a.useRef(null),[j,v]=a.useState(0),[w,y]=a.useState(""),M=a.useRef(0),[N,C]=a.useState(!1),S=a.useRef(null),[I,
E]=a.useState(()=>{try{const h=window.localStorage.getItem("sft:ft-player-pos.v1");if(h){const L=JSON.parse(h);if(L&&typeof L.
x=="number"&&typeof L.y=="number")return L}}catch{}return null}),P=a.useRef(null),W=(h,L)=>{const A=S.current,U=A?A.offsetWidth:
320,r=A?A.offsetHeight:180;return{x:Math.max(4,Math.min(Math.max(4,window.innerWidth-U-4),h)),y:Math.max(4,Math.min(Math.
max(4,window.innerHeight-r-4),L))}},T=h=>{var A;const L=(A=S.current)==null?void 0:A.getBoundingClientRect();L&&(P.current=
{dx:h.clientX-L.left,dy:h.clientY-L.top},h.currentTarget.setPointerCapture(h.pointerId))},O=h=>{P.current&&E(W(h.clientX-
P.current.dx,h.clientY-P.current.dy))},q=()=>{P.current&&(P.current=null,E(h=>{if(!h)return h;const L=W(h.x,h.y);try{window.
localStorage.setItem("sft:ft-player-pos.v1",JSON.stringify(L))}catch{}return L}))};a.useEffect(()=>{const h=()=>E(L=>L&&
W(L.x,L.y));return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),a.useEffect(()=>{
const h=new Audio;h.preload="none",g.current=h;const L=()=>{const r=h.currentTime||0;v(F=>Math.floor(F)===Math.floor(r)?
F:r)},A=()=>{M.current=0,y(""),n({radio:{...f.current,index:(f.current.index+1)%te.length,playing:!0}})},U=()=>{!g.current||
g.current.dataset.track!==p.id||(M.current+=1,M.current>=te.length?(y("Radio tracks cannot load on this connection right\
 now."),n({radio:{...f.current,playing:!1}})):(y("That track could not load - skipped it."),n({radio:{...f.current,index:(f.
current.index+1)%te.length,playing:!0}})))};return h.addEventListener("timeupdate",L),h.addEventListener("ended",A),h.addEventListener(
"error",U),()=>{h.pause(),h.removeEventListener("timeupdate",L),h.removeEventListener("ended",A),h.removeEventListener("\
error",U),g.current=null}},[]),a.useEffect(()=>{const h=g.current;if(!h)return;const L=l==="radio"&&d.playing;h.dataset.
track!==p.id&&(L||h.dataset.track)&&(h.dataset.track=p.id,h.src=p.url,h.preload="auto",M.current=0,v(0))},[p.id,l,d.playing]),
a.useEffect(()=>{const h=g.current;h&&(h.volume=d.volume,l==="radio"&&d.playing?h.play().catch(()=>{}):h.pause())},[l,d.
playing,d.volume,p.id]),a.useEffect(()=>{const h=()=>{const L=g.current;L&&m.current==="radio"&&f.current.playing&&L.paused&&
L.play().catch(()=>{})};return window.addEventListener("pointerdown",h),()=>window.removeEventListener("pointerdown",h)},
[]),a.useEffect(()=>{l==="spotify"&&f.current.playing&&n({radio:{...f.current,playing:!1}})},[l]);const _=h=>{const L=g.
current;if(!L)return;const A=h.currentTarget.getBoundingClientRect(),U=Math.min(1,Math.max(0,(h.clientX-A.left)/A.width)),
r=Number.isFinite(L.duration)&&L.duration>0?L.duration:p.seconds;L.currentTime=U*r,v(L.currentTime)},R=p.seconds,k=R>0?Math.
min(100,j/R*100):0;return e.jsxs("div",{ref:S,className:`ft-player ${N?"is-mini":""}`,style:I?{left:I.x,top:I.y,right:"a\
uto",bottom:"auto"}:void 0,"data-testid":"music-player",children:[e.jsxs("span",{className:"ft-player-head",title:"Drag \
to move",onPointerDown:T,onPointerMove:O,onPointerUp:q,onPointerCancel:q,children:[e.jsx(se,{d:"M9 6h.01|M15 6h.01|M9 12\
h.01|M15 12h.01|M9 18h.01|M15 18h.01"}),e.jsxs("span",{className:"ft-player-mode",children:[e.jsx("button",{type:"button",
className:`ft-player-modebtn ${l==="radio"?"is-active":""}`,onPointerDown:h=>h.stopPropagation(),onClick:()=>n({musicMode:"\
radio"}),children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-player-modebtn ${l==="spotify"?"is-active":
""}`,onPointerDown:h=>h.stopPropagation(),onClick:()=>n({musicMode:"spotify"}),children:"Spotify"})]}),e.jsx("button",{type:"\
button",className:"ft-player-x","aria-label":N?"Expand player":"Minimize player",onPointerDown:h=>h.stopPropagation(),onClick:()=>C(
h=>!h),children:N?"❐":"–"}),e.jsx("button",{type:"button",className:"ft-player-x","aria-label":"Hide player",onPointerDown:h=>h.
stopPropagation(),onClick:()=>n({musicOpen:!1}),children:"×"})]}),N?e.jsx("div",{className:"ft-player-minrow",children:l===
"radio"?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"ft-player-play is-small","aria-label":d.playing?
"Pause radio":"Play radio",onClick:()=>n({radio:{...d,playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("s\
pan",{className:"ft-player-mintitle",children:p.title})]}):e.jsx("span",{className:"ft-player-mintitle",children:"Spotif\
y player"})}):null,l==="radio"?e.jsxs("div",{className:"ft-player-body",children:[e.jsxs("span",{className:"ft-player-ro\
w",children:[e.jsx("img",{className:"ft-player-cover",src:p.cover,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("span",
{className:"ft-player-meta",children:[e.jsx("span",{className:"ft-player-title",children:p.title}),e.jsxs("span",{className:"\
ft-player-artist",children:[p.artist," · instrumental lofi"]}),e.jsx("span",{className:"ft-player-bar",onClick:_,role:"\
slider","aria-label":"Track progress","aria-valuemin":0,"aria-valuemax":R,"aria-valuenow":Math.round(j),children:e.jsx("\
span",{style:{width:`${k}%`}})}),e.jsxs("span",{className:"ft-player-times",children:[le(j*1e3)," / ",le(R*1e3)]})]})]}),
e.jsxs("span",{className:"ft-player-controls",children:[e.jsx("button",{type:"button",className:"ft-player-btn","aria-la\
bel":"Previous track",onClick:()=>n({radio:{...d,index:(d.index-1+te.length)%te.length,playing:!0}}),children:"⏮"}),e.
jsx("button",{type:"button",className:"ft-player-play","aria-label":d.playing?"Pause":"Play",onClick:()=>n({radio:{...d,
playing:!d.playing}}),children:d.playing?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-player-btn","aria-\
label":"Next track",onClick:()=>n({radio:{...d,index:(d.index+1)%te.length,playing:!0}}),children:"⏭"}),e.jsx("input",
{type:"range",className:"ft-player-vol",min:0,max:1,step:.05,value:d.volume,"aria-label":"Radio volume",onChange:h=>n({radio:{
...d,volume:parseFloat(h.target.value)}})})]}),w?e.jsx("span",{className:"ft-player-status",children:w}):null]}):e.jsx("\
div",{className:"ft-player-body",children:i?e.jsx("iframe",{className:"ft-player-iframe",src:i,width:"100%",height:"152",
frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"\
Spotify player"}):e.jsxs("span",{className:"ft-player-status",children:["Pick a Spotify playlist or paste a Spotify link\
 in Settings. ",e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:o,children:"Open settings"})]})})]})}),
$n=K.memo(function({chip:s,panel:n,fullscreenSupported:i,onFullscreen:o,onTasks:l,onSettings:d,onMinimize:p,onPopout:f,onProfile:m}){
return e.jsxs("header",{className:"ft-topbar",children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),s?e.
jsx("span",{className:"ft-chip",title:"Today's completed focus time",children:s}):null,e.jsxs("span",{className:"ft-topb\
ar-actions",children:[i?e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.
jsx(se,{d:bn})}):null,e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"\
Open timer in its own window",onClick:f,children:e.jsx(se,{d:wn})}),e.jsx("button",{type:"button",className:"ft-iconbtn",
"aria-label":"Minimize to a small timer",title:"Minimize to a small timer",onClick:p,children:e.jsx(se,{d:kn})}),e.jsx("\
button",{type:"button",className:`ft-iconbtn ${n==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"\
Profile and progress",onClick:m,children:e.jsx(se,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5\
s8 2.5 8 6.5"})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",
onClick:l,children:e.jsx(se,{d:vn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,
"aria-label":"Settings",onClick:d,children:e.jsx(se,{d:jn})})]})]})}),Tn=K.memo(function({tasksState:s,setTasksState:n,week:i,
ready:o,savedMessage:l,onClose:d}){const[p,f]=a.useState(""),[m,g]=a.useState(1),j=s.tasks,v=Math.max(1,...i.map(y=>y.minutes)),
w=()=>{const y=p.trim();if(!y)return;const M={id:`t${Date.now()}`,title:y,est:m,done:0,completed:!1};n(N=>({tasks:[...N.
tasks,M],activeId:N.activeId||M.id})),f(""),g(1)};return e.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[
e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Tasks"}),e.jsx("button",{type:"button",className:"\
ft-sheet-close","aria-label":"Close tasks",onClick:d,children:e.jsx(se,{d:Yt})})]}),e.jsxs("div",{className:"ft-addtask",
children:[e.jsx("input",{value:p,placeholder:"What are you studying?",onChange:y=>f(y.target.value),onKeyDown:y=>{y.key===
"Enter"&&w()},maxLength:120}),e.jsxs("span",{className:"ft-stepper is-small",children:[e.jsx("button",{type:"button","ar\
ia-label":"Fewer pomodoros",onClick:()=>g(Math.max(1,m-1)),children:"-"}),e.jsxs("span",{className:"ft-stepper-value",children:[
m,e.jsx("em",{children:"est"})]}),e.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>g(Math.min(20,
m+1)),children:"+"})]}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:w,disabled:!o,children:"\
Add"})]}),j.length===0?e.jsx("p",{className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against i\
t, or just run the timer."}):null,e.jsx("ul",{className:"ft-tasklist",children:j.map(y=>e.jsxs("li",{className:`${y.id===
s.activeId?"is-active":""} ${y.completed?"is-done":""}`,children:[e.jsx("button",{type:"button",className:"ft-taskcheck",
"aria-label":y.completed?"Mark not done":"Mark done",onClick:()=>{y.completed||zs(y.id),n(M=>({...M,tasks:M.tasks.map(N=>N.
id===y.id?{...N,completed:!N.completed}:N)}))},children:y.completed?"✓":""}),e.jsx("button",{type:"button",className:"\
ft-taskname",onClick:()=>n(M=>({...M,activeId:y.id})),children:y.title}),e.jsxs("span",{className:"ft-taskcount",children:[
y.done,"/",y.est]}),e.jsx("button",{type:"button",className:"ft-taskdel","aria-label":`Delete ${y.title}`,onClick:()=>n(
M=>({tasks:M.tasks.filter(N=>N.id!==y.id),activeId:M.activeId===y.id?null:M.activeId})),children:"×"})]},y.id))}),j.some(
y=>y.completed)?e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(y=>({...y,tasks:y.tasks.filter(
M=>!M.completed)})),children:"Clear completed"}):null,e.jsxs("div",{className:"ft-week",children:[e.jsx("h3",{children:"\
This week"}),e.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focus minutes by day: ${i.map(y=>`${y.label} ${y.
minutes}`).join(", ")}`,children:i.map((y,M)=>e.jsxs("span",{className:"ft-weekcol",children:[e.jsx("span",{className:"f\
t-weekbar",style:{height:`${Math.round(y.minutes/v*64)}px`}}),e.jsx("span",{className:"ft-weekday",children:y.label})]},
M))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});function Dn(){const[t,s]=a.useState(null),[,n]=a.useState(
0),i=a.useRef(null);a.useEffect(()=>{const f=new BroadcastChannel("sft-sync");i.current=f,f.onmessage=g=>{var j;((j=g.data)==
null?void 0:j.t)==="state"&&s(g.data)};const m=window.setInterval(()=>n(g=>g+1),500);return()=>{window.clearInterval(m),
f.close()}},[]);const o=f=>{var m;return(m=i.current)==null?void 0:m.postMessage({t:"cmd",cmd:f})};let l=t?t.remaining:0;
t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));const d=!t||Date.now()-t.at>4e3,p=t&&t.dur>0?Math.round(
(1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},
children:[e.jsx("div",{className:"ft-popout-phase",children:t?oe[t.phase]:"Study focus"}),e.jsx("div",{className:"ft-pop\
out-time",children:t?le(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar","aria-hidden":"true",children:e.jsx("span",{
style:{width:`${p}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[e.jsx("button",{type:"button",className:"ft\
-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pause":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.jsx("button",{type:"button",className:"ft-gh\
ost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),d?e.jsx("p",{className:"ft-popout-note",children:"Open the st\
udy timer in another tab to control it from here."}):null]})}const On=K.memo(function({settings:s,patch:n,bgStatus:i,soundStatus:o,
lastBgSrcRef:l,lastSndSrcRef:d,resolveLinkBg:p,resolveCustomSound:f,uploadBg:m,uploadSound:g,previewAlarm:j,requestNotifications:v,
notificationsSupported:w,wakeLockSupported:y,onResetSettings:M,savedMessage:N,onClose:C,savedLinks:S,onSaveLink:I,onRemoveLink:E}){
const[P,W]=a.useState(""),[T,O]=a.useState(""),[q,_]=a.useState(""),[R,k]=a.useState(""),x=s.background,h=()=>{const r=P.
trim();r&&p(r).then(F=>{F&&(l.current=r,n({background:{kind:"link",source:r}}),S.some(X=>X.source===r)||I({id:`l${Date.now()}`,
source:r,kind:F.kind,thumb:F.kind==="image"?F.finalUrl:void 0,addedAt:Date.now()}),W(""))})},L=r=>{x.kind==="link"&&x.source===
r.source||p(r.source).then(F=>{F&&(l.current=r.source,n({background:{kind:"link",source:r.source}}))})},A=()=>{const r=T.
trim();yn(r)&&f(r).then(F=>{var X;F&&(d.current=r,n({alarmSound:"custom",customAlarm:{source:r,name:((X=r.split("/").pop())==
null?void 0:X.split("?")[0])||"Custom sound"}}))})},U=()=>{const r=q.trim();if(r){if(!Gt(r)){k("That is not a Spotify li\
nk. Copy a link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current player\
 is unchanged.");return}k(""),n({spotify:r,spotifyOpen:!0})}};return e.jsxs("aside",{className:"ft-sheet","aria-label":"\
Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"Settings"}),e.jsx("button",{
type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:C,children:e.jsx(se,{d:Yt})})]}),e.jsxs("\
section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"ft-chips",children:dn.map(r=>e.jsxs("but\
ton",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:r.accent,font:r.font,background:{kind:r.bg.kind,id:r.bg.
id}}),children:[r.name," theme"]},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"\
ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",children:[cn.map(r=>e.jsx("button",{type:"\
button",className:`ft-colorswatch ${s.accent.toLowerCase()===r.value?"is-active":""}`,style:{background:r.value},"aria-l\
abel":`${r.name} accent`,onClick:()=>n({accent:r.value})},r.id)),e.jsxs("label",{className:"ft-colorcustom",children:[e.
jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:r=>n(
{accent:r.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[
e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx("div",{className:"ft-chips",children:Bt.map(r=>e.jsx("b\
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
ft-subhead",children:"Spotify playlists"}),e.jsx("div",{className:"ft-chips",children:Vt.map(r=>e.jsx("button",{type:"bu\
tton",className:`ft-chipbtn ${s.spotify===r.id?"is-active":""}`,onClick:()=>{k(""),n({spotify:r.id,spotifyOpen:!0,musicMode:"\
spotify",musicOpen:!0})},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",
{className:"ft-field-label",children:"Any Spotify link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste an ope\
n.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official \
player inside the mini player, with the album art shown by Spotify; this is not account sync. Spotify decides what plays\
: usually full songs when you sign in to Spotify inside the player, 30-second previews when signed out; podcast episodes\
 usually play in full. Live lyrics are not possible here: Spotify only shares the current song with connected apps, not \
with an embedded player."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:q,
placeholder:"https://open.spotify.com/playlist/…",onChange:r=>_(r.target.value),inputMode:"url"}),e.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:U,children:"Use link"})]}),s.spotify?e.jsxs("span",{className:"ft-inrow",
children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({musicMode:"spotify",musicOpen:!0}),
children:"Show player"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1,
musicMode:"radio"}),children:"Remove player"})]}):null,R?e.jsx("span",{className:"ft-field-hint",children:R}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(Ae,{label:"Focus",value:s.focusMin,min:1,max:180,unit:"\
min",onChange:r=>n({focusMin:r})}),e.jsx(Ae,{label:"Short break",value:s.shortMin,min:1,max:60,unit:"min",onChange:r=>n(
{shortMin:r})}),e.jsx(Ae,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:r=>n({longMin:r})}),e.jsx(
Ae,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:r=>n({longEvery:r})}),e.jsx(Z,{label:"\
Auto-start breaks",checked:s.autoBreaks,onChange:r=>n({autoBreaks:r})}),e.jsx(Z,{label:"Auto-start focus",checked:s.autoFocus,
onChange:r=>n({autoFocus:r})}),w?e.jsx(Z,{label:"Browser notifications",hint:"Alerts when a session ends in another tab.",
checked:s.notifications,onChange:v}):null,y?e.jsx(Z,{label:"Keep screen awake",checked:s.keepAwake,onChange:r=>n({keepAwake:r})}):
null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"ft-chips",children:un.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===r.id?"is-active":""}`,onClick:()=>{n({alarmSound:r.id}),
j(r.id)},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,"aria-label":"Alarm volume",onChange:r=>n(
{alarmVolume:parseFloat(r.target.value)})})]}),e.jsx(Z,{label:"Ring twice",checked:s.alarmRepeat,onChange:r=>n({alarmRepeat:r})}),
e.jsx(Z,{label:"Ticking while running",checked:s.tick,onChange:r=>n({tick:r})}),e.jsxs("div",{className:"ft-field is-sta\
cked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from a link"}),e.jsx("span",{className:"ft-f\
ield-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when the file's host allows cross-site loadin\
g; many do not. Uploading a file always works until the tab reloads; a saved link reloads each visit."}),e.jsxs("span",{
className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:T,placeholder:"https://…/sound.mp3",onChange:r=>O(
r.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:A,children:"Use \
link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Upload alarm sound file",className:"ft-fileinpu\
t",onChange:r=>{var F;return g((F=r.target.files)==null?void 0:F[0])}})]}),s.customAlarm?e.jsxs("span",{className:"ft-fi\
eld-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"ft-field-hint",children:o}):null]})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"ft-chips",children:qt.map(r=>e.
jsx("button",{type:"button",className:`ft-chipbtn ${s.ambient===r.id?"is-active":""}`,onClick:()=>n({ambient:r.id}),children:r.
name},r.id))}),s.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",
children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.ambientVolume,"aria-label":"Ambient\
 volume",onChange:r=>n({ambientVolume:parseFloat(r.target.value)})})]}):null]}),e.jsxs("section",{children:[e.jsx("h3",{
children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Scenes"}),e.jsx("div",{className:"ft-bggrid",children:nt.
map(r=>e.jsx(En,{scene:r,active:x.kind==="scene"&&x.id===r.id,onPick:()=>n({background:{kind:"scene",id:r.id}})},r.id))}),
e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Illustrated scenes are drawn to loop seamle\
ssly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay only when chosen.\
 While a scene loads, your previous background stays on screen (a still photo on your first visit); a scene that cannot \
load keeps it rather than going black or swapping to something else."}),e.jsx(Z,{label:"Animate backgrounds",hint:"Motio\
n starts by itself. Turn off to pause motion and save battery.",checked:s.bgAnimate!==!1,onChange:r=>n({bgAnimate:r})}),
e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:tn.map(r=>e.jsx(Rn,{id:r.
id,name:r.name,active:x.kind==="builtin"&&x.id===r.id,onPick:()=>n({background:{kind:"builtin",id:r.id}})},r.id))}),e.jsx(
"h4",{className:"ft-subhead",children:"Solid color"}),e.jsx("div",{className:"ft-bggrid",children:sn.map(r=>e.jsx("butto\
n",{type:"button",className:`ft-bgswatch ${x.kind==="color"&&(x.id||"").toLowerCase()===r.id?"is-active":""}`,style:{background:r.
id},"aria-label":`${r.name} background color`,onClick:()=>n({background:{kind:"color",id:r.id}})},r.id))}),e.jsx(Ln,{color:x.
kind==="color"&&x.id?x.id:"#101418",onChange:r=>n({background:{kind:"color",id:r}})}),e.jsxs("div",{className:"ft-field \
is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),e.jsx("span",
{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image link (\
JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match its o\
wn shape, never stretched. Every link you add is saved under My saved backgrounds below and reloads each visit - paste o\
nce, keep forever. When a direct image load is blocked, the link you paste is fetched through a public image relay (wese\
rv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"\
ft-textinput",value:P,placeholder:"https://www.pinterest.com/pin/…",onChange:r=>W(r.target.value),inputMode:"url"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:h,children:"Use link"})]}),S.length?e.jsxs(e.Fragment,
{children:[e.jsx("h4",{className:"ft-subhead",children:"My saved backgrounds"}),e.jsx("div",{className:"ft-bggrid",children:S.
map(r=>e.jsx(In,{link:r,active:x.kind==="link"&&x.source===r.source,onPick:()=>L(r),onRemove:()=>E(r.id)},r.id))}),e.jsx(
"span",{className:"ft-field-hint",children:"Tap one to use it again, × to forget it. Saved on this device."})]}):null,e.
jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:["Upload\
 image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or video file",
className:"ft-fileinput",onChange:r=>{var F;return m((F=r.target.files)==null?void 0:F[0])}})]}),e.jsx("span",{className:"\
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
Start over"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:M,children:"Reset settings"})]}),e.jsxs(
"p",{className:"ft-field-hint",children:["Your settings, saved backgrounds, tasks and stats stay in this browser. Link b\
ackgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is bloc\
ked; Spotify playback happens inside Spotify's official player; selected catalog videos and focus-radio tracks stream fr\
om Pixabay's CDN. ",N]})]})});function Fn(){return typeof window<"u"&&/[?&]popout=1/.test(window.location.search)?e.jsx(
Dn,{}):e.jsx(Un,{})}function Un(){var vt;const[t,s,n]=be("ft-settings.v2",He),[i,o]=be("ft-clockfree.v1",null),l=a.useRef(
null),d=a.useRef(null),p=a.useCallback(c=>u=>{var D,B;const b=l.current;if(!b)return;const $=b.getBoundingClientRect();o(
xe=>{const Q=xe||{x:$.left,y:$.top,s:1};return d.current={mode:c,id:u.pointerId,sx:u.clientX,sy:u.clientY,ox:Q.x,oy:Q.y,
ss:Q.s},Q}),(B=(D=u.target).setPointerCapture)==null||B.call(D,u.pointerId),u.preventDefault()},[o]),f=a.useCallback(c=>{
const u=d.current;if(!(!u||u.id!==c.pointerId))if(u.mode==="move")o(b=>b&&{...b,x:Math.min(Math.max(u.ox+c.clientX-u.sx,
-40),window.innerWidth-60),y:Math.min(Math.max(u.oy+c.clientY-u.sy,0),window.innerHeight-60)});else{const b=l.current;if(!b)
return;const $=b.getBoundingClientRect(),D=$.left+$.width/2,B=$.top+$.height/2,xe=Math.max(30,Math.hypot(u.sx-D,u.sy-B)),
Q=Math.hypot(c.clientX-D,c.clientY-B);o(ie=>ie&&{...ie,s:Math.min(2.6,Math.max(.45,u.ss*(Q/xe)))})}},[o]),m=a.useCallback(
c=>{d.current&&d.current.id===c.pointerId&&(d.current=null)},[]),[g,j,v]=be("ft-tasks.v1",{tasks:[],activeId:null}),[w,y,
M]=be("ft-stats.v1",{days:{}}),[N,C,S]=be("ft-session.v1",null),[I,E]=be("ft-links.v1",[]),P=a.useCallback(c=>E(u=>[c,...u.
filter(b=>b.source!==c.source)].slice(0,24)),[E]),W=a.useCallback(c=>E(u=>u.filter(b=>b.id!==c)),[E]),T=a.useMemo(()=>({
focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,t.longMin]),[O,q]=a.useState("focu\
s"),[_,R]=a.useState(!1),[k,x]=a.useState(T.focus),[h,L]=a.useState(0),[A,U]=a.useState("none"),[r,F]=a.useState(!1),X=a.
useRef(0),me=a.useRef(!1);me.current=_;const H=a.useRef(O);H.current=O;const pe=a.useRef(k);pe.current=k;const at=a.useRef(
t.accent);at.current=t.accent;const[Kt,it]=a.useState(null),[Ht,Zt]=a.useState(null),[Xt,$e]=a.useState(null),[Jt,ce]=a.
useState(""),[Te,ot]=a.useState(null),[Qt,ne]=a.useState(""),Y=a.useRef(null),de=a.useRef(null),Me=a.useRef(null),rt=a.useCallback(
async c=>{ce("Loading background…");try{const u=c.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(u)&&!/pin(it)?\./i.test(
u))return it(B=>(B&&B.url.startsWith("blob:")&&URL.revokeObjectURL(B.url),{url:u,kind:"video"})),ce("Background applied."),
{kind:"video",finalUrl:u};const{blob:b,finalUrl:$}=await xn(c),D=b.type.startsWith("video/")?"video":"image";return it(B=>(B&&
B.url.startsWith("blob:")&&URL.revokeObjectURL(B.url),{url:URL.createObjectURL(b),kind:D})),ce("Background applied."),{kind:D,
finalUrl:$}}catch(u){const b=u instanceof Error&&u.message==="short pin link"?"Short pin.it links cannot be resolved her\
e. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background is unchanged.":"Coul\
d not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct image link, or uplo\
ad the image below. Your previous background is unchanged.";return ce(b),!1}},[]),lt=a.useCallback(async c=>{ne("Loading\
 sound…");try{const u=await Qe(c);if(!/^audio\//.test(u.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(c))throw new Error(
"not audio");return ot(b=>(b&&URL.revokeObjectURL(b),URL.createObjectURL(u))),ne("Sound saved. It will ring when a sessi\
on ends."),!0}catch{return ne("That link blocks cross-site loading. Download the sound to your device and upload it inst\
ead. Your previous sound is unchanged."),!1}},[]),De=a.useRef(""),Oe=a.useRef("");a.useEffect(()=>{n.ready&&t.background.
kind==="link"&&t.background.source&&t.background.source!==De.current&&(De.current=t.background.source,rt(t.background.source))},
[n.ready,t.background]),a.useEffect(()=>{var u;if(!n.ready)return;const c=((u=t.customAlarm)==null?void 0:u.source)||"";
t.alarmSound==="custom"&&c&&c!==Oe.current&&(Oe.current=c,lt(c))},[n.ready,t.alarmSound,t.customAlarm]);const ct=a.useRef(
!1);a.useEffect(()=>{var c;!n.ready||ct.current||(ct.current=!0,t.background.kind==="upload"&&(z({background:{kind:"colo\
r",id:"#101418"}}),ce("Your uploaded image resets when the tab reloads. Upload it again, or save a link instead.")),!((c=
t.customAlarm)!=null&&c.source)&&t.alarmSound==="custom"&&(z({alarmSound:"bell"}),ne("Your uploaded sound resets when th\
e tab reloads. Upload it again, or save a link instead.")))},[n.ready]),a.useEffect(()=>{n.ready&&(!t.accent||!t.font||!t.
clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||typeof t.bgAnimate!=
"boolean")&&s(c=>({...He,...c}))},[n.ready]),a.useEffect(()=>{if(!n.ready)return;const c=t.background;c.kind==="gradient"?
z({background:{kind:"color",id:{dusk:"#3b2f4a",moss:"#0f2e25",ink:"#101418",dawn:"#4a2f3d"}[c.id||""]||"#101418"}}):c.kind===
"animated"&&z({background:{kind:"builtin",id:"rain"}})},[n.ready,t.background]),a.useEffect(()=>{if(n.ready)try{t.spotify&&
!window.localStorage.getItem("sft:ft-musicmig.v1")&&(window.localStorage.setItem("sft:ft-musicmig.v1","1"),z({musicMode:"\
spotify",musicOpen:t.spotifyOpen!==!1}))}catch{}},[n.ready]);const ae=t.background;a.useEffect(()=>{let c=!0;if(n.ready){
if(ae.kind==="builtin"){const u=ae.id&&At[ae.id]?ae.id:"rain";Ye[u]?$e(Ye[u]):($e(null),At[u]().then(b=>{Ye[u]=b.default,
c&&$e(b.default)}).catch(()=>{}))}return()=>{c=!1}}},[n.ready,ae.kind,ae.id]);const dt=a.useRef(!1),J=a.useCallback(c=>{
S.ready&&C({phase:c.phase,running:c.running,endAt:c.endAt||0,remainingMs:c.remainingMs,cycleCount:c.cycleCount})},[S.ready]);
a.useEffect(()=>{if(!S.ready||dt.current||(dt.current=!0,!N))return;const c=N.phase==="short"||N.phase==="long"?N.phase:
"focus";if(q(c),L(N.cycleCount||0),N.running&&N.endAt>Date.now()+500)X.current=N.endAt,x(N.endAt-Date.now()),R(!0);else if(N.
running)x(G.current[c]),R(!1);else{const u=typeof N.remainingMs=="number"&&N.remainingMs>0?Math.min(N.remainingMs,G.current[c]):
G.current[c];x(u),R(!1)}},[S.ready]);const he=a.useRef({}),G=a.useRef(T);G.current=T;const ut=a.useCallback(c=>{const u=H.
current;let b="focus",$=h;if(u==="focus"){if($=c?h:h+1,L($),b=$%Math.max(1,t.longEvery)===0&&$>0?"long":"short",!c){const B=Ne(),
xe=w.days[B]||{focusSec:0,sessions:0};y({days:{...w.days,[B]:{focusSec:xe.focusSec+Math.round(G.current.focus/1e3),sessions:xe.
sessions+1}}}),g.activeId&&j(Q=>({...Q,tasks:Q.tasks.map(ie=>ie.id===Q.activeId?{...ie,done:ie.done+1}:ie)}))}}else b="f\
ocus";if(t.alarmSound==="custom"&&Y.current)try{Y.current.currentTime=0,Y.current.volume=t.alarmVolume,Y.current.play().
catch(()=>Se("bell",t.alarmVolume,t.alarmRepeat))}catch{Se("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound==="cust\
om"?Se("bell",t.alarmVolume,t.alarmRepeat):Se(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${oe[u]} finished`,{body:b==="focus"?"Time to focus.":`Ti\
me for a ${oe[b].toLowerCase()}.`})}catch{}delete he.current[u],q(b),x(G.current[b]);const D=b==="focus"?t.autoFocus:t.autoBreaks;
D?(X.current=Date.now()+G.current[b],R(!0)):R(!1),J({phase:b,running:D,endAt:D?Date.now()+G.current[b]:0,remainingMs:G.current[b],
cycleCount:$})},[h,t,w,y,j,J]),Ce=a.useRef(ut);Ce.current=ut,a.useEffect(()=>{if(!_)return;const c=window.setInterval(()=>{
const u=X.current-Date.now();u<=0?Ce.current(!1):x(b=>Math.ceil(b/1e3)!==Math.ceil(u/1e3)?u:b)},250);return()=>window.clearInterval(
c)},[_]);const ft=a.useRef(T);a.useEffect(()=>{const c=ft.current;ft.current=T,!(c.focus===T.focus&&c.short===T.short&&c.
long===T.long)&&(me.current||(delete he.current[H.current],x(T[H.current])))},[T]);const mt=a.useRef(0);a.useEffect(()=>{
if(!_||!t.tick)return;const c=window.setInterval(()=>{const u=Math.ceil((X.current-Date.now())/1e3);u!==mt.current&&(mt.
current=u,fn(t.alarmVolume))},250);return()=>window.clearInterval(c)},[_,t.tick,t.alarmVolume]),a.useEffect(()=>{document.
title=`${le(k)} - ${oe[O]} - Study focus timer`},[k,O]),a.useEffect(()=>(de.current&&(de.current(),de.current=null),t.ambient!==
"none"&&(de.current=gn(t.ambient,t.ambientVolume)),()=>{de.current&&(de.current(),de.current=null)}),[t.ambient,t.ambientVolume]),
a.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let c=!1;const u=()=>{navigator.wakeLock.request("scr\
een").then($=>{c||(Me.current=$)}).catch(()=>{})};u();const b=()=>{document.visibilityState==="visible"&&u()};return document.
addEventListener("visibilitychange",b),()=>{if(c=!0,document.removeEventListener("visibilitychange",b),Me.current){try{Me.
current.release()}catch{}Me.current=null}}},[t.keepAwake]),a.useEffect(()=>{Te?(Y.current=new Audio(Te),Y.current.preload=
"auto"):Y.current=null},[Te]);const pt=a.useRef(()=>{}),ht=a.useRef(()=>{}),gt=a.useRef(()=>{}),ge=a.useCallback(()=>{if(Pe(),
Y.current)try{Y.current.pause(),Y.current.currentTime=0}catch{}X.current=Date.now()+pe.current,R(!0),J({phase:H.current,
running:!0,endAt:X.current,remainingMs:pe.current,cycleCount:h})},[J,h]),ye=a.useCallback(()=>{R(!1),J({phase:H.current,
running:!1,remainingMs:pe.current,cycleCount:h})},[J,h]),ke=a.useCallback(()=>{delete he.current[H.current],R(!1),x(G.current[H.
current]),J({phase:H.current,running:!1,remainingMs:G.current[H.current],cycleCount:h})},[J,h]),Ee=a.useCallback(()=>{Ce.
current(!0)},[]);pt.current=ge,ht.current=ye,gt.current=ke;const ve=a.useCallback(c=>{const u=H.current;if(c===u)return;
const b=me.current?Math.max(0,X.current-Date.now()):pe.current;b>0&&b<G.current[u]?he.current[u]=b:delete he.current[u];
const $=he.current[c],D=typeof $=="number"&&$>0?Math.min($,G.current[c]):G.current[c];R(!1),q(c),x(D),J({phase:c,running:!1,
remainingMs:D,cycleCount:h})},[J,h]),Fe=a.useCallback(()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):
document.documentElement.requestFullscreen().catch(()=>{})},[]),[yt,xt]=a.useState(null),es=a.useCallback(()=>{const c=window.
documentPictureInPicture;if(c!=null&&c.requestWindow){c.requestWindow({width:320,height:200}).then(u=>{for(const b of Array.
from(document.styleSheets))try{const $=Array.from(b.cssRules||[]).map(B=>B.cssText).join(`
`),D=u.document.createElement("style");D.textContent=$,u.document.head.appendChild(D)}catch{const $=b.href;if($){const D=u.
document.createElement("link");D.rel="stylesheet",D.href=$,u.document.head.appendChild(D)}}u.document.body.className="ft\
-pip-body",u.addEventListener("pagehide",()=>xt(null)),xt(u)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);a.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const c=new BroadcastChannel(
"sft-sync"),u=()=>c.postMessage({t:"state",phase:H.current,remaining:pe.current,running:me.current,dur:G.current[H.current],
accent:at.current,at:Date.now()});u();const b=window.setInterval(u,1e3);return c.onmessage=$=>{const D=$.data;(D==null?void 0:
D.t)==="cmd"&&(D.cmd==="toggle"?me.current?ht.current():pt.current():D.cmd==="reset"?gt.current():D.cmd==="skip"&&Ce.current(
!0))},()=>{window.clearInterval(b),c.close()}},[]);const ts=a.useCallback(()=>{U("none"),F(!0)},[]),ss=A==="tasks",ns=A===
"settings",as=a.useCallback(()=>U(c=>c==="tasks"?"none":"tasks"),[]),is=a.useCallback(()=>U(c=>c==="settings"?"none":"se\
ttings"),[]),os=a.useCallback(()=>U("settings"),[]),rs=a.useCallback(()=>U(c=>c==="profile"?"none":"profile"),[]);a.useEffect(
()=>{const c=u=>{var $;const b=($=u.target)==null?void 0:$.tagName;b==="INPUT"||b==="TEXTAREA"||b==="SELECT"||(u.code===
"Space"?(u.preventDefault(),me.current?ye():ge()):u.key==="r"||u.key==="R"?ke():u.key==="s"||u.key==="S"?Ee():u.key==="1"?
ve("focus"):u.key==="2"?ve("short"):u.key==="3"?ve("long"):u.key==="m"||u.key==="M"?F(D=>!D):(u.key==="f"||u.key==="F")&&
Fe())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[ge,ye,ke,Ee,ve,Fe]);const z=a.
useCallback(c=>s(u=>({...u,...c})),[s]),ls=a.useCallback(c=>{if(!c)return;const u=c.type.startsWith("video/");if(!u&&!c.
type.startsWith("image/")){ce("That file is not an image or video.");return}Zt(b=>(b&&URL.revokeObjectURL(b.url),{url:URL.
createObjectURL(c),kind:u?"video":"image"})),z({background:{kind:"upload"}}),ce("Background applied for this visit. Use \
a link to keep it across visits.")},[z]),cs=a.useCallback(c=>{if(c){if(!c.type.startsWith("audio/")){ne("That file is no\
t an audio file.");return}ot(u=>(u&&URL.revokeObjectURL(u),URL.createObjectURL(c))),z({alarmSound:"custom",customAlarm:{
source:"",name:c.name}}),ne(`Using "${c.name}" for this visit. Use a link to keep it across visits.`)}},[z]),ds=a.useCallback(
c=>{var u;if(c==="custom"){if(Y.current)try{Y.current.currentTime=0,Y.current.volume=t.alarmVolume,Y.current.play().catch(
()=>ne("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else ne((u=t.
customAlarm)!=null&&u.source?"Still loading your sound.":"Add a link or upload a file first.");return}Se(c,t.alarmVolume,
!1)},[t.alarmVolume,t.customAlarm]),us=a.useCallback(c=>{if(!c){z({notifications:!1});return}if(!(typeof Notification>"u"))
try{const u=Notification.requestPermission();u&&typeof u.then=="function"?u.then(b=>z({notifications:b==="granted"})).catch(
()=>z({notifications:!1})):z({notifications:Notification.permission==="granted"})}catch{z({notifications:!1})}},[z]),fs=a.
useCallback(()=>s(He),[s]),ms=a.useMemo(()=>({focusSec:0,sessions:0}),[]),Re=w.days[Ne()]||ms,Ue=a.useMemo(()=>{var b,$;
let c=0;const u=new Date;for(((b=w.days[Ne(u)])==null?void 0:b.sessions)>0||u.setDate(u.getDate()-1);(($=w.days[Ne(u)])==
null?void 0:$.sessions)>0;)c++,u.setDate(u.getDate()-1);return c},[w.days]),ps=a.useMemo(()=>{const c=[];for(let u=6;u>=
0;u--){const b=new Date;b.setDate(b.getDate()-u);const $=w.days[Ne(b)];c.push({label:`${"SMTWTFS"[b.getDay()]}`,minutes:Math.
round((($==null?void 0:$.focusSec)||0)/60)})}return c},[w.days]),hs=a.useMemo(()=>t.showChip?`${Re.sessions} ${Re.sessions===
1?"session":"sessions"} · ${Math.round(Re.focusSec/60)} min${Ue>1?` · ${Ue}-day streak`:""}`:null,[t.showChip,Re,Ue]),
gs=n.ready&&v.ready&&M.ready,ys=((vt=Bt.find(c=>c.id===t.font))==null?void 0:vt.css)||"inherit",_e=1-k/Math.max(1,T[O]),
We=118,bt=2*Math.PI*We,xs=typeof Notification<"u",bs=typeof navigator<"u"&&"wakeLock"in navigator,ks=typeof document<"u"&&
document.fullscreenEnabled,kt=g.tasks.find(c=>c.id===g.activeId)||null,vs=t.spotify?Gt(t.spotify):null;return e.jsxs("di\
v",{className:`ft-root ${r?"is-compact":""}`,style:{"--ft-accent":t.accent,"--ft-font":ys},children:[e.jsx(Mn,{kind:ae.kind,
id:ae.id,scrim:t.scrim,builtinSrc:Xt,linkBg:Kt,uploadBg:Ht,paused:r,animate:t.bgAnimate!==!1,customFit:t.customFit||"cov\
er",enhance:t.enhance!==!1}),e.jsx($n,{chip:hs,panel:A,fullscreenSupported:ks,onFullscreen:Fe,onTasks:as,onSettings:is,onMinimize:ts,
onPopout:es,onProfile:rs}),e.jsxs("main",{ref:l,className:`ft-center ${t.clockOnly===!0?"is-clockonly":""}`,style:t.clockOnly===
!0&&i?{left:i.x,top:i.y,transform:`scale(${i.s})`,transformOrigin:"top left"}:void 0,onPointerMove:t.clockOnly===!0?f:void 0,
onPointerUp:t.clockOnly===!0?m:void 0,onPointerCancel:t.clockOnly===!0?m:void 0,children:[t.clockOnly!==!0?e.jsx("nav",{
className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(c=>e.jsx("button",{type:"button",className:`\
ft-mode ${O===c?"is-active":""}`,onClick:()=>ve(c),children:oe[c]},c))}):null,t.clockOnly!==!0&&t.showDots?e.jsx("div",{
className:"ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((c,u)=>e.jsx(
"span",{className:`ft-dot ${u<h%Math.max(1,t.longEvery)||h>0&&h%Math.max(1,t.longEvery)===0&&O!=="focus"?"is-done":""}`},
u))}):null,e.jsxs("div",{className:`ft-clock is-${t.clockSize} ${t.clockOnly===!0?"is-free":""}`,role:"timer","aria-live":"\
off","aria-label":`${oe[O]} timer, ${le(k)} remaining`,onPointerDown:t.clockOnly===!0?p("move"):void 0,title:t.clockOnly===
!0?"Drag to move":void 0,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-h\
idden":"true",children:[e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:We}),e.jsx("circle",{className:"ft\
-ring-fill",cx:"130",cy:"130",r:We,strokeDasharray:bt,strokeDashoffset:bt*(1-_e)})]}):null,e.jsxs("div",{className:"ft-t\
ime-wrap",children:[e.jsx("div",{className:"ft-time",children:le(k)}),e.jsx("div",{className:"ft-taskline",children:kt?kt.
title:O==="focus"?"Pick a task or just focus":"Rest up"})]})]}),t.clockOnly===!0?e.jsxs("div",{className:"ft-clockonly-t\
ools",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact ft-clockonly-exit","aria-label":"Show timer\
 controls",onPointerDown:c=>c.stopPropagation(),onClick:()=>z({clockOnly:!1}),children:"Show controls"}),e.jsx("button",
{type:"button",className:"ft-clock-resize","aria-label":"Drag to resize the clock",onPointerDown:p("resize"),children:"⤡"})]}):
null,t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(_e*100)}%`}})}):null,t.clockOnly!==!0?e.jsxs("div",{className:"ft-controls",children:[e.jsx("button",{type:"button",
className:"ft-primary",onClick:()=>_?ye():ge(),children:_?"Pause":k<T[O]?"Resume":"Start"}),e.jsx("button",{type:"button",
className:"ft-ghost",onClick:ke,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:Ee,children:"\
Skip"})]}):null,t.clockOnly!==!0&&t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R reset · S\
 skip · M minimize · F fullscreen"}):null]}),r?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-label":"Mi\
nimized timer",children:[e.jsx("span",{className:"ft-compactphase",children:oe[O]}),e.jsx("span",{className:"ft-compactt\
ime",children:le(k)}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":_?"Pause":"Start",onClick:()=>_?
ye():ge(),children:_?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>F(!1),children:"⤢"})]}):null,A==="profile"?e.jsx(Xs,{onClose:()=>U("none")}):null,e.jsx(Hs,{}),ss?e.jsx(Tn,
{tasksState:g,setTasksState:j,week:ps,ready:gs,savedMessage:v.message||M.message||"",onClose:()=>U("none")}):null,ns?e.jsx(
On,{settings:t,patch:z,bgStatus:Jt,soundStatus:Qt,lastBgSrcRef:De,lastSndSrcRef:Oe,resolveLinkBg:rt,resolveCustomSound:lt,
uploadBg:ls,uploadSound:cs,previewAlarm:ds,requestNotifications:us,notificationsSupported:xs,wakeLockSupported:bs,onResetSettings:fs,
savedMessage:n.message||"",onClose:()=>U("none"),savedLinks:I,onSaveLink:P,onRemoveLink:W}):null,yt?js.createPortal(e.jsxs(
"div",{className:"ft-pip",children:[e.jsx("div",{className:"ft-pip-phase",children:oe[O]}),e.jsx("div",{className:"ft-pi\
p-time",children:le(k)}),e.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.
round(_e*100)}%`}})}),e.jsxs("div",{className:"ft-pip-btns",children:[e.jsx("button",{type:"button",className:"ft-primar\
y is-compact",onClick:()=>_?ye():ge(),children:_?"Pause":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:ke,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Ee,children:"\
Skip"})]})]}),yt.document.body):null,t.musicOpen!==!1?e.jsx(Pn,{settings:t,patch:z,spotifySrc:vs,onOpenSettings:os}):null]})}
ws(document.getElementById("root")).render(e.jsx(Fn,{}));
