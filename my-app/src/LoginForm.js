// LoginForm.js
import React, { useState } from 'react';
import LoginFormContent from './LoginFormContent';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const correctUsername = 'Baruch123';
  const correctPassword = 'p103';

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setIsLoggedIn(false);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <LoginFormContent
          username={username}
          password={password}
          onUsernameChange={(value) => setUsername(value)}
          onPasswordChange={(value) => setPassword(value)}
          onSubmit={handleLogin}
          error={error}
        />
      )}
    </div>
  );
};

export default LoginForm;
