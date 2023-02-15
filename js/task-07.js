const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

console.log(inputRef.value);

const changeHandler = (event) => {
  textRef.style.fontSize = inputRef.value + "px";
};

inputRef.addEventListener("input", changeHandler);
