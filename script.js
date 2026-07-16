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

const generation4 = document.getElementById("generation4");

const generation5 = document.getElementById("generation5");

const generation6 = document.getElementById("generation6");

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

joinDate:"-",

status:"ONLINE",

message:"Team Frontier Leader"

},

{

name:"후유",

id:"huyu",

role:"Sub Leader",

generation:"staff",

joinDate:"-",

status:"ONLINE",

message:"Together We Move Forward."

},

{

name:"오애",

id:"oae",

role:"Manager",

generation:"staff",

joinDate:"-",

status:"RESTING",

message:"Management Support."

},

{

name:"슈팝",

id:"supop",

role:"Member",

generation:"1",

joinDate:"-",

status:"ONLINE",

message:""

},

{

name:"금꽃",

id:"geumkkot",

role:"Member",

generation:"1",

joinDate:"-",

status:"ONLINE",

message:""

},

{

name:"셰인",

id:"shane",

role:"Member",

generation:"1",

joinDate:"-",

status:"OFFLINE",

message:""

},

{

name:"서르설아",

id:"seoreuseola",

role:"Member",

generation:"1",

joinDate:"-",

status:"ONLINE",

message:""

},

{

name:"황치즈",

id:"hwangcheese",

role:"Member",

generation:"2",

joinDate:"-",

status:"RESTING",

message:""

},

{

name:"하진",

id:"hajin",

role:"Member",

generation:"2",

joinDate:"-",

status:"ONLINE",

message:""

},

{

name:"아키아나",

id:"akiana",

role:"Member",

generation:"2",

joinDate:"-",

status:"OFFLINE",

message:""

}

];

/* =========================
   ACHIEVEMENT DATABASE
========================= */

const achievements = [

{

title:"Frontier Pioneer",

state:"Earned"

},

{

title:"Story Writer",

state:"Earned"

},

{

title:"Coming Soon",

state:"Locked"

},

{

title:"Coming Soon",

state:"Locked"

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
