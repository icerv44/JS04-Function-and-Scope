function checkPermission(callback) {
  const input = prompt("User Name");
  callback(input);
}

function showAlert(txt) {
  if (txt.toUpperCase() === "ADMIN") {
    alert("ACCESS GRANTED");
  } else {
    alert("ACCESS DENIED");
  }
}

checkPermission(showAlert);
