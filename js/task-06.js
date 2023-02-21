const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', checkFn);

function checkFn(e) {
    if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
      updateClass("valid", "invalid");
      return;
    }
    updateClass('invalid', 'valid');
}

function updateClass(addClass, remClass) {
    inputEl.classList.add(addClass);
    inputEl.classList.remove(remClass)
}