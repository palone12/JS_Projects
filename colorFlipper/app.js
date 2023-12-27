const colors = ["green", "red", "rgba(133,133,223)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const headingColor = document.querySelector(".heading");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  headingColor.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
