const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
 

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const userData = {
    email,
    password,
  };

  fetch("https://backend-zb-yk.onrender.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.token;

      if (token) {
        document.cookie = `token=${token}; SameSite=None; Secure`;
      }

      console.log(data);
     loginForm.reset();
     window.location.href = "/index.html";

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}