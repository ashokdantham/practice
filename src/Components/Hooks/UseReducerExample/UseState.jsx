import React, { useState } from 'react';

// Reducer function

// The main app component
function App() {
  const [state, setState] = useState({ count: 0, name: "Lissa", class: 'React', age: 25});
  const incremnet = () => { 
    setState({ count: state.count + 1 });
  }
    const decrement = () => { 
        setState({ count: state.count - 1 });
    }

  return (
    <div>
      <h1>Using useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={incremnet}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incremnet}>Change Name</button>
      <button onClick={decrement}>Change Class</button>
    </div>
  );
}

export default App;