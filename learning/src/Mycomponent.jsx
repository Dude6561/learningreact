import React, { useState } from "react";

export default function Mycomponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const decreament = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <p1>{count}</p1> <br></br>
      <button onClick={increment}>Add</button>
      <button onClick={reset}>reset</button>
      <button onClick={decreament}>Decrease</button>
    </div>
  );
}
