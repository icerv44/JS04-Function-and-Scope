function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * return x * 42  answer didn't fill in value for parameter
console.log(answer(1337)); // ** 56,154  because x = 1337 so 1337 * 42
console.log(magic(1337)(42)); // *** 1,764  x = 42 so 42 * 42
