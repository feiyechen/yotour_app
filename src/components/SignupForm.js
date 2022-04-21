import React, { useState } from 'react'

const SignupForm = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const validateEmail = (text) => {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(text.match(mailFormat)){
      return true;
    }else{
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email !== '' && username !== '' && fName !== '' && lName !== '' && password !== '') {

      if(validateEmail(email)){

        console.log("email validated");

        //need validate duplicated email & username???

        const user = { email, username, fName, lName, password };

        //post to api
        fetch("http://localhost:8080/users", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        }).then(() => {
          setEmail("");
          setFName("");
          setLName("");
          setPassword("");
          setSignedUp(true);
        })

      } else {
        window.alert("Not a valid Email address!");
      }

    } else {
      window.alert("All fields are required!");
    }

  }

  return (
    <div className='signup'>

        <h1 className='signup-title'>Signup Here</h1>

        <div className='signup-wrapper'>

            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Username' 
              onChange = {e => setUsername(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Email' 
              onChange = {e => setEmail(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='First Name'
              onChange = {e => setFName(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Last Name'
              onChange = {e => setLName(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Password' 
              onChange = {e => setPassword(e.target.value)} />
            
            {signedUp ? (
              <div>
                <p>Sign Up successfully! Let's <a className='signup-login' href='/login'>Login</a></p>
              </div>
            ) : (<></>)}

            <button className='submit' onClick={handleSubmit}>Sign Up</button>
                       
        </div>

    </div>
  )
}

export default SignupForm