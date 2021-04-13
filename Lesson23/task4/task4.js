let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let year = input.value;
  if (year >= 0) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log("Этот год - высокосный");
      document.querySelector(".result").innerHTML = "Этот год - высокосный";
    } else {
      console.log("Этот год - не высокосный");
      document.querySelector(".result").innerHTML = "Этот год - не высокосный";
    }
  } else {
    console.log("Ведите корректное число");
    document.querySelector(".result").innerHTML = "Ведите корректное число";
  }
};
