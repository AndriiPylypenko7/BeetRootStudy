let out = document.querySelector(".result");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
  let n = document.querySelector(".input").value;
  let sum = n - 1;
  let temp = n;

  for (let i = 2; n > 1; ) {
    if (!(n % i)) {
      sum -= i;
      n = n / i;
    } else i++;
  }

  if (!sum)
    console.log("Число: " + temp + " является совершенным"),
      (out.innerHTML = "Число: " + temp + " является совершенным");
  else
    console.log("Число: " + temp + " не является совершенным"),
      (out.innerHTML = "Число: " + temp + " не является совершенным");
});
