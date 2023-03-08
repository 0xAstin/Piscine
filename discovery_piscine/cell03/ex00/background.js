const button = document.getElementById("change-color-btn");

button.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
