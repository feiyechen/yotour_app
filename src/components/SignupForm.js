import React, { useState } from 'react'

const SignupForm = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email !== '' && username !== '' && password !== '') {
      const user = { email, username, password };

      fetch("https://yotour-server.herokuapp.com/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(() => {
        setEmail("");
        setUsername("");
        setPassword("");
      }).then(() => {
        window.alert("Successfully registered!");
      })
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
              placeholder='Username'
              value={username}
              onChange = {e => setUsername(e.target.value)} />
            <input 
              className='login-input' 
              type='text'
              required
              placeholder='Password' 
              value={password}
              onChange = {e => setPassword(e.target.value)} />

            <button className='submit' onClick={handleSubmit}>Sign Up</button>
                       
        </div>

    </div>
  )
}

export default SignupForm