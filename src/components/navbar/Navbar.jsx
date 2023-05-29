import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className='logo'>Booking.com</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
