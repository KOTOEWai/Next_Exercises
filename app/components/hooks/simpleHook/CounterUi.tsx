import React from "react";
import { useCounter } from "./useCounter";

 function Counter({ initial = 0 }: { initial?: number }) {
  const { count, increment, decrement } = useCounter(initial);

  return (
    <div>
      <h1 data-testid="count">Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;