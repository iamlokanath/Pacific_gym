import React from 'react'
import motivation from "../img/motivation.webp";
import "./Motivation.css"

const Motivation = () => {
  return (
   <section id="motivation">
    <div class="motivation-row">
        <div class="motivation-left-col">
            <h1>Moti<span>vation</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fuga amet, nemo neque repudiandae expedita, placeat unde enim facilis distinctio reiciendis quia. Cupiditate nobis id et veritatis impedit. Accusantium, blanditiis!</p>
            <div class="motivation-right-col">
                <img src={motivation} alt=''></img>
            </div>
            <p>No matter how slow you go you're still lapping everyone on the couch.</p>
            <button type="button" class="signup-btn">Sign Up</button>
          
        </div>
    </div>
   </section>
  )
}

export default Motivation