let chk = 0;

function loginCheck(user, passW) {
  if (user == "admin" && passW) {
    return true;
  }
  return false;
}
do {
  const user = prompt("User");
  const passW = prompt("Password");

  if (loginCheck(user, passW)) {
    alert("Login successed");
    chk = 1;
  } else {
    alert("Login fail please try again");
  }
} while (chk == 0);
