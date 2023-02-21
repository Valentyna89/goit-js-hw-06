const widget = document.querySelector(".widget");
const colorSpan = widget.querySelector(".color");
const button = widget.querySelector(".change-color");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const color = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
