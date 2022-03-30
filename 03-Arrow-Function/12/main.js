let calFact = (num) => {
  let sum = 1;
  for (let i = num; i > 1; i--) {
    sum = sum * i;
  }

  return "Factorial : " + sum;
};

console.log(calFact(5));
