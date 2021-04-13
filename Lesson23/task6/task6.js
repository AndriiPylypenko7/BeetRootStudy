let input = document.querySelector(".input");
let button = document.querySelector(".button");
let select = document.querySelector(".currency");

button.onclick = function () {
  let sum = +input.value;
  let currency = select.value;
  if (sum >= 0) {
    if (currency == "UAH") {
      console.log(sum * 28 + " " + currency);
      document.querySelector(".result").innerHTML = sum * 28 + " " + currency;
    } else if (currency == "AZN") {
      console.log(sum * 1.7 + " " + currency);
      document.querySelector(".result").innerHTML = sum * 1.7 + " " + currency;
    } else if (currency == "EUR") {
      console.log(sum * 0.84 + " " + currency);
      document.querySelector(".result").innerHTML = sum * 0.84 + " " + currency;
    }
  } else {
    console.log("Сумма должна быть не меньше 0");
    document.querySelector(".result").innerHTML =
      "Сумма должна быть не меньше 0";
  }
};
