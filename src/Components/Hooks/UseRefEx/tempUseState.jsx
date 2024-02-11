import React, { useState } from 'react';

function App() {
  // Create a ref using the useRef hook
//   const buttonRef = useRef(null)
const [name, setName] = useState("");

  const handleButtonClick = () => {
    // Access the DOM element using the current property of the ref
    setName("Lissa");
  };
//   const setDefaultValue = () => {
//     // Access the DOM element using the current property of the ref
//     inputRef.current.value = "React";
//   }

//   const clearFormValues = () => {
//     // Access the DOM element using the current property of the ref
//     inputRef.current.value = "";
//   }

  const dummy = () => {
    // Access the DOM element using the current property of the ref
    // buttonRef.current.click();

  }
  return (
    <div>
        <label>Enter your text: </label>
      <input type="text" value = {name}/>
      <br></br>
      <br></br>

      <button onClick={handleButtonClick}>Focus Input</button>

<br></br>
      <br></br>


<button onClick={dummy}>click Clear value button</button>

    </div>
  );
}

export default App;
