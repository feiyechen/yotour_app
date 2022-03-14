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

          {/* under iPad will disappear */}
          <span className='searchbox'>
            <input type='text' placeholder='Search your resort' />
            <button>Search</button>
          </span>

          {/* under iPad will disappear */}
          <ul className='navbar-list'>
            <Link to='/resorts/type/All'>
              <li>
                All Resorts
              </li>
            </Link>
            <li>
              <NavbarLogin />
            </li>
          </ul>

          {/* under iPad will show */}
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