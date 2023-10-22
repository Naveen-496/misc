import { useState } from "react";
import "./App.css";

import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(Date.now() + 30000);

  function handleReset () {
    setTimer(Date.now() + 30000)
  }

  return (
    <div className="App">
      <h2>Hello</h2>
     <Timer expiryTime={timer}/>
     <div></div>
     <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
