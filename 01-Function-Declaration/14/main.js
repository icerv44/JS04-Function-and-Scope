function max(num1, num2, num3, num4) {
  let arrNum = [num1, num2, num3, num4];
  let max = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    max < arrNum[i] ? (max = arrNum[i]) : "";
  }

  return console.log(max);
}

max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
