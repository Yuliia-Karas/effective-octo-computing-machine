const form = document.querySelector(".signup-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  const {
    elements: { name, email, password, repeatPassword },
  } = event.currentTarget;
  console.log(name.value, email.value, password.value, repeatPassword.value);
});
