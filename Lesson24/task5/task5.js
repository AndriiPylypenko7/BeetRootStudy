let button = document.querySelector(".button");
let out = document.querySelector(".result");
let ul = {
  pos: 0,
  neg: 0,
  zero: 0,
  even: 0,
  odd: 0,
  all: [],
};

button.addEventListener("click", function devs() {
  let ul = {
    pos: 0,
    neg: 0,
    zero: 0,
    even: 0,
    odd: 0,
    all: [],
  };
  for (let i = 0; i < 10; i++) {
    const num = +prompt("Введите число");

    if (isNaN(num)) {
      continue;
    }

    if (num < 0) {
      ul.neg = ul.neg + 1;
    } else if (num > 0) {
      ul.pos = ul.pos + 1;
    } else {
      ul.zero = ul.zero + 1;
    }

    if (num % 2 === 0) {
      ul.even = ul.even + 1;
    } else {
      ul.odd = ul.odd + 1;
    }

    ul.all.push(num);
  }

  console.log(
    `Вы ввели: \n\ Положительные -  ${ul.pos}, \n\ Отрицательные -  ${ul.neg}, \n\ Нули - ${ul.zero}, \n\ Чет - ${ul.even}, \n\ Нечет - ${ul.odd}`
  );
  out.innerHTML = `Вы ввели: <br /> <br /> Положительные -  ${ul.pos}, <br /> Отрицательные -  ${ul.neg}, <br /> Нули - ${ul.zero}, <br /> Чет - ${ul.even}, <br /> Нечет - ${ul.odd}`;
});
