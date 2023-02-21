const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const formData = { email, password };

  if (!email || !password) {
    return alert("Всі поля повинні бути заповнені");
  }
  console.log(formData);
  form.reset();
});
