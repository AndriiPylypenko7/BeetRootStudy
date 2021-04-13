let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let num = input.value;
  let numReverse = num.split("").reverse().join("");
  if (num >= 10000 && num <= 99999) {
    if (num == numReverse) {
      console.log("Это число - палиндром");
      document.querySelector(".result").innerHTML = "Это число - палиндром";
    } else {
      console.log("Это число - не палиндром");
      document.querySelector(".result").innerHTML = "Это число - не палиндром";
    }
  } else {
    console.log("Введите пятизначное число");
    document.querySelector(".result").innerHTML = "Введите пятизначное число";
  }
};
