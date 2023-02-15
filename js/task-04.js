const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrement);
refs.incrementBtn.addEventListener('click', onIncrement);

function onDecrement() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
}
function onIncrement() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};
