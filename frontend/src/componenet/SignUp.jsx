import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
const [role,setRole]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/post', { username:username, email:email, password:password,role:role })
      .then(response => {
        const { token } = response.data;
        setToken(token);  
        console.log('test=>',response.data);
        console.log('Sign up successful'); 
      })
      .catch(error => {
        console.error('Error signing up:', error); 
      });
  };

  return (
    <>
  
    <div className="signup-container">
  
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="coolinput"></div>
        
        <label className='user' htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Write here..."
          name="username"
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label className='email' htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Write here..."
          name="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label className='pass' htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Write here..."
          name="password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          id="password"
          // type="password"
          placeholder="Write here..."
          name="role"
          className="input"
          onChange={(e) => setRole(e.target.value)}
        />
   
   {/* <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked onChange={(e)=>setRole(e.target.value)} />} className='seller'label="Client" />
  <FormControlLabel control={<Checkbox defaultChecked />} className='seller'label="Seller" />
 
</FormGroup> */}
        <button type="submit">Sign Up</button>
        
        <h5>Already have an account?</h5>
        <a className="signin-link" onClick={() => navigate('/SignIn')}>Sign In</a>
      </form>
    </div>
    </>
  );
};

export default SignUp;