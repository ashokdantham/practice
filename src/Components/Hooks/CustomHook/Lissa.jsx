import useCounter from './CustomExample';
function Lissa() {
    const { count, doubleDecrement, doubleIncrement, reset } = useCounter();
  

  return (
    <div>
        <h2> Lissa Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={doubleIncrement}>Double Increment</button>
      <button onClick={doubleDecrement}>Double Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Lissa