// Set the time zone string
let timeZoneString = 'America/Los_Angeles';

// Create a date object for now in the local time zone
let now = new Date();

// Get the time zone offset in minutes between the local time zone and the target time zone
let timeZoneOffset = new Date(now.toLocaleString('en-US', { timeZone: timeZoneString })).getTimezoneOffset();

// Convert the time zone offset to hours and display it in the console
let localTimeDiff = timeZoneOffset / 60;
console.log('Local time difference from ' + timeZoneString + ': ' + localTimeDiff + ' hours');

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timeZone);
