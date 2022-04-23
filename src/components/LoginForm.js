import React, { useState } from 'react';
import Facebook from '../assets/img/facebook.png';
import Google from '../assets/img/google.png';
import GitHub from '../assets/img/github.png';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userReducer';

const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = e => {
      e.preventDefault();
      if(username !== '' && password !== ''){

        const user = { username, password };

        fetch("http://localhost:8080/auth", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(loginSuccess(json));
            window.location.href = "/account";
        })
        .then(()=>{
            setUsername("");
            setPassword("");
        }).catch(err => console.log(`Error ${err}`));

      }else{
        window.alert("All fields are required!");
      }
  }

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
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Username' 
                        onChange={e => {
                            setUsername(e.target.value)
                        }} 
                    />
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button className='submit' onClick={handleLogin}>Login</button>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default LoginForm