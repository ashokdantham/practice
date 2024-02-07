import React, { useState } from 'react';

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    console.log("count", count);
  }
  const handleDoubleButtonClick = () => {
    setCount(count + 2);
    console.log("count", count);
  }

  if(count > 10) {
    return <p>I have become pro in events</p>
  }

  return (
    <div>
      <h1>Button Click Counter</h1>
      <p>Count: {count}</p>
      {count <=4 ? <button onClick={handleButtonClick}>Click me</button> : <p>Count limit reached</p>}
      {count <=10 ? <button onDoubleClick={handleDoubleButtonClick}>Click me to increase count by 2</button> : <p>Count limit reached</p>}

    </div>
  );
}
