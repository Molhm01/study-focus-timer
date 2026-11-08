import{R as G,j as e,r,a as dn,c as un}from"./vendor-B3JGZu0D.js";(function(){const n=document.createElement("link").relList;
if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))
i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.
rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.
integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=a(o);fetch(o.href,l)}})();const mn={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function q({x:t,y:n,r:a,fill:i}){const o=[];for(let l=0;l<10;l++){
const u=Math.PI/5*l-Math.PI/2,p=l%2===0?a:a*.45;o.push(`${(t+p*Math.cos(u)).toFixed(1)},${(n+p*Math.sin(u)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function pn({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#123f3a",opacity:"0.7"})]});case"star":return e.jsxs("g",{children:[e.jsx(q,{x:48,y:48,r:30,fill:"#ffd166"}),e.jsx("circ\
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
#8fa3d9"})]})}}function fn({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(q,{x:14,y:22,r:4,fill:"#\
ffe9a8"}),e.jsx(q,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(q,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(q,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(q,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(q,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function hn({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(q,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(q,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function gn({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
fill:"none",stroke:"#e05d7a",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("rect",{x:"19",y:"40",width:"10",height:"16",
rx:"5",fill:"#e05d7a"}),e.jsx("rect",{x:"67",y:"40",width:"10",height:"16",rx:"5",fill:"#e05d7a"})]});case"beanie":return e.
jsxs("g",{children:[e.jsx("path",{d:"M23 34 a25 22 0 0 1 50 0 z",fill:"#5b8def"}),e.jsx("rect",{x:"21",y:"32",width:"54",
height:"9",rx:"4.5",fill:"#7ba4f4"}),e.jsx("circle",{cx:"48",cy:"11",r:"5",fill:"#dce7ff"})]});case"halo":return e.jsx("\
ellipse",{cx:"48",cy:"12",rx:"16",ry:"4.6",fill:"none",stroke:"#ffe08a",strokeWidth:"3.4"});case"crown":return e.jsxs("g",
{children:[e.jsx("polygon",{points:"30,30 33,12 42,22 48,8 54,22 63,12 66,30",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4",strokeLinejoin:"round"}),e.jsx("rect",{x:"29",y:"29",width:"38",height:"6",rx:"3",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4"}),e.jsx("circle",{cx:"48",cy:"18",r:"2.4",fill:"#e05d7a"})]});case"wizard":return e.jsxs("g",{children:[e.jsx("poly\
gon",{points:"48,2 30,34 66,34",fill:"#5a4a8a"}),e.jsx("polygon",{points:"40,20 48,2 52,12",fill:"#6d5ba6"}),e.jsx("elli\
pse",{cx:"48",cy:"34",rx:"27",ry:"5.4",fill:"#4a3d75"}),e.jsx(q,{x:44,y:22,r:2.6,fill:"#ffe08a"})]});case"laurel":return e.
jsxs("g",{fill:"none",stroke:"#7fb069",strokeWidth:"3",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 36 q6 -16 22\
 -20"}),e.jsx("path",{d:"M70 36 q-6 -16 -22 -20"}),e.jsx("path",{d:"M32 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 \
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function yn({frame:t}){const n=mn[t];return n?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:n,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:n}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:n,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const pt=G.memo(function({spec:n,size:a=96}){return e.jsxs("svg",{width:a,
height:a,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(fn,{aura:n.aura}),e.jsx(pn,{base:n.base}),e.jsx(hn,{eyes:n.eyes}),e.jsx(gn,{hat:n.hat}),
e.jsx(yn,{frame:n.frame})]})}),bn=2,xn=25,vn=15;function ft(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function wn(t,n,a){var h,x,R;const i=t.days||{};let o=0,l=0,
u=0,p=0;const f=Object.keys(i).sort();for(const A of f){const C=i[A];C&&(o+=C.focusSec||0,l+=C.sessions||0,(C.focusSec||
0)>u&&(u=C.focusSec||0),(C.sessions||0)>0&&p++)}let c=0;const b=new Date;for((((h=i[ft(b)])==null?void 0:h.sessions)||0)>
0||b.setDate(b.getDate()-1);(((x=i[ft(b)])==null?void 0:x.sessions)||0)>0;)c++,b.setDate(b.getDate()-1);let w=0,k=0,N=null;
for(const A of f){if(!((((R=i[A])==null?void 0:R.sessions)||0)>0))continue;const C=new Date(A+"T12:00:00");N?k=Math.round(
(C.getTime()-N.getTime())/864e5)===1?k+1:1:k=1,k>w&&(w=k),N=C}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:a,
currentStreak:c,bestStreak:w,bestDayMin:Math.round(u/60),activeDays:p}}function kn(t){return t.totalFocusMin*bn+t.totalSessions*
xn+t.totalTasksCompleted*vn}function Te(t){return 100+50*(t-1)}function jn(t){let n=1,a=Math.max(0,Math.floor(t));for(;n<
99&&a>=Te(n);)a-=Te(n),n++;const i=Te(n);return{level:n,xp:t,intoLevel:a,needed:i,progress:i>0?a/i:0}}const ht=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function Sn(t){let n=ht[0].name;for(const a of ht)t>=a.level&&(n=a.name);return n}const Be=[{id:"none-hat",slot:"\
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
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function Nn(t,n){return n>=
t.level}function Cn(t){return Be.filter(n=>n.level>t).sort((n,a)=>n.level-a.level).slice(0,3)}const _n=[{id:"moon",name:"\
Moon"},{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},
{id:"sprout",name:"Sprout"},{id:"blob",name:"Blob"}],gt=[{id:"first-session",name:"First steps",desc:"Complete your firs\
t focus session",unlocked:t=>t.totalSessions>=1},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessi\
ons",unlocked:t=>t.totalSessions>=10},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.totalTasksCompleted>=5},{id:"ta\
sks-25",name:"Task master",desc:"Finish 25 tasks",unlocked:t=>t.totalTasksCompleted>=25},{id:"streak-3",name:"Hat trick",
desc:"Study 3 days in a row",unlocked:t=>t.bestStreak>=3},{id:"streak-7",name:"Full week",desc:"Study 7 days in a row",unlocked:t=>t.
bestStreak>=7},{id:"streak-30",name:"Unstoppable",desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30},{id:"hour-\
day",name:"Solid hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60},{id:"deep-day",name:"Deep work d\
ay",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180},{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 \
total focus hours",unlocked:t=>t.totalFocusMin>=600},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus\
 hours",unlocked:t=>t.totalFocusMin>=6e3}];function yt(t){if(t<60)return`${t} min`;const n=Math.floor(t/60),a=t%60;return a?
`${n}h ${a}m`:`${n}h`}const Mn="sft:ft-stats.v1",Nt="sft:ft-tasks.v1",Rn="sft:ft-session.v1",Ct="sft:ft-profile.v1",Ge="\
sft:ft-progress-ledger.v1";function Ke(){const t=te(Ge);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function _t(t){const n=Ke();let a=!1;n.migratedAt===
null&&(n.migratedAt=Date.now(),a=!0);for(const i of t.tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in n.tasks)&&
(n.tasks[i.id]=Date.now(),a=!0);if(a)try{window.localStorage.setItem(Ge,JSON.stringify(n))}catch{}return n}function bt(){
const t=te(Nt)||{tasks:[]};_t(t)}function En(t){if(!t)return;const n=Ke();let a=!1;if(n.migratedAt===null&&(n.migratedAt=
Date.now(),a=!0),t in n.tasks||(n.tasks[t]=Date.now(),a=!0),a)try{window.localStorage.setItem(Ge,JSON.stringify(n))}catch{}}
const An={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function te(t){
try{const n=window.localStorage.getItem(t);return n?JSON.parse(n):null}catch{return null}}function Ln(){const t=te(Ct);return{
...An,...t||{}}}function xt(t){try{window.localStorage.setItem(Ct,JSON.stringify(t))}catch{}}function In(){const t=te("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function vt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function Mt(){const t=te(Rn);return!!(t&&t.running&&t.phase==="focu\
s")}function $n(t){const[n,a]=r.useState(0),[i,o]=r.useState(()=>Ln()),[l,u]=r.useState(()=>In()),[p,f]=r.useState("");r.
useEffect(()=>{const j=()=>a(L=>L+1),M=window.setInterval(j,2e3);return window.addEventListener("focus",j),window.addEventListener(
"sft:progress",j),()=>{window.clearInterval(M),window.removeEventListener("focus",j),window.removeEventListener("sft:pro\
gress",j)}},[t]);const c=r.useMemo(()=>te(Mn)||{days:{}},[n]),b=r.useMemo(()=>te(Nt)||{tasks:[],activeId:null},[n]),[w,k]=r.
useState(()=>Ke());r.useEffect(()=>{k(_t(b))},[b]);const N=r.useMemo(()=>wn(c,b,Object.keys(w.tasks).length),[c,b,w]),h=r.
useMemo(()=>jn(kn(N)),[N]),x=r.useCallback(j=>{o(M=>{const L={...M,...j,updatedAt:Date.now()};try{xt(L)}catch{f("This br\
owser blocked saving. Profile changes last until the tab closes.")}return L})},[]),R=r.useCallback(j=>{o(()=>{try{xt(j)}catch{}
return j})},[]),A=r.useCallback(j=>{u(M=>{const L={...M,seenAchievements:Array.from(new Set([...M.seenAchievements,...j]))};
return vt(L),L})},[]),C=r.useCallback(j=>{u(M=>{const L={...M,celebratedLevel:Math.max(M.celebratedLevel,j)};return vt(L),
L})},[]);return{ready:!0,snapshot:N,levelInfo:h,profile:i,setProfile:x,replaceProfile:R,meta:l,markAchievementsSeen:A,celebrateLevel:C,
storageMessage:p}}const je={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},O=!!(je.apiKey&&je.databaseURL&&
je.authDomain),Pe="10.14.1",Fe={app:`https://www.gstatic.com/firebasejs/${Pe}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${Pe}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Pe}/firebase-database.js`};let ce=null;
function De(t){return new Function("u","return import(u)")(t)}function ee(){if(!ce){const t=Promise.all([De(Fe.app),De(Fe.
auth),De(Fe.database)]).then(([n,a,i])=>{const o=n.initializeApp(je);return{auth:a.getAuth(o),db:i.getDatabase(o),authApi:a,
dbApi:i}});t.catch(()=>{ce===t&&(ce=null)}),ce=t}return ce}function Tn(){const[t,n]=r.useState(O?"loading":"off"),[a,i]=r.
useState(null),[o,l]=r.useState("");r.useEffect(()=>{if(!O)return;let f,c=!0;return ee().then(({auth:b,authApi:w})=>{c&&
(f=w.onAuthStateChanged(b,k=>{c&&(k?(i({uid:k.uid,name:k.displayName||(k.isAnonymous?"Guest":"Scholar"),email:k.email||null,
anonymous:!!k.isAnonymous}),n("signed-in")):(i(null),n("signed-out")))}))}).catch(()=>{c&&(n("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{c=!1,f&&f()}},[]);const u=r.useCallback(()=>{
O&&(l(""),ee().then(({auth:f,authApi:c})=>c.signInWithPopup(f,new c.GoogleAuthProvider)).catch(f=>{f&&(f.code==="auth/po\
pup-closed-by-user"||f.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),p=r.useCallback(()=>{O&&ee().then(({auth:f,authApi:c})=>c.signOut(f)).catch(()=>{})},[]);return{status:t,
user:a,error:o,signInWithGoogle:u,signOut:p}}async function Pn(t){if(!O)return null;const{db:n,dbApi:a}=await ee(),i=await a.
get(a.child(a.ref(n),`profiles/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function wt(t,n){if(!O)return;const{db:a,dbApi:i}=await ee();
await i.set(i.ref(a,`profiles/${t}`),{name:n.name.slice(0,40),base:n.base,hat:n.hat,eyes:n.eyes,aura:n.aura,frame:n.frame,
updatedAt:n.updatedAt})}function Rt(t,n){const[a,i]=r.useState(null),[o,l]=r.useState(O?"connecting":"off"),u=r.useRef(t);
return u.current=t,r.useEffect(()=>{if(!O||!n){l("off"),i(null);return}let p=!0,f;return l("connecting"),(async()=>{try{
const{auth:c,db:b,authApi:w,dbApi:k}=await ee();let N=c.currentUser;if(N||(N=(await w.signInAnonymously(c)).user),!p)return;
const h=k.ref(b,`presence/${N.uid}`),x=()=>k.set(h,{studying:u.current,ts:Date.now()}).catch(()=>{});await x(),k.onDisconnect(
h).remove().catch(()=>{});const R=window.setInterval(x,3e4),A=k.onValue(k.ref(b,"presence"),C=>{if(!p)return;const j=Date.
now();let M=0;const L=C&&C.val?C.val():{};for(const D of Object.keys(L||{})){const F=L[D];F&&F.studying===!0&&typeof F.ts==
"number"&&j-F.ts<9e4&&M++}i(M),l("live")},()=>{p&&l("error")});f=()=>{window.clearInterval(R),A&&A(),k.remove(h).catch(()=>{})}}catch{
p&&l("error")}})(),()=>{p=!1,f&&f()}},[n]),r.useEffect(()=>{!O||!n||o!=="live"||ee().then(({auth:p,db:f,dbApi:c})=>{const b=p.
currentUser;b&&c.set(c.ref(f,`presence/${b.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,n,o]),{count:a,
status:o}}function Fn(){const[t,n]=r.useState(!1);return r.useEffect(()=>{bt();const a=()=>bt(),i=window.setInterval(a,15e3);
if(!O)return()=>window.clearInterval(i);const o=()=>n(Mt());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(i)}},[]),Rt(t,O),null}const Dn=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],On=G.memo(function({onClose:n}){const a=$n(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:u,replaceProfile:p,meta:f}=a,c=Tn(),[b,w]=r.useState(!1);r.useEffect(()=>{if(!O)return;const g=()=>w(Mt());g();
const E=window.setInterval(g,5e3);return()=>window.clearInterval(E)},[]);const k=Rt(b,O),[N,h]=r.useState(!1),[x,R]=r.useState(
""),[A,C]=r.useState(""),j=r.useRef("");r.useEffect(()=>{if(!O||c.status!=="signed-in"||!c.user||c.user.anonymous)return;
const g=c.user.uid;j.current!==g&&(j.current=g,Pn(g).then(E=>{E&&E.updatedAt>l.updatedAt?(p(E),C("Profile synced from yo\
ur account.")):wt(g,l).then(()=>C("Profile saved to your account.")).catch(()=>C("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>C("Could not sync right now; your local profile is safe.")))},[c.status,c.user]),r.useEffect(
()=>{if(!O||c.status!=="signed-in"||!c.user||c.user.anonymous||!l.updatedAt)return;const g=window.setTimeout(()=>{wt(c.user.
uid,l).catch(()=>C("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(g)},[l.
updatedAt,c.status,c.user]);const M=o.level,L=Sn(M),F=r.useMemo(()=>gt.filter(g=>g.unlocked(i)),[i]).filter(g=>!f.seenAchievements.
includes(g.id)),_=M>f.celebratedLevel,P=Cn(M),v=()=>{const g=x.trim().slice(0,24);u({name:g}),h(!1)},$=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:n,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(pt,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[N?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:x,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:g=>R(g.target.value),onKeyDown:g=>{g.key==="E\
nter"&&v(),g.key==="Escape"&&h(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:v,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{R(l.name),h(!0)},children:[
$," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:L}),k.status==="live"&&k.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",k.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${M}`,children:["Lv ",M]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${M}, ${o.intoLevel} of ${o.needed} experience toward level ${M+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),_?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",M," reached - ",L,"!",P.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>a.celebrateLevel(M),children:"Nice"})]}):null,F.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",F.map(g=>g.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>a.markAchievementsSeen(F.map(g=>g.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:yt(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:yt(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:_n.map(g=>e.jsx("button",{type:"button",title:g.name,"aria-label":`Avatar ${g.name}`,
className:`pf-basebtn ${l.base===g.id?"is-active":""}`,onClick:()=>u({base:g.id}),children:e.jsx(pt,{spec:{...l,base:g.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},g.id))}),Dn.map(({slot:g,label:E})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:E}),e.jsx("div",{className:"pf-gear",children:Be.filter(s=>s.
slot===g).map(s=>{const I=Nn(s,M),ne=l[g]===s.id||s.id.startsWith("none")&&!Be.some(pe=>pe.slot===g&&l[g]===pe.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${ne?"is-active":""} ${I?"":"is-locked"}`,title:I?s.name:`${s.name} - ${s.
hint}`,onClick:()=>{I&&u({[g]:s.id})},children:I?s.name:`🔒 ${s.name} · Lv ${s.level}`},s.id)})})]},g)),P.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",P[0].name," at level ",P[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:gt.
map(g=>{const E=g.unlocked(i);return e.jsxs("li",{className:E?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:E?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:g.
name}),e.jsx("span",{children:g.desc})]})]},g.id)})}),e.jsx("h3",{children:"Account"}),O?e.jsxs(e.Fragment,{children:[c.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,c.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:c.signInWithGoogle,children:"Sign in with Google"}):null,c.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,c.status==="signed-in"&&c.user?e.jsx("div",{className:"\
pf-account",children:c.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:c.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[c.user.name,c.user.
email?` · ${c.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:c.signOut,children:"\
Sign out"})]})}):null,c.error?e.jsx("p",{className:"ft-field-hint",children:c.error}):null,A?e.jsx("p",{className:"ft-fi\
eld-hint",children:A}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),a.storageMessage?e.jsx("p",{className:"ft-field-hint",children:a.storageMessage}):null]})});
function ve(t,n){const[a,i]=r.useState(n),[o,l]=r.useState(!1),[u,p]=r.useState("");r.useEffect(()=>{try{const c=window.
localStorage.getItem("sft:"+t);if(c!=null){const b=JSON.parse(c),w=n!==null&&typeof n=="object"&&!Array.isArray(n)&&b!==
null&&typeof b=="object"&&!Array.isArray(b)?{...n,...b}:b;i(w)}}catch{p("Saved data on this browser could not be read.")}
l(!0)},[t]);const f=r.useCallback(c=>{i(b=>{const w=typeof c=="function"?c(b):c;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(w))}catch{p("This browser blocked saving. Changes last until the tab closes.")}return w})},[t]);return[a,
f,{ready:o,message:u}]}const Un={longer:["images/images/longer-0.txt","images/images/longer-1.txt","images/images/longer\
-2.txt","images/images/longer-3.txt","images/images/longer-4.txt","images/images/longer-5.txt"],curated:["images/images/\
curated-0.txt"],rain:["images/images/rain-0.txt","images/images/rain-1.txt"],"thumb-rain":["images/images/thumb-rain-0.t\
xt"],library:["images/images/library-0.txt","images/images/library-1.txt","images/images/library-2.txt","images/images/l\
ibrary-3.txt","images/images/library-4.txt"],"thumb-library":["images/images/thumb-library-0.txt"],coffee:["images/image\
s/coffee-0.txt","images/images/coffee-1.txt","images/images/coffee-2.txt"],"thumb-coffee":["images/images/thumb-coffee-0\
.txt"],desk:["images/images/desk-0.txt","images/images/desk-1.txt","images/images/desk-2.txt"],"thumb-desk":["images/ima\
ges/thumb-desk-0.txt"],mountains:["images/images/mountains-0.txt","images/images/mountains-1.txt","images/images/mountai\
ns-2.txt","images/images/mountains-3.txt","images/images/mountains-4.txt","images/images/mountains-5.txt"],"thumb-mounta\
ins":["images/images/thumb-mountains-0.txt"],forest:["images/images/forest-0.txt","images/images/forest-1.txt","images/i\
mages/forest-2.txt","images/images/forest-3.txt"],"thumb-forest":["images/images/thumb-forest-0.txt"],stars:["images/ima\
ges/stars-0.txt"],"thumb-stars":["images/images/thumb-stars-0.txt"],ocean:["images/images/ocean-0.txt","images/images/oc\
ean-1.txt","images/images/ocean-2.txt"],"thumb-ocean":["images/images/thumb-ocean-0.txt"],catalog:["images/images/catalo\
g-0.txt","images/images/catalog-1.txt","images/images/catalog-2.txt","images/images/catalog-3.txt","images/images/catalo\
g-4.txt","images/images/catalog-5.txt","images/images/catalog-6.txt"]},Oe={};function Ye(t){return Oe[t]||(Oe[t]=Promise.
all(Un[t].map(async n=>{const a=await fetch(n);if(!a.ok)throw Error("Image unavailable");return a.text()})).then(n=>"dat\
a:image/jpeg;base64,"+n.join("").replace(/\s/g,"")))}function Et(t){const[n,a]=r.useState("");return r.useEffect(()=>{let i=!0;
return Ye(t).then(o=>{i&&a(o)}).catch(()=>{}),()=>{i=!1}},[t]),n}const Wn={rain:"photos/12-rain.jpg",library:"photos/13-\
library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/\
17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-ocean.jpg"},zn={rain:"thumbs/20-rain.jpg",library:"thumbs/21\
-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-desk.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs\
/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-ocean.jpg"},kt=Object.fromEntries(Object.keys(Wn).map(t=>[t,
()=>Ye(t).then(n=>({default:n}))])),jt=Object.fromEntries(Object.keys(zn).map(t=>[t,()=>Ye("thumb-"+t).then(n=>({default:n}))])),
Ue={},We={},ze={focusMin:25,shortMin:5,longMin:15,longEvery:4,autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,
alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,notifications:!1,keepAwake:!1,background:{kind:"\
builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"\
m",showDots:!0,showChip:!0,showHint:!0,spotify:null,spotifyOpen:!1},Bn=[{id:"rain",name:"Rainy window"},{id:"library",name:"\
Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountains",name:"Mountains"},{id:"forest",
name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],Se=[{id:"dusk",name:"Dusk",css:"linear-gra\
dient(160deg, #232453 0%, #6b3f63 55%, #c96f4a 100%)"},{id:"moss",name:"Moss",css:"linear-gradient(160deg, #0f2e25 0%, #\
1d5c46 60%, #7ea87b 100%)"},{id:"ink",name:"Ink",css:"linear-gradient(160deg, #101418 0%, #1f2a33 100%)"},{id:"dawn",name:"\
Dawn",css:"linear-gradient(160deg, #3b2f4a 0%, #8a5a6e 55%, #e8a87c 100%)"}],At=[{id:"aurora",name:"Aurora"},{id:"meteor",
name:"Falling stars"},{id:"waves",name:"Night waves"},{id:"rainfall",name:"Rain streaks"}],He=[{id:"shrine",name:"Moonli\
t shrine",url:"https://cdn.pixabay.com/video/2026/04/22/348164_large.mp4",tile:0,preview:"curated",duration:5},{id:"rain\
y-window",name:"Rainy window",url:"https://cdn.pixabay.com/video/2026/09/15/376433_medium.mp4",tile:1,preview:"curated",
duration:8},{id:"misty-river",name:"Misty river",url:"https://cdn.pixabay.com/video/2026/04/05/344726_medium.mp4",tile:2,
preview:"curated",duration:24},{id:"water-garden",name:"Water garden",url:"https://cdn.pixabay.com/video/2025/07/12/2909\
59_medium.mp4",tile:3,preview:"curated",duration:9.633333},{id:"sakura-night",name:"Island moon",url:"https://cdn.pixaba\
y.com/video/2023/03/22/155672-810706799_large.mp4",tile:4,preview:"curated",duration:60.116667},{id:"night-train",name:"\
Night train",url:"https://cdn.pixabay.com/video/2025/10/23/311602_medium.mp4",tile:5,preview:"curated",duration:64},{id:"\
cozy-window",name:"Rainy desk",url:"https://cdn.pixabay.com/video/2026/09/13/376049_large.mp4",tile:7,preview:"curated",
duration:6},{id:"balcony-dusk",name:"Evening balcony",url:"https://cdn.pixabay.com/video/2026/09/15/376434_medium.mp4",tile:8,
preview:"curated",duration:8}],Vn=[{id:"long-215407",name:"Rainy study window",url:"https://cdn.pixabay.com/video/2024/0\
6/05/215407_medium.mp4",tile:0,preview:"longer",duration:60.093367},{id:"long-297863",name:"Rainlit reading nook",url:"h\
ttps://cdn.pixabay.com/video/2025/08/17/297863_medium.mp4",tile:1,preview:"longer",duration:64},{id:"long-265906",name:"\
Neon rainy lounge",url:"https://cdn.pixabay.com/video/2025/03/19/265906_medium.mp4",tile:2,preview:"longer",duration:60},
{id:"long-276498",name:"Night desk journal",url:"https://cdn.pixabay.com/video/2025/05/03/276498_medium.mp4",tile:3,preview:"\
longer",duration:52.066667},{id:"long-311563",name:"Umbrella city",url:"https://cdn.pixabay.com/video/2025/10/23/311563_\
medium.mp4",tile:4,preview:"longer",duration:61.166667},{id:"long-180170",name:"Neon alley puddles",url:"https://cdn.pix\
abay.com/video/2023/09/11/180170-863654648_medium.mp4",tile:5,preview:"longer",duration:24.875},{id:"long-229537",name:"\
Moonlit river window",url:"https://cdn.pixabay.com/video/2024/09/03/229537_medium.mp4",tile:6,preview:"longer",duration:30.03},
{id:"long-211097",name:"Cabin porch fire",url:"https://cdn.pixabay.com/video/2024/05/07/211097_medium.mp4",tile:7,preview:"\
longer",duration:30},{id:"long-246535",name:"Window cat at dusk",url:"https://cdn.pixabay.com/video/2024/12/13/246535_me\
dium.mp4",tile:8,preview:"longer",duration:58.5585},{id:"long-246241",name:"Rainy sofa cat",url:"https://cdn.pixabay.com\
/video/2024/12/11/246241_medium.mp4",tile:9,preview:"longer",duration:75.341933},{id:"long-204116",name:"Firelit cabin",
url:"https://cdn.pixabay.com/video/2024/03/14/204116-923594064_medium.mp4",tile:10,preview:"longer",duration:30},{id:"lo\
ng-248668",name:"Lavender lounge",url:"https://cdn.pixabay.com/video/2024/12/25/248668_medium.mp4",tile:11,preview:"long\
er",duration:20},{id:"long-371447",name:"City cat companion",url:"https://cdn.pixabay.com/video/2026/08/19/371447_medium\
.mp4",tile:12,preview:"longer",duration:60.165704},{id:"long-379222",name:"City blues",url:"https://cdn.pixabay.com/vide\
o/2026/09/27/379222_medium.mp4",tile:13,preview:"longer",duration:20.1201},{id:"long-345856",name:"Sleepy desk cat",url:"\
https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4",tile:14,preview:"longer",duration:64},{id:"long-312345",name:"\
Lamp and sleeping cat",url:"https://cdn.pixabay.com/video/2025/10/27/312345_medium.mp4",tile:15,preview:"longer",duration:64},
{id:"long-271841",name:"Rainy study companion",url:"https://cdn.pixabay.com/video/2025/04/13/271841_medium.mp4",tile:16,
preview:"longer",duration:67.8},{id:"long-297736",name:"Rooftop study",url:"https://cdn.pixabay.com/video/2025/08/16/297\
736_medium.mp4",tile:17,preview:"longer",duration:72},{id:"long-246242",name:"Sleeping hearth cat",url:"https://cdn.pixa\
bay.com/video/2024/12/11/246242_medium.mp4",tile:18,preview:"longer",duration:58.691967},{id:"long-246243",name:"Dusk wi\
ndow cat",url:"https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4",tile:19,preview:"longer",duration:76.709967},
{id:"long-202823",name:"Candlelit library",url:"https://cdn.pixabay.com/video/2024/03/03/202823-919000176_medium.mp4",tile:20,
preview:"longer",duration:30},{id:"long-75368",name:"Old-town rain",url:"https://cdn.pixabay.com/video/2021/05/26/75368-\
555547951_medium.mp4",tile:21,preview:"longer",duration:32.873333},{id:"long-38271",name:"Storm at sea",url:"https://cdn\
.pixabay.com/video/2020/05/06/38271-415950897_medium.mp4",tile:22,preview:"longer",duration:58.516667},{id:"long-360380",
name:"Library afternoon",url:"https://cdn.pixabay.com/video/2026/06/23/360380_medium.mp4",tile:23,preview:"longer",duration:22.208333},
{id:"long-310025",name:"Night study wall",url:"https://cdn.pixabay.com/video/2025/10/15/310025_medium.mp4",tile:24,preview:"\
longer",duration:64},{id:"long-330062",name:"City laptop glow",url:"https://cdn.pixabay.com/video/2026/01/24/330062_medi\
um.mp4",tile:25,preview:"longer",duration:63.533333},{id:"long-345838",name:"Library dog",url:"https://cdn.pixabay.com/v\
ideo/2026/04/11/345838_medium.mp4",tile:26,preview:"longer",duration:61.4},{id:"long-211089",name:"Autumn porch",url:"ht\
tps://cdn.pixabay.com/video/2024/05/07/211089_medium.mp4",tile:27,preview:"longer",duration:30},{id:"long-301247",name:"\
Retro train cat",url:"https://cdn.pixabay.com/video/2025/09/02/301247_medium.mp4",tile:28,preview:"longer",duration:29.866667},
{id:"long-208856",name:"Cottage candlelight",url:"https://cdn.pixabay.com/video/2024/04/21/208856_medium.mp4",tile:29,preview:"\
longer",duration:30},{id:"long-257953",name:"Rainy woodland lounge",url:"https://cdn.pixabay.com/video/2025/02/13/257953\
_medium.mp4",tile:30,preview:"longer",duration:30.03},{id:"long-258729",name:"Red rainy room",url:"https://cdn.pixabay.c\
om/video/2025/02/17/258729_medium.mp4",tile:31,preview:"longer",duration:30.03},{id:"long-251562",name:"Ancient forest",
url:"https://cdn.pixabay.com/video/2025/01/09/251562_medium.mp4",tile:32,preview:"longer",duration:60.266667},{id:"long-\
243696",name:"Mountain lodge window",url:"https://cdn.pixabay.com/video/2024/11/28/243696_medium.mp4",tile:33,preview:"l\
onger",duration:30},{id:"long-247096",name:"Classic hearth room",url:"https://cdn.pixabay.com/video/2024/12/17/247096_me\
dium.mp4",tile:34,preview:"longer",duration:30},{id:"long-168104",name:"Moonlit lounge",url:"https://cdn.pixabay.com/vid\
eo/2023/06/20/168104-838533643_medium.mp4",tile:35,preview:"longer",duration:60.06},{id:"long-205001",name:"Candlelit st\
udio",url:"https://cdn.pixabay.com/video/2024/03/21/205001-926015670_medium.mp4",tile:36,preview:"longer",duration:30.058333},
{id:"long-182592",name:"Round-door library",url:"https://cdn.pixabay.com/video/2023/09/27/182592-868916643_medium.mp4",tile:37,
preview:"longer",duration:39.833333},{id:"long-166272",name:"Ember-lit room",url:"https://cdn.pixabay.com/video/2023/06/\
08/166272-834580690_medium.mp4",tile:38,preview:"longer",duration:60.116667},{id:"long-120583",name:"Rainy bedroom",url:"\
https://cdn.pixabay.com/video/2022/06/17/120583-721287175_medium.mp4",tile:39,preview:"longer",duration:29.631667},{id:"\
long-236040",name:"Mountain lake bedroom",url:"https://cdn.pixabay.com/video/2024/10/12/236040_medium.mp4",tile:40,preview:"\
longer",duration:30.03},{id:"long-181971",name:"Hilltop sunset",url:"https://cdn.pixabay.com/video/2023/09/23/181971-867\
576062_medium.mp4",tile:41,preview:"longer",duration:60.06},{id:"long-259293",name:"Round-door fire",url:"https://cdn.pi\
xabay.com/video/2025/02/18/259293_medium.mp4",tile:42,preview:"longer",duration:30.03},{id:"long-253904",name:"Snowy cit\
y window",url:"https://cdn.pixabay.com/video/2025/01/22/253904_medium.mp4",tile:43,preview:"longer",duration:60},{id:"lo\
ng-267347",name:"Sunset city lounge",url:"https://cdn.pixabay.com/video/2025/03/25/267347_medium.mp4",tile:44,preview:"l\
onger",duration:60},{id:"long-208105",name:"Forest library",url:"https://cdn.pixabay.com/video/2024/04/15/208105_medium.\
mp4",tile:45,preview:"longer",duration:30},{id:"long-156473",name:"Rainy sunset room",url:"https://cdn.pixabay.com/video\
/2023/03/28/156473-812592018_medium.mp4",tile:46,preview:"longer",duration:60.138333},{id:"long-201968",name:"Fireside t\
abby",url:"https://cdn.pixabay.com/video/2024/02/25/201968-916877887_medium.mp4",tile:47,preview:"longer",duration:30.08},
{id:"long-108292",name:"Victorian fire",url:"https://cdn.pixabay.com/video/2022/02/20/108292-680195115_medium.mp4",tile:48,
preview:"longer",duration:60.01},{id:"long-201179",name:"Rainy mountain retreat",url:"https://cdn.pixabay.com/video/2024\
/02/20/201179-914924544_medium.mp4",tile:49,preview:"longer",duration:58.123333},{id:"long-208621",name:"Blue mountain b\
edroom",url:"https://cdn.pixabay.com/video/2024/04/19/208621_medium.mp4",tile:50,preview:"longer",duration:20.04},{id:"l\
ong-204238",name:"Sunlit bookcase",url:"https://cdn.pixabay.com/video/2024/03/15/204238-923909572_medium.mp4",tile:51,preview:"\
longer",duration:31.978333},{id:"long-205644",name:"Warm timber library",url:"https://cdn.pixabay.com/video/2024/03/25/2\
05644-927347938_medium.mp4",tile:52,preview:"longer",duration:30},{id:"long-205634",name:"Indoor garden library",url:"ht\
tps://cdn.pixabay.com/video/2024/03/25/205634-927347905_medium.mp4",tile:53,preview:"longer",duration:30},{id:"long-2092\
20",name:"Snowy fireplace bedroom",url:"https://cdn.pixabay.com/video/2024/04/24/209220_medium.mp4",tile:54,preview:"lon\
ger",duration:30},{id:"long-337559",name:"Rainy high-rise",url:"https://cdn.pixabay.com/video/2026/03/02/337559_medium.m\
p4",tile:55,preview:"longer",duration:64.8},{id:"long-210278",name:"Quiet bookshelf nook",url:"https://cdn.pixabay.com/v\
ideo/2024/05/01/210278_medium.mp4",tile:56,preview:"longer",duration:30},{id:"long-219025",name:"Sunlit mountain lounge",
url:"https://cdn.pixabay.com/video/2024/07/01/219025_medium.mp4",tile:57,preview:"longer",duration:30.03},{id:"long-2679\
20",name:"Classic book room",url:"https://cdn.pixabay.com/video/2025/03/27/267920_medium.mp4",tile:58,preview:"longer",duration:30.03},
{id:"long-208089",name:"Golden reading room",url:"https://cdn.pixabay.com/video/2024/04/15/208089_medium.mp4",tile:59,preview:"\
longer",duration:30},{id:"long-258614",name:"Rain on glass",url:"https://cdn.pixabay.com/video/2025/02/16/258614_medium.\
mp4",tile:60,preview:"longer",duration:30.9},{id:"long-181977",name:"Sunset forest lounge",url:"https://cdn.pixabay.com/\
video/2023/09/23/181977-867576065_medium.mp4",tile:61,preview:"longer",duration:60.06},{id:"long-167688",name:"Forest ra\
in windows",url:"https://cdn.pixabay.com/video/2023/06/18/167688-837428971_medium.mp4",tile:62,preview:"longer",duration:60.138333},
{id:"long-188977",name:"Round-window lounge",url:"https://cdn.pixabay.com/video/2023/11/13/188977-884185356_medium.mp4",
tile:63,preview:"longer",duration:60.116667},{id:"long-208106",name:"Sunbeam lodge",url:"https://cdn.pixabay.com/video/2\
024/04/15/208106_medium.mp4",tile:64,preview:"longer",duration:30},{id:"long-181947",name:"Warm sunset lounge",url:"http\
s://cdn.pixabay.com/video/2023/09/23/181947-867576048_medium.mp4",tile:65,preview:"longer",duration:60.06},{id:"long-298\
922",name:"Mountain study lounge",url:"https://cdn.pixabay.com/video/2025/08/21/298922_medium.mp4",tile:66,preview:"long\
er",duration:30.033333},{id:"long-209881",name:"Sunlit green room",url:"https://cdn.pixabay.com/video/2024/04/29/209881_\
medium.mp4",tile:67,preview:"longer",duration:30},{id:"long-261757",name:"Rainy city apartment",url:"https://cdn.pixabay\
.com/video/2025/03/01/261757_medium.mp4",tile:68,preview:"longer",duration:60},{id:"long-324169",name:"Rainy timber bedr\
oom",url:"https://cdn.pixabay.com/video/2025/12/24/324169_medium.mp4",tile:69,preview:"longer",duration:30},{id:"long-34\
0848",name:"Mountain night retreat",url:"https://cdn.pixabay.com/video/2026/03/18/340848_medium.mp4",tile:70,preview:"lo\
nger",duration:60},{id:"long-266428",name:"Snowy shrine lantern",url:"https://cdn.pixabay.com/video/2025/03/21/266428_me\
dium.mp4",tile:72,preview:"longer",duration:27.483333},{id:"long-225944",name:"Lantern street",url:"https://cdn.pixabay.\
com/video/2024/08/11/225944_medium.mp4",tile:73,preview:"longer",duration:30},{id:"long-265909",name:"Anime river sunset",
url:"https://cdn.pixabay.com/video/2025/03/19/265909_medium.mp4",tile:74,preview:"longer",duration:60},{id:"long-281165",
name:"Violet Mount Fuji",url:"https://cdn.pixabay.com/video/2025/05/23/281165_medium.mp4",tile:75,preview:"longer",duration:30},
{id:"long-153086",name:"Snowy Kyoto lane",url:"https://cdn.pixabay.com/video/2023/03/04/153086-846385128_medium.mp4",tile:76,
preview:"longer",duration:52.51},{id:"long-185425",name:"Stormy mountain garden",url:"https://cdn.pixabay.com/video/2023\
/10/17/185425-875362672_medium.mp4",tile:77,preview:"longer",duration:25},{id:"long-158195",name:"Moonlit cherry pond",url:"\
https://cdn.pixabay.com/video/2023/04/10/158195-816372976_medium.mp4",tile:78,preview:"longer",duration:60.053333},{id:"\
long-189472",name:"Snowy shrine gate",url:"https://cdn.pixabay.com/video/2023/11/17/189472-885804489_medium.mp4",tile:79,
preview:"longer",duration:60.053333},{id:"long-214500",name:"Night library student",url:"https://cdn.pixabay.com/video/2\
024/05/30/214500_medium.mp4",tile:80,preview:"longer",duration:63.229833},{id:"long-314688",name:"Sunset headphones",url:"\
https://cdn.pixabay.com/video/2025/11/08/314688_medium.mp4",tile:81,preview:"longer",duration:64},{id:"long-345955",name:"\
Cozy room companion",url:"https://cdn.pixabay.com/video/2026/04/12/345955_medium.mp4",tile:82,preview:"longer",duration:64},
{id:"long-208093",name:"Coffee shop hearth",url:"https://cdn.pixabay.com/video/2024/04/15/208093_medium.mp4",tile:83,preview:"\
longer",duration:30},{id:"long-209201",name:"Garden porch",url:"https://cdn.pixabay.com/video/2024/04/24/209201_medium.m\
p4",tile:84,preview:"longer",duration:20},{id:"long-204117",name:"Tea by the fire",url:"https://cdn.pixabay.com/video/20\
24/03/14/204117-923594068_medium.mp4",tile:85,preview:"longer",duration:30},{id:"long-246984",name:"Covered forest porch",
url:"https://cdn.pixabay.com/video/2024/12/16/246984_medium.mp4",tile:86,preview:"longer",duration:30},{id:"long-267296",
name:"Round-door storybook",url:"https://cdn.pixabay.com/video/2025/03/25/267296_medium.mp4",tile:87,preview:"longer",duration:60},
{id:"long-301045",name:"Rainy fireside study",url:"https://cdn.pixabay.com/video/2025/09/01/301045_medium.mp4",tile:88,preview:"\
longer",duration:60.5},{id:"long-297472",name:"Moonclock lounge",url:"https://cdn.pixabay.com/video/2025/08/14/297472_me\
dium.mp4",tile:89,preview:"longer",duration:30},{id:"long-242924",name:"Snowy coffee shop",url:"https://cdn.pixabay.com/\
video/2024/11/23/242924_medium.mp4",tile:90,preview:"longer",duration:60},{id:"long-243342",name:"Winter cafe",url:"http\
s://cdn.pixabay.com/video/2024/11/26/243342_medium.mp4",tile:91,preview:"longer",duration:60},{id:"long-286806",name:"Op\
en book garden",url:"https://cdn.pixabay.com/video/2025/06/20/286806_medium.mp4",tile:92,preview:"longer",duration:30.03},
{id:"long-244452",name:"Snowy porch chair",url:"https://cdn.pixabay.com/video/2024/12/02/244452_medium.mp4",tile:93,preview:"\
longer",duration:30},{id:"long-244362",name:"Snowy cabin deck",url:"https://cdn.pixabay.com/video/2024/12/02/244362_medi\
um.mp4",tile:94,preview:"longer",duration:30},{id:"long-210707",name:"Autumn porch hearth",url:"https://cdn.pixabay.com/\
video/2024/05/05/210707_medium.mp4",tile:95,preview:"longer",duration:30},{id:"long-309388",name:"Dusk window reader",url:"\
https://cdn.pixabay.com/video/2025/10/12/309388_medium.mp4",tile:96,preview:"longer",duration:64},{id:"long-265815",name:"\
Neon headphones",url:"https://cdn.pixabay.com/video/2025/03/18/265815_medium.mp4",tile:97,preview:"longer",duration:59.993267},
{id:"long-266042",name:"Pale winter lounge",url:"https://cdn.pixabay.com/video/2025/03/19/266042_medium.mp4",tile:98,preview:"\
longer",duration:30.03},{id:"long-325442",name:"Pink-haired study",url:"https://cdn.pixabay.com/video/2026/01/01/325442_\
medium.mp4",tile:99,preview:"longer",duration:30},{id:"long-265816",name:"Night laptop study",url:"https://cdn.pixabay.c\
om/video/2025/03/18/265816_medium.mp4",tile:100,preview:"longer",duration:59.993267}],qn=[{id:"anime-lofi-rain-363709",name:"\
Rainy bus stop",url:"https://cdn.pixabay.com/video/2026/07/13/363709_medium.mp4",tile:0,duration:10},{id:"anime-lofi-rec\
ord-363710",name:"Record shop",url:"https://cdn.pixabay.com/video/2026/07/13/363710_medium.mp4",tile:1,duration:10},{id:"\
autumn-forest-trees-313784",name:"Autumn nook",url:"https://cdn.pixabay.com/video/2025/11/04/313784_medium.mp4",tile:3,duration:30},
{id:"autumn-forest-trees-313787",name:"Lakeside campfire",url:"https://cdn.pixabay.com/video/2025/11/04/313787_medium.mp\
4",tile:4,duration:30},{id:"autumn-nature-cabin-324160",name:"Cabin bedroom",url:"https://cdn.pixabay.com/video/2025/12/\
24/324160_medium.mp4",tile:5,duration:30},{id:"autumn-nature-cabin-324164",name:"Forest cabin",url:"https://cdn.pixabay.\
com/video/2025/12/24/324164_medium.mp4",tile:6,duration:30},{id:"bioluminescence-beach-waves-343671",name:"Starlit shore",
url:"https://cdn.pixabay.com/video/2026/03/31/343671_medium.mp4",tile:9,duration:20.125},{id:"bioluminescence-beach-wave\
s-346010",name:"Midnight waves",url:"https://cdn.pixabay.com/video/2026/04/12/346010_medium.mp4",tile:10,duration:15},{id:"\
bioluminescence-bioluminescent-ocean-381552",name:"Glowing ocean",url:"https://cdn.pixabay.com/video/2026/10/08/381552_m\
edium.mp4",tile:11,duration:15.041667},{id:"bioluminescent-beach-375118-375118",name:"Aurora coast",url:"https://cdn.pix\
abay.com/video/2026/09/08/375118_medium.mp4",tile:12,duration:15.041667},{id:"boats-moon-moonlight-381338",name:"Moonlit\
 boats",url:"https://cdn.pixabay.com/video/2026/10/07/381338_medium.mp4",tile:13,duration:15.041667},{id:"bonfire-flames\
-fire-201688-916116512",name:"Bonfire",url:"https://cdn.pixabay.com/video/2024/02/23/201688-916116512_medium.mp4",tile:14,
duration:44.223333},{id:"book-candle-stars-184469-873483892",name:"Candlelit book",url:"https://cdn.pixabay.com/video/20\
23/10/10/184469-873483892_medium.mp4",tile:15,duration:30.08},{id:"book-study-books-347655",name:"Library fire",url:"htt\
ps://cdn.pixabay.com/video/2026/04/19/347655_medium.mp4",tile:16,duration:6.3},{id:"campfire-bonfire-flames-225422",name:"\
Campfire embers",url:"https://cdn.pixabay.com/video/2024/08/08/225422_medium.mp4",tile:17,duration:11.9},{id:"candle-fla\
me-advent-311235",name:"Rainy candle",url:"https://cdn.pixabay.com/video/2025/10/21/311235_medium.mp4",tile:18,duration:19.291667},
{id:"candle-flame-advent-312390",name:"Candlelight",url:"https://cdn.pixabay.com/video/2025/10/28/312390_medium.mp4",tile:19,
duration:13.6},{id:"city-starry-sky-310146",name:"Purple night",url:"https://cdn.pixabay.com/video/2025/10/15/310146_med\
ium.mp4",tile:22,duration:8.083333},{id:"coffee-cup-rest-309872",name:"Rainy coffee",url:"https://cdn.pixabay.com/video/\
2025/10/14/309872_medium.mp4",tile:23,duration:12},{id:"coffee-living-room-237103",name:"Fireside coffee",url:"https://c\
dn.pixabay.com/video/2024/10/19/237103_medium.mp4",tile:24,duration:17.666667},{id:"coffee-tea-steam-285759",name:"Morni\
ng steam",url:"https://cdn.pixabay.com/video/2025/06/13/285759_medium.mp4",tile:25,duration:5.64},{id:"couch-sofa-rain-1\
85888-876579680",name:"Forest lounge",url:"https://cdn.pixabay.com/video/2023/10/20/185888-876579680_medium.mp4",tile:27,
duration:6},{id:"cozy-bedroom-289797-289797",name:"Cozy bedroom",url:"https://cdn.pixabay.com/video/2025/07/06/289797_me\
dium.mp4",tile:28,duration:30},{id:"cozy-bedroom-modern-290857",name:"Rainy bedroom",url:"https://cdn.pixabay.com/video/\
2025/07/12/290857_medium.mp4",tile:29,duration:24},{id:"cozy-bedroom-modern-290943",name:"Quiet suite",url:"https://cdn.\
pixabay.com/video/2025/07/12/290943_medium.mp4",tile:30,duration:24},{id:"cozy-bedroom-modern-290944",name:"Window retre\
at",url:"https://cdn.pixabay.com/video/2025/07/12/290944_medium.mp4",tile:31,duration:24},{id:"creek-snow-winter-190915-\
888878158",name:"Snowy creek",url:"https://cdn.pixabay.com/video/2023/11/27/190915-888878158_medium.mp4",tile:33,duration:50.133333},
{id:"dark-ocean-ocean-372868",name:"Ocean doorway",url:"https://cdn.pixabay.com/video/2026/08/27/372868_medium.mp4",tile:34,
duration:10.3},{id:"dark-ocean-ocean-372869",name:"Stormy pier",url:"https://cdn.pixabay.com/video/2026/08/27/372869_med\
ium.mp4",tile:35,duration:12.633333},{id:"dark-room-storm-369507",name:"Rainy room",url:"https://cdn.pixabay.com/video/2\
026/08/09/369507_medium.mp4",tile:36,duration:10},{id:"dream-nature-fantasy-297586",name:"Winter cottage",url:"https://c\
dn.pixabay.com/video/2025/08/15/297586_medium.mp4",tile:37,duration:7.733333},{id:"fireplace-fire-heat-327084",name:"Fir\
eplace",url:"https://cdn.pixabay.com/video/2026/01/11/327084_medium.mp4",tile:38,duration:12.04},{id:"fireplace-winter-s\
now-347140",name:"Snowy lounge",url:"https://cdn.pixabay.com/video/2026/04/17/347140_medium.mp4",tile:39,duration:16},{id:"\
flowers-tree-moon-179020-861022089",name:"Moonlit blossoms",url:"https://cdn.pixabay.com/video/2023/09/03/179020-8610220\
89_medium.mp4",tile:40,duration:7.21},{id:"landscape-waterfall-water-298040",name:"Forest falls",url:"https://cdn.pixaba\
y.com/video/2025/08/18/298040_medium.mp4",tile:44,duration:33.383333},{id:"library-books-363706-363706",name:"Library de\
sk",url:"https://cdn.pixabay.com/video/2026/07/13/363706_medium.mp4",tile:45,duration:10},{id:"loop-ocean-nature-358453",
name:"Silver waves",url:"https://cdn.pixabay.com/video/2026/06/14/358453_medium.mp4",tile:49,duration:15.041667},{id:"lu\
xury-bedroom-cozy-290401",name:"Night lounge",url:"https://cdn.pixabay.com/video/2025/07/09/290401_medium.mp4",tile:50,duration:30},
{id:"moon-full-moon-370403",name:"Sunset ocean",url:"https://cdn.pixabay.com/video/2026/08/13/370403_medium.mp4",tile:52,
duration:5},{id:"moon-nature-night-290116",name:"Crimson moon",url:"https://cdn.pixabay.com/video/2025/07/08/290116_medi\
um.mp4",tile:53,duration:8.4},{id:"moon-night-sky-256347",name:"Still moonlight",url:"https://cdn.pixabay.com/video/2025\
/02/04/256347_medium.mp4",tile:54,duration:15.133182},{id:"moon-trees-forest-183967-872226594",name:"Forest moon",url:"h\
ttps://cdn.pixabay.com/video/2023/10/07/183967-872226594_medium.mp4",tile:55,duration:7.615},{id:"moonlight-patrol-boat-\
290456",name:"Moonlit sail",url:"https://cdn.pixabay.com/video/2025/07/10/290456_medium.mp4",tile:56,duration:5.066667},
{id:"mountains-lake-water-124774-732319023",name:"Alpine lake",url:"https://cdn.pixabay.com/video/2022/07/20/124774-7323\
19023_medium.mp4",tile:57,duration:20.01},{id:"nature-night-moonlight-313411",name:"Golden moon",url:"https://cdn.pixaba\
y.com/video/2025/11/02/313411_medium.mp4",tile:58,duration:7.6},{id:"night-view-moon-143565-782758320",name:"City moon",
url:"https://cdn.pixabay.com/video/2022/12/19/143565-782758320_medium.mp4",tile:60,duration:12.011667},{id:"night-view-y\
amadas-283431",name:"Night sky",url:"https://cdn.pixabay.com/video/2025/06/03/283431_medium.mp4",tile:61,duration:8.966667},
{id:"ocean-night-stars-377557",name:"Ship at night",url:"https://cdn.pixabay.com/video/2026/09/19/377557_medium.mp4",tile:62,
duration:30.066667},{id:"ocean-sea-fog-299418",name:"Misty ocean",url:"https://cdn.pixabay.com/video/2025/08/24/299418_m\
edium.mp4",tile:64,duration:10.4},{id:"ocean-sea-waves-174033-850286651",name:"Blue moon coast",url:"https://cdn.pixabay\
.com/video/2023/07/31/174033-850286651_medium.mp4",tile:65,duration:7.04},{id:"ocean-sea-waves-232793",name:"Rocky sea",
url:"https://cdn.pixabay.com/video/2024/09/23/232793_medium.mp4",tile:66,duration:60.026633},{id:"purple-cosmic-space-27\
8396",name:"Purple cosmos",url:"https://cdn.pixabay.com/video/2025/05/12/278396_medium.mp4",tile:67,duration:52.2},{id:"\
radio-tower-night-211067",name:"Tokyo tower",url:"https://cdn.pixabay.com/video/2024/05/07/211067_medium.mp4",tile:68,duration:31.08105},
{id:"rain-cobblestone-puddle-380412",name:"Rainy cobbles",url:"https://cdn.pixabay.com/video/2026/10/02/380412_medium.mp\
4",tile:69,duration:14.166667},{id:"rain-leaves-foliage-227700",name:"Rainy leaves",url:"https://cdn.pixabay.com/video/2\
024/08/21/227700_medium.mp4",tile:70,duration:24},{id:"rain-outside-372862-372862",name:"Storm lounge",url:"https://cdn.\
pixabay.com/video/2026/08/27/372862_medium.mp4",tile:72,duration:10},{id:"rain-raining-raindrops-199501-910530342",name:"\
Rainy puddles",url:"https://cdn.pixabay.com/video/2024/02/06/199501-910530342_medium.mp4",tile:73,duration:11.36},{id:"s\
ea-coast-japan-197525-905005651",name:"Quiet coast",url:"https://cdn.pixabay.com/video/2024/01/21/197525-905005651_mediu\
m.mp4",tile:76,duration:37.845},{id:"sea-full-moon-227600",name:"Moonlit surf",url:"https://cdn.pixabay.com/video/2024/0\
8/20/227600_medium.mp4",tile:77,duration:15.041783},{id:"sea-ocean-waves-269357",name:"Moonlit boat",url:"https://cdn.pi\
xabay.com/video/2025/04/02/269357_medium.mp4",tile:78,duration:6.366667},{id:"sky-clouds-moon-243117",name:"Violet sky",
url:"https://cdn.pixabay.com/video/2024/11/24/243117_medium.mp4",tile:79,duration:10.033333},{id:"snow-cold-scenery-1677\
36-837429014",name:"Snowy shrine",url:"https://cdn.pixabay.com/video/2023/06/18/167736-837429014_medium.mp4",tile:80,duration:10.046667},
{id:"starry-sky-milky-170888-844432955",name:"Starry pines",url:"https://cdn.pixabay.com/video/2023/07/10/170888-8444329\
55_medium.mp4",tile:81,duration:7.55},{id:"starry-sky-milky-285663",name:"Starry cottage",url:"https://cdn.pixabay.com/v\
ideo/2025/06/13/285663_medium.mp4",tile:82,duration:27.05},{id:"steaming-mug-hot-322244",name:"Warm coffee",url:"https:/\
/cdn.pixabay.com/video/2025/12/16/322244_medium.mp4",tile:83,duration:15.3},{id:"train-commuting-train-170887-844432947",
name:"City commute",url:"https://cdn.pixabay.com/video/2023/07/10/170887-844432947_medium.mp4",tile:85,duration:12.583333},
{id:"tree-foliage-rain-176026-854526263",name:"Green leaves",url:"https://cdn.pixabay.com/video/2023/08/14/176026-854526\
263_medium.mp4",tile:87,duration:15.266667},{id:"tree-forest-rain-205213-926480936",name:"Rainy woodland",url:"https://c\
dn.pixabay.com/video/2024/03/22/205213-926480936_medium.mp4",tile:88,duration:15.033333},{id:"tree-leaves-rain-172759-84\
7869814",name:"Wet leaves",url:"https://cdn.pixabay.com/video/2023/07/22/172759-847869814_medium.mp4",tile:89,duration:10.133333},
{id:"tree-stars-starry-176198-855206384",name:"Violet branches",url:"https://cdn.pixabay.com/video/2023/08/15/176198-855\
206384_medium.mp4",tile:90,duration:7.566667},{id:"trees-foliage-forest-171443-845465129",name:"Mountain forest",url:"ht\
tps://cdn.pixabay.com/video/2023/07/13/171443-845465129_medium.mp4",tile:91,duration:15.266667},{id:"trees-forest-moon-1\
83969-872226597",name:"Night blossoms",url:"https://cdn.pixabay.com/video/2023/10/07/183969-872226597_medium.mp4",tile:92,
duration:7.658333},{id:"trees-leaves-snow-190667-888333548",name:"Winter branches",url:"https://cdn.pixabay.com/video/20\
23/11/25/190667-888333548_medium.mp4",tile:93,duration:6.228333},{id:"wallpaper-pixel-anime-247738",name:"Neon city",url:"\
https://cdn.pixabay.com/video/2024/12/19/247738_medium.mp4",tile:95,duration:10.2},{id:"wallpaper-pixel-anime-247740",name:"\
Sunset crossing",url:"https://cdn.pixabay.com/video/2024/12/19/247740_medium.mp4",tile:96,duration:19},{id:"wallpaper-pi\
xel-anime-247741",name:"Kyoto evening",url:"https://cdn.pixabay.com/video/2024/12/19/247741_medium.mp4",tile:97,duration:6},
{id:"waves-ocean-sea-372255",name:"Moonlit ocean",url:"https://cdn.pixabay.com/video/2026/08/23/372255_medium.mp4",tile:99,
duration:15.041667},{id:"earth-215421",name:"Eiffel Tower by the Seine",url:"https://cdn.pixabay.com/video/2024/06/05/21\
5421_large.mp4",duration:15,poster:"posters/earth-215421.jpg"},{id:"earth-10866",name:"Brooklyn Bridge at night",url:"ht\
tps://cdn.pixabay.com/video/2017/07/23/10866-226635329_large.mp4",duration:12.72,poster:"posters/earth-10866.jpg"},{id:"\
earth-149070",name:"Statue of Liberty",url:"https://cdn.pixabay.com/video/2023/02/02/149070-795426972_large.mp4",duration:60,
poster:"posters/earth-149070.jpg"},{id:"earth-17962",name:"Golden Gate Bridge",url:"https://cdn.pixabay.com/video/2018/0\
8/26/17962-287000048_large.mp4",duration:58.36,poster:"posters/earth-17962.jpg"},{id:"earth-200313",name:"Northern light\
s",url:"https://cdn.pixabay.com/video/2024/02/12/200313-912384824_large.mp4",duration:30.06,poster:"posters/earth-200313\
.jpg"},{id:"earth-292822",name:"Green aurora",url:"https://cdn.pixabay.com/video/2025/07/22/292822_large.mp4",duration:20.03,
poster:"posters/earth-292822.jpg"},{id:"earth-183960",name:"Golden beach sunset",url:"https://cdn.pixabay.com/video/2023\
/10/07/183960-872226574_large.mp4",duration:22.83,poster:"posters/earth-183960.jpg"},{id:"earth-45704",name:"Rolling oce\
an waves",url:"https://cdn.pixabay.com/video/2020/07/27/45704-446485426_large.mp4",duration:28.73,poster:"posters/earth-\
45704.jpg"},{id:"earth-214938",name:"Mount Fuji sunrise",url:"https://cdn.pixabay.com/video/2024/06/02/214938_large.mp4",
duration:21.35,poster:"posters/earth-214938.jpg"},{id:"earth-91319",name:"Mount Fuji lake",url:"https://cdn.pixabay.com/\
video/2021/10/08/91319-626985271_large.mp4",duration:12.47,poster:"posters/earth-91319.jpg"},{id:"earth-246856",name:"Ra\
inbow waterfall",url:"https://cdn.pixabay.com/video/2024/12/15/246856_large.mp4",duration:30.03,poster:"posters/earth-24\
6856.jpg"},{id:"earth-173887",name:"Mountain river falls",url:"https://cdn.pixabay.com/video/2023/07/30/173887-850026370\
_large.mp4",duration:29.56,poster:"posters/earth-173887.jpg"}],Lt=new Map([...He,...Vn,...qn].map(t=>[t.id,t]));function Gn(t,n){
const a=u=>t.replace(/_(tiny|small|medium|large)\.mp4/,u),i=[a("_medium.mp4"),a("_large.mp4"),a("_small.mp4"),a("_tiny.m\
p4")],o=[...new Set(i)],l=a(n?"_small.mp4":"_medium.mp4");return[l,...o.filter(u=>u!==l)]}function Ve(t){var a;return((a=
window.__SFT_POSTERS)==null?void 0:a[t.id])||t.poster}function Kn(t,n){const a=Ve(t);if(a)return{backgroundImage:`url(${a}\
)`,backgroundSize:"cover",backgroundPosition:"center"};if(!n||t.tile==null)return{backgroundImage:"linear-gradient(135de\
g,#182226,#090d13)"};const i=t.preview==="curated"?3:8,o=t.preview==="curated"?3:13;return{backgroundImage:`url(${n})`,backgroundSize:`${i*
100}% ${o*100}%`,backgroundPosition:`${t.tile%i*100/(i-1)}% ${Math.floor(t.tile/i)*100/(o-1)}%`}}const Yn={"balcony-dusk\
-l.jpg":"53-balcony-dusk-l.jpg","balcony-dusk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-dusk-p.jpg",
"balcony-dusk-p.mp4":"31-balcony-dusk-p.mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"30-cozy-win\
dow-l.mp4","cozy-window-p.jpg":"50-cozy-window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-street-l.jpg":"4\
9-japan-street-l.jpg","japan-street-l.mp4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jpg","japan-s\
treet-p.mp4":"35-japan-street-p.mp4","misty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty-river-l.mp\
4","misty-river-p.jpg":"39-misty-river-p.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"47-night-t\
rain-l.jpg","night-train-l.mp4":"28-night-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train-p.mp4":"2\
7-night-train-p.mp4","rainy-window-l.jpg":"41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4","rainy-wi\
ndow-p.jpg":"37-rainy-window-p.jpg","rainy-window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakura-night-l\
.jpg","sakura-night-l.mp4":"26-sakura-night-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p.mp4":"25\
-sakura-night-p.mp4","shrine-l.jpg":"10-shrine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine-p.jpg","\
shrine-p.mp4":"18-shrine-p.mp4","water-garden-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-garden-l.mp4",
"water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},It=(t,n,a)=>`scenes/${Yn[`${t}\
-${n}.${a}`]}`,Hn=(t,n)=>It(t.id,n,"jpg"),Xn=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"#9cc7f\
f"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"\
#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],$t=[{id:"sans",name:"Sans",css:"inherit"},{id:"serif",name:"Serif",
css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},
{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, sans-serif"}],Jn=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"s\
ans",bg:{kind:"gradient",id:"ink"}},{id:"dusk",name:"Dusk",accent:"#ffcf99",font:"serif",bg:{kind:"gradient",id:"dusk"}},
{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",bg:{kind:"gradient",id:"moss"}},{id:"dawn",name:"Dawn",accent:"#f2a\
9c4",font:"serif",bg:{kind:"gradient",id:"dawn"}}],Qn=[{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"\
Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Woodblock"},{id:"custom",name:"My sound"}],Tt=[{id:"none",name:"Off"},
{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocea\
n",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"\
Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",
name:"Field cricket",file:"sounds/crickets.m4a"},{id:"wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Strea\
m",file:"sounds/stream.m4a"},{id:"brown",name:"Brown noise"},{id:"white",name:"White noise"}],Pt=[{id:"lofi",name:"Lofi \
Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spo\
tify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9\
dQZF1DX4sWSpwq3LiO"}],H={focus:"Focus",short:"Short break",long:"Long break"};let de=null;function Ne(){return de||(de=new(window.
AudioContext||window.webkitAudioContext)),de.state==="suspended"&&de.resume(),de}function X(t,n,a){const i=t.createOscillator(),
o=t.createGain();i.type=a.type||"sine",i.frequency.value=a.freq,o.gain.setValueAtTime(1e-4,a.start),o.gain.exponentialRampToValueAtTime(
Math.max(2e-4,a.gain),a.start+.012),o.gain.exponentialRampToValueAtTime(1e-4,a.start+a.dur),i.connect(o),o.connect(n),i.
start(a.start),i.stop(a.start+a.dur+.05)}function ue(t,n,a){const i=Ne(),o=i.createGain();o.gain.value=n,o.connect(i.destination);
const l=a?2:1,u=t==="gong"?3.6:t==="bell"?2.4:1.6;for(let p=0;p<l;p++){const f=i.currentTime+.02+p*(u+.35);if(t==="bell")
[[660,.5],[1320,.28],[1760,.14],[2240,.07]].forEach(([c,b])=>X(i,o,{freq:c,start:f,dur:2.2,gain:b}));else if(t==="chime")
X(i,o,{freq:783.99,start:f,dur:1.3,gain:.4}),X(i,o,{freq:1046.5,start:f+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,
.42],[294,.24],[392,.17],[523,.09]].forEach(([c,b])=>X(i,o,{freq:c,start:f,dur:3.4,gain:b}));else if(t==="beep")for(let c=0;c<
3;c++)X(i,o,{freq:880,type:"square",start:f+c*.3,dur:.16,gain:.22});else t==="wood"&&(X(i,o,{freq:1400,type:"triangle",start:f,
dur:.07,gain:.5}),X(i,o,{freq:1400,type:"triangle",start:f+.22,dur:.07,gain:.4}))}}function Zn(t){const n=Ne(),a=n.createGain();
a.gain.value=.35*t,a.connect(n.destination),X(n,a,{freq:1800,start:n.currentTime,dur:.035,gain:.5})}function ea(t,n){const a=2*
t.sampleRate,i=t.createBuffer(1,a,t.sampleRate),o=i.getChannelData(0);let l=0;for(let u=0;u<a;u++){const p=Math.random()*
2-1;n==="brown"?(l=(l+.02*p)/1.02,o[u]=l*3.2):o[u]=p}return i}const ta={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
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
"sounds/stream-5.txt"]},we={};function na(t,n){return we[n]||(we[n]=Promise.all((ta[n]||[]).map(async a=>{const i=await fetch(
a);if(!i.ok)throw new Error(`HTTP ${i.status}`);return(await i.text()).trim()})).then(a=>{if(!a.length)throw new Error("\
Recording unavailable");const i=atob(a.join(""));return t.decodeAudioData(Uint8Array.from(i,o=>o.charCodeAt(0)).buffer)}).
catch(a=>{throw delete we[n],a})),we[n]}function aa(t,n){if(t==="none")return null;const a=Tt.find(p=>p.id===t),i=Ne(),o=i.
createGain();if(o.gain.value=n,o.connect(i.destination),a!=null&&a.file){let p=!1,f=null;return na(i,a.file).then(c=>{p||
(f=i.createBufferSource(),f.buffer=c,f.loop=!0,f.connect(o),f.start())}).catch(()=>{}),()=>{p=!0;try{f==null||f.stop()}catch{}
try{o.disconnect()}catch{}}}const l=i.createBufferSource();l.buffer=ea(i,t==="white"?"white":"brown"),l.loop=!0;let u=l;
if(t==="brown"){const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=900,u.connect(p),u=p}return u.connect(
o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}function ia(t){return/^https:\/\/.+/i.test(t.trim())}async function qe(t){
const n=await fetch(t);if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.blob()}async function sa(t){var o;const n=t.
trim();if(/pin\.it\//i.test(n))throw new Error("short pin link");const a=n.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let i=n;if(a){const l=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${a[1]}&base_scheme=https`);
if(!l.ok)throw new Error("pin lookup failed");const u=await l.json();if((u==null?void 0:u.status)!=="success"||!Array.isArray(
u==null?void 0:u.data)||u.data.length===0)throw new Error("pin unavailable");const p=(o=u.data[0])==null?void 0:o.images;
if(!p)throw new Error("pin has no image");const f=p.originals||p["736x"]||p["564x"]||p["236x"];if(!(f!=null&&f.url))throw new Error(
"pin has no image");i=f.url}if(!/^https:\/\//i.test(i))throw new Error("not a link");try{const l=await qe(i);if(l.type.startsWith(
"image/"))return l;throw new Error("not an image")}catch{const l=`https://images.weserv.nl/?url=${encodeURIComponent(i.replace(
/^https?:\/\//,""))}&w=1920`,u=await qe(l);if(!u.type.startsWith("image/"))throw new Error("not an image");return u}}function Ft(t){
const n=Pt.find(o=>o.id===t),i=(n?n.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const J=({d:t,vb:n=24})=>e.jsx("svg",
{width:"18",height:"18",viewBox:`0 0 ${n} ${n}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",
strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((a,i)=>e.jsx("path",{d:a},i))}),oa="M4 9V4h5|M20 9\
V4h-5|M4 15v5h5|M20 15v5h-5",ra="M5 12h14",la="M4 6h16|M4 12h16|M4 18h10",ca="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-\
7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",Dt="\
M6 6l12 12|M18 6L6 18",da="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function oe(t){
const n=Math.max(0,Math.round(t/1e3)),a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function me(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function ke({label:t,value:n,min:a,max:i,onChange:o,unit:l}){const u=p=>{const f=parseInt(p,10);Number.
isFinite(f)&&o(Math.min(i,Math.max(a,f)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(a,n-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:a,max:i,value:n,onChange:p=>u(p.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,n+1)),children:"\
+"})]})]})}function B({label:t,hint:n,checked:a,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":a,className:`ft-toggle ${a?"is-on":""}`,onClick:()=>i(!a),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),n?e.jsx("span",{className:"ft-field-hint",children:n}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const ua=G.memo(function({scene:n,paused:a,
animate:i}){const o=r.useRef(null),[l,u]=r.useState(!1),[p,f]=r.useState(0),c=r.useMemo(()=>window.matchMedia("(max-widt\
h: 900px), (orientation: portrait)").matches,[]),b=r.useMemo(()=>n.url?Gn(n.url,c):[It(n.id,"p","mp4")],[n,c]),w=b[Math.
min(p,b.length-1)],k=Et(n.preview||"catalog"),N=r.useRef({paused:a,animate:i});return N.current={paused:a,animate:i},r.useEffect(
()=>{u(!1);const h=o.current;if(!h)return;let x=!1,R=!1,A=0,C=!1,j=!1;const M=E=>E.play().catch(()=>{}),L=()=>!N.current.
paused&&N.current.animate&&!document.hidden,D=()=>{const E=document.createElement("video");return E.className="ft-bg ft-\
bgvideo",E.muted=!0,E.playsInline=!0,E.setAttribute("playsinline",""),E.setAttribute("disablepictureinpicture",""),E.setAttribute(
"disableremoteplayback",""),E.preload="auto",E.src=w,E.setAttribute("aria-hidden","true"),E},F=()=>{j||R||(j=!0,f(E=>E<b.
length-1?E+1:(u(!0),E)))};let _=null;const P=()=>{R||(v&&(v.currentTime=0,v.style.opacity="1",L()&&M(v)),_&&(_.remove(),
_=null),x=!1)};let v=D();v.addEventListener("error",F),v.addEventListener("ended",P),h.appendChild(v);const $=()=>{L()?C&&
v&&(M(v),_&&M(_)):(v==null||v.pause(),_==null||_.pause())},g=()=>{if(!(R||!v)){if(!C&&v.readyState>=2&&(C=!0,L()&&M(v)),
L()&&C){v.paused&&!v.ended&&M(v);const E=n.duration||v.duration,s=Math.min(1.5,E/4);if(!x&&Number.isFinite(E)&&v.currentTime>=
E-s&&(x=!0,_=D(),_.style.opacity="0",_.style.zIndex="2",_.addEventListener("error",()=>{}),h.appendChild(_),_.currentTime=
0,M(_)),x&&_&&_.readyState>=2){_.paused&&M(_);const I=Math.min(1,_.currentTime/s);v.style.opacity=String(1-I),_.style.opacity=
"1",I>=1&&(v.remove(),v=_,_=null,x=!1,v.addEventListener("error",F),v.addEventListener("ended",P),h.dataset.wraps=String(
Number(h.dataset.wraps||0)+1))}}A=requestAnimationFrame(g)}};return A=requestAnimationFrame(g),document.addEventListener(
"visibilitychange",$),window.addEventListener("pointerdown",$),()=>{R=!0,cancelAnimationFrame(A),v==null||v.pause(),_==null||
_.pause(),v==null||v.remove(),_==null||_.remove(),document.removeEventListener("visibilitychange",$),window.removeEventListener(
"pointerdown",$)}},[w]),e.jsx("div",{ref:o,className:"ft-scene-stage",style:Kn(n,k),children:l&&e.jsx("span",{className:"\
ft-stream-status",children:"This scene could not load right now. Try another background."})},w)}),ma=G.memo(function({kind:n,
id:a,scrim:i,builtinSrc:o,linkBg:l,uploadBg:u,paused:p,animate:f,customFit:c,enhance:b}){let w={};n==="builtin"&&o?w={backgroundImage:`\
url(${o})`}:n==="gradient"?w={backgroundImage:(Se.find(x=>x.id===a)||Se[0]).css}:n==="link"&&(l==null?void 0:l.kind)==="\
image"?w={backgroundImage:`url(${l.url})`}:n==="upload"&&(u==null?void 0:u.kind)==="image"?w={backgroundImage:`url(${u.url}\
)`}:(n==="link"||n==="upload"||n==="builtin")&&(w={backgroundImage:Se[0].css}),(n==="link"||n==="upload")&&w.backgroundImage&&
(w={...w,backgroundSize:c,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},b!==!1&&(w={...w,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const k=At.some(x=>x.id===a)?a:"aurora",N=n==="scene"?Lt.get(a)||He[0]:void 0,h=n===
"link"&&(l==null?void 0:l.kind)==="video"?l.url:n==="upload"&&(u==null?void 0:u.kind)==="video"?u.url:null;return e.jsxs(
e.Fragment,{children:[N?e.jsx(ua,{scene:N,paused:!!p,animate:f}):h?e.jsx(pa,{src:h,paused:!!p,animate:f,fit:c}):n==="ani\
mated"?e.jsxs("div",{className:`ft-anim ft-anim-${k}`,"aria-hidden":"true",children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("\
i",{})]}):e.jsx("div",{className:"ft-bg",style:w}),e.jsx("div",{className:"ft-scrim",style:{opacity:i}}),e.jsx("svg",{width:"\
0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharpen",children:e.jsx("\
feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),pa=G.memo(function({src:n,paused:a,
animate:i,fit:o}){const l=r.useRef(null);return r.useEffect(()=>{const u=l.current;if(!u)return;const p=()=>{a||!i||document.
hidden?u.pause():u.play().catch(()=>{})};p();const f=()=>{!a&&i&&!document.hidden&&u.play().catch(()=>{})};return document.
addEventListener("visibilitychange",p),window.addEventListener("pointerdown",f),()=>{document.removeEventListener("visib\
ilitychange",p),window.removeEventListener("pointerdown",f)}},[a,i,n]),i?e.jsx("video",{ref:l,className:"ft-bg ft-bgvide\
o",style:{objectFit:o,backgroundColor:"#101418"},src:n,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto","aria-\
hidden":"true"}):null}),Ot=G.memo(function({scene:n,active:a,onPick:i}){const o=Et(n.preview||"catalog"),l=n.preview==="\
curated"?3:8,u=n.preview==="curated"?3:13;return e.jsxs("button",{type:"button",className:`ft-bgswatch ft-bgswatch-named\
 ${a?"is-active":""}`,"aria-label":`${n.name} animated scene`,onClick:i,children:[Ve(n)?e.jsx("img",{className:"ft-bgswa\
tch-img",src:Ve(n),alt:"",loading:"lazy",decoding:"async"}):n.tile!=null?e.jsx("span",{className:"ft-bgswatch-img",style:{
backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}% ${u*100}%`,backgroundPosition:`${n.tile%l*100/(l-1)}% ${Math.
floor(n.tile/l)*100/(u-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:Hn(n,"p"),alt:"",loading:"lazy",decoding:"a\
sync"}),e.jsx("span",{className:"ft-bgswatch-name",children:n.name})]})}),fa=G.memo(function({id:n,name:a,active:i,onPick:o}){
const[l,u]=r.useState(We[n]||null);return r.useEffect(()=>{let p=!0;return!We[n]&&jt[n]&&jt[n]().then(f=>{We[n]=f.default,
p&&u(f.default)}).catch(()=>{}),()=>{p=!1}},[n]),e.jsx("button",{type:"button",className:`ft-bgswatch ${i?"is-active":""}`,
style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":a,onClick:o})}),ha=G.memo(function({chip:n,panel:a,fullscreenSupported:i,
onFullscreen:o,onTasks:l,onSettings:u,onMinimize:p,onPopout:f,onProfile:c}){return e.jsxs("header",{className:"ft-topbar",
children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),n?e.jsx("span",{className:"ft-chip",title:"Today's\
 completed focus time",children:n}):null,e.jsxs("span",{className:"ft-topbar-actions",children:[i?e.jsx("button",{type:"\
button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.jsx(J,{d:oa})}):null,e.jsx("button",{type:"\
button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"Open timer in its own window",onClick:f,
children:e.jsx(J,{d:da})}),e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Minimize to a small timer",
title:"Minimize to a small timer",onClick:p,children:e.jsx(J,{d:ra})}),e.jsx("button",{type:"button",className:`ft-iconb\
tn ${a==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"Profile and progress",onClick:c,children:e.
jsx(J,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5"})}),e.jsx("button",{type:"butt\
on",className:`ft-iconbtn ${a==="tasks"?"is-active":""}`,"aria-label":"Tasks",onClick:l,children:e.jsx(J,{d:la})}),e.jsx(
"button",{type:"button",className:`ft-iconbtn ${a==="settings"?"is-active":""}`,"aria-label":"Settings",onClick:u,children:e.
jsx(J,{d:ca})})]})]})}),ga=G.memo(function({tasksState:n,setTasksState:a,week:i,ready:o,savedMessage:l,onClose:u}){const[
p,f]=r.useState(""),[c,b]=r.useState(1),w=n.tasks,k=Math.max(1,...i.map(h=>h.minutes)),N=()=>{const h=p.trim();if(!h)return;
const x={id:`t${Date.now()}`,title:h,est:c,done:0,completed:!1};a(R=>({tasks:[...R.tasks,x],activeId:R.activeId||x.id})),
f(""),b(1)};return e.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[e.jsxs("div",{className:"ft-sheet\
-head",children:[e.jsx("h2",{children:"Tasks"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"C\
lose tasks",onClick:u,children:e.jsx(J,{d:Dt})})]}),e.jsxs("div",{className:"ft-addtask",children:[e.jsx("input",{value:p,
placeholder:"What are you studying?",onChange:h=>f(h.target.value),onKeyDown:h=>{h.key==="Enter"&&N()},maxLength:120}),e.
jsxs("span",{className:"ft-stepper is-small",children:[e.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>b(
Math.max(1,c-1)),children:"-"}),e.jsxs("span",{className:"ft-stepper-value",children:[c,e.jsx("em",{children:"est"})]}),
e.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>b(Math.min(20,c+1)),children:"+"})]}),e.jsx("but\
ton",{type:"button",className:"ft-primary is-compact",onClick:N,disabled:!o,children:"Add"})]}),w.length===0?e.jsx("p",{
className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against it, or just run the timer."}):null,
e.jsx("ul",{className:"ft-tasklist",children:w.map(h=>e.jsxs("li",{className:`${h.id===n.activeId?"is-active":""} ${h.completed?
"is-done":""}`,children:[e.jsx("button",{type:"button",className:"ft-taskcheck","aria-label":h.completed?"Mark not done":
"Mark done",onClick:()=>{h.completed||En(h.id),a(x=>({...x,tasks:x.tasks.map(R=>R.id===h.id?{...R,completed:!R.completed}:
R)}))},children:h.completed?"✓":""}),e.jsx("button",{type:"button",className:"ft-taskname",onClick:()=>a(x=>({...x,activeId:h.
id})),children:h.title}),e.jsxs("span",{className:"ft-taskcount",children:[h.done,"/",h.est]}),e.jsx("button",{type:"but\
ton",className:"ft-taskdel","aria-label":`Delete ${h.title}`,onClick:()=>a(x=>({tasks:x.tasks.filter(R=>R.id!==h.id),activeId:x.
activeId===h.id?null:x.activeId})),children:"×"})]},h.id))}),w.some(h=>h.completed)?e.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:()=>a(h=>({...h,tasks:h.tasks.filter(x=>!x.completed)})),children:"Clear completed"}):null,
e.jsxs("div",{className:"ft-week",children:[e.jsx("h3",{children:"This week"}),e.jsx("div",{className:"ft-weekbars",role:"\
img","aria-label":`Focus minutes by day: ${i.map(h=>`${h.label} ${h.minutes}`).join(", ")}`,children:i.map((h,x)=>e.jsxs(
"span",{className:"ft-weekcol",children:[e.jsx("span",{className:"ft-weekbar",style:{height:`${Math.round(h.minutes/k*64)}\
px`}}),e.jsx("span",{className:"ft-weekday",children:h.label})]},x))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});
function ya(){const[t,n]=r.useState(null),[,a]=r.useState(0),i=r.useRef(null);r.useEffect(()=>{const f=new BroadcastChannel(
"sft-sync");i.current=f,f.onmessage=b=>{var w;((w=b.data)==null?void 0:w.t)==="state"&&n(b.data)};const c=window.setInterval(
()=>a(b=>b+1),500);return()=>{window.clearInterval(c),f.close()}},[]);const o=f=>{var c;return(c=i.current)==null?void 0:
c.postMessage({t:"cmd",cmd:f})};let l=t?t.remaining:0;t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));
const u=!t||Date.now()-t.at>4e3,p=t&&t.dur>0?Math.round((1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{
"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},children:[e.jsx("div",{className:"ft-popout-phase",children:t?H[t.phase]:
"Study focus"}),e.jsx("div",{className:"ft-popout-time",children:t?oe(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar",
"aria-hidden":"true",children:e.jsx("span",{style:{width:`${p}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[
e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pau\
se":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),u?e.jsx("p",{className:"\
ft-popout-note",children:"Open the study timer in another tab to control it from here."}):null]})}const St=[{section:"Re\
al-world scenes",name:"Earth landmarks",ids:["earth-215421","earth-10866","earth-256109","earth-149070","earth-17962","e\
arth-381","earth-200313","earth-292822","earth-183960","earth-45704","earth-214938","earth-91319","earth-246856","earth-\
173887"]},{section:"Real-world scenes",name:"Fireplaces & warm drinks",ids:["bonfire-flames-fire-201688-916116512","camp\
fire-bonfire-flames-225422","fireplace-fire-heat-327084","cozy-winter-autumn-253056","candle-flame-advent-312390","candl\
e-flame-advent-311235","coffee-tea-steam-285759","steaming-mug-hot-322244","candle-flame-candlelight-312404"]},{section:"\
Real-world scenes",name:"Ocean & coast",ids:["lighthouse-landscape-nature-325141","lighthouse-storm-ocean-373895","long-\
38271","loop-ocean-nature-358453","ocean-sea-waves-232793","ocean-sea-fog-299418","ocean-sea-waves-174033-850286651","se\
a-coast-japan-197525-905005651","sea-full-moon-227600","waves-ocean-sea-372255","sea-ocean-waves-269357","ocean-night-st\
ars-377557","ocean-scene-cinemagraph-372866","moonlight-patrol-boat-290456","dark-ocean-ocean-372869","moon-full-moon-37\
0403","nature-night-moonlight-313411","moon-night-sky-256347","moon-nature-night-290116","dark-ocean-ocean-372868","ligh\
thouse-wave-ocean-358853"]},{section:"Real-world scenes",name:"Forest & mountains",ids:["moon-trees-forest-183967-872226\
594","rain-raining-raindrops-199501-910530342","cedar-tree-line-211013","trees-foliage-forest-171443-845465129","waterfa\
ll-trees-forest-208570","landscape-waterfall-water-298040","forest-nature-wood-329836","mountains-lake-water-124774-7323\
19023","tree-foliage-rain-176026-854526263","tree-forest-rain-205213-926480936","tree-leaves-rain-172759-847869814","rai\
n-leaves-foliage-227700","rain-nature-water-289712","long-258614","flowers-tree-moon-179020-861022089"]},{section:"Real-\
world scenes",name:"Snow & winter",ids:["creek-snow-winter-190915-888878158","trees-leaves-snow-190667-888333548","winte\
r-snow-nature-336603","snow-cold-scenery-167736-837429014","long-266428"]},{section:"Real-world scenes",name:"Night skie\
s & cities",ids:["starry-sky-milky-170888-844432955","starry-sky-milky-285663","sky-clouds-moon-243117","night-view-yama\
das-283431","night-view-moon-143565-782758320","train-commuting-train-170887-844432947","radio-tower-night-211067","rain\
-cobblestone-puddle-380412","long-75368"]},{section:"Illustrated scenes",name:"Cats & companions",ids:["long-246535","lo\
ng-246241","long-201968","long-371447","long-345856","long-312345","long-246242","long-246243","long-301247","long-34583\
8","long-271841","long-345955"]},{section:"Illustrated scenes",name:"Libraries & books",ids:["long-202823","long-360380",
"long-208105","long-204238","long-205644","long-205634","long-210278","long-267920","long-208089","long-182592","long-25\
9293","long-267296","library-books-363706-363706","book-study-books-347655","book-candle-stars-184469-873483892","long-2\
14500","long-286806","long-276498","long-310025"]},{section:"Illustrated scenes",name:"Rainy rooms",ids:["long-215407","\
long-297863","long-229537","long-211089","long-209201","long-246984","long-309388","long-261757","long-324169","long-257\
953","long-258729","long-301045","long-156473","long-120583","cozy-bedroom-modern-290857","dark-room-storm-369507","rain\
-outside-372862-372862","long-201179","long-167688","long-210707","long-243696","long-340848","long-244362","long-244452",
"long-242924","long-243342","autumn-forest-trees-313784","coffee-cup-rest-309872"]},{section:"Illustrated scenes",name:"\
City lights & neon",ids:["long-265906","long-311563","long-180170","long-379222","long-330062","long-337559","long-25390\
4","long-267347","long-265815","wallpaper-pixel-anime-247738","city-starry-sky-310146","wallpaper-pixel-anime-247740","w\
allpaper-pixel-anime-247741","long-225944","long-265909","long-265816","long-325442","anime-lofi-record-363710","anime-l\
ofi-rain-363709","long-297736","long-314688"]},{section:"Illustrated scenes",name:"Japan & cherry blossom",ids:["long-15\
3086","long-185425","long-158195","long-189472","long-281165"]},{section:"Illustrated scenes",name:"Dreamy nights",ids:[
"bioluminescence-beach-waves-343671","bioluminescence-beach-waves-346010","bioluminescence-bioluminescent-ocean-381552",
"bioluminescent-beach-375118-375118","boats-moon-moonlight-381338","purple-cosmic-space-278396","turtle-moon-night-28957\
2","trees-forest-moon-183969-872226597","tree-stars-starry-176198-855206384","long-181971","long-248668","long-168104","\
long-266042","long-208621","long-236040","dream-nature-fantasy-297586","fireplace-winter-snow-347140","long-209220","lon\
g-297472","long-188977","long-251562"]},{section:"Illustrated scenes",name:"Cozy rooms",ids:["long-211097","long-204116",
"long-208856","long-247096","long-205001","long-166272","long-108292","long-219025","long-181977","long-208106","long-18\
1947","long-298922","long-209881","long-208093","long-204117","autumn-forest-trees-313787","autumn-nature-cabin-324160",
"autumn-nature-cabin-324164","coffee-living-room-237103","couch-sofa-rain-185888-876579680","cozy-bedroom-289797-289797",
"cozy-bedroom-modern-290943","cozy-bedroom-modern-290944","luxury-bedroom-cozy-290401"]}],ba=({group:t,bg:n,patch:a,showSection:i})=>{
const[o,l]=r.useState(!1),u=t.ids.map(p=>Lt.get(p)).filter(p=>!!p);return u.length?e.jsxs(e.Fragment,{children:[i?e.jsx(
"h4",{className:"ft-subhead",children:t.section}):null,e.jsxs("details",{className:"ft-extra-scenes",open:o,onToggle:p=>l(
p.currentTarget.open),children:[e.jsxs("summary",{children:[t.name," (",u.length,")"]}),o?e.jsx("div",{className:"ft-bgg\
rid",children:u.map(p=>e.jsx(Ot,{scene:p,active:n.kind==="scene"&&n.id===p.id,onPick:()=>a({background:{kind:"scene",id:p.
id}})},p.id))}):null]})]}):null},xa=G.memo(function({settings:n,patch:a,bgStatus:i,soundStatus:o,lastBgSrcRef:l,lastSndSrcRef:u,
resolveLinkBg:p,resolveCustomSound:f,uploadBg:c,uploadSound:b,previewAlarm:w,requestNotifications:k,notificationsSupported:N,
wakeLockSupported:h,onResetSettings:x,savedMessage:R,onClose:A}){const[C,j]=r.useState(""),[M,L]=r.useState(""),[D,F]=r.
useState(""),[_,P]=r.useState(""),v=n.background,$=()=>{const s=C.trim();s&&p(s).then(I=>{I&&(l.current=s,a({background:{
kind:"link",source:s}}))})},g=()=>{const s=M.trim();ia(s)&&f(s).then(I=>{var ne;I&&(u.current=s,a({alarmSound:"custom",customAlarm:{
source:s,name:((ne=s.split("/").pop())==null?void 0:ne.split("?")[0])||"Custom sound"}}))})},E=()=>{const s=D.trim();if(s){
if(!Ft(s)){P("That is not a Spotify link. Copy a link that starts with https://open.spotify.com/ from the Spotify app (S\
hare - Copy link). Your current player is unchanged.");return}P(""),a({spotify:s,spotifyOpen:!0})}};return e.jsxs("aside",
{className:"ft-sheet","aria-label":"Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[e.jsx("h2",{children:"\
Settings"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:A,children:e.
jsx(J,{d:Dt})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"ft-chips",children:Jn.
map(s=>e.jsxs("button",{type:"button",className:"ft-chipbtn",onClick:()=>a({accent:s.accent,font:s.font,background:{kind:s.
bg.kind,id:s.bg.id}}),children:[s.name," theme"]},s.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx(
"span",{className:"ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",children:[Xn.map(s=>e.jsx(
"button",{type:"button",className:`ft-colorswatch ${n.accent.toLowerCase()===s.value?"is-active":""}`,style:{background:s.
value},"aria-label":`${s.name} accent`,onClick:()=>a({accent:s.value})},s.id)),e.jsxs("label",{className:"ft-colorcustom",
children:[e.jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(n.accent)?n.accent:"#9fd8c6","aria-label":"Custom acc\
ent color",onChange:s=>a({accent:s.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),e.jsxs("div",{className:"\
ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx("div",{className:"ft-chi\
ps",children:$t.map(s=>e.jsx("button",{type:"button",className:`ft-chipbtn ${n.font===s.id?"is-active":""}`,style:s.css===
"inherit"?void 0:{fontFamily:s.css},onClick:()=>a({font:s.id}),children:s.name},s.id))})]}),e.jsxs("div",{className:"ft-\
field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Clock style"}),e.jsx("div",{className:"ft\
-chips",children:[["ring","Ring"],["bar","Bar"],["minimal","Minimal"]].map(([s,I])=>e.jsx("button",{type:"button",className:`\
ft-chipbtn ${n.clockStyle===s?"is-active":""}`,onClick:()=>a({clockStyle:s}),children:I},s))})]}),e.jsxs("div",{className:"\
ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Clock size"}),e.jsx("div",{className:"\
ft-chips",children:[["s","Small"],["m","Medium"],["l","Large"]].map(([s,I])=>e.jsx("button",{type:"button",className:`ft\
-chipbtn ${n.clockSize===s?"is-active":""}`,onClick:()=>a({clockSize:s}),children:I},s))})]}),e.jsx(B,{label:"Cycle dots",
checked:n.showDots,onChange:s=>a({showDots:s})}),e.jsx(B,{label:"Today's stats chip",checked:n.showChip,onChange:s=>a({showChip:s})}),
e.jsx(B,{label:"Shortcut hints",checked:n.showHint,onChange:s=>a({showHint:s})})]}),e.jsxs("section",{children:[e.jsx("h\
3",{children:"Music (Spotify player)"}),e.jsx("div",{className:"ft-chips",children:Pt.map(s=>e.jsx("button",{type:"butto\
n",className:`ft-chipbtn ${n.spotify===s.id?"is-active":""}`,onClick:()=>{P(""),a({spotify:s.id,spotifyOpen:!0})},children:s.
name},s.id))}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"\
Any Spotify link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste an open.spotify.com playlist, album, track o\
r podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official player at the bottom of the page; this\
 is not account sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-s\
econd previews when signed out; podcast episodes usually play in full."}),e.jsxs("span",{className:"ft-inrow",children:[
e.jsx("input",{className:"ft-textinput",value:D,placeholder:"https://open.spotify.com/playlist/…",onChange:s=>F(s.target.
value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:E,children:"Use link"})]}),
n.spotify?e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>a(
{spotifyOpen:!n.spotifyOpen}),children:n.spotifyOpen?"Minimize player":"Show player"}),e.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:()=>a({spotify:null,spotifyOpen:!1}),children:"Remove player"})]}):null,_?e.jsx("span",{className:"\
ft-field-hint",children:_}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(ke,{label:"Focus",
value:n.focusMin,min:1,max:180,unit:"min",onChange:s=>a({focusMin:s})}),e.jsx(ke,{label:"Short break",value:n.shortMin,min:1,
max:60,unit:"min",onChange:s=>a({shortMin:s})}),e.jsx(ke,{label:"Long break",value:n.longMin,min:1,max:90,unit:"min",onChange:s=>a(
{longMin:s})}),e.jsx(ke,{label:"Long break every",value:n.longEvery,min:1,max:12,unit:"sessions",onChange:s=>a({longEvery:s})}),
e.jsx(B,{label:"Auto-start breaks",checked:n.autoBreaks,onChange:s=>a({autoBreaks:s})}),e.jsx(B,{label:"Auto-start focus",
checked:n.autoFocus,onChange:s=>a({autoFocus:s})}),N?e.jsx(B,{label:"Browser notifications",hint:"Alerts when a session \
ends in another tab.",checked:n.notifications,onChange:k}):null,h?e.jsx(B,{label:"Keep screen awake",checked:n.keepAwake,
onChange:s=>a({keepAwake:s})}):null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"\
ft-chips",children:Qn.map(s=>e.jsx("button",{type:"button",className:`ft-chipbtn ${n.alarmSound===s.id?"is-active":""}`,
onClick:()=>{a({alarmSound:s.id}),w(s.id)},children:s.name},s.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx(
"span",{className:"ft-field-label",children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:n.alarmVolume,
"aria-label":"Alarm volume",onChange:s=>a({alarmVolume:parseFloat(s.target.value)})})]}),e.jsx(B,{label:"Ring twice",checked:n.
alarmRepeat,onChange:s=>a({alarmRepeat:s})}),e.jsx(B,{label:"Ticking while running",checked:n.tick,onChange:s=>a({tick:s})}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:M,placeholder:"\
https://…/sound.mp3",onChange:s=>L(s.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:g,children:"Use link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:s=>{var I;return b((I=s.target.files)==null?void 0:I[0])}})]}),n.customAlarm?
e.jsxs("span",{className:"ft-field-hint",children:["Current: ",n.customAlarm.name]}):null]}),o?e.jsx("span",{className:"\
ft-field-hint",children:o}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"\
ft-chips",children:Tt.map(s=>e.jsx("button",{type:"button",className:`ft-chipbtn ${n.ambient===s.id?"is-active":""}`,onClick:()=>a(
{ambient:s.id}),children:s.name},s.id))}),n.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{
className:"ft-field-label",children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:n.ambientVolume,
"aria-label":"Ambient volume",onChange:s=>a({ambientVolume:parseFloat(s.target.value)})})]}):null]}),e.jsxs("section",{children:[
e.jsx("h3",{children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Featured scenes"}),e.jsx("div",{className:"\
ft-bggrid",children:He.map(s=>e.jsx(Ot,{scene:s,active:v.kind==="scene"&&v.id===s.id,onPick:()=>a({background:{kind:"sce\
ne",id:s.id}})},s.id))}),St.map((s,I)=>e.jsx(ba,{group:s,bg:v,patch:a,showSection:I===0||St[I-1].section!==s.section},s.
name)),e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Only scenes whose motion loops clean\
ly are listed. Videos stream only when chosen; a scene that cannot load shows its preview instead of going black."}),e.jsx(
B,{label:"Animate backgrounds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:n.bgAnimate!==
!1,onChange:s=>a({bgAnimate:s})}),e.jsx("h4",{className:"ft-subhead",children:"Animated"}),e.jsx("div",{className:"ft-bg\
grid",children:At.map(s=>e.jsx("button",{type:"button",className:`ft-bgswatch ft-animsw ft-animsw-${s.id} ${v.kind==="an\
imated"&&v.id===s.id?"is-active":""}`,"aria-label":`${s.name} animated background`,onClick:()=>a({background:{kind:"anim\
ated",id:s.id}})},s.id))}),e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:Bn.
map(s=>e.jsx(fa,{id:s.id,name:s.name,active:v.kind==="builtin"&&v.id===s.id,onPick:()=>a({background:{kind:"builtin",id:s.
id}})},s.id))}),e.jsx("h4",{className:"ft-subhead",children:"Colors"}),e.jsx("div",{className:"ft-bggrid",children:Se.map(
s=>e.jsx("button",{type:"button",className:`ft-bgswatch ${v.kind==="gradient"&&v.id===s.id?"is-active":""}`,style:{backgroundImage:s.
css},"aria-label":s.name,onClick:()=>a({background:{kind:"gradient",id:s.id}})},s.id))}),e.jsxs("div",{className:"ft-fie\
ld is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),e.jsx("spa\
n",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image lin\
k (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match it\
s own shape, never stretched. Saved links reload each visit. When a direct image load is blocked, the link you paste is \
fetched through a public image relay (weserv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"\
ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:C,placeholder:"https://www.pinterest.com/pin/…",onChange:s=>j(
s.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:$,children:"Use \
link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or vid\
eo file",className:"ft-fileinput",onChange:s=>{var I;return c((I=s.target.files)==null?void 0:I[0])}})]}),e.jsx("span",{
className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),i?e.jsx("span",{className:"ft-field-hint",children:i}):
null]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Impor\
ted image or video fit"}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:`ft-chip\
btn ${n.customFit!=="contain"?"is-active":""}`,onClick:()=>a({customFit:"cover"}),children:"Crop to fill"}),e.jsx("butto\
n",{type:"button",className:`ft-chipbtn ${n.customFit==="contain"?"is-active":""}`,onClick:()=>a({customFit:"contain"}),
children:"Show whole image"})]}),e.jsx("span",{className:"ft-field-hint",children:"Crop fills the screen. Show whole ima\
ge preserves the full composition with plain dark space where needed. No blur-fill or stretching."})]}),e.jsx(B,{label:"\
Enhance imported images",hint:"Sharpens and boosts images you paste or upload. Runs on your device only; images never le\
ave this browser.",checked:n.enhance!==!1,onChange:s=>a({enhance:s})}),e.jsxs("div",{className:"ft-field",children:[e.jsx(
"span",{className:"ft-field-label",children:"Darken background"}),e.jsx("input",{type:"range",min:.15,max:.85,step:.05,value:n.
scrim,"aria-label":"Background darkness",onChange:s=>a({scrim:parseFloat(s.target.value)})})]})]}),e.jsxs("div",{className:"\
ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"Start over"}),e.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:x,children:"Reset settings"})]}),e.jsxs("p",{className:"ft-field-hint",children:["Your sett\
ings, tasks and stats stay in this browser. Link backgrounds and sounds are fetched from the sites you paste, through th\
e weserv.nl image relay when a direct load is blocked; Spotify playback happens inside Spotify's official player; select\
ed catalog videos stream from Pixabay's CDN. ",R]})]})});function va(){return typeof window<"u"&&/[?&]popout=1/.test(window.
location.search)?e.jsx(ya,{}):e.jsx(wa,{})}function wa(){var ut;const[t,n,a]=ve("ft-settings.v2",ze),[i,o,l]=ve("ft-task\
s.v1",{tasks:[],activeId:null}),[u,p,f]=ve("ft-stats.v1",{days:{}}),[c,b,w]=ve("ft-session.v1",null),k=r.useMemo(()=>({focus:t.
focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,t.longMin]),[N,h]=r.useState("focus"),[x,R]=r.
useState(!1),[A,C]=r.useState(k.focus),[j,M]=r.useState(0),[L,D]=r.useState("none"),[F,_]=r.useState(!1),P=r.useRef(0),v=r.
useRef(!1);v.current=x;const $=r.useRef(N);$.current=N;const g=r.useRef(A);g.current=A;const E=r.useRef(t.accent);E.current=
t.accent;const[s,I]=r.useState(null),[ne,pe]=r.useState(null),[Ut,Ce]=r.useState(null),[Wt,Q]=r.useState(""),[_e,Xe]=r.useState(
null),[zt,K]=r.useState(""),W=r.useRef(null),Z=r.useRef(null),fe=r.useRef(null),Je=r.useCallback(async d=>{Q("Loading ba\
ckground…");try{const m=d.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(m)&&!/pin(it)?\./i.test(m))return I(S=>(S&&S.
url.startsWith("blob:")&&URL.revokeObjectURL(S.url),{url:m,kind:"video"})),Q("Background applied."),!0;const y=await sa(
d);return y.type.startsWith("video/")?I(S=>(S&&S.url.startsWith("blob:")&&URL.revokeObjectURL(S.url),{url:URL.createObjectURL(
y),kind:"video"})):I(S=>(S&&S.url.startsWith("blob:")&&URL.revokeObjectURL(S.url),{url:URL.createObjectURL(y),kind:"imag\
e"})),Q("Background applied."),!0}catch(m){const y=m instanceof Error&&m.message==="short pin link"?"Short pin.it links \
cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background \
is unchanged.":"Could not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct\
 image link, or upload the image below. Your previous background is unchanged.";return Q(y),!1}},[]),Qe=r.useCallback(async d=>{
K("Loading sound…");try{const m=await qe(d);if(!/^audio\//.test(m.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(
d))throw new Error("not audio");return Xe(y=>(y&&URL.revokeObjectURL(y),URL.createObjectURL(m))),K("Sound saved. It will\
 ring when a session ends."),!0}catch{return K("That link blocks cross-site loading. Download the sound to your device a\
nd upload it instead. Your previous sound is unchanged."),!1}},[]),Me=r.useRef(""),Re=r.useRef("");r.useEffect(()=>{a.ready&&
t.background.kind==="link"&&t.background.source&&t.background.source!==Me.current&&(Me.current=t.background.source,Je(t.
background.source))},[a.ready,t.background]),r.useEffect(()=>{var m;if(!a.ready)return;const d=((m=t.customAlarm)==null?
void 0:m.source)||"";t.alarmSound==="custom"&&d&&d!==Re.current&&(Re.current=d,Qe(d))},[a.ready,t.alarmSound,t.customAlarm]);
const Ze=r.useRef(!1);r.useEffect(()=>{var d;!a.ready||Ze.current||(Ze.current=!0,t.background.kind==="upload"&&(z({background:{
kind:"gradient",id:"dusk"}}),Q("Your uploaded image resets when the tab reloads. Upload it again, or save a link instead\
.")),!((d=t.customAlarm)!=null&&d.source)&&t.alarmSound==="custom"&&(z({alarmSound:"bell"}),K("Your uploaded sound reset\
s when the tab reloads. Upload it again, or save a link instead.")))},[a.ready]),r.useEffect(()=>{a.ready&&(!t.accent||!t.
font||!t.clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||typeof t.
bgAnimate!="boolean")&&n(d=>({...ze,...d}))},[a.ready]);const Y=t.background;r.useEffect(()=>{let d=!0;if(a.ready){if(Y.
kind==="builtin"){const m=Y.id&&kt[Y.id]?Y.id:"rain";Ue[m]?Ce(Ue[m]):(Ce(null),kt[m]().then(y=>{Ue[m]=y.default,d&&Ce(y.
default)}).catch(()=>{}))}return()=>{d=!1}}},[a.ready,Y.kind,Y.id]);const et=r.useRef(!1),V=r.useCallback(d=>{w.ready&&b(
{phase:d.phase,running:d.running,endAt:d.endAt||0,remainingMs:d.remainingMs,cycleCount:d.cycleCount})},[w.ready]);r.useEffect(
()=>{if(!w.ready||et.current||(et.current=!0,!c))return;const d=c.phase==="short"||c.phase==="long"?c.phase:"focus";if(h(
d),M(c.cycleCount||0),c.running&&c.endAt>Date.now()+500)P.current=c.endAt,C(c.endAt-Date.now()),R(!0);else if(c.running)
C(U.current[d]),R(!1);else{const m=typeof c.remainingMs=="number"&&c.remainingMs>0?Math.min(c.remainingMs,U.current[d]):
U.current[d];C(m),R(!1)}},[w.ready]);const ae=r.useRef({}),U=r.useRef(k);U.current=k;const tt=r.useCallback(d=>{const m=$.
current;let y="focus",S=j;if(m==="focus"){if(S=d?j:j+1,M(S),y=S%Math.max(1,t.longEvery)===0&&S>0?"long":"short",!d){const be=me(),
mt=u.days[be]||{focusSec:0,sessions:0};p({days:{...u.days,[be]:{focusSec:mt.focusSec+Math.round(U.current.focus/1e3),sessions:mt.
sessions+1}}}),i.activeId&&o($e=>({...$e,tasks:$e.tasks.map(xe=>xe.id===$e.activeId?{...xe,done:xe.done+1}:xe)}))}}else y=
"focus";if(t.alarmSound==="custom"&&W.current)try{W.current.currentTime=0,W.current.volume=t.alarmVolume,W.current.play().
catch(()=>ue("bell",t.alarmVolume,t.alarmRepeat))}catch{ue("bell",t.alarmVolume,t.alarmRepeat)}else t.alarmSound==="cust\
om"?ue("bell",t.alarmVolume,t.alarmRepeat):ue(t.alarmSound,t.alarmVolume,t.alarmRepeat);if(t.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${H[m]} finished`,{body:y==="focus"?"Time to focus.":`Tim\
e for a ${H[y].toLowerCase()}.`})}catch{}delete ae.current[m],h(y),C(U.current[y]);const T=y==="focus"?t.autoFocus:t.autoBreaks;
T?(P.current=Date.now()+U.current[y],R(!0)):R(!1),V({phase:y,running:T,endAt:T?Date.now()+U.current[y]:0,remainingMs:U.current[y],
cycleCount:S})},[j,t,u,p,o,V]),he=r.useRef(tt);he.current=tt,r.useEffect(()=>{if(!x)return;const d=window.setInterval(()=>{
const m=P.current-Date.now();m<=0?he.current(!1):C(y=>Math.ceil(y/1e3)!==Math.ceil(m/1e3)?m:y)},250);return()=>window.clearInterval(
d)},[x]),r.useEffect(()=>{v.current||(delete ae.current[$.current],C(k[$.current]))},[k]);const nt=r.useRef(0);r.useEffect(
()=>{if(!x||!t.tick)return;const d=window.setInterval(()=>{const m=Math.ceil((P.current-Date.now())/1e3);m!==nt.current&&
(nt.current=m,Zn(t.alarmVolume))},250);return()=>window.clearInterval(d)},[x,t.tick,t.alarmVolume]),r.useEffect(()=>{document.
title=`${oe(A)} - ${H[N]} - Study focus timer`},[A,N]),r.useEffect(()=>(Z.current&&(Z.current(),Z.current=null),t.ambient!==
"none"&&(Z.current=aa(t.ambient,t.ambientVolume)),()=>{Z.current&&(Z.current(),Z.current=null)}),[t.ambient,t.ambientVolume]),
r.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))return;let d=!1;const m=()=>{navigator.wakeLock.request("scr\
een").then(S=>{d||(fe.current=S)}).catch(()=>{})};m();const y=()=>{document.visibilityState==="visible"&&m()};return document.
addEventListener("visibilitychange",y),()=>{if(d=!0,document.removeEventListener("visibilitychange",y),fe.current){try{fe.
current.release()}catch{}fe.current=null}}},[t.keepAwake]),r.useEffect(()=>{_e?(W.current=new Audio(_e),W.current.preload=
"auto"):W.current=null},[_e]);const at=r.useRef(()=>{}),it=r.useRef(()=>{}),st=r.useRef(()=>{}),ie=r.useCallback(()=>{if(Ne(),
W.current)try{W.current.pause(),W.current.currentTime=0}catch{}P.current=Date.now()+g.current,R(!0),V({phase:$.current,running:!0,
endAt:P.current,remainingMs:g.current,cycleCount:j})},[V,j]),se=r.useCallback(()=>{R(!1),V({phase:$.current,running:!1,remainingMs:g.
current,cycleCount:j})},[V,j]),re=r.useCallback(()=>{delete ae.current[$.current],R(!1),C(U.current[$.current]),V({phase:$.
current,running:!1,remainingMs:U.current[$.current],cycleCount:j})},[V,j]),ge=r.useCallback(()=>{he.current(!0)},[]);at.
current=ie,it.current=se,st.current=re;const le=r.useCallback(d=>{const m=$.current;if(d===m)return;const y=v.current?Math.
max(0,P.current-Date.now()):g.current;y>0&&y<U.current[m]?ae.current[m]=y:delete ae.current[m];const S=ae.current[d],T=typeof S==
"number"&&S>0?Math.min(S,U.current[d]):U.current[d];R(!1),h(d),C(T),V({phase:d,running:!1,remainingMs:T,cycleCount:j})},
[V,j]),Ee=r.useCallback(()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.
requestFullscreen().catch(()=>{})},[]),[ot,rt]=r.useState(null),Bt=r.useCallback(()=>{const d=window.documentPictureInPicture;
if(d!=null&&d.requestWindow){d.requestWindow({width:320,height:200}).then(m=>{for(const y of Array.from(document.styleSheets))
try{const S=Array.from(y.cssRules||[]).map(be=>be.cssText).join(`
`),T=m.document.createElement("style");T.textContent=S,m.document.head.appendChild(T)}catch{const S=y.href;if(S){const T=m.
document.createElement("link");T.rel="stylesheet",T.href=S,m.document.head.appendChild(T)}}m.document.body.className="ft\
-pip-body",m.addEventListener("pagehide",()=>rt(null)),rt(m)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);r.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const d=new BroadcastChannel(
"sft-sync"),m=()=>d.postMessage({t:"state",phase:$.current,remaining:g.current,running:v.current,dur:U.current[$.current],
accent:E.current,at:Date.now()});m();const y=window.setInterval(m,1e3);return d.onmessage=S=>{const T=S.data;(T==null?void 0:
T.t)==="cmd"&&(T.cmd==="toggle"?v.current?it.current():at.current():T.cmd==="reset"?st.current():T.cmd==="skip"&&he.current(
!0))},()=>{window.clearInterval(y),d.close()}},[]);const Vt=r.useCallback(()=>{D("none"),_(!0)},[]),qt=L==="tasks",Gt=L===
"settings",Kt=r.useCallback(()=>D(d=>d==="tasks"?"none":"tasks"),[]),Yt=r.useCallback(()=>D(d=>d==="settings"?"none":"se\
ttings"),[]),Ht=r.useCallback(()=>D(d=>d==="profile"?"none":"profile"),[]);r.useEffect(()=>{const d=m=>{var S;const y=(S=
m.target)==null?void 0:S.tagName;y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||(m.code==="Space"?(m.preventDefault(),v.current?
se():ie()):m.key==="r"||m.key==="R"?re():m.key==="s"||m.key==="S"?ge():m.key==="1"?le("focus"):m.key==="2"?le("short"):m.
key==="3"?le("long"):m.key==="m"||m.key==="M"?_(T=>!T):(m.key==="f"||m.key==="F")&&Ee())};return window.addEventListener(
"keydown",d),()=>window.removeEventListener("keydown",d)},[ie,se,re,ge,le,Ee]);const z=r.useCallback(d=>n(m=>({...m,...d})),
[n]),Xt=r.useCallback(d=>{if(!d)return;const m=d.type.startsWith("video/");if(!m&&!d.type.startsWith("image/")){Q("That \
file is not an image or video.");return}pe(y=>(y&&URL.revokeObjectURL(y.url),{url:URL.createObjectURL(d),kind:m?"video":
"image"})),z({background:{kind:"upload"}}),Q("Background applied for this visit. Use a link to keep it across visits.")},
[z]),Jt=r.useCallback(d=>{if(d){if(!d.type.startsWith("audio/")){K("That file is not an audio file.");return}Xe(m=>(m&&URL.
revokeObjectURL(m),URL.createObjectURL(d))),z({alarmSound:"custom",customAlarm:{source:"",name:d.name}}),K(`Using "${d.name}\
" for this visit. Use a link to keep it across visits.`)}},[z]),Qt=r.useCallback(d=>{var m;if(d==="custom"){if(W.current)
try{W.current.currentTime=0,W.current.volume=t.alarmVolume,W.current.play().catch(()=>K("Your browser blocked playback b\
efore the first tap. Press Start once, then preview again."))}catch{}else K((m=t.customAlarm)!=null&&m.source?"Still loa\
ding your sound.":"Add a link or upload a file first.");return}ue(d,t.alarmVolume,!1)},[t.alarmVolume,t.customAlarm]),Zt=r.
useCallback(d=>{if(!d){z({notifications:!1});return}if(!(typeof Notification>"u"))try{const m=Notification.requestPermission();
m&&typeof m.then=="function"?m.then(y=>z({notifications:y==="granted"})).catch(()=>z({notifications:!1})):z({notifications:Notification.
permission==="granted"})}catch{z({notifications:!1})}},[z]),en=r.useCallback(()=>n(ze),[n]),tn=r.useMemo(()=>({focusSec:0,
sessions:0}),[]),ye=u.days[me()]||tn,Ae=r.useMemo(()=>{var y,S;let d=0;const m=new Date;for(((y=u.days[me(m)])==null?void 0:
y.sessions)>0||m.setDate(m.getDate()-1);((S=u.days[me(m)])==null?void 0:S.sessions)>0;)d++,m.setDate(m.getDate()-1);return d},
[u.days]),nn=r.useMemo(()=>{const d=[];for(let m=6;m>=0;m--){const y=new Date;y.setDate(y.getDate()-m);const S=u.days[me(
y)];d.push({label:`${"SMTWTFS"[y.getDay()]}`,minutes:Math.round(((S==null?void 0:S.focusSec)||0)/60)})}return d},[u.days]),
an=r.useMemo(()=>t.showChip?`${ye.sessions} ${ye.sessions===1?"session":"sessions"} · ${Math.round(ye.focusSec/60)} min${Ae>
1?` · ${Ae}-day streak`:""}`:null,[t.showChip,ye,Ae]),sn=a.ready&&l.ready&&f.ready,on=((ut=$t.find(d=>d.id===t.font))==
null?void 0:ut.css)||"inherit",Le=1-A/Math.max(1,k[N]),Ie=118,lt=2*Math.PI*Ie,rn=typeof Notification<"u",ln=typeof navigator<
"u"&&"wakeLock"in navigator,cn=typeof document<"u"&&document.fullscreenEnabled,ct=i.tasks.find(d=>d.id===i.activeId)||null,
dt=t.spotify?Ft(t.spotify):null;return e.jsxs("div",{className:`ft-root ${F?"is-compact":""}`,style:{"--ft-accent":t.accent,
"--ft-font":on},children:[e.jsx(ma,{kind:Y.kind,id:Y.id,scrim:t.scrim,builtinSrc:Ut,linkBg:s,uploadBg:ne,paused:F,animate:t.
bgAnimate!==!1,customFit:t.customFit||"cover",enhance:t.enhance!==!1}),e.jsx(ha,{chip:an,panel:L,fullscreenSupported:cn,
onFullscreen:Ee,onTasks:Kt,onSettings:Yt,onMinimize:Vt,onPopout:Bt,onProfile:Ht}),e.jsxs("main",{className:"ft-center",children:[
e.jsx("nav",{className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(d=>e.jsx("button",{type:"\
button",className:`ft-mode ${N===d?"is-active":""}`,onClick:()=>le(d),children:H[d]},d))}),t.showDots?e.jsx("div",{className:"\
ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,t.longEvery)}).map((d,m)=>e.jsx("span",{className:`\
ft-dot ${m<j%Math.max(1,t.longEvery)||j>0&&j%Math.max(1,t.longEvery)===0&&N!=="focus"?"is-done":""}`},m))}):null,e.jsxs(
"div",{className:`ft-clock is-${t.clockSize}`,role:"timer","aria-live":"off","aria-label":`${H[N]} timer, ${oe(A)} remai\
ning`,children:[t.clockStyle==="ring"?e.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-hidden":"true",children:[
e.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:Ie}),e.jsx("circle",{className:"ft-ring-fill",cx:"130",cy:"\
130",r:Ie,strokeDasharray:lt,strokeDashoffset:lt*(1-Le)})]}):null,e.jsxs("div",{className:"ft-time-wrap",children:[e.jsx(
"div",{className:"ft-time",children:oe(A)}),e.jsx("div",{className:"ft-taskline",children:ct?ct.title:N==="focus"?"Pick \
a task or just focus":"Rest up"})]})]}),t.clockStyle==="bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",
children:e.jsx("span",{style:{width:`${Math.round(Le*100)}%`}})}):null,e.jsxs("div",{className:"ft-controls",children:[e.
jsx("button",{type:"button",className:"ft-primary",onClick:()=>x?se():ie(),children:x?"Pause":A<k[N]?"Resume":"Start"}),
e.jsx("button",{type:"button",className:"ft-ghost",onClick:re,children:"Reset"}),e.jsx("button",{type:"button",className:"\
ft-ghost",onClick:ge,children:"Skip"})]}),t.showHint?e.jsx("p",{className:"ft-hint",children:"Space start or pause · R r\
eset · S skip · M minimize · F fullscreen"}):null]}),F?e.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-l\
abel":"Minimized timer",children:[e.jsx("span",{className:"ft-compactphase",children:H[N]}),e.jsx("span",{className:"ft-\
compacttime",children:oe(A)}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":x?"Pause":"Start",onClick:()=>x?
se():ie(),children:x?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>_(!1),children:"⤢"})]}):null,L==="profile"?e.jsx(On,{onClose:()=>D("none")}):null,e.jsx(Fn,{}),qt?e.jsx(ga,
{tasksState:i,setTasksState:o,week:nn,ready:sn,savedMessage:l.message||f.message||"",onClose:()=>D("none")}):null,Gt?e.jsx(
xa,{settings:t,patch:z,bgStatus:Wt,soundStatus:zt,lastBgSrcRef:Me,lastSndSrcRef:Re,resolveLinkBg:Je,resolveCustomSound:Qe,
uploadBg:Xt,uploadSound:Jt,previewAlarm:Qt,requestNotifications:Zt,notificationsSupported:rn,wakeLockSupported:ln,onResetSettings:en,
savedMessage:a.message||"",onClose:()=>D("none")}):null,ot?dn.createPortal(e.jsxs("div",{className:"ft-pip",children:[e.
jsx("div",{className:"ft-pip-phase",children:H[N]}),e.jsx("div",{className:"ft-pip-time",children:oe(A)}),e.jsx("div",{className:"\
ft-pip-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.round(Le*100)}%`}})}),e.jsxs("div",{className:"\
ft-pip-btns",children:[e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>x?se():ie(),children:x?
"Pause":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:re,children:"Reset"}),e.jsx("but\
ton",{type:"button",className:"ft-ghost is-compact",onClick:ge,children:"Skip"})]})]}),ot.document.body):null,dt?e.jsxs(
"div",{className:`ft-spotify ${t.spotifyOpen?"is-open":""}`,children:[e.jsx("div",{className:"ft-spotify-frame","aria-hi\
dden":!t.spotifyOpen,children:e.jsx("iframe",{src:dt,width:"100%",height:"152",frameBorder:"0",allow:"autoplay; clipboar\
d-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"Spotify player"})}),e.jsx("button",{type:"\
button",className:"ft-spotify-toggle","aria-expanded":t.spotifyOpen,onClick:()=>z({spotifyOpen:!t.spotifyOpen}),children:t.
spotifyOpen?"Hide player":"♫ Music"})]}):null]})}un(document.getElementById("root")).render(e.jsx(va,{}));
