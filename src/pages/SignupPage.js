import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SignupForm />
      </main>
      <Footer />
    </>
  )
}

export default SignupPage