function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}

console.log(checkAge(19));
console.log(checkAge(10));

function checkAge2(age) {
  age > 18 ? true : confirm("Did parents allow you?");
}

console.log(checkAge2(19));
console.log(checkAge2(10));

function checkAge3(age) {
  return age > 18 || confirm("Did parents allow you?");
}

console.log(checkAge3(19));
console.log(checkAge3(10));
