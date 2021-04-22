let button = document.querySelector(".button");
let out = document.querySelector(".result");

function numCheck(x) {
  if (isNaN(x)) {
    alert("Введите число!!!");
  } else {
    return Number(x);
  }
}

button.addEventListener("click", function devs() {
  do {
    let num1 = numCheck(prompt("Введите первое число"));
    let num2 = numCheck(prompt("Введите второе число"));
    if (!num1 || !num2) return;
    let action = prompt("Выберите знак - + / *");
    switch (action) {
      case "+":
        console.log(`${num1}  +  ${num2}  =  ${num1 + num2}`);
        out.innerHTML = `${num1}  +  ${num2}  =  ${num1 + num2}`;
        alert(`${num1}  +  ${num2}  =  ${num1 + num2}`);
        break;

      case "-":
        console.log(`${num1}  -  ${num2}  =  ${num1 - num2}`);
        out.innerHTML = `${num1}  -  ${num2}  =  ${num1 - num2}`;
        alert(`${num1}  -  ${num2}  =  ${num1 - num2}`);
        break;

      case "/":
        console.log(`${num1}  /  ${num2}  =  ${num1 / num2}`);
        out.innerHTML = `${num1}  /  ${num2}  =  ${num1 / num2}`;
        alert(`${num1}  /  ${num2}  =  ${num1 / num2}`);
        break;

      case "*":
        console.log(`${num1}  *  ${num2}  =  ${num1 * num2}`);
        out.innerHTML = `${num1}  *  ${num2}  =  ${num1 * num2}`;
        alert(`${num1}  *  ${num2}  =  ${num1 * num2}`);
      default:
        console.log(`Введите корректное действие (+ - / *)`);
        out.innerHTML = `Введите корректное действие (+ - / *)`;
        alert(`Введите корректное действие (+ - / *)`);
        break;
    }
  } while (confirm("Хотите попробовать ещё?"));
});
