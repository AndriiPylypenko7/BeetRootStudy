let button = document.querySelector(".button");

button.addEventListener("click", function table() {
  for (let i = 2; i < 10; i++) {
    let result = "";
    for (let j = 1; j <= 10; j++) {
      result += `${i} * ${j} = ${i * j} | `;
    }
    console.log(result);
    document.querySelector(`#out${i}`).textContent = result;
  }
});
