let button = document.querySelector(".button");
let out = document.querySelector(".result");

button.addEventListener("click", function () {
  let num = document.querySelector(".input1").value;
  let jump = document.querySelector(".input2").value;
  if (num < 0) {
    console.log("Введите положительное число");
    out.innerHTML = "Введите положительное число";
    return;
  }
  if (num % 1 != 0) {
    console.log("Введите целое число");
    out.innerHTML = "Введите целое число";
    return;
  }
  console.log(num.slice(jump) + num.slice(0, jump));
  out.innerHTML = num.slice(jump) + num.slice(0, jump);
});
