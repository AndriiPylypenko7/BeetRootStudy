let out = document.querySelector(".result");
let button = document.querySelector(".button");

function def() {
  let a = document.querySelector(".input1").value;
  let b = document.querySelector(".input2").value;
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
button.addEventListener("click", function () {
  console.log(def());
  out.innerHTML = def();
});
