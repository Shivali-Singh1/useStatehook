import React, { useState } from "react";
import "./App.css";

function CountApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="App-header">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default CountApp;
