import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }


  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }


  return (
    <div className="App">
      <div>
        <p className="num">{count}</p>
      </div>
      <button onClick={incrementCount} className="in">Increment</button>
      <button onClick={decrementCount} className="de">Decrement</button>
    </div>
  );
}

export default App;
 