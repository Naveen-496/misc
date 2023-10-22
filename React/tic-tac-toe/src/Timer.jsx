import React, { useState, useEffect } from 'react';

const Timer = ({ expiryTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    // Calculate the total number of seconds remaining
    const totalSeconds = Math.floor((expiryTime - Date.now()) / 1000);
     console.log(Math.floor((expiryTime - Date.now())/1000));
    // Update the timer every second
    const timer = setInterval(() => {

      console.log((Date.now() - expiryTime));

      const remainingSeconds = Math.max(totalSeconds - Math.floor((Date.now() - expiryTime) / 1000), 0);

     // console.log(remainingSeconds);

      // Calculate minutes and seconds
      const updatedMinutes = Math.floor(remainingSeconds / 60);
      const updatedSeconds = remainingSeconds % 60;

      setMinutes(updatedMinutes);
      setSeconds(updatedSeconds);

      // Clear the timer when it reaches 0
      if (remainingSeconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Clean up the timer on unmount
    return () => clearInterval(timer);
  }, [expiryTime]);

  return (
    <div>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
