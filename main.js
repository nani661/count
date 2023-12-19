const cl1 = document.querySelector(".collum1");
const cl2 = document.querySelector(".collum2");
const cl3 = document.querySelector(".collum3");
const timeNow = document.querySelector(".timeNow");
const allDay = document.querySelector(".allDay");

function countdownToLunarNewYear() {
  // Đặt ngày Tết Nguyên Đán âm lịch 2024 (ví dụ: 10 tháng 2, 2024)
  const tetDate = new Date(2024, 1, 10); // Tháng 2 = tháng 1 theo chỉ số (0-11)

  const now = new Date();
  const gap = tetDate.getTime() - now.getTime();

  if (gap <= 0) {
    // Tết đã đến hoặc đã qua
    timeNow.innerHTML = "Chúc mừng năm mới!";
    allDay.innerHTML = "0 ngày";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const s = Math.floor((gap % minute) / second);
  const m = Math.floor((gap % hour) / minute);
  const h = Math.floor((gap % day) / hour);
  const d = Math.floor(gap / day);

  timeNow.innerHTML = `${h <= 9 ? "0" : ""}${h}:${m <= 9 ? "0" : ""}${m}:${s <= 9 ? "0" : ""}${s}`;
  allDay.innerHTML = `${d} ngày`;
}

setInterval(countdownToLunarNewYear, 1000);
countdownToLunarNewYear(); // Gọi hàm này ngay khi trang web được tải lần đầu.
