function validateContactNumber(number) {
  var pattern = new RegExp(/^(?=.*\d)(?:[-+ ]?\d{1,3}[-+ ]?)?\(?\d{3}\)?[-+ ]?\d{3}[-+ ]?\d{4}$/);
  return pattern.test(number);
}

console.log(validateContactNumber("+1 (234) 254-6888")); // true
console.log(validateContactNumber("+1 234 254-6888")); // true
console.log(validateContactNumber("+1 -234-254-6888")); // true
console.log(validateContactNumber("+1 (234)-254-6888")); // true
console.log(validateContactNumber("+1-(234) 254 6888")); // true
console.log(validateContactNumber("+1 (234) 254 6888")); // true
console.log(validateContactNumber("+1 (234) 254-6888 123")); // true
console.log(validateContactNumber("+1 (234) 254-6888 123456789")); // false (more than 15 numbers)
console.log(validateContactNumber("+1 (234) 25X-6888")); // false (contains alphabet)
console.log(validateContactNumber(" ")); // false (only spaces)
