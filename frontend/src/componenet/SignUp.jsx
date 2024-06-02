import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/signup', { username, email, password })
      .then(response => {
        const { token } = response.data;
        setToken(token); 
        console.log('Sign up successful'); 
      })
      .catch(error => {
        console.error('Error signing up:', error); 
      });
  };

  return (
    <>
  
    <div className="signup-container">
    <img className='img' src="https://img.freepik.com/photos-premium/panier-achat-telephone-portable-vierge-fond-rose-pastel-commerce-electronique-achat-ligne-commerce-ligne-arriere-plan-technologie-journee-magasinage-vendredi-noir-reseau-espace-copie-maquette_146482-2149.jpg" alt="" />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="coolinput"></div>
        
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Write here..."
          name="username"
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Write here..."
          name="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Write here..."
          name="password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
   
        
        <button type="submit">Sign Up</button>
        
        <h5>Already have an account?</h5>
        <a className="signin-link" onClick={() => navigate('/SignIn')}>Sign In</a>
      </form>
    </div>
    </>
  );
};

export default SignUp;