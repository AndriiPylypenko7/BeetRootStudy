let out = document.querySelector(".result");
let button = document.querySelector(".button");
let a = document.querySelector(".input1");
let b = document.querySelector(".input2");

function area(x, y) {
  if (x < 0 || y < 0) {
    return `Вводите только положительные числа`;
  }
  if (x == 0) {
    out.style.width = `${y}cm`;
    out.style.height = `${y}cm`;
    return `${y * y} см	&sup2;`;
  }
  if (y == 0) {
    out.style.width = `${x}cm`;
    out.style.height = `${x}cm`;
    return `${x * x} см	&sup2;`;
  } else {
    out.style.width = `${x}cm`;
    out.style.height = `${y}cm`;
    return `${x * y} см	&sup2;`;
  }
}

button.addEventListener("click", function () {
  console.log(area(a.value, b.value));
  out.innerHTML = area(a.value, b.value);
  out.style.borderRadius = "15px";
  out.style.backgroundColor = "orange";
  out.style.display = "flex";
  out.style.justifyContent = "center";
  out.style.alignItems = "center";
});
