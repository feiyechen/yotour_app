import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMobile = () => {
  return (
    <div className='mobile-menu'>
        <div><Link to='/search'>Search</Link></div>
        <div><Link to='/resorts/type/All'>All Resorts</Link></div>
        <div><Link to='/login'>Login</Link></div>
        <div><Link to='/signup'>Register</Link></div>
    </div>
  )
}

export default NavbarMobile