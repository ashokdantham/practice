import React, { useState } from 'react';
import useCounter from './CustomExample';



function Counter() {
    const { count, increment, decrement, reset } = useCounter();
  

  return (
    <div>
              <h2> Ravi Component</h2>

      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}


export default Counter;
