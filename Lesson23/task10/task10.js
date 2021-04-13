let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let today = new Date(input.value);
  let nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  console.log("Следующим будет: " + nextDay);
  document.querySelector(".result").innerHTML = "Следующим будет: " + nextDay;
};
