import { useRef, useState } from "react";

export default function StopWatch() {
  const intervalref = useRef(0);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalref.current);

    intervalref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalref.current);
  }
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      TimePassed: {secondsPassed.toFixed(3)}
      <br />
      <button onClick={handleStart}>start</button>
      <span> </span>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}
