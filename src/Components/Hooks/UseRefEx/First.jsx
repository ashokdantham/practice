import React, { useRef } from 'react';

function App() {
  // Create a ref using the useRef hook
  const inputRef = useRef(null);
//   const buttonRef = useRef(null)
console.log('value', inputRef?.current?.value)

  const handleButtonClick = () => {
    // Access the DOM element using the current property of the ref
    inputRef.current.focus();
  };
  const setDefaultValue = () => {
    // Access the DOM element using the current property of the ref
    inputRef.current.value = "React";
  }

  
  return (
    <div>
        <label>Enter your text: </label>
      <input type="text" ref={inputRef}  />
      <br></br>
      <br></br>

      <button onClick={handleButtonClick}>Focus Input</button>
      <br></br>

      <br></br>

      <button  onClick={setDefaultValue}>Set Value as React</button>
      <br></br>
      <br></br>



<br></br>
      <br></br>


    </div>
  );
}

export default App;
