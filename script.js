function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("msg").innerText =
      "Thank you " + name + "! We will contact you soon.";
  }

  return false; // stop page reload
}
function sendEmergency() {
  alert("🚨 Emergency Alert Sent!\nHelp will reach you soon.");

  // optional: you can also simulate calling
  console.log("Emergency request sent to support team");
}
function requestHelp() {
  let name = document.getElementById("rname").value;
  let age = document.getElementById("rage").value;
  let type = document.getElementById("rtype").value;
  let message = document.getElementById("rmessage").value;

  let newRequest = {
    name: name,
    age: age,
    type: type,
    message: message,
    status: "Pending"   // 👈 NEW
  };

  let requests = JSON.parse(localStorage.getItem("requests")) || [];
  requests.push(newRequest);

  localStorage.setItem("requests", JSON.stringify(requests));

  document.getElementById("rmsg").innerText =
    "✅ Request sent successfully! Status: Pending";

  return false;
}
function openChat() {
  alert("💬 Chat Support will be available soon!");
}

function showLocation() {
  alert("📍 Showing nearby elderly support centers...");
}
function toggleChat() {
  let box = document.getElementById("chatBox");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}

function sendMsg() {
  let input = document.getElementById("userMsg");
  let msg = input.value;

  if (msg === "") return;

  let chat = document.getElementById("chatMessages");

  let userMsg = document.createElement("p");
  userMsg.className = "user";
  userMsg.innerText = "🧓 " + msg;
  chat.appendChild(userMsg);

  let botMsg = document.createElement("p");
  botMsg.className = "bot";
  botMsg.innerText = "👩 Thank you! Our team will respond soon.";
  chat.appendChild(botMsg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
function showMapAlert() {
  alert("🗺️ Map feature will connect to Google Maps soon!\nShowing nearby support centers.");
}
function logout() {
  localStorage.removeItem("currentUser");
  alert("👋 Logged out successfully!");
  window.location.href = "login.html";
}
function showNotifications() {
  let notes = JSON.parse(localStorage.getItem("notifications")) || [];

  if (notes.length === 0) {
    alert("🔔 No notifications yet");
    return;
  }

  let message = "🔔 Your Notifications:\n\n";

  notes.forEach(n => {
    message += n.message + "\n" + n.time + "\n\n";
  });

  alert(message);
}
