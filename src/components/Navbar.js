import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogin from './NavbarLogin'
import NavbarMobile from './NavbarMobile'
import menuLogo from '../assets/img/menu.png'

const Navbar = () => {

  const [ mobileMenuClose, setMobileMenuClose ] = useState(true);

  const toggleMobileMenu = () => {
    mobileMenuClose ? setMobileMenuClose(false) : setMobileMenuClose(true)
  }

  return (
    <>
      <div className='navbar'>

        <span className='navbar-content'>

          <Link to='/'>
            <span className='logo'>
              YoTour
            </span>
          </Link>

          <span className='searchbox'>
            <input type='text' placeholder='Search your resort' />
            <button>Search</button>
          </span>

          <ul className='navbar-list'>
            <Link to='/resorts'>
              <li>
                All Resorts
              </li>
            </Link>
            
            <li>
              <NavbarLogin />
            </li>
          </ul>

          <img 
            className='menu-logo' 
            src={menuLogo} alt='' 
            onClick={toggleMobileMenu}/>

        </span>

      </div>

      {mobileMenuClose ? (<span></span>) : (<NavbarMobile />)}

    </>
  )
}

export default Navbar