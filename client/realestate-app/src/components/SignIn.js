import React, { useState } from 'react'
import "../styles/SignIn.css"

function SignIn() {
    const [userId,setuserId]=useState('')
    const [password,setpassword]=useState('')

    function userIdChange(e){
        setuserId(e.target.value);
    }
    function PasswordChange(e){
        setpassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log('Submitted:', { userId, password });
    }
  return (
    <div className='container' style={{backgroundColor:"#E1F9F4",height:"97vh",width:"99vw"}}>
      <div className='main'>
      <div className='text'>
      <h2>Logo</h2>
       <p1>Enter your credentials to access your account</p1>
       </div>
       <div className='inputfields'>
      <form onSubmit={handleSubmit}>
        <label>
          <input className='line' type="text" placeholder='username' value={userId} onChange={userIdChange} />
        </label>
        <label>
          <input className='line'type="password" placeholder="password" value={password} onChange={PasswordChange} />
        </label>
        <button type="submit" >Sign In</button>
        <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignIn