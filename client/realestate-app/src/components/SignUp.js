import React, { useState } from 'react';
import "../styles/SignUp.css"

function SignUp () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPW, setconfirmPW] = useState('');


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
    console.log('Submitted:', {email, password,confirmPW });
  };


  return (
    <div className='container' style={{backgroundColor:"#E1F9F4",height:"97vh",width:"99vw"}}>
      <div className='main'>
      <div className='text'>
      <h2>Logo</h2>
       <p1>Create New Account</p1>
       </div>
       <div className='inputfields'>
      <form onSubmit={handleSubmit}>
        <label>
          <input className='line' type="text" placeholder='Mail Id' value={email} onChange={EmailChange} />
        </label>
        <label>
          <input className='line'type="password" placeholder="password" value={password} onChange={PasswordChange} />
        </label>
        <label>
          <input className='line' type="text" placeholder='confirm password' value={confirmPW} onChange={confirmPWChange} />
        </label>
        <button type="submit" >Sign In</button>
        <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;