function convert24To12(timeString) {
  // Parse the time string into hours and minutes
  let [hours, minutes] = timeString.split(':');

  // Convert the hours from string to number
  hours = parseInt(hours);

  // Determine the meridiem (AM or PM)
  let meridiem = hours < 12 ? 'AM' : 'PM';

  // Convert the hours from 24-hour format to 12-hour format
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  // Return the time string in 12-hour format
  return `${hours}:${minutes} ${meridiem}`;
}

let timeString24 = '20:43';
let timeString12 = convert24To12(timeString24);
console.log(timeString12); // Output: '6:30 PM'


const date = new Date();
const time1String24 = '18:30';
const [hours, minutes] = timeString24.split(':');
date.setHours(parseInt(hours, 10));
date.setMinutes(parseInt(minutes, 10));

const time1String12 = date.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

console.log(time1String12); // Output: '6:30 PM'

const timeStr = "8:43 PM";
const[hr, mn] = timeStr.split(":");
console.log(hr);
