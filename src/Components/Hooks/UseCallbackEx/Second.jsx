import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <div>
    <h1>Child Component</h1>
  <button onClick={onClick}>Click me</button>;

  </div>
});

const ParentComponent = () => {
  const [name, setName] = useState('React');
  const [count, setCount] = useState(0);

  // Without useCallback, a new function instance is created on each render
  // causing ChildComponent to re-render unnecessarily
//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//     setCount(count + 1);
//   }, [count]); // Dependency array ensures the function is recreated only when 'count' changes

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  } ,[count]);// 1222321312, 13123213


  console.log('ParentComponent rendered');

  return (
    <div>
        <h1>Parent Component</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <h1>{name}</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
