let button = document.querySelector(".button");
let colors = document.querySelectorAll(".color");
let stage = 0;

button.addEventListener("click", function switchColor() {
  switch (stage % 4) {
    case 0:
      colors[0].style.opacity = "1";
      colors[1].style.opacity = "0.1";
      colors[2].style.opacity = "0.1";
      break;
    case 1:
      colors[0].style.opacity = "1";
      colors[1].style.opacity = "1";
      colors[2].style.opacity = "0.1";
      break;
    case 2:
      colors[0].style.opacity = "0.1";
      colors[1].style.opacity = "0.1";
      colors[2].style.opacity = "1";
      break;
    case 3:
      colors[0].style.opacity = "0.1";
      colors[1].style.opacity = "1";
      colors[2].style.opacity = "0.1";
      break;
  }
  stage++;
});
