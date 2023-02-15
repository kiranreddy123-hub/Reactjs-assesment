import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color;
  if (count <= 4) {
    color = "green";
  } else if (count <= 9) {
    color = "blue";
  } else {
    color = "red";
  }

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
       <button onClick={handleIncrement}>+</button>
       <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
