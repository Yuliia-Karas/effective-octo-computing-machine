const registerForm = document.querySelector(".signup-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const repeatPassword = form.elements.repeatPassword.value;

    if (name === "" || email === "" || password === "") {
        return console.log("Please fill in all the fields!");
    }

    if (password !== repeatPassword) {
        return console.log("Your passwords do not match!");
    }
    
    console.log(`Name: ${name}, email:${email}, password:${password}`);
    form.reset();
}

