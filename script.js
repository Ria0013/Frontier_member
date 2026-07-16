console.log("SCRIPT LOAD OK");

/* =========================
   TEAM FRONTIER MEMBER SYSTEM
   SCRIPT.JS
========================= */

/* =========================
   ELEMENT
========================= */

const loading = document.getElementById("loading");
const loadingText = document.getElementById("loadingText");

const loginPage = document.getElementById("loginPage");
const mainPage = document.getElementById("mainPage");

const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

/* =========================
   PASSWORD
========================= */

const LOGIN_PASSWORD = "0711";
const ADMIN_PASSWORD = "9999";

/* =========================
   LOADING
========================= */

const loadingList = [

"Connecting...",

"Checking Password...",

"Loading Member Database...",

"Initializing Achievement Records...",

"Access Granted."

];

let loadingIndex = 0;

function startLoading(){

loadingText.textContent = loadingList[0];

const loadingTimer = setInterval(function(){

loadingIndex++;

if(loadingIndex >= loadingList.length){

clearInterval(loadingTimer);

setTimeout(function(){

loading.style.display = "none";

},500);

return;

}

loadingText.textContent = loadingList[loadingIndex];

},700);

}

/* =========================
   LOGIN
========================= */

function login(){

const input = password.value.trim();

if(input === LOGIN_PASSWORD){

loginPage.style.display = "none";

mainPage.style.display = "block";

loginMessage.textContent = "";

password.value = "";

}

else{

loginMessage.textContent = "ACCESS DENIED";

password.value = "";

password.focus();

}

}

loginBtn.onclick = login;

/* =========================
   ENTER LOGIN
========================= */

password.addEventListener("keydown",function(event){

if(event.key === "Enter"){

login();

}

});

/* =========================
   START
========================= */

window.onload = function(){

startLoading();

};

/* =========================
   CLOCK
========================= */

const clock = document.getElementById("clock");

function updateClock(){

const now = new Date();

const time = now.toLocaleTimeString("ko-KR",{

hour12:false,

timeZone:"Asia/Seoul"

});

clock.textContent = time;

}

setInterval(updateClock,1000);

updateClock();

/* =========================
   MEMBER CONTAINER
========================= */

const staffContainer = document.getElementById("staffContainer");

const generation1 = document.getElementById("generation1");

const generation2 = document.getElementById("generation2");

const generation3 = document.getElementById("generation3");

const generation4 = document.getElementById("generation4");

/* =========================
   ACHIEVEMENT CONTAINER
========================= */

const achievementContainer =
document.getElementById("achievementContainer");

/* =========================
   COUNTER
========================= */

const onlineCount =
document.getElementById("onlineCount");

const restingCount =
document.getElementById("restingCount");

const offlineCount =
document.getElementById("offlineCount");

/* =========================
   MEMBER DATABASE
========================= */

const members = [

{

name:"눈꽃",

id:"snowflake",

role:"Leader",

generation:"staff",

joinDate:"0709",

status:"ONLINE",

message:"Team Frontier Leader",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"후유",

id:"huyu",

role:"Sub Leader",

generation:"staff",

joinDate:"0709",

status:"ONLINE",

message:"Together We Move Forward.",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"오애",

id:"oae",

role:"Manager",

generation:"staff",

joinDate:"0709",

status:"OFFLINE",

message:"Management Support.",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"슈팝",

id:"supop",

role:"Member",

generation:"1",

joinDate:"0711",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"The First Pioneer",

"Project Frontier 1"

]

},

{

name:"금꽃",

id:"geumkkot",

role:"Member",

generation:"1",

joinDate:"0711",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"셰인",

id:"shane",

role:"Member",

generation:"1",

joinDate:"0711",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"서르설아",

id:"seoreuseola",

role:"Member",

generation:"1",

joinDate:"0711",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"황치즈",

id:"hwangcheese",

role:"Member",

generation:"2",

joinDate:"-",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"하진",

id:"hajin",

role:"Member",

generation:"2",

joinDate:"-",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

},

{

name:"아키아나",

id:"akiana",

role:"Member",

generation:"2",

joinDate:"-",

status:"ONLINE",

message:"",

achievement:[

"Frontier Pioneer",

"Joined Frontier",

"Project Frontier 1"

]

}

];

/* =========================
   ACHIEVEMENT DATABASE
========================= */

const achievements = [

{

title:"Frontier Pioneer",

state:"Earned",

description:"활동중인 프론티어 맴버에게 부여되는 기본 업적"

},

{

title:"Joined Frontier",

state:"Earned",

description:"프론티어에 오신 걸 환영합니다! 개척자님."

},

{

title:"The First Pioneer",

state:"Earned",

description:"가장 처음 함께한 개척자에게 주는 칭호."

},

{

title:"Project Frontier 1",

state:"Earne",

description:"2026년 3분기에 진행된 첫 합작에 참여했습니다!"

},

{

title:"Coming Soon",

state:"Locked"

},

{

title:"Coming Soon",

state:"Locked"

}

];

/* =========================
   MEMBER CARD
========================= */

function getStatusIcon(status){

switch(status){

case "ONLINE":
return "🟢";

case "RESTING":
return "🟡";

default:
return "🔴";

}

}

