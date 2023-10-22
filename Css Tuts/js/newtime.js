const startTimeString = '8:39 PM';
const endTimeString = '5:00 PM';
const timeZoneString = 'America/Los_Angeles';

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const startTime = new Date(`${new Date().toLocaleDateString('en-US', { timeZone, dateStyle: 'medium' })} ${startTimeString}`);

const endTime = new Date(`${new Date().toLocaleDateString('en-US', { timeZone, dateStyle: 'medium' })} ${endTimeString}`);

console.log(startTime.getHours());

const localStartTime = startTime.toLocaleString('en-US', { timeZone: timeZoneString });
const localEndTime = endTime.toLocaleString('en-US', { timeZone: timeZoneString });


console.log('Local start time:', localStartTime);
console.log('Local end time:', localEndTime);
