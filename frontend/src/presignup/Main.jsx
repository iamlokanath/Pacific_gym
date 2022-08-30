import React from 'react'
import "./Main.css"


import back1 from "../img/back1.webp";

import Navbar from "../presignup/Navbar"

import About from "./About"

// import Signup from "./Signup"

import Contact from "./Contact"

import Motivation from "./Motivation"

import Footer from "./Footer"

const Main = () => {
  return (
    <div className='Main'>
      <Navbar/>
        <div className="lander">
          <div className="lander_headings">
            <h1>Eat, Sleep, <span>Gym</span> <br />& Repeat</h1>
            <h2>If you want something you've never had, you must be willing to do something you've never done</h2>
            <div className="lander_headings_btn">Join Us</div>
          </div>
          <img src={back1} alt=''></img>
        </div>
        
        <About/>
        {/* <Signup/> */}
        <Contact/>
        <Motivation/>
        <Footer/>
    </div>
  )
}

export default Main