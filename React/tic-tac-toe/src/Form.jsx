import { useRef } from "react";

export default function Form() {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.focus();
  }

  return (
    <div>
      <form action="">
        <input type="text" ref={myRef} />
      </form>

      <button onClick={handleClick}>click me</button>
    </div>
  );
}
