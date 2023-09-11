import logo from "./logo.svg";
import "./App.css";
import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useMemo(() => {
    return () => {
      setCount(count + 1);
    };
  }, [count]);
  const handleSubmit = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <button onClick={handleClick}>adding</button>
        <button onClick={handleSubmit}>subtraction</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