function createMemberCard(member){

const card=document.createElement("div");

card.className="memberCard";

let badge="";

if(member.generation==="staff"){

badge='<div class="staffBadge">STAFF</div>';

}

card.innerHTML=`

${badge}

<div class="memberHeader">

<img src="Frontier.png" alt="Frontier">

<span>${getStatusIcon(member.status)} ${member.name}</span>

</div>

<div class="memberInfo">

<p><strong>ID</strong> : ${member.id}</p>

<p><strong>Role</strong> : ${member.role}</p>

<p><strong>Join Date</strong> : ${member.joinDate}</p>

<p><strong>Status</strong> : ${member.status}</p>

<p><strong>Message</strong> : ${member.message}</p>

<p><strong>Achievement</strong></p>

<div class="memberAchievement">

${
member.achievement && member.achievement.length > 0

?

member.achievement.map(function(item){

return "🏆 " + item;

}).join("<br>")

:

"None"

}

</div>

</div>

`;

card.onclick=function(){

card.classList.toggle("active");

};

return card;

}

/* =========================
   MEMBER CREATE
========================= */

function createMembers(){

staffContainer.innerHTML="";

generation1.innerHTML="";

generation2.innerHTML="";

generation3.innerHTML="";

generation4.innerHTML="";

members.forEach(function(member){

const card=createMemberCard(member);

switch(member.generation){

case "staff":

staffContainer.appendChild(card);

break;

case "1":

generation1.appendChild(card);

break;

case "2":

generation2.appendChild(card);

break;

case "3":

generation3.appendChild(card);

break;

case "4":

generation4.appendChild(card);

break;

}

});

}

/* =========================
   MEMBER COUNT
========================= */

function updateCounter(){

let online=0;

let resting=0;

let offline=0;

members.forEach(function(member){

switch(member.status){

case "ONLINE":

online++;

break;

case "RESTING":

resting++;

break;

default:

offline++;

break;

}

});

onlineCount.textContent=online;

restingCount.textContent=resting;

offlineCount.textContent=offline;

}

/* =========================
   MEMBER INIT
========================= */

createMembers();

updateCounter();

/* =========================
   SECTION
========================= */

const memberBtn=document.getElementById("memberBtn");

const achievementBtn=document.getElementById("achievementBtn");

const managementBtn=document.getElementById("managementBtn");

const memberSection=document.getElementById("memberSection");

const achievementSection=document.getElementById("achievementSection");

/* =========================
   ACHIEVEMENT CREATE
========================= */

function createAchievements(){

achievementContainer.innerHTML="";

achievements.forEach(function(item){

const card=document.createElement("div");

card.className="achievementCard";

card.innerHTML=`

<h3>${item.title}</h3>

<p>${item.state}</p>

<p class="achievementDesc">
${item.description}
</p>

`;

achievementContainer.appendChild(card);

});

}

/* =========================
   PAGE CHANGE
========================= */

function showMembers(){

memberSection.style.display="block";

achievementSection.style.display="none";

window.scrollTo({

top:memberSection.offsetTop-30,

behavior:"smooth"

});

}

function showAchievements(){

memberSection.style.display="none";

achievementSection.style.display="block";

window.scrollTo({

top:achievementSection.offsetTop-30,

behavior:"smooth"

});

}

/* =========================
   DASHBOARD
========================= */

memberBtn.onclick=function(){

showMembers();

};

achievementBtn.onclick=function(){

showAchievements();

};

/* =========================
   ACHIEVEMENT INIT
========================= */

createAchievements();

showMembers();

/* =========================
   MANAGEMENT
========================= */

const managementPopup =
document.getElementById("managementPopup");

const adminPassword =
document.getElementById("adminPassword");

const adminBtn =
document.getElementById("adminBtn");

const adminMessage =
document.getElementById("adminMessage");

/* =========================
   OPEN
========================= */

managementBtn.onclick=function(){

managementPopup.style.display="flex";

adminPassword.value="";

adminMessage.textContent="";

adminPassword.focus();

};

/* =========================
   CLOSE
========================= */

function closeManagement(){

managementPopup.style.display="none";

adminPassword.value="";

adminMessage.textContent="";

}

/* =========================
   LOGIN
========================= */

function adminLogin(){

const value=adminPassword.value.trim();

if(value===ADMIN_PASSWORD){

adminMessage.textContent="ACCESS GRANTED";

setTimeout(function(){

window.location.href=
"https://ria0013.github.io/TeamFrontier/";

},400);

}

else{

adminMessage.textContent="ACCESS DENIED";

adminPassword.value="";

adminPassword.focus();

}

}

adminBtn.onclick=adminLogin;

/* =========================
   ENTER
========================= */

adminPassword.addEventListener("keydown",function(event){

if(event.key==="Enter"){

adminLogin();

}

});

/* =========================
   OUTSIDE CLICK
========================= */

managementPopup.addEventListener("click",function(event){

if(event.target===managementPopup){

closeManagement();

}

});

/* =========================
   ESC
========================= */

document.addEventListener("keydown",function(event){

if(event.key==="Escape"){

closeManagement();

}

});

/* =========================
   SYSTEM START
========================= */

function initializeSystem(){

createMembers();

updateCounter();

createAchievements();

showMembers();

updateClock();

}
