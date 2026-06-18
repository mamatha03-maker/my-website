function signup() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;

  if (user === "" || pass === "") {
    document.getElementById("signupMsg").innerText = "⚠ Fill all fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let existingUser = users.find(u => u.username === user);

  if (existingUser) {
    document.getElementById("signupMsg").innerText = "⚠ User already exists";
    return;
  }

  users.push({
    username: user,
    password: pass,
    role: "user"
  });

  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("signupMsg").innerText =
    "✅ Account created successfully!";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}