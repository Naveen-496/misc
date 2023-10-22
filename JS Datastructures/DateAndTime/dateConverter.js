// Get the current date
var currentDate = new Date();

// Define the desired date format
var formatter = new Intl.DateTimeFormat('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

// Convert the date to the desired format
var formattedDate = formatter.format(currentDate);

// Print the formatted date
console.log("Formatted Date: " + formattedDate);
