let out = document.querySelector(".result");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
  let a = document.querySelector(".input1").value;
  let b = document.querySelector(".input2").value;
  let c = document.querySelector(".input3").value;
  if (a < 0 || b < 0 || c < 0) {
    return (
      console.log(`Вводите только положительные числа`),
      (out.innerHTML = `Вводите только положительные числа`)
    );
  } else {
    return console.log(a + b + c), (out.innerHTML = a + b + c);
  }
});
