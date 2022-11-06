import { useState } from "react";

export default function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };

  const setvalue = () => {
    setCount(24);
  };
  return [count, increment, decrement, setvalue, reset];
}
