let out = document.querySelector(".result");
let button = document.querySelector(".button");

button.addEventListener("click", function time() {
  let hours = document.querySelector(".input1").value;
  let mins = document.querySelector(".input2").value;
  let secs = document.querySelector(".input3").value;
  return (
    console.log(`Время - ${hours * 3600 + mins * 60 + secs * 1} секунд`),
    (out.innerHTML = `Время - ${hours * 3600 + mins * 60 + secs * 1} секунд`)
  );
});
