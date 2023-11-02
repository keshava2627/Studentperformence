import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    if (username === password) {
     
      navigate('/student-details');
    } else {
     
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div id='background'>
    <marquee behavior="scroll" direction="left" scrollamount="6">
            Student Academic Performance
          </marquee>
    <div className="login-container">
      <form className="login-form"> 
        <fieldset>
          <legend id='login-text'>Login</legend>
          <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>
      <button onClick={handleLogin}>Login</button>
         </div>
        </fieldset>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
