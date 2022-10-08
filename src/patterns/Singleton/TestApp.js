import React, { useState } from "react";
import singletonCounter from "./Counter";
import { counter } from "./CounterObject";

export default function SingletonTest() {
  const [count, setCounter] = useState(0);

  const handleInc = () => {
    setCounter(singletonCounter.getCount());
    setCounter(counter.increment());
  };

  const handleDec = () => {
    setCounter(singletonCounter.getCount());
    setCounter(counter.decrement());
  };

  return (
    <div>
      <h1>Singleton Test App</h1>
      <Increment onInc={handleInc} />
      <Decrement onDec={handleDec} />
      <p>Counter: {count}</p>
    </div>
  );
}

function Increment({ onInc }) {
  return (
    <div>
      <button onClick={onInc}>Increment</button>
    </div>
  );
}

function Decrement({ onDec }) {
  return (
    <div>
      <button onClick={onDec}>Decrement</button>
    </div>
  );
}
