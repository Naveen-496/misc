let timeZoneString = "America/Los_Angeles";

// Get the local time difference from the target time zone
let now = new Date();
let timeZoneOffset1 = new Date(now.toLocaleString('en-US'));
console.log(timeZoneOffset1);
let timeZoneOffset = new Date(now.toLocaleString('en-US', { timeZone: timeZoneString }))
console.log(timeZoneOffset);
//  getTimezoneOffset();
let localTimeDiff = timeZoneOffset;
console.log(new Date().getHours());
console.log(localTimeDiff);