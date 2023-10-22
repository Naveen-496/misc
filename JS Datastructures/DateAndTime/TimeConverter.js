// Get the current local time
var currentTime = new Date();

// Define the options for formatting the time
var options = { hour: "2-digit", minute: "2-digit", hour12: false };

// Convert the local time to the desired format
var formattedTime = currentTime.toLocaleTimeString([], options);

// Print the formatted time
console.log("Formatted Time: " + formattedTime);
