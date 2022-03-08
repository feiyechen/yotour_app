import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMobile = () => {
  return (
    <div className='mobile-menu'>
        <div><a href=''>Search</a></div>
        <div><a href='/resorts'>All Resorts</a></div>
        <div><a href='/login'>Login</a></div>
        <div><a href='/signup'>Register</a></div>
    </div>
  )
}

export default NavbarMobile