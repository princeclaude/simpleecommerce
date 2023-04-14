function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

var x = document.getElementById("search");
let y = document.getElementById("search").value;
let z = document.getElementById("static-billboard");
x.addEventListener("input", function () {
  document.getElementById("big-banner").style.display = "none";
  document.getElementById("big-banner2").style.display = "block";
  document.getElementById("static-banner").style.displayback = "none";
 
});

// function cart() {
//   document.getElementById("nav4").style.color = "purple";
//   // document.getElementById("containerFlex").style.backgroundColor = "white";

//   document.getElementById("success").style.display = "block";
//   document
//     .getElementById("success")
//     .addEventListener("animationend", function () {
//       this.style.display = "none";
//     });
// }
let Body = document.querySelector("body");
function loginEnter() {
  document.getElementById("login1").style.display = "block";
  
  Body.style.overflowY = "hidden";
}

// let sales20 = document.getElementById("sales20");
// sales20.addEventListener("mouseover", function () {
//   document.getElementsByClassName("addbtn").style.display = "block";
// });

function over33() {
  document.getElementsByClassName("addbtn").style.display = "block";
}

// slide

let slideImage = document.querySelectorAll(".food");
console.log(slideImage);
let position = 0;
let arrowRight = document.getElementById("front");
let arrowLeft = document.getElementById("back");

function displayNone() {
  slideImage.forEach((food) => {
    food.style.display = "none";
  });
}

arrowLeft.addEventListener("click", () => {
  displayNone();
  if (position === 0) {
    position = slideImage.length;
  }
  position--;
  slideImage[position].style.display = "block";
});

arrowRight.addEventListener("click", zeb);
function zeb() {
  displayNone();
  if (position === slideImage.length - 1) {
    position = -1;
  }
  position++;
  slideImage[position].style.display = "block";
  setTimeout(zeb, 2000);
}

window.onload = zeb;

// slider end

let slideImage1 = document.querySelectorAll(".demanded");
console.log(slideImage);
let position1 = 0;
let arrowRight1 = document.getElementById("droit");
let arrowLeft1 = document.getElementById("gauche");

function displayNone() {
  slideImage1.forEach((demanded) => {
    demanded.style.display = "none";
  });
}

arrowLeft1.addEventListener("click", () => {
  displayNone();
  if (position1 === 0) {
    position1 = slideImage1.length;
  }
  position--;
  slideImage1[position1].style.display = "block";
});

arrowRight1.addEventListener("click", zebb);
function zebb() {
  displayNone();
  if (position1 === slideImage1.length - 1) {
    position1 = -1;
  }
  position1++;
  slideImage1[position1].style.display = "block";
  setTimeout(zebb, 3000);
}

window.onload = zebb;

// login
function uTurn() {
  document.getElementById("login1").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
}

// signup

function signUp() {
  document.getElementById("signup-container").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.getElementById("big-banner").style.display = "none";
  document.getElementById("big-banner2").style.display = "block";
 
}

function uTurnsgn() {
  document.getElementById("signup-container").style.display = "none"; 
  document.querySelector("body").style.overflow = "scroll";
  document.getElementById("big-banner").style.display = "block";
  document.getElementById("big-banner2").style.display = "none";
}

// log out

function logout() {
  document.getElementById("logoutDrop").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
 }

function logouttrue() {
   window.location.assign("pythonproject.html");
 }
function logoutfalse() {
   
   document.getElementById("logoutDrop").style.display = "none";
   document.querySelector("body").style.overflow = "scroll";
 }

//  submit signup
let pp = document.getElementById("container1");
function submiit() { 
  location.assign("dashboard.html");
  pp.body.style.overflow = "hidden";
}

 const timeout = setTimeout(appear, 1000);
 const timeout2 = setTimeout(appear2, 1000);

function appear() { 
  document.getElementById("arrowdown").style.display = "block";
}

function appear2() { 
  document.getElementById("arrowdown2").style.display = "block";
}


//  arrow down
function arrowDown() {
  document.querySelector("#end1").scrollIntoView({
    behavior: "smooth",
  });
}
function arrowUp() {
  document.querySelector("#container1").scrollIntoView({
    behavior: "smooth",
  });
}