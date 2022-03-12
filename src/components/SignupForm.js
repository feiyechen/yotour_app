import React, { useState } from 'react'

const SignupForm = () => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

    if(email !== '' && firstName !== '' && lastName !== '' && password !== '') {

      if(validateEmail(email)){

        // console.log("email validated");

        const user = { email, firstName, lastName, password };

        fetch("https://yotour-server.herokuapp.com/users", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        }).then(() => {
          setEmail("");
          setFirstName("");
          setLastName("");
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
              placeholder='Email' 
              value={email}
              onChange = {e => setEmail(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='First Name'
              value={firstName}
              onChange = {e => setFirstName(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Last Name'
              value={lastName}
              onChange = {e => setLastName(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Password' 
              value={password}
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