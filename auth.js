function signup() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({
    username: newUser.value,
    password: newPass.value,
    role: "user"
  });

  localStorage.setItem("users", JSON.stringify(users));

  msg.innerText = "Account created";
}

function login() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find(u =>
    u.username === user.value && u.password === pass.value
  );

  if (!found) {
    msg.innerText = "Invalid";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(found));

  window.location.href = "index.html";
}