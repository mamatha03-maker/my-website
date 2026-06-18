window.onload = function () {
  loadRequests();
};

function loadRequests() {
  let table = document.getElementById("requestTable");
  let data = JSON.parse(localStorage.getItem("requests")) || [];

  data.forEach((req, index) => {
    let row = table.insertRow();

    row.insertCell(0).innerText = req.name;
    row.insertCell(1).innerText = req.age;
    row.insertCell(2).innerText = req.type;
    row.insertCell(3).innerText = req.message;

    // Status
    let statusCell = row.insertCell(4);
    statusCell.innerText = req.status;

    // Action buttons
    let actionCell = row.insertCell(5);

    actionCell.innerHTML = `
      <button onclick="updateStatus(${index}, 'Approved')">Approve</button>
      <button onclick="updateStatus(${index}, 'Completed')">Complete</button>
    `;
  });
}

function updateStatus(index, status) {
  let requests = JSON.parse(localStorage.getItem("requests")) || [];

  requests[index].status = status;

  // Save notification for user
  let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

  notifications.push({
    message: "📢 Your request is now " + status,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("notifications", JSON.stringify(notifications));
  localStorage.setItem("requests", JSON.stringify(requests));

  location.reload();
}