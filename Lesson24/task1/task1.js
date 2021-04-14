let button = document.querySelector(".button");
let out = document.querySelector(".result");

button.onclick = function () {
  let input1 = +document.querySelector(".input1").value;
  let input2 = +document.querySelector(".input2").value;
  let sum = 0;
  if (input1 <= input2) {
    while (input1 <= input2) {
      sum += input1;
      input1++;
    }
    console.log(`Сумма всех чисел диапазона = ${sum}`);
    out.innerHTML = `Сумма всех чисел диапазона = ${sum}`;
  } else {
    while (input1 >= input2) {
      sum += input1;
      input1--;
    }
    console.log(`Сумма всех чисел диапазона = ${sum}`);
    out.innerHTML = `Сумма всех чисел диапазона = ${sum}`;
  }
};
