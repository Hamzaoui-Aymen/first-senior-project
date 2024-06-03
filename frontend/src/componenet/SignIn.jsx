import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SignIn.css'; 

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('http://localhost:4000/api/getAll', { email, password })
      .then(response => {
        const { token } = response.data;
        console.log('Sign in successful');
        console.log('test',response.data);
        // localStorage.setItem('token', token); // Store token in localStorage or sessionStorage
        // navigate('/dashboard'); // Redirect to dashboard or desired route after successful login
      })
      .catch(error => {
        console.error('Error signing in:', error);
        setError('Sign-in failed. Please try again.');
      });
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={()=>{handleSubmit,navigate('/')}}>
        <h1>Sign In</h1>
        
        <label className='adress'htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          name="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label className='passw'htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {error && <p className="error-message">{error}</p>}
        
        <button type="submit" >Sign In</button>
        <h5>Don't have an account?</h5>
        <a className="signup-link" onClick={() => navigate('/signup')}>Sign Up</a>
      </form>
    </div>
  );
};

export default SignIn;