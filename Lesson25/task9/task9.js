let out = document.querySelector(".result");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
  let sec = document.querySelector(".input").value;
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) - hours * 60;
  const seconds = sec % 60;

  return (
    console.log(`Время - ${hours}:${minutes}:${seconds}`),
    (out.innerHTML = `Время - ${hours}:${minutes}:${seconds}`)
  );
});
