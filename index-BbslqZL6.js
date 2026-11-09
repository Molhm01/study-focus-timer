import{R as Y,j as e,r as a,a as ps,c as hs}from"./vendor-B3JGZu0D.js";(function(){const s=document.createElement("link").
relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulep\
reload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName===
"LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&
(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials=
"include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.
ep=!0;const l=n(o);fetch(o.href,l)}})();const gs={"frame-bronze":"#cd8b4a","frame-silver":"#c9d2dc","frame-gold":"#ffd70\
0","frame-emerald":"#4fce8f","frame-diamond":"#a8ecff"};function X({x:t,y:s,r:n,fill:i}){const o=[];for(let l=0;l<10;l++){
const c=Math.PI/5*l-Math.PI/2,m=l%2===0?n:n*.45;o.push(`${(t+m*Math.cos(c)).toFixed(1)},${(s+m*Math.sin(c)).toFixed(1)}`)}
return e.jsx("polygon",{points:o.join(" "),fill:i})}function ys({base:t}){switch(t){case"cat":return e.jsxs("g",{children:[
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
#123f3a",opacity:"0.7"})]});case"star":return e.jsxs("g",{children:[e.jsx(X,{x:48,y:48,r:30,fill:"#ffd166"}),e.jsx("circ\
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
#8fa3d9"})]})}}function xs({aura:t}){switch(t){case"sparkle":return e.jsxs("g",{children:[e.jsx(X,{x:14,y:22,r:4,fill:"#\
ffe9a8"}),e.jsx(X,{x:82,y:18,r:3.2,fill:"#ffe9a8"}),e.jsx(X,{x:86,y:66,r:4,fill:"#ffe9a8"}),e.jsx(X,{x:12,y:72,r:3,fill:"\
#ffe9a8"})]});case"calm-ring":return e.jsx("circle",{cx:"48",cy:"48",r:"42",fill:"none",stroke:"#9fd8c6",strokeWidth:"2",
strokeDasharray:"4 7",opacity:"0.9"});case"ember":return e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"41",fill:"\
none",stroke:"#ff9c5b",strokeWidth:"2.4",opacity:"0.35"}),e.jsx("circle",{cx:"48",cy:"48",r:"37",fill:"none",stroke:"#ff\
7b3b",strokeWidth:"1.6",opacity:"0.5"}),e.jsx(X,{x:20,y:24,r:3,fill:"#ffb27b"}),e.jsx(X,{x:78,y:30,r:2.6,fill:"#ffb27b"})]});case"\
galaxy":return e.jsxs("g",{children:[e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"#c39bff",strokeWidth:"\
1.6",opacity:"0.8",transform:"rotate(-18 48 48)"}),e.jsx("ellipse",{cx:"48",cy:"48",rx:"44",ry:"16",fill:"none",stroke:"\
#7fb6ff",strokeWidth:"1.2",opacity:"0.5",transform:"rotate(22 48 48)"}),e.jsx("circle",{cx:"86",cy:"36",r:"2.4",fill:"#e\
3d4ff"}),e.jsx("circle",{cx:"10",cy:"62",r:"2",fill:"#e3d4ff"})]});default:return null}}function bs({eyes:t}){switch(t){case"\
glasses":return e.jsxs("g",{fill:"none",stroke:"#f2f2f2",strokeWidth:"2.2",children:[e.jsx("circle",{cx:"38",cy:"47",r:"\
8"}),e.jsx("circle",{cx:"58",cy:"47",r:"8"}),e.jsx("path",{d:"M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3",strokeLinecap:"round"})]});case"\
shades":return e.jsxs("g",{children:[e.jsx("rect",{x:"29",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("r\
ect",{x:"50",y:"41",width:"17",height:"11",rx:"4",fill:"#15181f"}),e.jsx("rect",{x:"44",y:"44",width:"8",height:"3",rx:"\
1.5",fill:"#15181f"})]});case"monocle":return e.jsxs("g",{fill:"none",stroke:"#ffd97a",strokeWidth:"2",children:[e.jsx("\
circle",{cx:"58",cy:"47",r:"8.5"}),e.jsx("path",{d:"M62 55 q3 8 -2 14",strokeLinecap:"round"})]});case"star-eyes":return e.
jsxs("g",{children:[e.jsx(X,{x:38,y:47,r:5.4,fill:"#fff3c4"}),e.jsx(X,{x:58,y:47,r:5.4,fill:"#fff3c4"})]});default:return null}}
function ks({hat:t}){switch(t){case"headphones":return e.jsxs("g",{children:[e.jsx("path",{d:"M24 44 a24 24 0 0 1 48 0",
fill:"none",stroke:"#e05d7a",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("rect",{x:"19",y:"40",width:"10",height:"16",
rx:"5",fill:"#e05d7a"}),e.jsx("rect",{x:"67",y:"40",width:"10",height:"16",rx:"5",fill:"#e05d7a"})]});case"beanie":return e.
jsxs("g",{children:[e.jsx("path",{d:"M23 34 a25 22 0 0 1 50 0 z",fill:"#5b8def"}),e.jsx("rect",{x:"21",y:"32",width:"54",
height:"9",rx:"4.5",fill:"#7ba4f4"}),e.jsx("circle",{cx:"48",cy:"11",r:"5",fill:"#dce7ff"})]});case"halo":return e.jsx("\
ellipse",{cx:"48",cy:"12",rx:"16",ry:"4.6",fill:"none",stroke:"#ffe08a",strokeWidth:"3.4"});case"crown":return e.jsxs("g",
{children:[e.jsx("polygon",{points:"30,30 33,12 42,22 48,8 54,22 63,12 66,30",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4",strokeLinejoin:"round"}),e.jsx("rect",{x:"29",y:"29",width:"38",height:"6",rx:"3",fill:"#ffd700",stroke:"#c9a400",strokeWidth:"\
1.4"}),e.jsx("circle",{cx:"48",cy:"18",r:"2.4",fill:"#e05d7a"})]});case"wizard":return e.jsxs("g",{children:[e.jsx("poly\
gon",{points:"48,2 30,34 66,34",fill:"#5a4a8a"}),e.jsx("polygon",{points:"40,20 48,2 52,12",fill:"#6d5ba6"}),e.jsx("elli\
pse",{cx:"48",cy:"34",rx:"27",ry:"5.4",fill:"#4a3d75"}),e.jsx(X,{x:44,y:22,r:2.6,fill:"#ffe08a"})]});case"laurel":return e.
jsxs("g",{fill:"none",stroke:"#7fb069",strokeWidth:"3",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 36 q6 -16 22\
 -20"}),e.jsx("path",{d:"M70 36 q-6 -16 -22 -20"}),e.jsx("path",{d:"M32 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 \
-2 M58 24 l5 -4 M50 20 l3 -5",strokeWidth:"2.2"})]});default:return null}}function vs({frame:t}){const s=gs[t];return s?
e.jsxs("g",{children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"none",stroke:s,strokeWidth:"3"}),t==="frame-gold"||t===
"frame-emerald"||t==="frame-diamond"?e.jsx("circle",{cx:"48",cy:"3.4",r:"2.8",fill:s}):null,t==="frame-diamond"?e.jsxs("\
g",{fill:s,children:[e.jsx("circle",{cx:"3.4",cy:"48",r:"2.4"}),e.jsx("circle",{cx:"92.6",cy:"48",r:"2.4"}),e.jsx("circl\
e",{cx:"48",cy:"92.6",r:"2.4"})]}):null]}):null}const gt=Y.memo(function({spec:s,size:n=96}){return e.jsxs("svg",{width:n,
height:n,viewBox:"0 0 96 96",role:"img","aria-label":"Profile avatar",children:[e.jsx("circle",{cx:"48",cy:"48",r:"45",fill:"\
rgba(255,255,255,0.06)"}),e.jsx(xs,{aura:s.aura}),e.jsx(ys,{base:s.base}),e.jsx(bs,{eyes:s.eyes}),e.jsx(ks,{hat:s.hat}),
e.jsx(vs,{frame:s.frame})]})}),js=2,ws=25,Ss=15;function yt(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+
1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ns(t,s,n){var h,j,S;const i=t.days||{};let o=0,l=0,
c=0,m=0;const u=Object.keys(i).sort();for(const A of u){const E=i[A];E&&(o+=E.focusSec||0,l+=E.sessions||0,(E.focusSec||
0)>c&&(c=E.focusSec||0),(E.sessions||0)>0&&m++)}let d=0;const b=new Date;for((((h=i[yt(b)])==null?void 0:h.sessions)||0)>
0||b.setDate(b.getDate()-1);(((j=i[yt(b)])==null?void 0:j.sessions)||0)>0;)d++,b.setDate(b.getDate()-1);let w=0,k=0,N=null;
for(const A of u){if(!((((S=i[A])==null?void 0:S.sessions)||0)>0))continue;const E=new Date(A+"T12:00:00");N?k=Math.round(
(E.getTime()-N.getTime())/864e5)===1?k+1:1:k=1,k>w&&(w=k),N=E}return{totalFocusMin:Math.round(o/60),totalSessions:l,totalTasksCompleted:n,
currentStreak:d,bestStreak:w,bestDayMin:Math.round(c/60),activeDays:m}}function Ms(t){return t.totalFocusMin*js+t.totalSessions*
ws+t.totalTasksCompleted*Ss}function Oe(t){return 100+50*(t-1)}function Cs(t){let s=1,n=Math.max(0,Math.floor(t));for(;s<
99&&n>=Oe(s);)n-=Oe(s),s++;const i=Oe(s);return{level:s,xp:t,intoLevel:n,needed:i,progress:i>0?n/i:0}}const xt=[{level:1,
name:"Newcomer"},{level:3,name:"Apprentice"},{level:5,name:"Scholar"},{level:7,name:"Night Owl"},{level:10,name:"Deep Di\
ver"},{level:14,name:"Sage"},{level:18,name:"Luminary"},{level:24,name:"Master of Focus"},{level:30,name:"Legend of the \
Library"}];function Es(t){let s=xt[0].name;for(const n of xt)t>=n.level&&(s=n.name);return s}const He=[{id:"none-hat",slot:"\
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
{id:"frame-diamond",slot:"frame",name:"Diamond frame",level:22,hint:"Unlocked at level 22"}];function Rs(t,s){return s>=
t.level}function Ls(t){return He.filter(s=>s.level>t).sort((s,n)=>s.level-n.level).slice(0,3)}const As=[{id:"moon",name:"\
Moon"},{id:"cat",name:"Cat"},{id:"owl",name:"Owl"},{id:"fox",name:"Fox"},{id:"robot",name:"Robot"},{id:"star",name:"Star"},
{id:"sprout",name:"Sprout"},{id:"blob",name:"Blob"}],bt=[{id:"first-session",name:"First steps",desc:"Complete your firs\
t focus session",unlocked:t=>t.totalSessions>=1},{id:"ten-sessions",name:"Getting serious",desc:"Complete 10 focus sessi\
ons",unlocked:t=>t.totalSessions>=10},{id:"fifty-sessions",name:"Half century",desc:"Complete 50 focus sessions",unlocked:t=>t.
totalSessions>=50},{id:"tasks-5",name:"Task tackler",desc:"Finish 5 tasks",unlocked:t=>t.totalTasksCompleted>=5},{id:"ta\
sks-25",name:"Task master",desc:"Finish 25 tasks",unlocked:t=>t.totalTasksCompleted>=25},{id:"streak-3",name:"Hat trick",
desc:"Study 3 days in a row",unlocked:t=>t.bestStreak>=3},{id:"streak-7",name:"Full week",desc:"Study 7 days in a row",unlocked:t=>t.
bestStreak>=7},{id:"streak-30",name:"Unstoppable",desc:"Study 30 days in a row",unlocked:t=>t.bestStreak>=30},{id:"hour-\
day",name:"Solid hour",desc:"Focus 60 minutes in one day",unlocked:t=>t.bestDayMin>=60},{id:"deep-day",name:"Deep work d\
ay",desc:"Focus 3 hours in one day",unlocked:t=>t.bestDayMin>=180},{id:"ten-hours",name:"Ten hours deep",desc:"Reach 10 \
total focus hours",unlocked:t=>t.totalFocusMin>=600},{id:"hundred-hours",name:"Century club",desc:"Reach 100 total focus\
 hours",unlocked:t=>t.totalFocusMin>=6e3}];function kt(t){if(t<60)return`${t} min`;const s=Math.floor(t/60),n=t%60;return n?
`${s}h ${n}m`:`${s}h`}const Is="sft:ft-stats.v1",Lt="sft:ft-tasks.v1",Ps="sft:ft-session.v1",At="sft:ft-profile.v1",Ze="\
sft:ft-progress-ledger.v1";function Xe(){const t=le(Ze);return t&&t.v===1&&t.tasks&&typeof t.tasks=="object"?{v:1,tasks:t.
tasks,migratedAt:t.migratedAt??null}:{v:1,tasks:{},migratedAt:null}}function It(t){const s=Xe();let n=!1;s.migratedAt===
null&&(s.migratedAt=Date.now(),n=!0);for(const i of t.tasks||[])i.completed&&typeof i.id=="string"&&i.id&&!(i.id in s.tasks)&&
(s.tasks[i.id]=Date.now(),n=!0);if(n)try{window.localStorage.setItem(Ze,JSON.stringify(s))}catch{}return s}function vt(){
const t=le(Lt)||{tasks:[]};It(t)}function $s(t){if(!t)return;const s=Xe();let n=!1;if(s.migratedAt===null&&(s.migratedAt=
Date.now(),n=!0),t in s.tasks||(s.tasks[t]=Date.now(),n=!0),n)try{window.localStorage.setItem(Ze,JSON.stringify(s))}catch{}}
const Ts={name:"",base:"moon",hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame",updatedAt:0};function le(t){
try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):null}catch{return null}}function Ds(){const t=le(At);return{
...Ts,...t||{}}}function jt(t){try{window.localStorage.setItem(At,JSON.stringify(t))}catch{}}function Fs(){const t=le("s\
ft:ft-progress-meta.v1");return{seenAchievements:[],celebratedLevel:1,...t||{}}}function wt(t){try{window.localStorage.setItem(
"sft:ft-progress-meta.v1",JSON.stringify(t))}catch{}}function Pt(){const t=le(Ps);return!!(t&&t.running&&t.phase==="focu\
s")}function Os(t){const[s,n]=a.useState(0),[i,o]=a.useState(()=>Ds()),[l,c]=a.useState(()=>Fs()),[m,u]=a.useState("");a.
useEffect(()=>{const M=()=>n(L=>L+1),C=window.setInterval(M,2e3);return window.addEventListener("focus",M),window.addEventListener(
"sft:progress",M),()=>{window.clearInterval(C),window.removeEventListener("focus",M),window.removeEventListener("sft:pro\
gress",M)}},[t]);const d=a.useMemo(()=>le(Is)||{days:{}},[s]),b=a.useMemo(()=>le(Lt)||{tasks:[],activeId:null},[s]),[w,k]=a.
useState(()=>Xe());a.useEffect(()=>{k(It(b))},[b]);const N=a.useMemo(()=>Ns(d,b,Object.keys(w.tasks).length),[d,b,w]),h=a.
useMemo(()=>Cs(Ms(N)),[N]),j=a.useCallback(M=>{o(C=>{const L={...C,...M,updatedAt:Date.now()};try{jt(L)}catch{u("This br\
owser blocked saving. Profile changes last until the tab closes.")}return L})},[]),S=a.useCallback(M=>{o(()=>{try{jt(M)}catch{}
return M})},[]),A=a.useCallback(M=>{c(C=>{const L={...C,seenAchievements:Array.from(new Set([...C.seenAchievements,...M]))};
return wt(L),L})},[]),E=a.useCallback(M=>{c(C=>{const L={...C,celebratedLevel:Math.max(C.celebratedLevel,M)};return wt(L),
L})},[]);return{ready:!0,snapshot:N,levelInfo:h,profile:i,setProfile:j,replaceProfile:S,meta:l,markAchievementsSeen:A,celebrateLevel:E,
storageMessage:m}}const Ce={apiKey:"",authDomain:"",projectId:"",databaseURL:"",appId:""},q=!!(Ce.apiKey&&Ce.databaseURL&&
Ce.authDomain),Ue="10.14.1",_e={app:`https://www.gstatic.com/firebasejs/${Ue}/firebase-app.js`,auth:`https://www.gstatic\
.com/firebasejs/${Ue}/firebase-auth.js`,database:`https://www.gstatic.com/firebasejs/${Ue}/firebase-database.js`};let he=null;
function We(t){return new Function("u","return import(u)")(t)}function re(){if(!he){const t=Promise.all([We(_e.app),We(_e.
auth),We(_e.database)]).then(([s,n,i])=>{const o=s.initializeApp(Ce);return{auth:n.getAuth(o),db:i.getDatabase(o),authApi:n,
dbApi:i}});t.catch(()=>{he===t&&(he=null)}),he=t}return he}function Us(){const[t,s]=a.useState(q?"loading":"off"),[n,i]=a.
useState(null),[o,l]=a.useState("");a.useEffect(()=>{if(!q)return;let u,d=!0;return re().then(({auth:b,authApi:w})=>{d&&
(u=w.onAuthStateChanged(b,k=>{d&&(k?(i({uid:k.uid,name:k.displayName||(k.isAnonymous?"Guest":"Scholar"),email:k.email||null,
anonymous:!!k.isAnonymous}),s("signed-in")):(i(null),s("signed-out")))}))}).catch(()=>{d&&(s("error"),l("Account feature\
s could not be loaded. Everything else still works on this device."))}),()=>{d=!1,u&&u()}},[]);const c=a.useCallback(()=>{
q&&(l(""),re().then(({auth:u,authApi:d})=>d.signInWithPopup(u,new d.GoogleAuthProvider)).catch(u=>{u&&(u.code==="auth/po\
pup-closed-by-user"||u.code==="auth/cancelled-popup-request")||l("Sign-in did not complete. Your local progress is unaff\
ected.")}))},[]),m=a.useCallback(()=>{q&&re().then(({auth:u,authApi:d})=>d.signOut(u)).catch(()=>{})},[]);return{status:t,
user:n,error:o,signInWithGoogle:c,signOut:m}}async function _s(t){if(!q)return null;const{db:s,dbApi:n}=await re(),i=await n.
get(n.child(n.ref(s),`profiles/${t}`)),o=i&&i.val?i.val():null;return!o||typeof o!="object"?null:{name:typeof o.name=="s\
tring"?o.name.slice(0,40):"",base:typeof o.base=="string"?o.base:"moon",hat:typeof o.hat=="string"?o.hat:"none-hat",eyes:typeof o.
eyes=="string"?o.eyes:"none-eyes",aura:typeof o.aura=="string"?o.aura:"none-aura",frame:typeof o.frame=="string"?o.frame:
"none-frame",updatedAt:typeof o.updatedAt=="number"?o.updatedAt:0}}async function St(t,s){if(!q)return;const{db:n,dbApi:i}=await re();
await i.set(i.ref(n,`profiles/${t}`),{name:s.name.slice(0,40),base:s.base,hat:s.hat,eyes:s.eyes,aura:s.aura,frame:s.frame,
updatedAt:s.updatedAt})}function $t(t,s){const[n,i]=a.useState(null),[o,l]=a.useState(q?"connecting":"off"),c=a.useRef(t);
return c.current=t,a.useEffect(()=>{if(!q||!s){l("off"),i(null);return}let m=!0,u;return l("connecting"),(async()=>{try{
const{auth:d,db:b,authApi:w,dbApi:k}=await re();let N=d.currentUser;if(N||(N=(await w.signInAnonymously(d)).user),!m)return;
const h=k.ref(b,`presence/${N.uid}`),j=()=>k.set(h,{studying:c.current,ts:Date.now()}).catch(()=>{});await j(),k.onDisconnect(
h).remove().catch(()=>{});const S=window.setInterval(j,3e4),A=k.onValue(k.ref(b,"presence"),E=>{if(!m)return;const M=Date.
now();let C=0;const L=E&&E.val?E.val():{};for(const $ of Object.keys(L||{})){const P=L[$];P&&P.studying===!0&&typeof P.ts==
"number"&&M-P.ts<9e4&&C++}i(C),l("live")},()=>{m&&l("error")});u=()=>{window.clearInterval(S),A&&A(),k.remove(h).catch(()=>{})}}catch{
m&&l("error")}})(),()=>{m=!1,u&&u()}},[s]),a.useEffect(()=>{!q||!s||o!=="live"||re().then(({auth:m,db:u,dbApi:d})=>{const b=m.
currentUser;b&&d.set(d.ref(u,`presence/${b.uid}`),{studying:t,ts:Date.now()}).catch(()=>{})}).catch(()=>{})},[t,s,o]),{count:n,
status:o}}function Ws(){const[t,s]=a.useState(!1);return a.useEffect(()=>{vt();const n=()=>vt(),i=window.setInterval(n,15e3);
if(!q)return()=>window.clearInterval(i);const o=()=>s(Pt());o();const l=window.setInterval(o,1e4);return()=>{window.clearInterval(
l),window.clearInterval(i)}},[]),$t(t,q),null}const zs=[{slot:"hat",label:"Hat"},{slot:"eyes",label:"Eyewear"},{slot:"au\
ra",label:"Aura"},{slot:"frame",label:"Frame"}],qs=Y.memo(function({onClose:s}){const n=Os(!0),{snapshot:i,levelInfo:o,profile:l,
setProfile:c,replaceProfile:m,meta:u}=n,d=Us(),[b,w]=a.useState(!1);a.useEffect(()=>{if(!q)return;const g=()=>w(Pt());g();
const I=window.setInterval(g,5e3);return()=>window.clearInterval(I)},[]);const k=$t(b,q),[N,h]=a.useState(!1),[j,S]=a.useState(
""),[A,E]=a.useState(""),M=a.useRef("");a.useEffect(()=>{if(!q||d.status!=="signed-in"||!d.user||d.user.anonymous)return;
const g=d.user.uid;M.current!==g&&(M.current=g,_s(g).then(I=>{I&&I.updatedAt>l.updatedAt?(m(I),E("Profile synced from yo\
ur account.")):St(g,l).then(()=>E("Profile saved to your account.")).catch(()=>E("Could not sync right now; your local p\
rofile is safe."))}).catch(()=>E("Could not sync right now; your local profile is safe.")))},[d.status,d.user]),a.useEffect(
()=>{if(!q||d.status!=="signed-in"||!d.user||d.user.anonymous||!l.updatedAt)return;const g=window.setTimeout(()=>{St(d.user.
uid,l).catch(()=>E("Could not sync right now; your local profile is safe."))},800);return()=>window.clearTimeout(g)},[l.
updatedAt,d.status,d.user]);const C=o.level,L=Es(C),P=a.useMemo(()=>bt.filter(g=>g.unlocked(i)),[i]).filter(g=>!u.seenAchievements.
includes(g.id)),B=C>u.celebratedLevel,U=Ls(C),R=()=>{const g=j.trim().slice(0,24);c({name:g}),h(!1)},z=l.name||"Guest sc\
holar";return e.jsxs("aside",{className:"ft-sheet pf-sheet","aria-label":"Profile and progress",children:[e.jsxs("div",{
className:"ft-sheet-head",children:[e.jsx("h2",{children:"Profile"}),e.jsx("button",{type:"button",className:"ft-sheet-c\
lose","aria-label":"Close profile",onClick:s,children:"×"})]}),e.jsxs("div",{className:"pf-hero",children:[e.jsx(gt,{spec:l,
size:84}),e.jsxs("div",{className:"pf-hero-info",children:[N?e.jsxs("span",{className:"pf-nameedit",children:[e.jsx("inp\
ut",{value:j,maxLength:24,autoFocus:!0,placeholder:"Display name",onChange:g=>S(g.target.value),onKeyDown:g=>{g.key==="E\
nter"&&R(),g.key==="Escape"&&h(!1)}}),e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:R,children:"\
Save"})]}):e.jsxs("button",{type:"button",className:"pf-name",title:"Edit display name",onClick:()=>{S(l.name),h(!0)},children:[
z," ",e.jsx("span",{className:"pf-name-pen","aria-hidden":"true",children:"✎"})]}),e.jsx("span",{className:"pf-title",
children:L}),k.status==="live"&&k.count!==null?e.jsxs("span",{className:"pf-live",title:"People with a focus session run\
ning right now",children:[e.jsx("span",{className:"pf-live-dot","aria-hidden":"true"})," ",k.count," studying now"]}):null]}),
e.jsxs("span",{className:"pf-level-badge",title:`Level ${C}`,children:["Lv ",C]})]}),e.jsxs("div",{className:"pf-xpwrap",
role:"img","aria-label":`Level ${C}, ${o.intoLevel} of ${o.needed} experience toward level ${C+1}`,children:[e.jsx("div",
{className:"pf-xpbar",children:e.jsx("span",{style:{width:`${Math.round(o.progress*100)}%`}})}),e.jsxs("span",{className:"\
pf-xpnum",children:[o.intoLevel," / ",o.needed," XP"]})]}),B?e.jsxs("div",{className:"pf-banner",role:"status",children:[
"Level ",C," reached - ",L,"!",U.length===0?"":" New gear below.",e.jsx("button",{type:"button",className:"ft-primary is\
-compact",onClick:()=>n.celebrateLevel(C),children:"Nice"})]}):null,P.length>0?e.jsxs("div",{className:"pf-banner",role:"\
status",children:["Unlocked: ",P.map(g=>g.name).join(", "),e.jsx("button",{type:"button",className:"ft-primary is-compac\
t",onClick:()=>n.markAchievementsSeen(P.map(g=>g.id)),children:"Nice"})]}):null,e.jsx("h3",{children:"Your stats"}),e.jsxs(
"div",{className:"pf-stats",children:[e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:kt(i.totalFocusMin)}),
e.jsx("span",{children:"total focus"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalSessions}),
e.jsx("span",{children:"sessions"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:i.totalTasksCompleted}),
e.jsx("span",{children:"tasks done · all time"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsxs("strong",{children:[
i.currentStreak," ",i.currentStreak===1?"day":"days"]}),e.jsx("span",{children:"current streak"})]}),e.jsxs("div",{className:"\
pf-stat",children:[e.jsxs("strong",{children:[i.bestStreak," ",i.bestStreak===1?"day":"days"]}),e.jsx("span",{children:"\
best streak"})]}),e.jsxs("div",{className:"pf-stat",children:[e.jsx("strong",{children:kt(i.bestDayMin)}),e.jsx("span",{
children:"best day"})]})]}),e.jsx("h3",{children:"Customize"}),e.jsx("p",{className:"ft-field-hint",children:"Pick a loo\
k. Locked gear opens as you level up from focus time."}),e.jsx("div",{className:"pf-subhead",children:"Avatar"}),e.jsx("\
div",{className:"pf-bases",children:As.map(g=>e.jsx("button",{type:"button",title:g.name,"aria-label":`Avatar ${g.name}`,
className:`pf-basebtn ${l.base===g.id?"is-active":""}`,onClick:()=>c({base:g.id}),children:e.jsx(gt,{spec:{...l,base:g.id,
hat:"none-hat",eyes:"none-eyes",aura:"none-aura",frame:"none-frame"},size:44})},g.id))}),zs.map(({slot:g,label:I})=>e.jsxs(
"div",{children:[e.jsx("div",{className:"pf-subhead",children:I}),e.jsx("div",{className:"pf-gear",children:He.filter(y=>y.
slot===g).map(y=>{const x=Rs(y,C),D=l[g]===y.id||y.id.startsWith("none")&&!He.some(_=>_.slot===g&&l[g]===_.id);return e.
jsx("button",{type:"button",className:`pf-gearbtn ${D?"is-active":""} ${x?"":"is-locked"}`,title:x?y.name:`${y.name} - ${y.
hint}`,onClick:()=>{x&&c({[g]:y.id})},children:x?y.name:`🔒 ${y.name} · Lv ${y.level}`},y.id)})})]},g)),U.length>0?e.
jsxs("p",{className:"ft-field-hint",children:["Next unlock: ",U[0].name," at level ",U[0].level," (",o.needed-o.intoLevel,
" XP to next level)."]}):null,e.jsx("h3",{children:"Achievements"}),e.jsx("ul",{className:"pf-achievements",children:bt.
map(g=>{const I=g.unlocked(i);return e.jsxs("li",{className:I?"is-got":"",children:[e.jsx("span",{className:"pf-ach-chec\
k","aria-hidden":"true",children:I?"★":"☆"}),e.jsxs("span",{className:"pf-ach-body",children:[e.jsx("strong",{children:g.
name}),e.jsx("span",{children:g.desc})]})]},g.id)})}),e.jsx("h3",{children:"Account"}),q?e.jsxs(e.Fragment,{children:[d.
status==="signed-out"?e.jsx("p",{className:"ft-field-hint",children:"Optional: sign in to keep your profile and level ac\
ross devices. You can keep studying without an account."}):null,d.status==="signed-out"?e.jsx("button",{type:"button",className:"\
ft-primary is-compact",onClick:d.signInWithGoogle,children:"Sign in with Google"}):null,d.status==="loading"?e.jsx("p",{
className:"ft-field-hint",children:"Loading account features…"}):null,d.status==="signed-in"&&d.user?e.jsx("div",{className:"\
pf-account",children:d.user.anonymous?e.jsxs("p",{className:"ft-field-hint",children:["Browsing as a guest. ",e.jsx("but\
ton",{type:"button",className:"pf-linkbtn",onClick:d.signInWithGoogle,children:"Sign in with Google"})," to save this pr\
ofile to an account."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"pf-account-name",children:[d.user.name,d.user.
email?` · ${d.user.email}`:""]}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:d.signOut,children:"\
Sign out"})]})}):null,d.error?e.jsx("p",{className:"ft-field-hint",children:d.error}):null,A?e.jsx("p",{className:"ft-fi\
eld-hint",children:A}):null,e.jsx("p",{className:"ft-field-hint",children:"The studying counter is an anonymous total. N\
obody can see your name, avatar or stats."})]}):e.jsx("p",{className:"ft-field-hint",children:"Sign-in and the live stud\
ying counter need a small server, which has not been connected yet. Your level, avatar and stats are saved in this brows\
er and keep working offline."}),n.storageMessage?e.jsx("p",{className:"ft-field-hint",children:n.storageMessage}):null]})});
function ge(t,s){const[n,i]=a.useState(s),[o,l]=a.useState(!1),[c,m]=a.useState("");a.useEffect(()=>{try{const d=window.
localStorage.getItem("sft:"+t);if(d!=null){const b=JSON.parse(d),w=s!==null&&typeof s=="object"&&!Array.isArray(s)&&b!==
null&&typeof b=="object"&&!Array.isArray(b)?{...s,...b}:b;i(w)}}catch{m("Saved data on this browser could not be read.")}
l(!0)},[t]);const u=a.useCallback(d=>{i(b=>{const w=typeof d=="function"?d(b):d;try{window.localStorage.setItem("sft:"+t,
JSON.stringify(w))}catch{m("This browser blocked saving. Changes last until the tab closes.")}return w})},[t]);return[n,
u,{ready:o,message:c}]}const Bs={v2cat:["images/images/v2cat-0.txt","images/images/v2cat-1.txt"],longer:["images/images/\
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
talog-6.txt"]},ze={};function Je(t){return ze[t]||(ze[t]=Promise.all(Bs[t].map(async s=>{const n=await fetch(s);if(!n.ok)
throw Error("Image unavailable");return n.text()})).then(s=>"data:image/jpeg;base64,"+s.join("").replace(/\s/g,"")))}function Tt(t){
const[s,n]=a.useState("");return a.useEffect(()=>{let i=!0;return Je(t).then(o=>{i&&n(o)}).catch(()=>{}),()=>{i=!1}},[t]),
s}const Vs={rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk\
.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-oce\
an.jpg"},Gs={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-des\
k.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-oc\
ean.jpg"},Nt=Object.fromEntries(Object.keys(Vs).map(t=>[t,()=>Je(t).then(s=>({default:s}))])),Mt=Object.fromEntries(Object.
keys(Gs).map(t=>[t,()=>Je("thumb-"+t).then(s=>({default:s}))])),qe={},Be={},Ve={focusMin:25,shortMin:5,longMin:15,longEvery:4,
autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,
notifications:!1,keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,
accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,spotify:null,spotifyOpen:!1,
musicOpen:!0,musicMode:"radio",radio:{index:0,playing:!1,volume:.7}},Ys=[{id:"rain",name:"Rainy window"},{id:"library",name:"\
Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountains",name:"Mountains"},{id:"forest",
name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],Hs=[{id:"#101418",name:"Ink"},{id:"#16213a",
name:"Midnight"},{id:"#122b21",name:"Forest"},{id:"#2e1a33",name:"Plum"},{id:"#33191f",name:"Wine"},{id:"#232a30",name:"\
Slate"},{id:"#3a2e1e",name:"Cocoa"},{id:"#d8cfc0",name:"Paper"}],J=[{id:"chillhop-jazz",title:"Chillhop Jazz Coffee Shop",
artist:"alex-morgan",url:"https://cdn.pixabay.com/download/audio/2026/06/16/audio_912babebe1.mp3?filename=alex-morgan-ch\
illhop-jazz-coffee-shop-552792.mp3",cover:"https://cdn.pixabay.com/audio/2026/06/16/18-47-53-884_200x200.jpg",seconds:173},
{id:"subclair-lofi",title:"Lofi",artist:"Sub_Clair",url:"https://cdn.pixabay.com/download/audio/2026/08/15/audio_7249b5f\
798.mp3?filename=sub_clair-lofi-586095.mp3",cover:"https://cdn.pixabay.com/audio/2026/08/15/08-51-29-850_200x200.jpg",seconds:214},
{id:"kulakovka-relax",title:"LoFi Relax",artist:"Kulakovka",url:"https://cdn.pixabay.com/download/audio/2026/07/20/audio\
_d3e4d47bc2.mp3?filename=kulakovka-lofi-relax-570489.mp3",cover:"https://cdn.pixabay.com/gradients/82bfb5-eac560_200x200\
.png",seconds:140},{id:"apalon-lofi",title:"Lofi",artist:"APALONBeats",url:"https://cdn.pixabay.com/download/audio/2026/\
07/29/audio_453d7bbab8.mp3?filename=apalonbeats-lofi-576261.mp3",cover:"https://cdn.pixabay.com/audio/2026/07/29/14-51-1\
3-130_200x200.jpg",seconds:128},{id:"monda-lofi",title:"LoFi Music",artist:"MondaMusic",url:"https://cdn.pixabay.com/dow\
nload/audio/2026/08/20/audio_cd7ca920a0.mp3?filename=mondamusic-lofi-lofi-music-589107.mp3",cover:"https://cdn.pixabay.c\
om/audio/2026/08/20/09-14-53-672_200x200.jpg",seconds:98},{id:"zephira-chill",title:"Chill Lofi",artist:"ZephiraMusic",url:"\
https://cdn.pixabay.com/download/audio/2026/08/14/audio_a5f2abd4d3.mp3?filename=zephiramusic-chill-lofi-585360.mp3",cover:"\
https://cdn.pixabay.com/gradients/67a871-909cf2_200x200.png",seconds:137},{id:"coffee-shop",title:"Lofi Coffee Shop",artist:"\
alex-morgan",url:"https://cdn.pixabay.com/download/audio/2026/07/15/audio_6353298add.mp3?filename=alex-morgan-lofi-coffe\
e-shop-568150.mp3",cover:"https://cdn.pixabay.com/audio/2026/07/15/21-20-45-679_200x200.jpg",seconds:114},{id:"midnight-\
club",title:"Lofi Midnight Club",artist:"alex-morgan",url:"https://cdn.pixabay.com/download/audio/2026/07/15/audio_53935\
e58bb.mp3?filename=alex-morgan-lofi-midnight-club-568164.mp3",cover:"https://cdn.pixabay.com/audio/2026/07/15/21-18-58-7\
54_200x200.jpg",seconds:137}];function Ct(t){const s=t.replace("#",""),n=parseInt(s.slice(0,2),16)/255,i=parseInt(s.slice(
2,4),16)/255,o=parseInt(s.slice(4,6),16)/255,l=Math.max(n,i,o),c=Math.min(n,i,o),m=(l+c)/2;if(l===c)return{h:0,s:0,l:m};
const u=l-c,d=m>.5?u/(2-l-c):u/(l+c);let b=0;return l===n?b=(i-o)/u+(i<o?6:0):l===i?b=(o-n)/u+2:b=(n-i)/u+4,{h:b*60,s:d,
l:m}}function Ge(t,s,n){const i=o=>{const l=(o+t/30)%12,c=s*Math.min(n,1-n),m=n-c*Math.max(-1,Math.min(l-3,9-l,1));return Math.
round(m*255).toString(16).padStart(2,"0")};return`#${i(0)}${i(8)}${i(4)}`}function Ks(t){const s=t.replace("#","");if(!/^[0-9a-f]{6}$/i.
test(s))return 0;const n=i=>{const o=parseInt(s.slice(i,i+2),16)/255;return o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)};
return .2126*n(0)+.7152*n(2)+.0722*n(4)}const Qe=[{id:"lofi-246243",name:"Windowsill cat",url:"https://cdn.pixabay.com/v\
ideo/2024/12/11/246243_medium.mp4",tile:0,preview:"v2cat",duration:76.71},{id:"lofi-246535",name:"Sunset cat",url:"https\
://cdn.pixabay.com/video/2024/12/13/246535_medium.mp4",tile:1,preview:"v2cat",duration:58.56},{id:"lofi-246241",name:"Ni\
ght room cat",url:"https://cdn.pixabay.com/video/2024/12/11/246241_medium.mp4",tile:2,preview:"v2cat",duration:75.34},{id:"\
lofi-246242",name:"Fireplace cat",url:"https://cdn.pixabay.com/video/2024/12/11/246242_medium.mp4",tile:3,preview:"v2cat",
duration:58.69},{id:"lofi-270983",name:"Mountain cafe",url:"https://cdn.pixabay.com/video/2025/04/09/270983_medium.mp4",
tile:4,preview:"v2cat",duration:5.33},{id:"lofi-73663",name:"Attic nap",url:"https://cdn.pixabay.com/video/2021/05/09/73\
663-549527825_medium.mp4",tile:5,preview:"v2cat",duration:60.01},{id:"lofi-215407",name:"Rainy study desk",url:"https://\
cdn.pixabay.com/video/2024/06/05/215407_medium.mp4",tile:6,preview:"v2cat",duration:60.09},{id:"photo-107976",name:"Trop\
ical waterfall",url:"https://cdn.pixabay.com/video/2022/02/17/107976-678971242_medium.mp4",tile:7,preview:"v2cat",duration:60.01,
blend:!0},{id:"photo-22589",name:"Waterfall streams",url:"https://cdn.pixabay.com/video/2019/04/04/22589-328624822_mediu\
m.mp4",tile:8,preview:"v2cat",duration:36.31,blend:!0},{id:"lofi-312345",name:"Rainy reading cat",url:"https://cdn.pixab\
ay.com/video/2025/10/27/312345_medium.mp4",tile:9,preview:"v2cat",duration:64},{id:"lofi-345856",name:"City window cat",
url:"https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4",tile:10,preview:"v2cat",duration:64},{id:"lofi-310025",
name:"Cozy study rain",url:"https://cdn.pixabay.com/video/2025/10/15/310025_medium.mp4",tile:11,preview:"v2cat",duration:64},
{id:"lofi-270507",name:"Sunset fence cat",url:"https://cdn.pixabay.com/video/2025/04/07/270507_medium.mp4",tile:12,preview:"\
v2cat",duration:59.97},{id:"photo-292827",name:"Alpine lake",url:"https://cdn.pixabay.com/video/2025/07/22/292827_medium\
.mp4",tile:13,preview:"v2cat",duration:20.03,blend:!0},{id:"photo-20451",name:"Golden surf",url:"https://cdn.pixabay.com\
/video/2019/01/04/20451-309694501_medium.mp4",tile:14,preview:"v2cat",duration:43.32,blend:!0},{id:"photo-198488",name:"\
Shoreline waves",url:"https://cdn.pixabay.com/video/2024/01/29/198488-907576442_medium.mp4",tile:15,preview:"v2cat",duration:60,
blend:!0},{id:"lofi-214500",name:"Warm library desk",url:"https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4",tile:16,
preview:"v2cat",duration:63.23},{id:"lofi-301247",name:"Retro train cat",url:"https://cdn.pixabay.com/video/2025/09/02/3\
01247_medium.mp4",tile:17,preview:"v2cat",duration:29.87},{id:"lofi-345838",name:"Sleeping dog desk",url:"https://cdn.pi\
xabay.com/video/2026/04/11/345838_medium.mp4",tile:18,preview:"v2cat",duration:61.4},{id:"lofi-345955",name:"Night readi\
ng",url:"https://cdn.pixabay.com/video/2026/04/12/345955_medium.mp4",tile:19,preview:"v2cat",duration:64}],Zs=new Map(Qe.
map(t=>[t.id,t]));function Xs(t,s){const n=c=>t.replace(/_(tiny|small|medium|large)\.mp4/,c),i=[n("_medium.mp4"),n("_lar\
ge.mp4"),n("_small.mp4"),n("_tiny.mp4")],o=[...new Set(i)],l=n(s?"_small.mp4":"_medium.mp4");return[l,...o.filter(c=>c!==
l)]}function Et(t){var n;return((n=window.__SFT_POSTERS)==null?void 0:n[t.id])||t.poster}const Js={"balcony-dusk-l.jpg":"\
53-balcony-dusk-l.jpg","balcony-dusk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-dusk-p.jpg","balcon\
y-dusk-p.mp4":"31-balcony-dusk-p.mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"30-cozy-window-l.m\
p4","cozy-window-p.jpg":"50-cozy-window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-street-l.jpg":"49-japan\
-street-l.jpg","japan-street-l.mp4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jpg","japan-street-p\
.mp4":"35-japan-street-p.mp4","misty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty-river-l.mp4","mis\
ty-river-p.jpg":"39-misty-river-p.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"47-night-train-l.\
jpg","night-train-l.mp4":"28-night-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train-p.mp4":"27-night\
-train-p.mp4","rainy-window-l.jpg":"41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4","rainy-window-p.\
jpg":"37-rainy-window-p.jpg","rainy-window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakura-night-l.jpg","\
sakura-night-l.mp4":"26-sakura-night-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p.mp4":"25-sakura\
-night-p.mp4","shrine-l.jpg":"10-shrine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine-p.jpg","shrine-\
p.mp4":"18-shrine-p.mp4","water-garden-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-garden-l.mp4","wate\
r-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},Dt=(t,s,n)=>`scenes/${Js[`${t}-${s}\
.${n}`]}`,Qs=(t,s)=>Dt(t.id,s,"jpg"),en=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"#9cc7ff"},{
id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"#c9b6\
ff"},{id:"white",name:"White",value:"#ffffff"}],Ft=[{id:"sans",name:"Sans",css:"system-ui, -apple-system, 'Segoe UI', Ro\
boto, sans-serif"},{id:"serif",name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"Mono",css:"ui-mono\
space, 'SF Mono', Menlo, Consolas, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, sans-serif"}],tn=[
{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",bg:{kind:"color",id:"#101418"}},{id:"dusk",name:"Dusk",accent:"#ffcf\
99",font:"serif",bg:{kind:"color",id:"#3b2f4a"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",bg:{kind:"color",id:"\
#0f2e25"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"color",id:"#4a2f3d"}}],sn=[{id:"bell",name:"Be\
ll"},{id:"chime",name:"Chime"},{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Woodblock"},{id:"cust\
om",name:"My sound"}],Ot=[{id:"none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"storm",name:"Thunde\
rstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"forest",name:"Fores\
t birds",file:"sounds/forest.m4a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",name:"Restaurant \
chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"wind",name:"Wi\
nd",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown noise"},{id:"wh\
ite",name:"White noise"}],Ut=[{id:"lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"},
{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",name:"Peaceful \
Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"}],se={focus:"Focus",short:"Short break",long:"Long\
 break"};let ye=null;function Ee(){return ye||(ye=new(window.AudioContext||window.webkitAudioContext)),ye.state==="suspe\
nded"&&ye.resume(),ye}function ne(t,s,n){const i=t.createOscillator(),o=t.createGain();i.type=n.type||"sine",i.frequency.
value=n.freq,o.gain.setValueAtTime(1e-4,n.start),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),n.start+.012),
o.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),i.connect(o),o.connect(s),i.start(n.start),i.stop(n.start+n.dur+
.05)}function xe(t,s,n){const i=Ee(),o=i.createGain();o.gain.value=s,o.connect(i.destination);const l=n?2:1,c=t==="gong"?
3.6:t==="bell"?2.4:1.6;for(let m=0;m<l;m++){const u=i.currentTime+.02+m*(c+.35);if(t==="bell")[[660,.5],[1320,.28],[1760,
.14],[2240,.07]].forEach(([d,b])=>ne(i,o,{freq:d,start:u,dur:2.2,gain:b}));else if(t==="chime")ne(i,o,{freq:783.99,start:u,
dur:1.3,gain:.4}),ne(i,o,{freq:1046.5,start:u+.32,dur:1.4,gain:.34});else if(t==="gong")[[196,.42],[294,.24],[392,.17],[
523,.09]].forEach(([d,b])=>ne(i,o,{freq:d,start:u,dur:3.4,gain:b}));else if(t==="beep")for(let d=0;d<3;d++)ne(i,o,{freq:880,
type:"square",start:u+d*.3,dur:.16,gain:.22});else t==="wood"&&(ne(i,o,{freq:1400,type:"triangle",start:u,dur:.07,gain:.5}),
ne(i,o,{freq:1400,type:"triangle",start:u+.22,dur:.07,gain:.4}))}}function nn(t){const s=Ee(),n=s.createGain();n.gain.value=
.35*t,n.connect(s.destination),ne(s,n,{freq:1800,start:s.currentTime,dur:.035,gain:.5})}function an(t,s){const n=2*t.sampleRate,
i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);let l=0;for(let c=0;c<n;c++){const m=Math.random()*2-1;s==="bro\
wn"?(l=(l+.02*m)/1.02,o[c]=l*3.2):o[c]=m}return i}const on={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/rain-1.txt","\
sounds/rain-2.txt","sounds/rain-3.txt","sounds/rain-4.txt","sounds/rain-5.txt"],"sounds/thunderstorm.m4a":["sounds/thund\
erstorm-0.txt","sounds/thunderstorm-1.txt","sounds/thunderstorm-2.txt","sounds/thunderstorm-3.txt","sounds/thunderstorm-\
4.txt","sounds/thunderstorm-5.txt"],"sounds/ocean.m4a":["sounds/ocean-0.txt","sounds/ocean-1.txt","sounds/ocean-2.txt","\
sounds/ocean-3.txt","sounds/ocean-4.txt","sounds/ocean-5.txt"],"sounds/forest.m4a":["sounds/forest-0.txt","sounds/forest\
-1.txt","sounds/forest-2.txt","sounds/forest-3.txt","sounds/forest-4.txt"],"sounds/fireplace.m4a":["sounds/fireplace-0.t\
xt","sounds/fireplace-1.txt","sounds/fireplace-2.txt","sounds/fireplace-3.txt","sounds/fireplace-4.txt","sounds/fireplac\
e-5.txt"],"sounds/coffee-shop.m4a":["sounds/coffee-shop-0.txt","sounds/coffee-shop-1.txt","sounds/coffee-shop-2.txt","so\
unds/coffee-shop-3.txt","sounds/coffee-shop-4.txt","sounds/coffee-shop-5.txt"],"sounds/crickets.m4a":["sounds/crickets-0\
.txt","sounds/crickets-1.txt","sounds/crickets-2.txt","sounds/crickets-3.txt"],"sounds/wind.m4a":["sounds/wind-0.txt","s\
ounds/wind-1.txt","sounds/wind-2.txt","sounds/wind-3.txt","sounds/wind-4.txt","sounds/wind-5.txt"],"sounds/stream.m4a":[
"sounds/stream-0.txt","sounds/stream-1.txt","sounds/stream-2.txt","sounds/stream-3.txt","sounds/stream-4.txt","sounds/st\
ream-5.txt"]},Ne={};function rn(t,s){return Ne[s]||(Ne[s]=Promise.all((on[s]||[]).map(async n=>{const i=await fetch(n);if(!i.
ok)throw new Error(`HTTP ${i.status}`);return(await i.text()).trim()})).then(n=>{if(!n.length)throw new Error("Recording\
 unavailable");const i=atob(n.join(""));return t.decodeAudioData(Uint8Array.from(i,o=>o.charCodeAt(0)).buffer)}).catch(n=>{
throw delete Ne[s],n})),Ne[s]}function ln(t,s){if(t==="none")return null;const n=Ot.find(m=>m.id===t),i=Ee(),o=i.createGain();
if(o.gain.value=s,o.connect(i.destination),n!=null&&n.file){let m=!1,u=null;return rn(i,n.file).then(d=>{m||(u=i.createBufferSource(),
u.buffer=d,u.loop=!0,u.connect(o),u.start())}).catch(()=>{}),()=>{m=!0;try{u==null||u.stop()}catch{}try{o.disconnect()}catch{}}}
const l=i.createBufferSource();l.buffer=an(i,t==="white"?"white":"brown"),l.loop=!0;let c=l;if(t==="brown"){const m=i.createBiquadFilter();
m.type="lowpass",m.frequency.value=900,c.connect(m),c=m}return c.connect(o),l.start(),()=>{try{l.stop(),o.disconnect()}catch{}}}
function cn(t){return/^https:\/\/.+/i.test(t.trim())}async function Ke(t){const s=await fetch(t);if(!s.ok)throw new Error(
`HTTP ${s.status}`);return s.blob()}async function Rt(t){try{const s=await Ke(t);if(s.type.startsWith("image/"))return s;
throw new Error("not an image")}catch{const s=`https://images.weserv.nl/?url=${encodeURIComponent(t.replace(/^https?:\/\//,
""))}`,n=await Ke(s);if(!n.type.startsWith("image/"))throw new Error("not an image");return n}}async function dn(t){var c;
const s=t.trim();if(/pin\.it\//i.test(s))throw new Error("short pin link");const n=s.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let i=s;if(n){const m=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!m.ok)throw new Error("pin lookup failed");const u=await m.json();if((u==null?void 0:u.status)!=="success"||!Array.isArray(
u==null?void 0:u.data)||u.data.length===0)throw new Error("pin unavailable");const d=(c=u.data[0])==null?void 0:c.images;
if(!d)throw new Error("pin has no image");const b=d.originals||d["736x"]||d["564x"]||d["236x"];if(!(b!=null&&b.url))throw new Error(
"pin has no image");i=b.url}const o=i.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);if(o)try{const m=`${o[1]}\
/originals${o[2]}`;return{blob:await Rt(m),finalUrl:m}}catch{}if(!/^https:\/\//i.test(i))throw new Error("not a link");return{
blob:await Rt(i),finalUrl:i}}function _t(t){const s=Ut.find(o=>o.id===t),i=(s?s.url:t).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return i?`https://open.spotify.com/embed/${i[1].toLowerCase()}/${i[2]}?theme=0`:null}const Q=({d:t,vb:s=24})=>e.jsx("svg",
{width:"18",height:"18",viewBox:`0 0 ${s} ${s}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",
strokeLinejoin:"round","aria-hidden":"true",children:t.split("|").map((n,i)=>e.jsx("path",{d:n},i))}),un="M4 9V4h5|M20 9\
V4h-5|M4 15v5h5|M20 15v5h-5",fn="M5 12h14",mn="M4 6h16|M4 12h16|M4 18h10",pn="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-\
7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",Wt="\
M6 6l12 12|M18 6L6 18",hn="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function ae(t){
const s=Math.max(0,Math.round(t/1e3)),n=Math.floor(s/60),i=s%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(
2,"0")}`}function be(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).
padStart(2,"0")}`}function Me({label:t,value:s,min:n,max:i,onChange:o,unit:l}){const c=m=>{const u=parseInt(m,10);Number.
isFinite(u)&&o(Math.min(i,Math.max(n,u)))};return e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"\
ft-field-label",children:t}),e.jsxs("span",{className:"ft-stepper",children:[e.jsx("button",{type:"button","aria-label":`\
Decrease ${t}`,onClick:()=>o(Math.max(n,s-1)),children:"-"}),e.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${t} value`,min:n,max:i,value:s,onChange:m=>c(m.target.value)}),l?e.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,e.jsx("button",{type:"button","aria-label":`Increase ${t}`,onClick:()=>o(Math.min(i,s+1)),children:"\
+"})]})]})}function K({label:t,hint:s,checked:n,onChange:i}){return e.jsxs("button",{type:"button",role:"switch","aria-c\
hecked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>i(!n),children:[e.jsxs("span",{className:"ft-toggle-text",children:[
e.jsx("span",{className:"ft-field-label",children:t}),s?e.jsx("span",{className:"ft-field-hint",children:s}):null]}),e.jsx(
"span",{className:"ft-switch",children:e.jsx("span",{className:"ft-knob"})})]})}const gn=Y.memo(function({scene:s,paused:n,
animate:i,onReady:o,onFail:l}){const c=a.useRef(null),[m,u]=a.useState(!1),[d,b]=a.useState(0),w=a.useMemo(()=>window.matchMedia(
"(max-width: 900px), (orientation: portrait)").matches,[]),k=a.useMemo(()=>s.url?Xs(s.url,w):[Dt(s.id,"p","mp4")],[s,w]),
N=k[Math.min(d,k.length-1)],h=a.useRef({paused:n,animate:i});h.current={paused:n,animate:i};const j=a.useRef({onReady:o,
onFail:l});return j.current={onReady:o,onFail:l},a.useEffect(()=>{u(!1);const S=c.current;if(!S)return;let A=!1,E=!1,M=0,
C=!1,L=!1;const $=x=>x.play().catch(()=>{}),P=()=>!h.current.paused&&h.current.animate&&!document.hidden,B=()=>{const x=document.
createElement("video");return x.className="ft-bg ft-bgvideo",x.muted=!0,x.playsInline=!0,x.setAttribute("playsinline",""),
x.setAttribute("disablepictureinpicture",""),x.setAttribute("disableremoteplayback",""),x.preload="auto",x.src=N,x.setAttribute(
"aria-hidden","true"),x.loop=!s.blend,x},U=()=>{L||E||(L=!0,b(x=>x<k.length-1?x+1:(u(!0),g&&(g.remove(),g=null),j.current.
onFail(s),x)))};let R=null;const z=()=>{E||(g&&(g.currentTime=0,g.style.opacity="1",P()&&$(g)),R&&(R.remove(),R=null),A=
!1)};let g=B();g.addEventListener("error",U),g.addEventListener("ended",z),S.appendChild(g);const I=()=>{P()?C&&g&&($(g),
R&&$(R)):(g==null||g.pause(),R==null||R.pause())},y=()=>{if(!(E||!g)){if(!C&&g.readyState>=2&&(C=!0,c.current&&(c.current.
style.opacity="1"),j.current.onReady(s),P()&&$(g)),P()&&C){g.paused&&!g.ended&&$(g);const x=s.duration||g.duration,D=Math.
min(1.5,x/4);if(!s.blend){M=requestAnimationFrame(y);return}if(!A&&Number.isFinite(x)&&g.currentTime>=x-D&&(A=!0,R=B(),R.
style.opacity="0",R.style.zIndex="2",R.addEventListener("error",()=>{}),S.appendChild(R),R.currentTime=0,$(R)),A&&R&&R.readyState>=
2){R.paused&&$(R);const _=Math.min(1,R.currentTime/D);g.style.opacity=String(1-_),R.style.opacity="1",_>=1&&(g.remove(),
g=R,R=null,A=!1,g.addEventListener("error",U),g.addEventListener("ended",z),S.dataset.wraps=String(Number(S.dataset.wraps||
0)+1))}}M=requestAnimationFrame(y)}};return M=requestAnimationFrame(y),document.addEventListener("visibilitychange",I),window.
addEventListener("pointerdown",I),()=>{E=!0,cancelAnimationFrame(M),g==null||g.pause(),R==null||R.pause(),g==null||g.remove(),
R==null||R.remove(),document.removeEventListener("visibilitychange",I),window.removeEventListener("pointerdown",I)}},[N]),
e.jsx("div",{ref:c,className:"ft-scene-stage",style:{opacity:0,transition:"opacity .25s"},children:m&&e.jsx("span",{className:"\
ft-stream-status",children:"This scene could not load right now. Try another background."})},N)}),yn=Y.memo(function({scene:s,
paused:n,animate:i}){const[o,l]=a.useState([s]),[c,m]=a.useState(null),u=Tt("rain"),d=a.useRef(s.id),b=a.useRef(null);a.
useEffect(()=>{d.current=s.id,l(j=>j.length&&j[j.length-1].id===s.id?j:[...j.filter(S=>S.id!==s.id).slice(-1),s]);const h=s.
id;window.setTimeout(()=>{d.current===h&&b.current===h&&l(j=>j.filter(S=>S.id===h))},400)},[s]);const w=a.useCallback(h=>{
h.id===d.current&&(b.current=h.id,m(h.id),window.setTimeout(()=>{d.current===h.id&&l(j=>j.filter(S=>S.id===h.id))},400))},
[]),k=a.useCallback(h=>{},[]),N=c===null||!o.some(h=>h.id===c);return e.jsxs(e.Fragment,{children:[N?e.jsx("div",{className:"\
ft-bg",style:{backgroundColor:"#101418",backgroundImage:u?`url(${u})`:void 0,backgroundSize:"cover",backgroundPosition:"\
center"}}):null,o.map(h=>e.jsx(gn,{scene:h,paused:n,animate:i,onReady:w,onFail:k},h.id))]})}),xn=Y.memo(function({kind:s,
id:n,scrim:i,builtinSrc:o,linkBg:l,uploadBg:c,paused:m,animate:u,customFit:d,enhance:b}){let w={};s==="builtin"&&o?w={backgroundImage:`\
url(${o})`}:s==="color"?w={backgroundColor:/^#[0-9a-f]{6}$/i.test(n||"")?n:"#101418"}:s==="link"&&(l==null?void 0:l.kind)===
"image"?w={backgroundImage:`url(${l.url})`}:s==="upload"&&(c==null?void 0:c.kind)==="image"?w={backgroundImage:`url(${c.
url})`}:(s==="link"||s==="upload"||s==="builtin")&&(w={backgroundColor:"#101418"}),(s==="link"||s==="upload")&&w.backgroundImage&&
(w={...w,backgroundSize:d,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},b!==!1&&(w={...w,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const k=s==="scene"?Zs.get(n)||Qe[0]:void 0,N=s==="link"&&(l==null?void 0:l.kind)===
"video"?l.url:s==="upload"&&(c==null?void 0:c.kind)==="video"?c.url:null,h=s==="color"?Math.max(i,Math.min(.78,Math.pow(
Ks(n||"#101418"),1.15)*.9)):i;return e.jsxs(e.Fragment,{children:[k?e.jsx(yn,{scene:k,paused:!!m,animate:u}):N?e.jsx(bn,
{src:N,paused:!!m,animate:u,fit:d}):e.jsx("div",{className:"ft-bg",style:w}),e.jsx("div",{className:"ft-scrim",style:{opacity:h}}),
e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:e.jsx("filter",{id:"ft-sharp\
en",children:e.jsx("feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),bn=Y.memo(function({
src:s,paused:n,animate:i,fit:o}){const l=a.useRef(null);return a.useEffect(()=>{const c=l.current;if(!c)return;const m=()=>{
n||!i||document.hidden?c.pause():c.play().catch(()=>{})};m();const u=()=>{!n&&i&&!document.hidden&&c.play().catch(()=>{})};
return document.addEventListener("visibilitychange",m),window.addEventListener("pointerdown",u),()=>{document.removeEventListener(
"visibilitychange",m),window.removeEventListener("pointerdown",u)}},[n,i,s]),i?e.jsx("video",{ref:l,className:"ft-bg ft-\
bgvideo",style:{objectFit:o,backgroundColor:"#101418"},src:s,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",
"aria-hidden":"true"}):null}),kn=Y.memo(function({scene:s,active:n,onPick:i}){const o=Tt(s.preview||"catalog"),l=s.preview===
"v2cat"?5:s.preview==="curated"?3:8,c=s.preview==="v2cat"?4:s.preview==="curated"?3:13;return e.jsxs("button",{type:"but\
ton",className:`ft-bgswatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${s.name} animated scene`,onClick:i,children:[
Et(s)?e.jsx("img",{className:"ft-bgswatch-img",src:Et(s),alt:"",loading:"lazy",decoding:"async"}):s.tile!=null?e.jsx("sp\
an",{className:"ft-bgswatch-img",style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:`${l*100}% ${c*100}%`,backgroundPosition:`${s.
tile%l*100/(l-1)}% ${Math.floor(s.tile/l)*100/(c-1)}%`}}):e.jsx("img",{className:"ft-bgswatch-img",src:Qs(s,"p"),alt:"",
loading:"lazy",decoding:"async"}),e.jsx("span",{className:"ft-bgswatch-name",children:s.name})]})}),vn=Y.memo(function({
id:s,name:n,active:i,onPick:o}){const[l,c]=a.useState(Be[s]||null);return a.useEffect(()=>{let m=!0;return!Be[s]&&Mt[s]&&
Mt[s]().then(u=>{Be[s]=u.default,m&&c(u.default)}).catch(()=>{}),()=>{m=!1}},[s]),e.jsx("button",{type:"button",className:`\
ft-bgswatch ${i?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:o})}),jn=Y.memo(function({
color:s,onChange:n}){const o=a.useRef(null),l=/^#[0-9a-f]{6}$/i.test(s)?s:"#101418",c=Ct(l),[m,u]=a.useState(c.l);a.useEffect(
()=>{u(Ct(/^#[0-9a-f]{6}$/i.test(s)?s:"#101418").l)},[s]),a.useEffect(()=>{var S;const k=(S=o.current)==null?void 0:S.getContext(
"2d");if(!k)return;const N=k.createImageData(168,168),h=N.data,j=168/2;for(let A=0;A<168;A++)for(let E=0;E<168;E++){const M=E-
j+.5,C=A-j+.5,L=Math.sqrt(M*M+C*C)/j,$=(A*168+E)*4;if(L>1){h[$+3]=0;continue}const P=(Math.atan2(C,M)*180/Math.PI+360)%360,
B=Ge(P,L,m);h[$]=parseInt(B.slice(1,3),16),h[$+1]=parseInt(B.slice(3,5),16),h[$+2]=parseInt(B.slice(5,7),16),h[$+3]=255}
k.putImageData(N,0,0)},[m]);const d=k=>{var E;const N=(E=o.current)==null?void 0:E.getBoundingClientRect();if(!N)return;
const h=k.clientX-N.left-N.width/2,j=k.clientY-N.top-N.height/2,S=Math.min(1,Math.sqrt(h*h+j*j)/(N.width/2)),A=(Math.atan2(
j,h)*180/Math.PI+360)%360;n(Ge(A,S,m))},b=c.h*Math.PI/180,w=c.s*(168/2);return e.jsxs("div",{className:"ft-wheelwrap",children:[
e.jsxs("span",{className:"ft-wheelbox",children:[e.jsx("canvas",{ref:o,width:168,height:168,className:"ft-wheel","aria-l\
abel":"Color wheel: drag to pick a background color",onPointerDown:k=>{k.target.setPointerCapture(k.pointerId),d(k)},onPointerMove:k=>{
k.buttons&1&&d(k)}}),e.jsx("span",{className:"ft-wheel-dot",style:{left:168/2+Math.cos(b)*w,top:168/2+Math.sin(b)*w,background:l}})]}),
e.jsxs("span",{className:"ft-wheel-side",children:[e.jsx("span",{className:"ft-wheel-preview",style:{background:l},children:l}),
e.jsx("input",{type:"range",min:.05,max:.95,step:.01,value:m,"aria-label":"Color lightness",onChange:k=>{const N=parseFloat(
k.target.value);u(N),n(Ge(c.h,c.s,N))}}),e.jsx("span",{className:"ft-field-hint",children:"Drag the wheel for hue, slide\
 for lightness. Light colors are dimmed behind the timer so text stays readable."})]})]})});function wn(t){return t.kind!==
"image"||!t.thumb?"":`https://images.weserv.nl/?url=${encodeURIComponent(t.thumb.replace(/^https?:\/\//,""))}&w=200&h=20\
0&fit=cover&q=70`}function Ye(t){try{const s=new URL(t);if(/pinterest\./i.test(s.host))return"Pinterest pin";const n=decodeURIComponent(
s.pathname.split("/").pop()||"");return n.length>4&&/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(n)?n.slice(0,26):
s.host.replace(/^www\./,"")}catch{return"Saved link"}}const Sn=Y.memo(function({link:s,active:n,onPick:i,onRemove:o}){const l=wn(
s);return e.jsxs("span",{className:`ft-bgswatch ft-bgswatch-named ft-linksw ${n?"is-active":""}`,children:[e.jsxs("butto\
n",{type:"button",className:"ft-linksw-pick","aria-label":`Use saved background ${Ye(s.source)}`,onClick:i,children:[s.kind===
"video"?e.jsx("video",{className:"ft-bgswatch-img",src:s.source,muted:!0,playsInline:!0,preload:"metadata"}):l?e.jsx("im\
g",{className:"ft-bgswatch-img",src:l,alt:"",loading:"lazy",decoding:"async"}):null,e.jsx("span",{className:"ft-bgswatch\
-name",children:Ye(s.source)})]}),e.jsx("button",{type:"button",className:"ft-linksw-del","aria-label":`Remove saved bac\
kground ${Ye(s.source)}`,onClick:o,children:"×"})]})}),Nn=Y.memo(function({settings:s,patch:n,spotifySrc:i,onOpenSettings:o}){
const l=s.musicMode==="spotify"?"spotify":"radio",c=s.radio&&typeof s.radio.index=="number"?s.radio:{index:0,playing:!1,
volume:.7},m=J[Math.min(Math.max(0,c.index),J.length-1)]||J[0],u=a.useRef(c);u.current=c;const d=a.useRef(l);d.current=l;
const b=a.useRef(null),[w,k]=a.useState(0),[N,h]=a.useState(""),j=a.useRef(0),[S,A]=a.useState(!1),E=a.useRef(null),[M,C]=a.
useState(()=>{try{const y=window.localStorage.getItem("sft:ft-player-pos.v1");if(y){const x=JSON.parse(y);if(x&&typeof x.
x=="number"&&typeof x.y=="number")return x}}catch{}return null}),L=a.useRef(null),$=(y,x)=>{const D=E.current,_=D?D.offsetWidth:
320,r=D?D.offsetHeight:180;return{x:Math.max(4,Math.min(Math.max(4,window.innerWidth-_-4),y)),y:Math.max(4,Math.min(Math.
max(4,window.innerHeight-r-4),x))}},P=y=>{var D;const x=(D=E.current)==null?void 0:D.getBoundingClientRect();x&&(L.current=
{dx:y.clientX-x.left,dy:y.clientY-x.top},y.currentTarget.setPointerCapture(y.pointerId))},B=y=>{L.current&&C($(y.clientX-
L.current.dx,y.clientY-L.current.dy))},U=()=>{L.current&&(L.current=null,C(y=>{if(!y)return y;const x=$(y.x,y.y);try{window.
localStorage.setItem("sft:ft-player-pos.v1",JSON.stringify(x))}catch{}return x}))};a.useEffect(()=>{const y=()=>C(x=>x&&
$(x.x,x.y));return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),a.useEffect(()=>{
const y=new Audio;y.preload="none",b.current=y;const x=()=>{const r=y.currentTime||0;k(O=>Math.floor(O)===Math.floor(r)?
O:r)},D=()=>{j.current=0,h(""),n({radio:{...u.current,index:(u.current.index+1)%J.length,playing:!0}})},_=()=>{!b.current||
b.current.dataset.track!==m.id||(j.current+=1,j.current>=J.length?(h("Radio tracks cannot load on this connection right \
now."),n({radio:{...u.current,playing:!1}})):(h("That track could not load - skipped it."),n({radio:{...u.current,index:(u.
current.index+1)%J.length,playing:!0}})))};return y.addEventListener("timeupdate",x),y.addEventListener("ended",D),y.addEventListener(
"error",_),()=>{y.pause(),y.removeEventListener("timeupdate",x),y.removeEventListener("ended",D),y.removeEventListener("\
error",_),b.current=null}},[]),a.useEffect(()=>{const y=b.current;if(!y)return;const x=l==="radio"&&c.playing;y.dataset.
track!==m.id&&(x||y.dataset.track)&&(y.dataset.track=m.id,y.src=m.url,y.preload="auto",j.current=0,k(0))},[m.id,l,c.playing]),
a.useEffect(()=>{const y=b.current;y&&(y.volume=c.volume,l==="radio"&&c.playing?y.play().catch(()=>{}):y.pause())},[l,c.
playing,c.volume,m.id]),a.useEffect(()=>{const y=()=>{const x=b.current;x&&d.current==="radio"&&u.current.playing&&x.paused&&
x.play().catch(()=>{})};return window.addEventListener("pointerdown",y),()=>window.removeEventListener("pointerdown",y)},
[]),a.useEffect(()=>{l==="spotify"&&u.current.playing&&n({radio:{...u.current,playing:!1}})},[l]);const R=y=>{const x=b.
current;if(!x)return;const D=y.currentTarget.getBoundingClientRect(),_=Math.min(1,Math.max(0,(y.clientX-D.left)/D.width)),
r=Number.isFinite(x.duration)&&x.duration>0?x.duration:m.seconds;x.currentTime=_*r,k(x.currentTime)},z=m.seconds,g=z>0?Math.
min(100,w/z*100):0;return e.jsxs("div",{ref:E,className:`ft-player ${S?"is-mini":""}`,style:M?{left:M.x,top:M.y,right:"a\
uto",bottom:"auto"}:void 0,"data-testid":"music-player",children:[e.jsxs("span",{className:"ft-player-head",title:"Drag \
to move",onPointerDown:P,onPointerMove:B,onPointerUp:U,onPointerCancel:U,children:[e.jsx(Q,{d:"M9 6h.01|M15 6h.01|M9 12h\
.01|M15 12h.01|M9 18h.01|M15 18h.01"}),e.jsxs("span",{className:"ft-player-mode",children:[e.jsx("button",{type:"button",
className:`ft-player-modebtn ${l==="radio"?"is-active":""}`,onPointerDown:y=>y.stopPropagation(),onClick:()=>n({musicMode:"\
radio"}),children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-player-modebtn ${l==="spotify"?"is-active":
""}`,onPointerDown:y=>y.stopPropagation(),onClick:()=>n({musicMode:"spotify"}),children:"Spotify"})]}),e.jsx("button",{type:"\
button",className:"ft-player-x","aria-label":S?"Expand player":"Minimize player",onPointerDown:y=>y.stopPropagation(),onClick:()=>A(
y=>!y),children:S?"❐":"–"}),e.jsx("button",{type:"button",className:"ft-player-x","aria-label":"Hide player",onPointerDown:y=>y.
stopPropagation(),onClick:()=>n({musicOpen:!1}),children:"×"})]}),S?e.jsx("div",{className:"ft-player-minrow",children:l===
"radio"?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"ft-player-play is-small","aria-label":c.playing?
"Pause radio":"Play radio",onClick:()=>n({radio:{...c,playing:!c.playing}}),children:c.playing?"❚❚":"▶"}),e.jsx("s\
pan",{className:"ft-player-mintitle",children:m.title})]}):e.jsx("span",{className:"ft-player-mintitle",children:"Spotif\
y player"})}):null,l==="radio"?e.jsxs("div",{className:"ft-player-body",children:[e.jsxs("span",{className:"ft-player-ro\
w",children:[e.jsx("img",{className:"ft-player-cover",src:m.cover,alt:"",loading:"lazy",decoding:"async"}),e.jsxs("span",
{className:"ft-player-meta",children:[e.jsx("span",{className:"ft-player-title",children:m.title}),e.jsxs("span",{className:"\
ft-player-artist",children:[m.artist," · instrumental lofi"]}),e.jsx("span",{className:"ft-player-bar",onClick:R,role:"\
slider","aria-label":"Track progress","aria-valuemin":0,"aria-valuemax":z,"aria-valuenow":Math.round(w),children:e.jsx("\
span",{style:{width:`${g}%`}})}),e.jsxs("span",{className:"ft-player-times",children:[ae(w*1e3)," / ",ae(z*1e3)]})]})]}),
e.jsxs("span",{className:"ft-player-controls",children:[e.jsx("button",{type:"button",className:"ft-player-btn","aria-la\
bel":"Previous track",onClick:()=>n({radio:{...c,index:(c.index-1+J.length)%J.length,playing:!0}}),children:"⏮"}),e.jsx(
"button",{type:"button",className:"ft-player-play","aria-label":c.playing?"Pause":"Play",onClick:()=>n({radio:{...c,playing:!c.
playing}}),children:c.playing?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft-player-btn","aria-label":"Nex\
t track",onClick:()=>n({radio:{...c,index:(c.index+1)%J.length,playing:!0}}),children:"⏭"}),e.jsx("input",{type:"range",
className:"ft-player-vol",min:0,max:1,step:.05,value:c.volume,"aria-label":"Radio volume",onChange:y=>n({radio:{...c,volume:parseFloat(
y.target.value)}})})]}),N?e.jsx("span",{className:"ft-player-status",children:N}):null]}):e.jsx("div",{className:"ft-pla\
yer-body",children:i?e.jsx("iframe",{className:"ft-player-iframe",src:i,width:"100%",height:"152",frameBorder:"0",allow:"\
autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"Spotify player"}):e.jsxs(
"span",{className:"ft-player-status",children:["Pick a Spotify playlist or paste a Spotify link in Settings. ",e.jsx("bu\
tton",{type:"button",className:"ft-ghost is-compact",onClick:o,children:"Open settings"})]})})]})}),Mn=Y.memo(function({
chip:s,panel:n,fullscreenSupported:i,onFullscreen:o,onTasks:l,onSettings:c,onMinimize:m,onPopout:u,onProfile:d}){return e.
jsxs("header",{className:"ft-topbar",children:[e.jsx("span",{className:"ft-brand",children:"Study focus"}),s?e.jsx("span",
{className:"ft-chip",title:"Today's completed focus time",children:s}):null,e.jsxs("span",{className:"ft-topbar-actions",
children:[i?e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:o,children:e.jsx(Q,{d:un})}):
null,e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"Open timer \
in its own window",onClick:u,children:e.jsx(Q,{d:hn})}),e.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"\
Minimize to a small timer",title:"Minimize to a small timer",onClick:m,children:e.jsx(Q,{d:fn})}),e.jsx("button",{type:"\
button",className:`ft-iconbtn ${n==="profile"?"is-active":""}`,"aria-label":"Profile and progress",title:"Profile and pr\
ogress",onClick:d,children:e.jsx(Q,{d:"M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5"})}),
e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",onClick:l,children:e.
jsx(Q,{d:mn})}),e.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,"aria-label":"Sett\
ings",onClick:c,children:e.jsx(Q,{d:pn})})]})]})}),Cn=Y.memo(function({tasksState:s,setTasksState:n,week:i,ready:o,savedMessage:l,
onClose:c}){const[m,u]=a.useState(""),[d,b]=a.useState(1),w=s.tasks,k=Math.max(1,...i.map(h=>h.minutes)),N=()=>{const h=m.
trim();if(!h)return;const j={id:`t${Date.now()}`,title:h,est:d,done:0,completed:!1};n(S=>({tasks:[...S.tasks,j],activeId:S.
activeId||j.id})),u(""),b(1)};return e.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[e.jsxs("div",{className:"\
ft-sheet-head",children:[e.jsx("h2",{children:"Tasks"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-l\
abel":"Close tasks",onClick:c,children:e.jsx(Q,{d:Wt})})]}),e.jsxs("div",{className:"ft-addtask",children:[e.jsx("input",
{value:m,placeholder:"What are you studying?",onChange:h=>u(h.target.value),onKeyDown:h=>{h.key==="Enter"&&N()},maxLength:120}),
e.jsxs("span",{className:"ft-stepper is-small",children:[e.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>b(
Math.max(1,d-1)),children:"-"}),e.jsxs("span",{className:"ft-stepper-value",children:[d,e.jsx("em",{children:"est"})]}),
e.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>b(Math.min(20,d+1)),children:"+"})]}),e.jsx("but\
ton",{type:"button",className:"ft-primary is-compact",onClick:N,disabled:!o,children:"Add"})]}),w.length===0?e.jsx("p",{
className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against it, or just run the timer."}):null,
e.jsx("ul",{className:"ft-tasklist",children:w.map(h=>e.jsxs("li",{className:`${h.id===s.activeId?"is-active":""} ${h.completed?
"is-done":""}`,children:[e.jsx("button",{type:"button",className:"ft-taskcheck","aria-label":h.completed?"Mark not done":
"Mark done",onClick:()=>{h.completed||$s(h.id),n(j=>({...j,tasks:j.tasks.map(S=>S.id===h.id?{...S,completed:!S.completed}:
S)}))},children:h.completed?"✓":""}),e.jsx("button",{type:"button",className:"ft-taskname",onClick:()=>n(j=>({...j,activeId:h.
id})),children:h.title}),e.jsxs("span",{className:"ft-taskcount",children:[h.done,"/",h.est]}),e.jsx("button",{type:"but\
ton",className:"ft-taskdel","aria-label":`Delete ${h.title}`,onClick:()=>n(j=>({tasks:j.tasks.filter(S=>S.id!==h.id),activeId:j.
activeId===h.id?null:j.activeId})),children:"×"})]},h.id))}),w.some(h=>h.completed)?e.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:()=>n(h=>({...h,tasks:h.tasks.filter(j=>!j.completed)})),children:"Clear completed"}):null,
e.jsxs("div",{className:"ft-week",children:[e.jsx("h3",{children:"This week"}),e.jsx("div",{className:"ft-weekbars",role:"\
img","aria-label":`Focus minutes by day: ${i.map(h=>`${h.label} ${h.minutes}`).join(", ")}`,children:i.map((h,j)=>e.jsxs(
"span",{className:"ft-weekcol",children:[e.jsx("span",{className:"ft-weekbar",style:{height:`${Math.round(h.minutes/k*64)}\
px`}}),e.jsx("span",{className:"ft-weekday",children:h.label})]},j))})]}),e.jsx("p",{className:"ft-field-hint",children:l})]})});
function En(){const[t,s]=a.useState(null),[,n]=a.useState(0),i=a.useRef(null);a.useEffect(()=>{const u=new BroadcastChannel(
"sft-sync");i.current=u,u.onmessage=b=>{var w;((w=b.data)==null?void 0:w.t)==="state"&&s(b.data)};const d=window.setInterval(
()=>n(b=>b+1),500);return()=>{window.clearInterval(d),u.close()}},[]);const o=u=>{var d;return(d=i.current)==null?void 0:
d.postMessage({t:"cmd",cmd:u})};let l=t?t.remaining:0;t!=null&&t.running&&(l=Math.max(0,t.remaining-(Date.now()-t.at)));
const c=!t||Date.now()-t.at>4e3,m=t&&t.dur>0?Math.round((1-l/t.dur)*100):0;return e.jsxs("div",{className:"ft-popout",style:{
"--ft-accent":(t==null?void 0:t.accent)||"#9fd8c6"},children:[e.jsx("div",{className:"ft-popout-phase",children:t?se[t.phase]:
"Study focus"}),e.jsx("div",{className:"ft-popout-time",children:t?ae(l):"--:--"}),e.jsx("div",{className:"ft-popout-bar",
"aria-hidden":"true",children:e.jsx("span",{style:{width:`${m}%`}})}),e.jsxs("div",{className:"ft-popout-btns",children:[
e.jsx("button",{type:"button",className:"ft-primary is-compact",onClick:()=>o("toggle"),children:t!=null&&t.running?"Pau\
se":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>o("reset"),children:"Reset"}),e.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>o("skip"),children:"Skip"})]}),c?e.jsx("p",{className:"\
ft-popout-note",children:"Open the study timer in another tab to control it from here."}):null]})}const Rn=Y.memo(function({
settings:s,patch:n,bgStatus:i,soundStatus:o,lastBgSrcRef:l,lastSndSrcRef:c,resolveLinkBg:m,resolveCustomSound:u,uploadBg:d,
uploadSound:b,previewAlarm:w,requestNotifications:k,notificationsSupported:N,wakeLockSupported:h,onResetSettings:j,savedMessage:S,
onClose:A,savedLinks:E,onSaveLink:M,onRemoveLink:C}){const[L,$]=a.useState(""),[P,B]=a.useState(""),[U,R]=a.useState(""),
[z,g]=a.useState(""),I=s.background,y=()=>{const r=L.trim();r&&m(r).then(O=>{O&&(l.current=r,n({background:{kind:"link",
source:r}}),E.some(ce=>ce.source===r)||M({id:`l${Date.now()}`,source:r,kind:O.kind,thumb:O.kind==="image"?O.finalUrl:void 0,
addedAt:Date.now()}),$(""))})},x=r=>{I.kind==="link"&&I.source===r.source||m(r.source).then(O=>{O&&(l.current=r.source,n(
{background:{kind:"link",source:r.source}}))})},D=()=>{const r=P.trim();cn(r)&&u(r).then(O=>{var ce;O&&(c.current=r,n({alarmSound:"\
custom",customAlarm:{source:r,name:((ce=r.split("/").pop())==null?void 0:ce.split("?")[0])||"Custom sound"}}))})},_=()=>{
const r=U.trim();if(r){if(!_t(r)){g("That is not a Spotify link. Copy a link that starts with https://open.spotify.com/ \
from the Spotify app (Share - Copy link). Your current player is unchanged.");return}g(""),n({spotify:r,spotifyOpen:!0})}};
return e.jsxs("aside",{className:"ft-sheet","aria-label":"Settings",children:[e.jsxs("div",{className:"ft-sheet-head",children:[
e.jsx("h2",{children:"Settings"}),e.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close settings",
onClick:A,children:e.jsx(Q,{d:Wt})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Appearance"}),e.jsx("div",{className:"\
ft-chips",children:tn.map(r=>e.jsxs("button",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:r.accent,font:r.
font,background:{kind:r.bg.kind,id:r.bg.id}}),children:[r.name," theme"]},r.id))}),e.jsxs("div",{className:"ft-field is-\
stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Accent color"}),e.jsxs("span",{className:"ft-inrow",
children:[en.map(r=>e.jsx("button",{type:"button",className:`ft-colorswatch ${s.accent.toLowerCase()===r.value?"is-activ\
e":""}`,style:{background:r.value},"aria-label":`${r.name} accent`,onClick:()=>n({accent:r.value})},r.id)),e.jsxs("label",
{className:"ft-colorcustom",children:[e.jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(s.accent)?s.accent:"#9fd8\
c6","aria-label":"Custom accent color",onChange:r=>n({accent:r.target.value})}),e.jsx("span",{children:"Custom"})]})]})]}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Font"}),e.jsx(
"div",{className:"ft-chips",children:Ft.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.font===r.id?"is-a\
ctive":""}`,style:r.css==="inherit"?void 0:{fontFamily:r.css},onClick:()=>n({font:r.id}),children:r.name},r.id))})]}),e.
jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Clock style"}),
e.jsx("div",{className:"ft-chips",children:[["ring","Ring"],["bar","Bar"],["minimal","Minimal"]].map(([r,O])=>e.jsx("but\
ton",{type:"button",className:`ft-chipbtn ${s.clockStyle===r?"is-active":""}`,onClick:()=>n({clockStyle:r}),children:O},
r))})]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Cloc\
k size"}),e.jsx("div",{className:"ft-chips",children:[["s","Small"],["m","Medium"],["l","Large"]].map(([r,O])=>e.jsx("bu\
tton",{type:"button",className:`ft-chipbtn ${s.clockSize===r?"is-active":""}`,onClick:()=>n({clockSize:r}),children:O},r))})]}),
e.jsx(K,{label:"Cycle dots",checked:s.showDots,onChange:r=>n({showDots:r})}),e.jsx(K,{label:"Today's stats chip",checked:s.
showChip,onChange:r=>n({showChip:r})}),e.jsx(K,{label:"Shortcut hints",checked:s.showHint,onChange:r=>n({showHint:r})})]}),
e.jsxs("section",{children:[e.jsx("h3",{children:"Music"}),e.jsxs("div",{className:"ft-chips",children:[e.jsx("button",{
type:"button",className:`ft-chipbtn ${s.musicMode!=="spotify"?"is-active":""}`,onClick:()=>n({musicMode:"radio",musicOpen:!0}),
children:"Focus radio"}),e.jsx("button",{type:"button",className:`ft-chipbtn ${s.musicMode==="spotify"?"is-active":""}`,
onClick:()=>n({musicMode:"spotify",musicOpen:!0}),children:"Spotify"})]}),e.jsx("span",{className:"ft-field-hint",children:"\
Focus radio is built-in instrumental lofi that streams from Pixabay (free license, no account needed). The mini player f\
loats on the page - drag it anywhere by its top bar. It shows the current track and its cover live. The tracks are instr\
umentals, so there are no lyrics to display."}),e.jsx(K,{label:"Show mini player",checked:s.musicOpen!==!1,onChange:r=>n(
{musicOpen:r})}),e.jsx("h4",{className:"ft-subhead",children:"Spotify playlists"}),e.jsx("div",{className:"ft-chips",children:Ut.
map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.spotify===r.id?"is-active":""}`,onClick:()=>{g(""),n({spotify:r.
id,spotifyOpen:!0,musicMode:"spotify",musicOpen:!0})},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field is-sta\
cked",children:[e.jsx("span",{className:"ft-field-label",children:"Any Spotify link"}),e.jsx("span",{className:"ft-field\
-hint",children:"Paste an open.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music\
 plays in Spotify's official player inside the mini player, with the album art shown by Spotify; this is not account syn\
c. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second previews when\
 signed out; podcast episodes usually play in full. Live lyrics are not possible here: Spotify only shares the current s\
ong with connected apps, not with an embedded player."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"\
ft-textinput",value:U,placeholder:"https://open.spotify.com/playlist/…",onChange:r=>R(r.target.value),inputMode:"url"}),
e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:_,children:"Use link"})]}),s.spotify?e.jsxs("span",
{className:"ft-inrow",children:[e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({musicMode:"\
spotify",musicOpen:!0}),children:"Show player"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(
{spotify:null,spotifyOpen:!1,musicMode:"radio"}),children:"Remove player"})]}):null,z?e.jsx("span",{className:"ft-field-\
hint",children:z}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Timer"}),e.jsx(Me,{label:"Focus",value:s.
focusMin,min:1,max:180,unit:"min",onChange:r=>n({focusMin:r})}),e.jsx(Me,{label:"Short break",value:s.shortMin,min:1,max:60,
unit:"min",onChange:r=>n({shortMin:r})}),e.jsx(Me,{label:"Long break",value:s.longMin,min:1,max:90,unit:"min",onChange:r=>n(
{longMin:r})}),e.jsx(Me,{label:"Long break every",value:s.longEvery,min:1,max:12,unit:"sessions",onChange:r=>n({longEvery:r})}),
e.jsx(K,{label:"Auto-start breaks",checked:s.autoBreaks,onChange:r=>n({autoBreaks:r})}),e.jsx(K,{label:"Auto-start focus",
checked:s.autoFocus,onChange:r=>n({autoFocus:r})}),N?e.jsx(K,{label:"Browser notifications",hint:"Alerts when a session \
ends in another tab.",checked:s.notifications,onChange:k}):null,h?e.jsx(K,{label:"Keep screen awake",checked:s.keepAwake,
onChange:r=>n({keepAwake:r})}):null]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Alarm"}),e.jsx("div",{className:"\
ft-chips",children:sn.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.alarmSound===r.id?"is-active":""}`,
onClick:()=>{n({alarmSound:r.id}),w(r.id)},children:r.name},r.id))}),e.jsxs("div",{className:"ft-field",children:[e.jsx(
"span",{className:"ft-field-label",children:"Volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.alarmVolume,
"aria-label":"Alarm volume",onChange:r=>n({alarmVolume:parseFloat(r.target.value)})})]}),e.jsx(K,{label:"Ring twice",checked:s.
alarmRepeat,onChange:r=>n({alarmRepeat:r})}),e.jsx(K,{label:"Ticking while running",checked:s.tick,onChange:r=>n({tick:r})}),
e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("input",{className:"ft-textinput",value:P,placeholder:"\
https://…/sound.mp3",onChange:r=>B(r.target.value),inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:D,children:"Use link"})]}),e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",e.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:r=>{var O;return b((O=r.target.files)==null?void 0:O[0])}})]}),s.customAlarm?
e.jsxs("span",{className:"ft-field-hint",children:["Current: ",s.customAlarm.name]}):null]}),o?e.jsx("span",{className:"\
ft-field-hint",children:o}):null]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Ambient sound"}),e.jsx("div",{className:"\
ft-chips",children:Ot.map(r=>e.jsx("button",{type:"button",className:`ft-chipbtn ${s.ambient===r.id?"is-active":""}`,onClick:()=>n(
{ambient:r.id}),children:r.name},r.id))}),s.ambient!=="none"?e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{
className:"ft-field-label",children:"Ambient volume"}),e.jsx("input",{type:"range",min:0,max:1,step:.05,value:s.ambientVolume,
"aria-label":"Ambient volume",onChange:r=>n({ambientVolume:parseFloat(r.target.value)})})]}):null]}),e.jsxs("section",{children:[
e.jsx("h3",{children:"Background"}),e.jsx("h4",{className:"ft-subhead",children:"Scenes"}),e.jsx("div",{className:"ft-bg\
grid",children:Qe.map(r=>e.jsx(kn,{scene:r,active:I.kind==="scene"&&I.id===r.id,onPick:()=>n({background:{kind:"scene",id:r.
id}})},r.id))}),e.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Illustrated scenes are draw\
n to loop seamlessly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay o\
nly when chosen. While a scene loads, your previous background stays on screen (a still photo on your first visit); a sc\
ene that cannot load keeps it rather than going black or swapping to something else."}),e.jsx(K,{label:"Animate backgrou\
nds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:s.bgAnimate!==!1,onChange:r=>n({
bgAnimate:r})}),e.jsx("h4",{className:"ft-subhead",children:"Photos"}),e.jsx("div",{className:"ft-bggrid",children:Ys.map(
r=>e.jsx(vn,{id:r.id,name:r.name,active:I.kind==="builtin"&&I.id===r.id,onPick:()=>n({background:{kind:"builtin",id:r.id}})},
r.id))}),e.jsx("h4",{className:"ft-subhead",children:"Solid color"}),e.jsx("div",{className:"ft-bggrid",children:Hs.map(
r=>e.jsx("button",{type:"button",className:`ft-bgswatch ${I.kind==="color"&&(I.id||"").toLowerCase()===r.id?"is-active":
""}`,style:{background:r.id},"aria-label":`${r.name} background color`,onClick:()=>n({background:{kind:"color",id:r.id}})},
r.id))}),e.jsx(jn,{color:I.kind==="color"&&I.id?I.id:"#101418",onChange:r=>n({background:{kind:"color",id:r}})}),e.jsxs(
"div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-label",children:"Pinterest, image or \
video link"}),e.jsx("span",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pi\
n/…), a direct image link (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the scr\
een, cropped to match its own shape, never stretched. Every link you add is saved under My saved backgrounds below and r\
eloads each visit - paste once, keep forever. When a direct image load is blocked, the link you paste is fetched through\
 a public image relay (weserv.nl), so never use private boards or private URLs."}),e.jsxs("span",{className:"ft-inrow",children:[
e.jsx("input",{className:"ft-textinput",value:L,placeholder:"https://www.pinterest.com/pin/…",onChange:r=>$(r.target.value),
inputMode:"url"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:y,children:"Use link"})]}),E.length?
e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"ft-subhead",children:"My saved backgrounds"}),e.jsx("div",{className:"\
ft-bggrid",children:E.map(r=>e.jsx(Sn,{link:r,active:I.kind==="link"&&I.source===r.source,onPick:()=>x(r),onRemove:()=>C(
r.id)},r.id))}),e.jsx("span",{className:"ft-field-hint",children:"Tap one to use it again, × to forget it. Saved on this\
 device."})]}):null,e.jsxs("span",{className:"ft-inrow",children:[e.jsxs("label",{className:"ft-ghost is-compact ft-file\
btn",children:["Upload image or video",e.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload backgrou\
nd image or video file",className:"ft-fileinput",onChange:r=>{var O;return d((O=r.target.files)==null?void 0:O[0])}})]}),
e.jsx("span",{className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),i?e.jsx("span",{className:"ft-field\
-hint",children:i}):null]}),e.jsxs("div",{className:"ft-field is-stacked",children:[e.jsx("span",{className:"ft-field-la\
bel",children:"Imported image or video fit"}),e.jsxs("span",{className:"ft-inrow",children:[e.jsx("button",{type:"button",
className:`ft-chipbtn ${s.customFit!=="contain"?"is-active":""}`,onClick:()=>n({customFit:"cover"}),children:"Crop to fi\
ll"}),e.jsx("button",{type:"button",className:`ft-chipbtn ${s.customFit==="contain"?"is-active":""}`,onClick:()=>n({customFit:"\
contain"}),children:"Show whole image"})]}),e.jsx("span",{className:"ft-field-hint",children:"Crop fills the screen. Sho\
w whole image preserves the full composition with plain dark space where needed. No blur-fill or stretching."})]}),e.jsx(
K,{label:"Sharpen imported images",hint:"A local sharpen filter for images you paste or upload - it cannot add detail a \
small original never had. Runs on your device only; images never leave this browser.",checked:s.enhance!==!1,onChange:r=>n(
{enhance:r})}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-field-label",children:"Darken ba\
ckground"}),e.jsx("input",{type:"range",min:.15,max:.85,step:.05,value:s.scrim,"aria-label":"Background darkness",onChange:r=>n(
{scrim:parseFloat(r.target.value)})})]})]}),e.jsxs("div",{className:"ft-field",children:[e.jsx("span",{className:"ft-fie\
ld-label",children:"Start over"}),e.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:j,children:"Rese\
t settings"})]}),e.jsxs("p",{className:"ft-field-hint",children:["Your settings, saved backgrounds, tasks and stats stay\
 in this browser. Link backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay wh\
en a direct load is blocked; Spotify playback happens inside Spotify's official player; selected catalog videos and focu\
s-radio tracks stream from Pixabay's CDN. ",S]})]})});function Ln(){return typeof window<"u"&&/[?&]popout=1/.test(window.
location.search)?e.jsx(En,{}):e.jsx(An,{})}function An(){var pt;const[t,s,n]=ge("ft-settings.v2",Ve),[i,o,l]=ge("ft-task\
s.v1",{tasks:[],activeId:null}),[c,m,u]=ge("ft-stats.v1",{days:{}}),[d,b,w]=ge("ft-session.v1",null),[k,N]=ge("ft-links.\
v1",[]),h=a.useCallback(f=>N(p=>[f,...p.filter(v=>v.source!==f.source)].slice(0,24)),[N]),j=a.useCallback(f=>N(p=>p.filter(
v=>v.id!==f)),[N]),S=a.useMemo(()=>({focus:t.focusMin*6e4,short:t.shortMin*6e4,long:t.longMin*6e4}),[t.focusMin,t.shortMin,
t.longMin]),[A,E]=a.useState("focus"),[M,C]=a.useState(!1),[L,$]=a.useState(S.focus),[P,B]=a.useState(0),[U,R]=a.useState(
"none"),[z,g]=a.useState(!1),I=a.useRef(0),y=a.useRef(!1);y.current=M;const x=a.useRef(A);x.current=A;const D=a.useRef(L);
D.current=L;const _=a.useRef(t.accent);_.current=t.accent;const[r,O]=a.useState(null),[ce,zt]=a.useState(null),[qt,Re]=a.
useState(null),[Bt,ie]=a.useState(""),[Le,et]=a.useState(null),[Vt,ee]=a.useState(""),G=a.useRef(null),oe=a.useRef(null),
ke=a.useRef(null),tt=a.useCallback(async f=>{ie("Loading background…");try{const p=f.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.
test(p)&&!/pin(it)?\./i.test(p))return O(H=>(H&&H.url.startsWith("blob:")&&URL.revokeObjectURL(H.url),{url:p,kind:"video"})),
ie("Background applied."),{kind:"video",finalUrl:p};const{blob:v,finalUrl:T}=await dn(f),F=v.type.startsWith("video/")?"\
video":"image";return O(H=>(H&&H.url.startsWith("blob:")&&URL.revokeObjectURL(H.url),{url:URL.createObjectURL(v),kind:F})),
ie("Background applied."),{kind:F,finalUrl:T}}catch(p){const v=p instanceof Error&&p.message==="short pin link"?"Short p\
in.it links cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous\
 background is unchanged.":"Could not load that pin or link. Private or deleted pins cannot be read. Use a public pin li\
nk, a direct image link, or upload the image below. Your previous background is unchanged.";return ie(v),!1}},[]),st=a.useCallback(
async f=>{ee("Loading sound…");try{const p=await Ke(f);if(!/^audio\//.test(p.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.
test(f))throw new Error("not audio");return et(v=>(v&&URL.revokeObjectURL(v),URL.createObjectURL(p))),ee("Sound saved. I\
t will ring when a session ends."),!0}catch{return ee("That link blocks cross-site loading. Download the sound to your d\
evice and upload it instead. Your previous sound is unchanged."),!1}},[]),Ae=a.useRef(""),Ie=a.useRef("");a.useEffect(()=>{
n.ready&&t.background.kind==="link"&&t.background.source&&t.background.source!==Ae.current&&(Ae.current=t.background.source,
tt(t.background.source))},[n.ready,t.background]),a.useEffect(()=>{var p;if(!n.ready)return;const f=((p=t.customAlarm)==
null?void 0:p.source)||"";t.alarmSound==="custom"&&f&&f!==Ie.current&&(Ie.current=f,st(f))},[n.ready,t.alarmSound,t.customAlarm]);
const nt=a.useRef(!1);a.useEffect(()=>{var f;!n.ready||nt.current||(nt.current=!0,t.background.kind==="upload"&&(W({background:{
kind:"color",id:"#101418"}}),ie("Your uploaded image resets when the tab reloads. Upload it again, or save a link instea\
d.")),!((f=t.customAlarm)!=null&&f.source)&&t.alarmSound==="custom"&&(W({alarmSound:"bell"}),ee("Your uploaded sound res\
ets when the tab reloads. Upload it again, or save a link instead.")))},[n.ready]),a.useEffect(()=>{n.ready&&(!t.accent||
!t.font||!t.clockStyle||!t.clockSize||typeof t.showDots!="boolean"||typeof t.spotifyOpen!="boolean"||t.spotify===void 0||
typeof t.bgAnimate!="boolean")&&s(f=>({...Ve,...f}))},[n.ready]),a.useEffect(()=>{if(!n.ready)return;const f=t.background;
f.kind==="gradient"?W({background:{kind:"color",id:{dusk:"#3b2f4a",moss:"#0f2e25",ink:"#101418",dawn:"#4a2f3d"}[f.id||""]||
"#101418"}}):f.kind==="animated"&&W({background:{kind:"builtin",id:"rain"}})},[n.ready,t.background]),a.useEffect(()=>{if(n.
ready)try{t.spotify&&!window.localStorage.getItem("sft:ft-musicmig.v1")&&(window.localStorage.setItem("sft:ft-musicmig.v\
1","1"),W({musicMode:"spotify",musicOpen:t.spotifyOpen!==!1}))}catch{}},[n.ready]);const te=t.background;a.useEffect(()=>{
let f=!0;if(n.ready){if(te.kind==="builtin"){const p=te.id&&Nt[te.id]?te.id:"rain";qe[p]?Re(qe[p]):(Re(null),Nt[p]().then(
v=>{qe[p]=v.default,f&&Re(v.default)}).catch(()=>{}))}return()=>{f=!1}}},[n.ready,te.kind,te.id]);const at=a.useRef(!1),
Z=a.useCallback(f=>{w.ready&&b({phase:f.phase,running:f.running,endAt:f.endAt||0,remainingMs:f.remainingMs,cycleCount:f.
cycleCount})},[w.ready]);a.useEffect(()=>{if(!w.ready||at.current||(at.current=!0,!d))return;const f=d.phase==="short"||
d.phase==="long"?d.phase:"focus";if(E(f),B(d.cycleCount||0),d.running&&d.endAt>Date.now()+500)I.current=d.endAt,$(d.endAt-
Date.now()),C(!0);else if(d.running)$(V.current[f]),C(!1);else{const p=typeof d.remainingMs=="number"&&d.remainingMs>0?Math.
min(d.remainingMs,V.current[f]):V.current[f];$(p),C(!1)}},[w.ready]);const de=a.useRef({}),V=a.useRef(S);V.current=S;const it=a.
useCallback(f=>{const p=x.current;let v="focus",T=P;if(p==="focus"){if(T=f?P:P+1,B(T),v=T%Math.max(1,t.longEvery)===0&&T>
0?"long":"short",!f){const H=be(),ht=c.days[H]||{focusSec:0,sessions:0};m({days:{...c.days,[H]:{focusSec:ht.focusSec+Math.
round(V.current.focus/1e3),sessions:ht.sessions+1}}}),i.activeId&&o(Fe=>({...Fe,tasks:Fe.tasks.map(Se=>Se.id===Fe.activeId?
{...Se,done:Se.done+1}:Se)}))}}else v="focus";if(t.alarmSound==="custom"&&G.current)try{G.current.currentTime=0,G.current.
volume=t.alarmVolume,G.current.play().catch(()=>xe("bell",t.alarmVolume,t.alarmRepeat))}catch{xe("bell",t.alarmVolume,t.
alarmRepeat)}else t.alarmSound==="custom"?xe("bell",t.alarmVolume,t.alarmRepeat):xe(t.alarmSound,t.alarmVolume,t.alarmRepeat);
if(t.notifications&&typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(`${se[p]} finished`,
{body:v==="focus"?"Time to focus.":`Time for a ${se[v].toLowerCase()}.`})}catch{}delete de.current[p],E(v),$(V.current[v]);
const F=v==="focus"?t.autoFocus:t.autoBreaks;F?(I.current=Date.now()+V.current[v],C(!0)):C(!1),Z({phase:v,running:F,endAt:F?
Date.now()+V.current[v]:0,remainingMs:V.current[v],cycleCount:T})},[P,t,c,m,o,Z]),ve=a.useRef(it);ve.current=it,a.useEffect(
()=>{if(!M)return;const f=window.setInterval(()=>{const p=I.current-Date.now();p<=0?ve.current(!1):$(v=>Math.ceil(v/1e3)!==
Math.ceil(p/1e3)?p:v)},250);return()=>window.clearInterval(f)},[M]),a.useEffect(()=>{y.current||(delete de.current[x.current],
$(S[x.current]))},[S]);const ot=a.useRef(0);a.useEffect(()=>{if(!M||!t.tick)return;const f=window.setInterval(()=>{const p=Math.
ceil((I.current-Date.now())/1e3);p!==ot.current&&(ot.current=p,nn(t.alarmVolume))},250);return()=>window.clearInterval(f)},
[M,t.tick,t.alarmVolume]),a.useEffect(()=>{document.title=`${ae(L)} - ${se[A]} - Study focus timer`},[L,A]),a.useEffect(
()=>(oe.current&&(oe.current(),oe.current=null),t.ambient!=="none"&&(oe.current=ln(t.ambient,t.ambientVolume)),()=>{oe.current&&
(oe.current(),oe.current=null)}),[t.ambient,t.ambientVolume]),a.useEffect(()=>{if(!t.keepAwake||!("wakeLock"in navigator))
return;let f=!1;const p=()=>{navigator.wakeLock.request("screen").then(T=>{f||(ke.current=T)}).catch(()=>{})};p();const v=()=>{
document.visibilityState==="visible"&&p()};return document.addEventListener("visibilitychange",v),()=>{if(f=!0,document.
removeEventListener("visibilitychange",v),ke.current){try{ke.current.release()}catch{}ke.current=null}}},[t.keepAwake]),
a.useEffect(()=>{Le?(G.current=new Audio(Le),G.current.preload="auto"):G.current=null},[Le]);const rt=a.useRef(()=>{}),lt=a.
useRef(()=>{}),ct=a.useRef(()=>{}),ue=a.useCallback(()=>{if(Ee(),G.current)try{G.current.pause(),G.current.currentTime=0}catch{}
I.current=Date.now()+D.current,C(!0),Z({phase:x.current,running:!0,endAt:I.current,remainingMs:D.current,cycleCount:P})},
[Z,P]),fe=a.useCallback(()=>{C(!1),Z({phase:x.current,running:!1,remainingMs:D.current,cycleCount:P})},[Z,P]),me=a.useCallback(
()=>{delete de.current[x.current],C(!1),$(V.current[x.current]),Z({phase:x.current,running:!1,remainingMs:V.current[x.current],
cycleCount:P})},[Z,P]),je=a.useCallback(()=>{ve.current(!0)},[]);rt.current=ue,lt.current=fe,ct.current=me;const pe=a.useCallback(
f=>{const p=x.current;if(f===p)return;const v=y.current?Math.max(0,I.current-Date.now()):D.current;v>0&&v<V.current[p]?de.
current[p]=v:delete de.current[p];const T=de.current[f],F=typeof T=="number"&&T>0?Math.min(T,V.current[f]):V.current[f];
C(!1),E(f),$(F),Z({phase:f,running:!1,remainingMs:F,cycleCount:P})},[Z,P]),Pe=a.useCallback(()=>{document.fullscreenElement?
document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[dt,ut]=a.useState(
null),Gt=a.useCallback(()=>{const f=window.documentPictureInPicture;if(f!=null&&f.requestWindow){f.requestWindow({width:320,
height:200}).then(p=>{for(const v of Array.from(document.styleSheets))try{const T=Array.from(v.cssRules||[]).map(H=>H.cssText).
join(`
`),F=p.document.createElement("style");F.textContent=T,p.document.head.appendChild(F)}catch{const T=v.href;if(T){const F=p.
document.createElement("link");F.rel="stylesheet",F.href=T,p.document.head.appendChild(F)}}p.document.body.className="ft\
-pip-body",p.addEventListener("pagehide",()=>ut(null)),ut(p)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);a.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const f=new BroadcastChannel(
"sft-sync"),p=()=>f.postMessage({t:"state",phase:x.current,remaining:D.current,running:y.current,dur:V.current[x.current],
accent:_.current,at:Date.now()});p();const v=window.setInterval(p,1e3);return f.onmessage=T=>{const F=T.data;(F==null?void 0:
F.t)==="cmd"&&(F.cmd==="toggle"?y.current?lt.current():rt.current():F.cmd==="reset"?ct.current():F.cmd==="skip"&&ve.current(
!0))},()=>{window.clearInterval(v),f.close()}},[]);const Yt=a.useCallback(()=>{R("none"),g(!0)},[]),Ht=U==="tasks",Kt=U===
"settings",Zt=a.useCallback(()=>R(f=>f==="tasks"?"none":"tasks"),[]),Xt=a.useCallback(()=>R(f=>f==="settings"?"none":"se\
ttings"),[]),Jt=a.useCallback(()=>R("settings"),[]),Qt=a.useCallback(()=>R(f=>f==="profile"?"none":"profile"),[]);a.useEffect(
()=>{const f=p=>{var T;const v=(T=p.target)==null?void 0:T.tagName;v==="INPUT"||v==="TEXTAREA"||v==="SELECT"||(p.code===
"Space"?(p.preventDefault(),y.current?fe():ue()):p.key==="r"||p.key==="R"?me():p.key==="s"||p.key==="S"?je():p.key==="1"?
pe("focus"):p.key==="2"?pe("short"):p.key==="3"?pe("long"):p.key==="m"||p.key==="M"?g(F=>!F):(p.key==="f"||p.key==="F")&&
Pe())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[ue,fe,me,je,pe,Pe]);const W=a.
useCallback(f=>s(p=>({...p,...f})),[s]),es=a.useCallback(f=>{if(!f)return;const p=f.type.startsWith("video/");if(!p&&!f.
type.startsWith("image/")){ie("That file is not an image or video.");return}zt(v=>(v&&URL.revokeObjectURL(v.url),{url:URL.
createObjectURL(f),kind:p?"video":"image"})),W({background:{kind:"upload"}}),ie("Background applied for this visit. Use \
a link to keep it across visits.")},[W]),ts=a.useCallback(f=>{if(f){if(!f.type.startsWith("audio/")){ee("That file is no\
t an audio file.");return}et(p=>(p&&URL.revokeObjectURL(p),URL.createObjectURL(f))),W({alarmSound:"custom",customAlarm:{
source:"",name:f.name}}),ee(`Using "${f.name}" for this visit. Use a link to keep it across visits.`)}},[W]),ss=a.useCallback(
f=>{var p;if(f==="custom"){if(G.current)try{G.current.currentTime=0,G.current.volume=t.alarmVolume,G.current.play().catch(
()=>ee("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else ee((p=t.
customAlarm)!=null&&p.source?"Still loading your sound.":"Add a link or upload a file first.");return}xe(f,t.alarmVolume,
!1)},[t.alarmVolume,t.customAlarm]),ns=a.useCallback(f=>{if(!f){W({notifications:!1});return}if(!(typeof Notification>"u"))
try{const p=Notification.requestPermission();p&&typeof p.then=="function"?p.then(v=>W({notifications:v==="granted"})).catch(
()=>W({notifications:!1})):W({notifications:Notification.permission==="granted"})}catch{W({notifications:!1})}},[W]),as=a.
useCallback(()=>s(Ve),[s]),is=a.useMemo(()=>({focusSec:0,sessions:0}),[]),we=c.days[be()]||is,$e=a.useMemo(()=>{var v,T;
let f=0;const p=new Date;for(((v=c.days[be(p)])==null?void 0:v.sessions)>0||p.setDate(p.getDate()-1);((T=c.days[be(p)])==
null?void 0:T.sessions)>0;)f++,p.setDate(p.getDate()-1);return f},[c.days]),os=a.useMemo(()=>{const f=[];for(let p=6;p>=
0;p--){const v=new Date;v.setDate(v.getDate()-p);const T=c.days[be(v)];f.push({label:`${"SMTWTFS"[v.getDay()]}`,minutes:Math.
round(((T==null?void 0:T.focusSec)||0)/60)})}return f},[c.days]),rs=a.useMemo(()=>t.showChip?`${we.sessions} ${we.sessions===
1?"session":"sessions"} · ${Math.round(we.focusSec/60)} min${$e>1?` · ${$e}-day streak`:""}`:null,[t.showChip,we,$e]),
ls=n.ready&&l.ready&&u.ready,cs=((pt=Ft.find(f=>f.id===t.font))==null?void 0:pt.css)||"inherit",Te=1-L/Math.max(1,S[A]),
De=118,ft=2*Math.PI*De,ds=typeof Notification<"u",us=typeof navigator<"u"&&"wakeLock"in navigator,fs=typeof document<"u"&&
document.fullscreenEnabled,mt=i.tasks.find(f=>f.id===i.activeId)||null,ms=t.spotify?_t(t.spotify):null;return e.jsxs("di\
v",{className:`ft-root ${z?"is-compact":""}`,style:{"--ft-accent":t.accent,"--ft-font":cs},children:[e.jsx(xn,{kind:te.kind,
id:te.id,scrim:t.scrim,builtinSrc:qt,linkBg:r,uploadBg:ce,paused:z,animate:t.bgAnimate!==!1,customFit:t.customFit||"cove\
r",enhance:t.enhance!==!1}),e.jsx(Mn,{chip:rs,panel:U,fullscreenSupported:fs,onFullscreen:Pe,onTasks:Zt,onSettings:Xt,onMinimize:Yt,
onPopout:Gt,onProfile:Qt}),e.jsxs("main",{className:"ft-center",children:[e.jsx("nav",{className:"ft-modes","aria-label":"\
Timer mode",children:["focus","short","long"].map(f=>e.jsx("button",{type:"button",className:`ft-mode ${A===f?"is-active":
""}`,onClick:()=>pe(f),children:se[f]},f))}),t.showDots?e.jsx("div",{className:"ft-dots","aria-label":"Cycle progress",children:Array.
from({length:Math.max(1,t.longEvery)}).map((f,p)=>e.jsx("span",{className:`ft-dot ${p<P%Math.max(1,t.longEvery)||P>0&&P%
Math.max(1,t.longEvery)===0&&A!=="focus"?"is-done":""}`},p))}):null,e.jsxs("div",{className:`ft-clock is-${t.clockSize}`,
role:"timer","aria-live":"off","aria-label":`${se[A]} timer, ${ae(L)} remaining`,children:[t.clockStyle==="ring"?e.jsxs(
"svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-hidden":"true",children:[e.jsx("circle",{className:"ft-ring-track",
cx:"130",cy:"130",r:De}),e.jsx("circle",{className:"ft-ring-fill",cx:"130",cy:"130",r:De,strokeDasharray:ft,strokeDashoffset:ft*
(1-Te)})]}):null,e.jsxs("div",{className:"ft-time-wrap",children:[e.jsx("div",{className:"ft-time",children:ae(L)}),e.jsx(
"div",{className:"ft-taskline",children:mt?mt.title:A==="focus"?"Pick a task or just focus":"Rest up"})]})]}),t.clockStyle===
"bar"?e.jsx("div",{className:"ft-progressbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.round(Te*
100)}%`}})}):null,e.jsxs("div",{className:"ft-controls",children:[e.jsx("button",{type:"button",className:"ft-primary",onClick:()=>M?
fe():ue(),children:M?"Pause":L<S[A]?"Resume":"Start"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:me,children:"\
Reset"}),e.jsx("button",{type:"button",className:"ft-ghost",onClick:je,children:"Skip"})]}),t.showHint?e.jsx("p",{className:"\
ft-hint",children:"Space start or pause · R reset · S skip · M minimize · F fullscreen"}):null]}),z?e.jsxs("div",{className:"\
ft-compactpill",role:"dialog","aria-label":"Minimized timer",children:[e.jsx("span",{className:"ft-compactphase",children:se[A]}),
e.jsx("span",{className:"ft-compacttime",children:ae(L)}),e.jsx("button",{type:"button",className:"ft-compactbtn","aria-\
label":M?"Pause":"Start",onClick:()=>M?fe():ue(),children:M?"❚❚":"▶"}),e.jsx("button",{type:"button",className:"ft\
-compactbtn","aria-label":"Expand timer",onClick:()=>g(!1),children:"⤢"})]}):null,U==="profile"?e.jsx(qs,{onClose:()=>R(
"none")}):null,e.jsx(Ws,{}),Ht?e.jsx(Cn,{tasksState:i,setTasksState:o,week:os,ready:ls,savedMessage:l.message||u.message||
"",onClose:()=>R("none")}):null,Kt?e.jsx(Rn,{settings:t,patch:W,bgStatus:Bt,soundStatus:Vt,lastBgSrcRef:Ae,lastSndSrcRef:Ie,
resolveLinkBg:tt,resolveCustomSound:st,uploadBg:es,uploadSound:ts,previewAlarm:ss,requestNotifications:ns,notificationsSupported:ds,
wakeLockSupported:us,onResetSettings:as,savedMessage:n.message||"",onClose:()=>R("none"),savedLinks:k,onSaveLink:h,onRemoveLink:j}):
null,dt?ps.createPortal(e.jsxs("div",{className:"ft-pip",children:[e.jsx("div",{className:"ft-pip-phase",children:se[A]}),
e.jsx("div",{className:"ft-pip-time",children:ae(L)}),e.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:e.
jsx("span",{style:{width:`${Math.round(Te*100)}%`}})}),e.jsxs("div",{className:"ft-pip-btns",children:[e.jsx("button",{type:"\
button",className:"ft-primary is-compact",onClick:()=>M?fe():ue(),children:M?"Pause":"Start"}),e.jsx("button",{type:"but\
ton",className:"ft-ghost is-compact",onClick:me,children:"Reset"}),e.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:je,children:"Skip"})]})]}),dt.document.body):null,t.musicOpen!==!1?e.jsx(Nn,{settings:t,patch:W,spotifySrc:ms,
onOpenSettings:Jt}):null]})}hs(document.getElementById("root")).render(e.jsx(Ln,{}));
