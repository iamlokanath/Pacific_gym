import React from 'react'
import signimage from "../img/signupimg.webp";
import "./Signup.css"
const Signup = () => {
  return (
    <section id="signup">
    <div class="signup-row">
        <div class="signupimg">
            <img src={signimage} alt=''></img>
        </div>
        <div class="signup-right-col">
            <h1> BEING <span id="blue">BODY</span></h1>
            <h2>BUILDER</h2>
            <button class="c-btn">Signup</button>
        </div>

    </div>

</section>
  )
}

export default Signup