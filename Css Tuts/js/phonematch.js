// const text = '<p>you can call us on <a href="tel:+11232342345" target="_self">123-234-3456</a>&nbsp;</p>\n';

// const phoneRegex = /\d{3}-\d{3}-\d{4}/;
// const phoneMatch = text.match(phoneRegex);

// if (phoneMatch) {
//   const phoneNumber = phoneMatch[0];
//   console.log(phoneNumber);
// } else {
//   console.log('No phone number found');
//}

const text =
  '<p>you can call us on <a href="tel:+11232342345" target="_self">123-234-3456</a>&nbsp;or <a href="tel:+11232345678" target="_self">123 456 5678</a></p>\n';

const phoneRegex = /\d{3}[- ]\d{3}[- ]\d{4}/g;
const phoneMatches = text.match(phoneRegex);

if (phoneMatches) {
  console.log(phoneMatches);
} else {
  console.log("No phone numbers found");
}
