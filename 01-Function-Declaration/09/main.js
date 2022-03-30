let flag = 0;
let bool_checkNum = 0;

let msg = [];

function isValidNum(checkVal) {
  if (checkVal === null) {
    console.log("Is invalid Null");
    return true;
  }
  if (checkVal.trim() === "") {
    console.log("Is invalid Trim");
    return true;
  }
  if (isNaN(checkVal)) {
    console.log("Is invalid NaN");
    return true;
  }

  return false;

  //return checkVal === null || checkVal.trim() === ""  || isNaN(checkVal)
}

function checkPrime(num) {
  bool_checkNum = 0;
  //num = Number(num);

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      bool_checkNum = 1;
    }
  }
  if (bool_checkNum == 0) {
    msg.push(num);
  }
}

do {
  const inputNum = prompt("Input number :");
  if (isValidNum(inputNum)) {
    console.log("Please in put number");
  } else {
    for (let j = 2; j <= inputNum; j++) {
      checkPrime(j);
    }
    flag = 1;
  }
} while (flag == 0);
console.log("Prime number : " + msg.length + " numbers");
if (msg.length > 1) {
  msg.forEach((element) => console.log(element + "\n"));
}
