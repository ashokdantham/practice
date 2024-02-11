import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result = result + 1;
    }
    return result;
  }, [number]); // Memoize based on the 'number' dependency

  const handleNumberChange = (event) => {
    setNumber(parseInt(event.target.value));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <label>
        Enter a number: <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <p>
        Factorial of {number} is: {factorial}
      </p>
      <button onClick={()=>{setCount(count+1)}}> {count}</button>
    </div>
  );
}

export default FactorialCalculator;
