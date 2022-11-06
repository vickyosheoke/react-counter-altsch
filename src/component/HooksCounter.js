import React from "react";
import useCounter from "./CustomHook";

export default function HooksCounter() {
  const [count, increment, decrement, setvalue, reset] = useCounter();

  return (
    <div>
      <div>count = {count}</div>

      <button onClick={increment}>Increment</button>
      <button onClick={() => count > 0 && decrement()}> Decrement</button>
      <button onClick={reset}> Reset</button>
      <button onClick={setvalue}> SetValue</button>
    </div>
  );
}
