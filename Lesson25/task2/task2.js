let out = document.querySelector(".result");
let button = document.querySelector(".button");
let num = document.querySelector(".input");

function factorial(a) {
  if (a == 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

button.addEventListener("click", function () {
  console.log(factorial(num.value));
  out.innerHTML = factorial(num.value);
});
