let button = document.querySelector(".button");
let out = document.querySelector(".result");

button.addEventListener("click", function () {
  let from = 0;
  let to = 100;
  let finish = false;

  let num;

  while (!finish) {
    num = from + Math.floor((to - from) / 2);
    if (confirm(`Ваше число > ${num}?`)) {
      if (num < 100) {
        from = num + 1;
      }
    } else if (confirm(`Ваше число < ${num}?`)) {
      if (num > 0) {
        to = num - 1;
      }
    } else if (confirm(`Ваше число == ${num}?`)) {
      finish = true;
    }
    if (to == from) {
      finish = true;
      num = to;
      confirm(`Ваше число == ${num}!`);
    }
  }
  console.log(`Ви загадали число - ${num}`);
  out.innerHTML = `Ви загадали число - ${num}`;
});
