let bool_checkNum = 0;
let checkPrimeNumber = (num) => {
  bool_checkNum = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      bool_checkNum = 1;
    }
  }
  if (bool_checkNum == 0) {
    alert(num + "is a prime number");
  } else {
    alert(num + ": isn't prime number");
  }
};

const input = prompt("Input Number");

if (isNaN(input)) {
  alert(num + ": isn't number");
} else {
  checkPrimeNumber(input);
}
