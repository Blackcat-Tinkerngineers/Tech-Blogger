async function loginFormHandler(event) {
  event.preventDefault();
  var email = document.querySelector("#email-login").value.trim();
  var password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    var response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response, "success");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();
  var username = document.querySelector("#username-signup").value.trim();
  var email = document.querySelector("#email-signup").value.trim();
  var password = document.querySelector("#password-signup").value.trim();
  if (username && email && password) {
    var response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
    } else {
      alert(response.statusText);
    }
    var responseTwo = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (responseTwo.ok) {
      console.log(response, "success");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#login-btn").addEventListener("click", loginFormHandler);

document.querySelector("#signup-btn").addEventListener("click", signupFormHandler);