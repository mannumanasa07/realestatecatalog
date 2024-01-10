import React, { useState } from 'react';
import "../styles/SignUp.css";
import axios from "axios";
import { useHistory } from 'react-router-dom'; 

function SignUp () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPW, setconfirmPW] = useState('');
  const [UserId, setuserId] = useState('');

  const history = useHistory();

  const EmailChange = (e) => {
   setEmail(e.target.value);
};

  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const confirmPWChange = (e) => {
    setconfirmPW(e.target.value);
  };



  const handleSubmit = (e) => {
   e.preventDefault();

  if (email.includes('@') && password === confirmPW) {
    const register = {
      email: email,
      password: password
    }
  
    axios.post("http://localhost:4000/signup", register)
    .then(res => {setuserId(res.data.userId);console.log(res.data.userId)})
    .catch(error => console.error("Error during signup:", error.response));

    
    
  }
    setEmail("");
    setPassword("");
    setconfirmPW("");
  }; 


  return (
    <div className='container' style={{backgroundColor:"#E1F9F4",height:"97vh",width:"99vw"}}>
      <div className='main'>
      <div className='text'>
      <h2>Logo</h2>
       <p>Create New Account</p>
       </div>
       <div className='inputfields'>
      <form onSubmit={handleSubmit}>
        <label>
        <input className='line' type="text" placeholder='Mail Id' value={email} onChange={EmailChange} required/>
        </label>
        <label>
          <input className='line'type="password" placeholder="password" value={password} onChange={PasswordChange} required/>
        </label>
        <label>
          <input className='line' type="password" placeholder='confirm password' value={confirmPW} onChange={confirmPWChange} required/>
        </label>
        <button type="submit" >Sign Up</button>
        <button type='submit' onClick={()=>history.push("/")}>Sign In</button>
        </form>
      </div>
      {UserId && <p className='message'>Thanks for signing up your User Id is {UserId}</p>}
    </div>
    </div>
);
};

export default SignUp;