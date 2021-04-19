let out = document.querySelector(".result");
let button = document.querySelector(".button");

button.addEventListener("click", function time() {
  let hoursOne = document.querySelector(".input1").value;
  let minsOne = document.querySelector(".input2").value;
  let secsOne = document.querySelector(".input3").value;
  let hoursTwo = document.querySelector(".input4").value;
  let minsTwo = document.querySelector(".input5").value;
  let secsTwo = document.querySelector(".input6").value;
  let resultOne = hoursOne * 3600 + minsOne * 60 + secsOne * 1;
  let resultTwo = hoursTwo * 3600 + minsTwo * 60 + secsTwo * 1;
  let result = resultOne - resultTwo;
  if (result < 0) {
    result = result * -1;
  }
  const hours = Math.floor(result / 3600);
  const minutes = Math.floor(result / 60) - hours * 60;
  const seconds = result % 60;
  return (
    console.log(`Разница времени - ${hours}:${minutes}:${seconds}`),
    (out.innerHTML = `Разница времени - ${hours}:${minutes}:${seconds}`)
  );
});
