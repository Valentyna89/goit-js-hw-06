const inputForm = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputForm.addEventListener('input', changeName);

function changeName({ target }) {
    if (target.value !== '') {
        userName.textContent = target.value;
        return;
    }
    userName.textContent = "Anonymous";
}