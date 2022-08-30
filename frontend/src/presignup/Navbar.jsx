import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logo">PACIFIC</div>
        <div className="menu">
            <div className="menuitems">About</div>
            <div className="menuitems">Contact</div>
            <div className="menuitems">Signup</div>
            <div className="menuitems">Login</div>
        </div>
    </div>
  )
}

export default Navbar