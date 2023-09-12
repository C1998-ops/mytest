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
const Header=()=>{
  return (
    <div className="header_div">
      <header className="header_wrap">
        <ul className="header_lists">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </header>
    </div>
  )
}
  return (
    <div className="App">
        <Header/>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <button onClick={handleClick} className="btn_count">adding</button>
        <button onClick={handleSubmit} className="btn_count">subtraction</button>

        </main>
    </div>
  );
}

export default App;
