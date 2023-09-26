const changeColorBtn = document.querySelector(".change-color");
const text = document.querySelector(".color");


changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}