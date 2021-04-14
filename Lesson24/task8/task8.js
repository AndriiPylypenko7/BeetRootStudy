let button = document.querySelector(".button");
let out = document.querySelector(".result");

button.addEventListener("click", function () {
  let days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  let now = 0;

  while (confirm(`Сейчас ${days[now]}. Хотите увидеть следующий день?`)) {
    console.log(days[now]);
    out.innerHTML = `Вы закончили цикл на - ${days[now]}.`;
    now = (now + 1) % days.length;
  }
});
