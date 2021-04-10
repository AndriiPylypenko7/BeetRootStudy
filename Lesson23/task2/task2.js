let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let num = +input.value;
  switch (num) {
    case 0:
      console.log(")");
      document.querySelector(".result").innerHTML = ")";
      break;
  }
  switch (num) {
    case 1:
      console.log("!");
      document.querySelector(".result").innerHTML = "!";
      break;
  }
  switch (num) {
    case 2:
      console.log("@");
      document.querySelector(".result").innerHTML = "@";
      break;
  }
  switch (num) {
    case 3:
      console.log("#");
      document.querySelector(".result").innerHTML = "#";
      break;
  }
  switch (num) {
    case 4:
      console.log("$");
      document.querySelector(".result").innerHTML = "$";
      break;
  }
  switch (num) {
    case 5:
      console.log("%");
      document.querySelector(".result").innerHTML = "%";
      break;
  }
  switch (num) {
    case 6:
      console.log("^");
      document.querySelector(".result").innerHTML = "^";
      break;
  }
  switch (num) {
    case 7:
      console.log("&");
      document.querySelector(".result").innerHTML = "&";
      break;
  }
  switch (num) {
    case 8:
      console.log("*");
      document.querySelector(".result").innerHTML = "*";
      break;
  }
  switch (num) {
    case 9:
      console.log("(");
      document.querySelector(".result").innerHTML = "(";
      break;
  }
  if (num > 9) {
    console.log("Введите число от 0 до 9!!!");
    document.querySelector(".result").innerHTML = "Введите число от 0 до 9!!!";
  } else if (num < 0) {
    console.log("Введите число от 0 до 9!!!");
    document.querySelector(".result").innerHTML = "Введите число от 0 до 9!!!";
  }
};
