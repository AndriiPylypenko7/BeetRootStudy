let out = document.querySelector(".result");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
  let a = document.querySelector(".input1").value;
  let b = document.querySelector(".input2").value;
  if (a < b) {
    return console.log(-1), (out.innerHTML = -1);
  }
  if (a > b) {
    return console.log(1), (out.innerHTML = 1);
  } else {
    return console.log(0), (out.innerHTML = 0);
  }
});
