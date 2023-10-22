import { useState } from "react";
import reactLogo from "./assets/react.svg"
import { Link } from "react-router-dom";


function Home(){

  const[count, setCount] = useState(0);

  return(
    <div className="App">
       <div>
          <a href="#">
            <img src="/vite.svg" className="logo" alt="Vite Logo" />
          </a>
          <a href="#">
            <img src={reactLogo} className="logo react" alt="" />
          </a>
       </div>
                 
       <h1>React + Vite</h1>

       <div className="card">
      <button onClick={() => setCount(count + 1)}
      >Count is {count}</button>

      <Link to="/"> App </Link>
      </div>
    </div>
  )
}

export default Home;