import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import {useAppContext} from "../lib/contextLib"
import { Auth } from "aws-amplify";

const Navbar = () => {
  const {isAuthenticated,userHasAuthenticated} = useAppContext();

  
  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
  }


  return (
    <div className='Navbar'>
      <div className="logo">PACIFIC</div>
      <div className="menu">
        {isAuthenticated?
        <>
          <Link to="/dashboard" className="menuitems">Dashboard</Link>
          <Link to="#home" className="menuitems">Home</Link>
          <Link to="#about" className="menuitems">About</Link>
          <Link to="" onClick={handleLogout} className="menuitems">Logout</Link>
        </>
        :
        <>
          <Link to="#home" className="menuitems">Home</Link>
          <Link to="#about" className="menuitems">About</Link>
          <Link to="/signup" className="menuitems">Signup</Link>
          <Link to="/login" className="menuitems">Log in</Link>
        </>
        }
      </div>
    </div>
  )
}

export default Navbar