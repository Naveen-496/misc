

let date = new Date();
let formattedDate = date.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}).split('/').reverse().join('-');
console.log(formattedDate);
