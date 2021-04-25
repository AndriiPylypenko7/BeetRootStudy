let modal = document.querySelector(".modal");
let openButton = document.querySelector(".open");
let closeButton = document.querySelector(".close");

openButton.addEventListener("click", function () {
  modal.style.transform = "translateY(50px)";
});
closeButton.addEventListener("click", function () {
  modal.style.transform = "translateY(-500px)";
});
