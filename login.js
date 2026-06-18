function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let foundUser = users.find(u => u.username === user && u.password === pass);

  if (!foundUser) {
    document.getElementById("loginMsg").innerText = "❌ Account not found";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(foundUser));

  document.getElementById("loginMsg").innerText = "✅ Login Successful!";

  setTimeout(() => {
    if (foundUser.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
  }, 1000);
}