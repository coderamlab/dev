const loginForm = document.querySelector("form");
const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "example" && password === "password") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard page
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
