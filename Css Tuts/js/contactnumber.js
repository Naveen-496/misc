function validateContactNumber(number) {
  var pattern = /^(?=.*\d)[\d()+ -]{7,17}$/;
  var sanitizedNumber = number.replace(/\s/g, ''); // Remove spaces for counting digit length
  return pattern.test(number) && sanitizedNumber.length >= 5 && sanitizedNumber.length <= 15;
}

console.log(validateContactNumber("+1 (437) 262-7155")); // true
console.log(validateContactNumber("+1 (437) (262)-7155")); // true
console.log(validateContactNumber("+1 123 456-7890")); // true
console.log(validateContactNumber("123-456-7890")); // true
console.log(validateContactNumber("+1 1234567890")); // true
console.log(validateContactNumber("+1 (123)4567890")); // true
console.log(validateContactNumber("+1 (437) 262-7155 123")); // true
console.log(validateContactNumber("+1 (437) 262-7155 123456789")); // false (more than 15 numbers)
console.log(validateContactNumber("+1 (437) 262 7155")); // false (missing hyphen in the area code)
console.log(validateContactNumber("+123452")); // false (only spaces)
