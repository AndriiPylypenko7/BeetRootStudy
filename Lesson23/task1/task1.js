let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let num = +input.value;
  if (num >= 0 && num <= 2) {
    console.log("Ребёнок");
    document.querySelector(".result").innerHTML = "Ребёнок";
  } else if (num > 2 && num < 12) {
    console.log("Уже не ребёнок, но ещё не подросток))");
    document.querySelector(".result").innerHTML =
      "Уже не ребёнок, но ещё не подросток))";
  } else if (num >= 12 && num < 18) {
    console.log("Подросток");
    document.querySelector(".result").innerHTML = "Подросток";
  } else if (num >= 18 && num < 60) {
    console.log("Взрослый");
    document.querySelector(".result").innerHTML = "Взрослый";
  } else if (num >= 60 && num <= 120) {
    console.log("Пенсионер");
    document.querySelector(".result").innerHTML = "Пенсионер";
  } else if (num > 120) {
    console.log("Эльф");
    document.querySelector(".result").innerHTML = "Эльф";
  }
};
