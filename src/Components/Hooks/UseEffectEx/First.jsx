import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    console.log('useEffect Just started, Mounting Phase');
  },[]);

    useEffect(() => {
        return () => {
            console.log('useEffect Just ended, Unmounting Phase, destroyed the component');
        };
    },[]);

    useEffect(() => {
        console.log('useEffect Just updated, Updating Phase, updated the component');
    },[count]);

    // useEffect(() => {
    //     alert('It will get called on every render');
    // });


  const increment = () => {
    setCount(count + 1);
  };
 

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;