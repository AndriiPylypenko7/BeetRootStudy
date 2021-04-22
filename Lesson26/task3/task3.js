let out = document.querySelector(".result");
let button = document.querySelector(".button");
let select = document.querySelector(".select");
let change = document.querySelector(".change");

function getTime() {
  return {
    hours: document.querySelector(".hours").value,
    minutes: document.querySelector(".minutes").value,
    seconds: document.querySelector(".seconds").value,
  };
}

button.addEventListener("click", function () {
  time = getTime();
  //Проверка валидации введенных значений:
  if (time.hours == "") {
    time.hours = 0;
  }
  if (time.minutes == "") {
    time.minutes = 0;
  }
  if (time.seconds == "") {
    time.seconds = 0;
  }
  if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {
    out.style.color = "crimson";
    return (out.innerHTML = "Не вводите отрицательные значения!");
  }
  if (select.value == "def") {
    out.style.color = "crimson";
    return (out.innerHTML = "Выберите действие!");
  }
  //Преобразование значений времени:
  if (time.seconds > 59) {
    time.minutes = +time.minutes + Math.floor(time.seconds / 60);
    time.seconds = time.seconds % 60;
  }
  if (time.minutes > 59) {
    time.hours = +time.hours + Math.floor(time.minutes / 60);
    time.minutes = time.minutes % 60;
  }
  //Вывод времени на экран:
  if (select.value == "show") {
    out.style.color = "black";
    return (out.innerHTML = `Время - ${time.hours}:${time.minutes}:${time.seconds}`);
  }
  //Действие изменения часов
  if (select.value == "addHH") {
    out.style.color = "black";
    let res =
      +time.hours * 3600 +
      +time.minutes * 60 +
      +time.seconds +
      +change.value * 3600;
    time.hours = Math.floor(res / 3600);
    time.minutes = minutes = Math.floor(res / 60) - time.hours * 60;
    time.seconds = res % 60;
    return (out.innerHTML = `Время с учетом изменений - ${time.hours}:${time.minutes}:${time.seconds}`);
  }
  //Действие изменения минут
  if (select.value == "addMM") {
    out.style.color = "black";
    let res =
      +time.hours * 3600 +
      +time.minutes * 60 +
      +time.seconds +
      +change.value * 60;
    time.hours = Math.floor(res / 3600);
    time.minutes = minutes = Math.floor(res / 60) - time.hours * 60;
    time.seconds = res % 60;

    return (out.innerHTML = `Время с учетом изменений - ${time.hours}:${time.minutes}:${time.seconds}`);
  }
  //Действие изменения секунд
  if (select.value == "addSS") {
    out.style.color = "black";
    let res =
      +time.hours * 3600 + +time.minutes * 60 + +time.seconds + +change.value;
    time.hours = Math.floor(res / 3600);
    time.minutes = minutes = Math.floor(res / 60) - time.hours * 60;
    time.seconds = res % 60;
    return (out.innerHTML = `Время с учетом изменений - ${time.hours}:${time.minutes}:${time.seconds}`);
  }
});
