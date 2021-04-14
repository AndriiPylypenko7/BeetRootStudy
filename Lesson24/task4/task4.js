let button = document.querySelector(".button");
let out = document.querySelector(".result");
let input = document.querySelector(".input");

button.addEventListener("click", function devs() {
  let num = input.value;
  if (num < 0) {
    num = num * -1;
  }
  console.log("Количество цифр данного числа: " + String(num).length);
  out.innerHTML = "Количество цифр данного числа: " + String(num).length;
});
