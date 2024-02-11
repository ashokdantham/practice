 import React, {useState} from 'react'; 
 const useCounter = () => {

    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  const doubleIncrement = () => {
    setCount(prevCount => prevCount + 2);
  };

  const doubleDecrement = () => {
    setCount(prevCount => prevCount - 2);
  };


  const reset = () => {
    setCount(0);
  };
  return {count,increment, decrement, reset, doubleIncrement, doubleDecrement }

}
export default useCounter;