import React, { useEffect, useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  console.log('Component is rendered');
  // useEffect(() => {
  //   console.log('Component is rendered');
  // })

  useEffect(() => {
    console.log('Component is mounted'); // Mounting --> Creating
  },[])

  useEffect(() => {
    console.log("Component is updated"); // Updating --> Re-rendering
  }, [isLoggedIn]);

  useEffect(() => {
    return () => {
      console.log("Component is unmounted"); // Unmounting --> Destroying
    }
  },[]);
  
  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, user! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;

// CRED: create, get, update, delete
