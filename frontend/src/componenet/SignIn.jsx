import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SignIn.css'; 

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/signin', { email, password })
      .then(response => {
        const { token } = response.data;
        setToken(token); 
        console.log('Sign in successful'); 
       
        navigate('/SignUp');  
      })
      .catch(error => {
        console.error('Error signing in:', error); 
      });
  };

  return (
    
    <div className="signin-container">
    <img className='img' src="https://img.freepik.com/photos-premium/panier-achat-telephone-portable-vierge-fond-rose-pastel-commerce-electronique-achat-ligne-commerce-ligne-arriere-plan-technologie-journee-magasinage-vendredi-noir-reseau-espace-copie-maquette_146482-2149.jpg" alt="" />
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="coolinput"></div>
        
       
        
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

        <button type="submit">Sign In</button>
        <h5>Already have an account?</h5>
        <a className="signin-link" onClick={() => navigate('/SignUp ')}>Sign Up</a>
      </form>
    </div>
  );
};

export default SignIn;
