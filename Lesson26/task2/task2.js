let out = document.querySelector(".result");
let out2 = document.querySelector(".result2");
let button = document.querySelector(".button");
let reduction = document.querySelector(".reduction");

function fraction(upNumber, downNumber) {
  return { upNumber: upNumber, downNumber: downNumber };
}

button.addEventListener("click", function () {
  let select = document.querySelector(".select");
  let numUpFirst = document.querySelector(".input1-1").value;
  let numDownFirst = document.querySelector(".input1-2").value;
  let numUpSec = document.querySelector(".input2-1").value;
  let numDownSec = document.querySelector(".input2-2").value;
  let firstDrobe = fraction(numUpFirst, numDownFirst);
  let secondDrobe = fraction(numUpSec, numDownSec);
  if (
    numUpFirst <= 0 ||
    numDownFirst <= 0 ||
    numUpSec <= 0 ||
    numDownSec <= 0
  ) {
    out.style.color = "crimson";
    return (out.innerHTML = "Введите значение больше 0");
  }
  if (numUpFirst > numDownFirst || numUpSec > numDownSec) {
    out.style.color = "crimson";
    return (out.innerHTML =
      "В данном задании числитель не может быть больше знаменателя!");
  }
  if (select.value == "def") {
    out.style.color = "crimson";
    return (out.innerHTML = `Выберите действие, которое нужно выполнить!`);
  }
  //сложение дробей:
  if (select.value == "plus") {
    out.style.color = "black";
    return (out.innerHTML = `Сумма двух дробей = ${
      firstDrobe.upNumber * secondDrobe.downNumber +
      secondDrobe.upNumber * firstDrobe.downNumber
    }/${firstDrobe.downNumber * secondDrobe.downNumber}`);
  }
  //вычитание дробей:
  if (select.value == "minus") {
    out.style.color = "black";
    return (out.innerHTML = `Вычитание двух дробей = ${
      firstDrobe.upNumber * secondDrobe.downNumber -
      secondDrobe.upNumber * firstDrobe.downNumber
    }/${firstDrobe.downNumber * secondDrobe.downNumber}`);
  }
  //умножение дробей:
  if (select.value == "multi") {
    out.style.color = "black";
    return (out.innerHTML = `Умножение двух дробей = ${
      firstDrobe.upNumber * secondDrobe.upNumber
    }/${firstDrobe.downNumber * secondDrobe.downNumber}`);
  }
  //деление дробей:
  if (select.value == "division") {
    out.style.color = "black";
    return (out.innerHTML = `Деление двух дробей = ${
      firstDrobe.upNumber * secondDrobe.downNumber
    }/${firstDrobe.downNumber * secondDrobe.upNumber}`);
  }
});
//сокращение дроби:
reduction.addEventListener("click", function reduction() {
  let numUp = document.querySelector(".input3-1").value;
  let numDown = document.querySelector(".input3-2").value;
  let drobe = fraction(numUp, numDown);

  if (drobe.upNumber <= 0 || drobe.downNumber <= 0) {
    out2.style.color = "crimson";
    return (out2.innerHTML = "Введите значение больше 0");
  }
  for (let i = drobe.upNumber; i >= 1; i--) {
    if (drobe.upNumber % i == 0 && drobe.downNumber % i == 0) {
      drobe.upNumber = drobe.upNumber / i;
      drobe.downNumber = drobe.downNumber / i;
    }
  }
  if (drobe.upNumber == drobe.downNumber) {
    out2.style.color = "black";
    return (out2.innerHTML = `Сокращение дроби = 1`);
  }
  out2.style.color = "black";
  return (out2.innerHTML = `Сокращение дроби = ${drobe.upNumber}/${drobe.downNumber}`);
});
