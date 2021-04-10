let inputCircle = document.querySelector(".input1");
let inputSquare = document.querySelector(".input2");
let button = document.querySelector(".button");

button.onclick = function () {
  let circleD = +inputCircle.value / 3.14;
  let squareS = +inputSquare.value / 4;
  if (circleD <= squareS) {
    console.log("Данный круг поместится в квадрат");
    document.querySelector(".result").innerHTML =
      "Данный круг поместится в квадрат";
  } else {
    console.log("Данный круг не поместится в квадрат");
    document.querySelector(".result").innerHTML =
      "Данный круг не поместится в квадрат";
  }
};
