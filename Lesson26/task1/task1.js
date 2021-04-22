let outOne = document.querySelector(".result1");
let outTwo = document.querySelector(".result2");
let buttonOne = document.querySelector(".button1");
let buttonTwo = document.querySelector(".button2");
function getCar() {
  return {
    produced: document.querySelector(".prod").value,
    model: document.querySelector(".model").value,
    year: document.querySelector(".year").value,
    avgSpeed: document.querySelector(".avgspeed").value,
  };
}
buttonOne.addEventListener("click", function carInfo() {
  car = getCar();
  if (
    car.produced == "" ||
    car.model == "" ||
    car.year == "" ||
    car.avgSpeed == ""
  ) {
    return (outOne.innerHTML = "Заполните все поля");
  }
  if (car.year < 1985) {
    return (outOne.innerHTML = "Пора менять машину на новую)))");
  }
  if (car.year > 2021) {
    return (outOne.innerHTML = "Такую машину еще не изобрели)))");
  }
  if (car.avgSpeed <= 0) {
    return (outOne.innerHTML = "Скорость должна быть больше 0");
  }
  let out = "";
  for (let key in car) {
    out += key + " - " + car[key] + "<br>";
  }
  outOne.innerHTML = out;
});
buttonTwo.addEventListener("click", function () {
  car = getCar();
  let distance = document.querySelector(".distance").value;
  if (distance < 0) {
    return (outTwo.innerHTML = "Расстояние не может быть отрицательным");
  }
  if (distance == 0 || distance == "") {
    return (outTwo.innerHTML = "Заводи машину и поехали!!!");
  }
  let time = distance / car.avgSpeed;
  let rest = time / 5;
  let fullTime = (time + rest) * 3600;
  const hours = Math.floor(fullTime / 3600);
  const minutes = Math.floor(fullTime / 60) - hours * 60;
  const seconds = fullTime % 60;
  return (outTwo.innerHTML = `Вы проедете весь путь за ${hours}:${minutes}:${Math.floor(
    seconds
  )} с учётом перерывов`);
});
