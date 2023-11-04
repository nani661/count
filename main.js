const cl1 = document.querySelector(".collum1");
const cl2 = document.querySelector(".collum2");
const cl3 = document.querySelector(".collum3");
const timeNow = document.querySelector(".timeNow");
const allDay = document.querySelector(".allDay");

function countdownToTet() {
  var countDate = new Date("2024-01-22T00:00:00Z").getTime(); // Đặt ngày Tết
  var now = new Date().getTime();
  var gap = countDate - now;

  if (gap <= 0) {
    // Tết đã đến hoặc đã qua
    timeNow.innerHTML = "Chúc mừng năm mới!";
    allDay.innerHTML = "0 ngày";
    return;
  }

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var s = Math.floor((gap % minute) / second);
  var m = Math.floor((gap % hour) / minute);
  var h = Math.floor((gap % day) / hour);
  var d = Math.floor(gap / day);

  timeNow.innerHTML = `${h <= 9 ? "0" : ""}${h}:${m <= 9 ? "0" : ""}${m}:${s <= 9 ? "0" : ""}${s}`;
  allDay.innerHTML = `${d} ngày`;
}

setInterval(countdownToTet, 1000);
countdownToTet(); // Gọi hàm này ngay khi trang web được tải lần đầu.

var datem = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
