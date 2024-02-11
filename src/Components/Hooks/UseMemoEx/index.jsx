import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const SumOperation = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= number; j++) {
        for (let k = 1; k <= number; k++) {
          for (let l = 1; l <= number; l++) {
            result = result + i + j + k + l;  
      
          }
      
        }
      
      }
      
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
        Factorial of {number} is: {SumOperation}
      </p>
      <button onClick={()=>{setCount(count+1)}}> {count}</button>
    </div>
  );
}

export default FactorialCalculator;
