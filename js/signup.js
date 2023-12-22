const registerForm = document.querySelector(".signup-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const repeatPassword = document.querySelector(
    'input[name="repeatPassword"]'
  ).value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }

  if (password !== repeatPassword) {
    alert("Passwords do not match!");
    return;
  }

  const userData = {
    name: name,
    email: email,
    password: password,
  };

  fetch("https://backend-zb-yk.onrender.com/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status:${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const token = data.token;

      if (token) {
        document.cookie = `token=${token}; SameSite=None; Secure`;
        console.log("Token set in cookie:", token);
      } else {
        console.error("Token not found in the server response:", data);
      }

      registerForm.reset();
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


