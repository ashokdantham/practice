import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  // if(isLoggedIn) {
  //   return (<div>
  //     <p>Welcome, user! You are logged in.</p>
  //     <button onClick={handleLogout}>Logout</button>
  //   </div>)
  // }
   
  //   return (<div>
  //     <p>Please log in to continue.</p>
  //     <button onClick={handleLogin}>Login</button>
  //   </div>)
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
