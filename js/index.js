document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const signoutBtn = document.querySelector('.signout-btn');

    const token = getCookie('token');

    if (token) {
        signoutBtn.style.display = 'block';
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
    } else {
        signoutBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
    }
signoutBtn.addEventListener("click", function () {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "./index.html";
  });

//   // Функція для отримання значення cookie за іменем
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

})



  

