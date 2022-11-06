import React, { useReducer } from "react";
import { reducer, inntialState } from "./UseReducer";

export default function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, inntialState);
  return (
    <div>
      <div>count = {count}</div>

      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => count > 0 && dispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => dispatch("reset")}>Resett</button>
      <button onClick={() => dispatch("setvalue")}>Setvalue</button>
    </div>
  );
}
