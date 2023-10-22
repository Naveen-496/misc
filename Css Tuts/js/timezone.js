// Set the time zone string
let timeZoneString = 'America/Los_Angeles';

// Get the local time difference from the target time zone
let now = new Date();
let timeZoneOffset = new Date(now.toLocaleString('en-US', { timeZone: timeZoneString })).getTimezoneOffset();
let localTimeDiff = timeZoneOffset / 60;

// Set the start and end times in the target time zone
let startTimeString = '8:00';
let endTimeString = '18:00';

const date = new Date();
const time1String24 = '18:30';
const [hours, minutes] = endTimeString.split(':');
date.setHours(parseInt(hours, 10));
date.setMinutes(parseInt(minutes, 10));

 endTimeString = date.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});


// Convert the start and end times to the local time zone
let startDate = new Date('01/01/1970 ' + startTimeString + ' AM');
let endDate = new Date('01/01/1970 ' + endTimeString + ' PM');

startDate.setHours(startDate.getHours() + localTimeDiff);
endDate.setHours(endDate.getHours() + localTimeDiff);

// Display the local start and end times
let localStartTimeString = startDate.toLocaleTimeString('en-US');
let localEndTimeString = endDate.toLocaleTimeString('en-US');

console.log('Local start time: ' + localStartTimeString);
console.log('Local end time: ' + localEndTimeString);
