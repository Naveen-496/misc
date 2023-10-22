import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="home-header">
        <nav className="home-nav">
          <div className="nav-item">
            <Link to="/add-user">Add User</Link>
          </div>
        </nav>
      </header>
      <div>Hello, World</div>
    </div>
  );
}

export default App;
