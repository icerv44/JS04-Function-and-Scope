let calLeap = (years) => {
  if ((years % 4 === 0 && years % 100 === 0) || years % 400 === 0) {
    return years + " is leap years.";
  } else {
    return years + " isn't leap years.";
  }
};

console.log(calLeap(2022));
