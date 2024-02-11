import React, { useState, useCallback } from 'react';

function Child({ callback }) {
  console.log('Child component rendering');
  return (
    <div>
      <button onClick={callback}>Click me</button>
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  // We use useCallback to memoize the callback function.
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]); // Memoize based on the 'count' dependency

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <Child callback={handleClick} />
    </div>
  );
}

export default Parent;
