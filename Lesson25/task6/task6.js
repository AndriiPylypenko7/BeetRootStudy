let out = document.querySelector(".result");
let button = document.querySelector(".button");

function perfNum(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  return sum === num;
}

button.addEventListener("click", function () {
  let num1 = document.querySelector(".input1").value;
  let num2 = document.querySelector(".input2").value;
  let result = [];

  for (let i = num1; i <= num2; i++) {
    if (perfNum(i)) {
      result.push(i);
    }
  }

  return (
    (out.innerHTML = `Совершенные числа в выбранном диапазоне: ${result}`),
    console.log(`Совершенные числа в выбранном диапазоне: ${result}`)
  );
});
