import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

const NavbarLogin = () => {

  const [dropdownClose, setDropdownClose] = useState(true)

  const toggleDropdown = () => {
      dropdownClose ? setDropdownClose(false) : setDropdownClose(true)
  }

  return (

    <div className='navbar-dropdown'>
        
        <button 
            className='navbar-dropdown-btn'
            onClick={toggleDropdown}
        >Dropdown</button>
        
        {dropdownClose ? (
            <span></span>
        ) : (
            <div className='navbar-dropdown-content'>
                <Link to='/login'><a>Login</a></Link>
                <Link to='/signup'><a>Register</a></Link>
            </div>
        )}
        
    </div>
    
  )
}

export default NavbarLogin