let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everyone
}

logMessage(message);
console.log(message); // **  Welcom to thailand

let name = "John";

function sayHi(input) {
  console.log(name); // *** john
  name = input;
}

sayHi();
console.log(name); // **** Undefined
