"use client";
import React, { useState } from "react";

export default function Peekaboo() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <h1>Peekaboo!</h1> : <h1>Click it!</h1>}
    </div>
  );
}
