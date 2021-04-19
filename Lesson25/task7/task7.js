let out = document.querySelector(".result");
let hours = document.querySelector(".input1");
let mins = document.querySelector(".input2");
let secs = document.querySelector(".input3");
let button = document.querySelector(".button");

function time(hh, mm = 0, ss = 0) {
  if (mm < 0 || mm > 59 || mm == "") {
    mm = "00";
  }
  if (ss < 0 || ss > 59 || ss == "") {
    ss = "00";
  }
  return (
    console.log(`Время - ${hh}:${mm}:${ss}`),
    (out.innerHTML = `Время - ${hh}:${mm}:${ss}`)
  );
}
button.addEventListener("click", () => {
  time(hours.value, mins.value, secs.value);
});
