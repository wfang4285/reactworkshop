"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => {
            setCount((count) => count + 1);
            setCount((count) => count + 1);
            setCount((count) => count + 1);
        }}>
            Increment
        </button>
    </div>
  );
}


