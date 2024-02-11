import { useState } from 'react';

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return { count, increment, decrement, reset };
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
