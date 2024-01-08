import React, { useState } from 'react'
import "../styles/SignIn.css"
import axios from "axios";
import { useHistory } from 'react-router-dom'; 



function SignIn() {
    const [userId,setuserId]=useState('')
    const [password,setpassword]=useState('')
    const [flagstatus,setFlagStatus]=useState('')
    const [receivedUserName,setreceivedUserName]=useState('')

    const history = useHistory();


    function userIdChange(e){
        setuserId(e.target.value);
    }
    function PasswordChange(e){
        setpassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:4000/signin", {userId,password})
        .then(res => 
          
         {setFlagStatus(res.data.flag);
          setreceivedUserName(res.data.email);
          console.log(res.data.flag);
        
          if (flagstatus === 'true') {
            history.push({
              pathname: '/propertylist',
              state: { userId: userId,username:receivedUserName}
          });
        }})
        .catch(error => console.error("Error during signin:", error));
      
    }

    function handleSignUpClick(){
        history.push("/signup");
    }


  return (
    <div className='container' style={{backgroundColor:"#E1F9F4",height:"97vh",width:"99vw"}}>
      <div className='main'>
      <div className='text'>
      <h2>Logo</h2>
       <p>Enter your credentials to access your account</p>
       </div>
       <div className='inputfields'>
      <form onSubmit={handleSubmit}>
        <label>
          <input className='line' type="text" placeholder='username' value={userId} onChange={userIdChange} required/>
        </label>
        <label>
          <input className='line'type="password" placeholder="password" value={password} onChange={PasswordChange} required/>
        </label>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleSignUpClick}>Sign Up</button>
        </form>
      </div>
      {flagstatus==='false' && <p className='message'>Incorrect details. Please try again.</p>}
    </div>
    </div>
  )
}

export default SignIn