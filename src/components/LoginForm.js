import React from 'react';
import Facebook from '../assets/img/facebook.png';
import Google from '../assets/img/google.png';
import GitHub from '../assets/img/github.png';

const LoginForm = () => {
  return (
    <div>
        <h1 className='loginTitle'>Choose your login method</h1>
        <div className='login'>

            <div className='wrapper'>

                <div className='left'>
                    <div className='loginButton facebook'>
                        <img src={Facebook} alt='' className='icon' />
                        Facebook
                    </div>
                    <div className='loginButton google'>
                        <img src={Google} alt='' className='icon' />
                        Google
                    </div>
                    <div className='loginButton github'>
                        <img src={GitHub} alt='' className='icon' />
                        GitHub
                    </div>
                </div>

                <div className='center'>
                    <div className='line' />
                    <div className='or'>OR</div>
                </div>

                <div className='right'>
                    <input className='login-input' type='text' placeholder='Username' />
                    <input className='login-input' type='text' placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default LoginForm