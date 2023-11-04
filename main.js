const cl1 = document.querySelector(".collum1");
const cl2 = document.querySelector(".collum2");
const cl3 = document.querySelector(".collum3");
const timeNow = document.querySelector(".timeNow");
const allDay = document.querySelector(".allDay");

function countdownToLunarNewYear() {
  // Tính ngày Tết âm lịch
  const year = 2024; // Năm Âm lịch 2024 (Bính Thân)
  const lunarDate = LunarDate.fromGregorianDate(new Date(year, 1, 1)); // Chuyển đổi ngày Dương lịch thành Âm lịch
  const lunarYear = lunarDate.lunarYear;
  const lunarMonth = lunarDate.lunarMonth;
  const lunarDay = lunarDate.lunarDay;

  const tetDate = new Date(year, lunarMonth - 1, lunarDay); // Ngày Tết Âm lịch

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
