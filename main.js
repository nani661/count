const cl1 = document.querySelector(".collum1");
const cl2 = document.querySelector(".collum2");
const cl3 = document.querySelector(".collum3");
const timeNow = document.querySelector(".timeNow");
const allDay = document.querySelector(".allDay");
var today = new Date();
var countDatee = new Date("January 22, 2023 00:00:00").getTime();
setInterval(() => {
  let a = Math.floor(Math.random() * 30);
  let b = Math.floor(Math.random() * 30);
  let c = Math.floor(Math.random() * 30);
  cl1.style.height = `${a}em`;
  cl2.style.height = `${b}em`;
  cl3.style.height = `${c}em`;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var now = new Date().getTime();
  var gap = countDatee - now;

  let s = Math.floor((gap % minute) / second);
  let m = Math.floor((gap % hour) / minute);
  let h = Math.floor((gap % day) / hour);
  let d = Math.floor(gap / day);
  let newYear = new Date(25);
  timeNow.innerHTML = `${h <= 9 ? "0" : ""}${h}:${m <= 9 ? "0" : ""}${m}:${
    s <= 9 ? "0" : ""
  }${s}`;
  allDay.innerHTML = `${d} ngày`;
}, 1000);

var datem =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
// console.log(datem);

// code tham khao
