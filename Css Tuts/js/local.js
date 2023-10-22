function convert24To12(timeString) {
  let [hours, minutes] = timeString.split(":");

  hours = parseInt(hours);

  let meridiem = hours < 12 ? "AM" : "PM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minutes} ${meridiem}`;
}

function getLocalTimes(time, targetTimeZone) {
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  const targetDate = new Date(
    `${new Date().toLocaleDateString("en-US", {
      timeZone: targetTimeZone,
      dateStyle: "medium",
    })} ${convert24To12(time)}`
  );

  console.log(targetDate);
  const localTime = targetDate.toLocaleTimeString("en-US", {
    timeZone: localTimeZone,
    hour: 'numeric',
    minute: 'numeric',
  });
 console.log(localTime);
  return localTime;
}

console.log(getLocalTimes("10:24", "America/Los_Angeles"));