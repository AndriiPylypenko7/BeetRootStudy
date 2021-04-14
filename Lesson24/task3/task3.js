let button = document.querySelector(".button");
let out = document.querySelector(".result");
let input = document.querySelector(".input");

button.addEventListener("click", function devs() {
  let num = input.value;
  if (num < 0) {
    num = num * -1;
  }
  if (num == 0) {
    console.log('Введите любое число, кроме "0"');
    out.innerHTML = 'Введите любое число, кроме "0"';
  } else {
    let result = "";
    let i = num;

    result += num;

    do {
      i--;
      if (num % i == 0) {
        result += ", " + i;
      }
    } while (i > 0);
    console.log("Все делители данного числа: " + result);
    out.innerHTML = "Все делители данного числа: " + result;
  }
});
