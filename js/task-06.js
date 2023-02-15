const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', checkFn);

function checkFn(elem) {
    if (elem.currentTarget.value.length === Number(elem.currentTarget.dataset.length)) {
      updateClass("valid", "invalid");
      return;
    }
    updateClass('invalid', 'valid');
}

function updateClass(addClass, remClass) {
    inputEl.classList.add(addClass);
    inputEl.classList.remove(remClass)
}