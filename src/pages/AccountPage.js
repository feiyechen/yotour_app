import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userReducer';

const AccountPage = () => {

  const loginUser = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout());
      window.location.href = "/";
  }

  return (
    <>
      <Navbar />

      <main className='account-container'>
        {loginUser ? (
            <>
            <h2>Welcome, {loginUser.fName} {loginUser.lName}</h2>
            <h3>Username: {loginUser.username}</h3>
            <h3>Email: {loginUser.email}</h3>
            </>
        ) : (
            <h2>You are not logged in, please log in first</h2>
        )}
        {/* {loginUser.admin ? (
            <h3>Your are admin</h3>
        ) : (
            <h3>Your are not admin</h3>
        )} */}
        {loginUser ? (
            <button onClick={handleLogout}>Logout</button>
        ) : (
            <></>
        )}
      </main>

      <Footer />
    </>
  )
}

export default AccountPage