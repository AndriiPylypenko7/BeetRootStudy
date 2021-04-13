let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let num = +input.value;
  if (num >= 0) {
    if (num >= 200 && num < 300) {
      console.log(
        "К оплате: " +
          (num * 0.97).toFixed(2) +
          ". " +
          "Скидка: " +
          (num * 0.03).toFixed(2)
      );
      document.querySelector(".result").innerHTML =
        "К оплате: " +
        (num * 0.97).toFixed(2) +
        "<br />" +
        "Скидка: " +
        (num * 0.03).toFixed(2);
    } else if (num >= 300 && num < 500) {
      console.log(
        "К оплате: " +
          (num * 0.95).toFixed(2) +
          ". " +
          "Скидка: " +
          (num * 0.05).toFixed(2)
      );
      document.querySelector(".result").innerHTML =
        "К оплате: " +
        (num * 0.95).toFixed(2) +
        "<br />" +
        "Скидка: " +
        (num * 0.05).toFixed(2);
    } else if (num >= 500) {
      console.log(
        "К оплате: " +
          (num * 0.93).toFixed(2) +
          ". " +
          "Скидка: " +
          (num * 0.07).toFixed(2)
      );
      document.querySelector(".result").innerHTML =
        "К оплате: " +
        (num * 0.93).toFixed(2) +
        "<br />" +
        "Скидка: " +
        (num * 0.07).toFixed(2);
    } else {
      console.log("К оплате: " + num);
      document.querySelector(".result").innerHTML = "К оплате: " + num;
    }
  } else {
    console.log("Сумма должна быть не меньше 0");
    document.querySelector(".result").innerHTML =
      "Сумма должна быть не меньше 0";
  }
};
