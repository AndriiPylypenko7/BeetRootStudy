let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let num = input.value;
  if (num >= 100 && num <= 999) {
    if (num[0] == num[1] || num[1] == num[2] || num[2] == num[0]) {
      console.log("Есть одинаковые цифры");
      document.querySelector(".result").innerHTML = "Есть одинаковые цифры";
    } else {
      console.log("Нет одинаковых цифр");
      document.querySelector(".result").innerHTML = "Нет одинаковых цифр";
    }
  } else {
    console.log("Введите число от 100 до 999!!!");
    document.querySelector(".result").innerHTML =
      "Введите число от 100 до 999!!!";
  }
};
