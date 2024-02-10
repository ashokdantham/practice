import React, { useState } from 'react';
import Car from './CarBrandUseState';

function Counter() {
  // The useState hook returns an array with two elements:
  // The current state value (count in this case) and a function to update the state (setCount).
  // The initial state value (0 in this case) is passed as an argument to useState.
  let [count, setCount] = useState(0);
  console.log('Counter Component Rendered', count);


  // useState = [varibale, function]
  // const student = ['Soumya', 'React']/  [name, subject] = student;


  const increment = () => {
    // Use the setCount function to update the count state.
    // count = count + 1;
    //setCount(count + 1);
    count = count + 1;
    console.log('Incremented', count);
  };

  const doubleIncrement = () => {
    setCount(count + 2);
    console.log('Incremented', count);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onDoubleClick={doubleIncrement}>Increment</button>
        <Car />

    </div>
  );
}

export default Counter;
