let chk = 0;

function checkNumber(input) {
  if (input === null || isNaN(input) || input.trim() === "") {
    return false;
  }
  return true;
}
do {
  const input1 = prompt("Input 1 :");

  if (checkNumber(input1) === false) {
    alert("input1 invalid");
  } else {
    do {
      const input2 = prompt("Input 2 :");
      if (checkNumber(input2) === false) {
        alert("input2 invalid");
      } else {
        alert("Sum : " + input1 * input2);
        chk = 1;
      }
    } while (chk == 0);
  }
} while (chk == 0);
