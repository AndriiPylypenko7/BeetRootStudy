let button = document.querySelector(".button");
let out = document.querySelector(".result");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

function gcd(a, b) {
  if (a < 0) {
    a = a * -1;
  }
  if (b < 0) {
    b = b * -1;
  }
  if (!b) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
button.addEventListener("click", () => {
  console.log(gcd(input1.value, input2.value));
  out.innerHTML =
    "Наибольший общий делитель = " + gcd(input1.value, input2.value);
});
