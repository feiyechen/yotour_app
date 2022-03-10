import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Navbar />

      <main className='login-container'>
        <LoginForm />
      </main>

      <Footer />
    </>
  )
}

export default LoginPage