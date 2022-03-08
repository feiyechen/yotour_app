import React from 'react'

const SignupForm = () => {
  return (
    <div className='signup'>

        <h1 className='signup-title'>Signup Here</h1>

        <div className='signup-wrapper'>

            <input className='login-input' type='text' placeholder='email' />
            <input className='login-input' type='text' placeholder='Username' />
            <input className='login-input' type='text' placeholder='Password' />
            <button className='submit'>Sign Up</button>
                       
        </div>

    </div>
  )
}

export default SignupForm