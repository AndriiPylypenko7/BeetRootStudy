let input1 = document.getElementById("first");
let input2 = document.getElementById("second");
let input3 = document.getElementById("third");
let button = document.querySelector(".button");

button.onclick = function () {
  let q1 = input1.value;
  let q2 = input2.value;
  let q3 = input3.value;
  let rating = 0;
  if (q1 == "0") {
    rating += 2;
  }
  if (q2 == "1") {
    rating += 2;
  }
  if (q3 == "2") {
    rating += 2;
  }
  console.log("Ваш результат: " + rating + "!");
  document.querySelector(".result").innerHTML =
    "Ваш результат: " + rating + "!";
};
