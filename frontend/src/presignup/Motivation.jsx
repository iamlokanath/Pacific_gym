import React from 'react'
import motivation from "../img/motivation.webp";
import "./Motivation.css"
import { Link } from "react-router-dom";

const Motivation = () => {
    return (
        <section id="motivation">
            <div className="motivation-row">
                <div className="motivation-left-col">
                    <h1>Moti<span>vation</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fuga amet, nemo neque repudiandae expedita, placeat unde enim facilis distinctio reiciendis quia. Cupiditate nobis id et veritatis impedit. Accusantium, blanditiis!</p>
                    <p>No matter how slow you go you're still lapping everyone on the couch.</p>
                    <button type="button" className="signup-btn">
          <Link to="/signup" className="menuitems">Signup</Link></button>

                </div>
                <div className="motivation-right-col">
                    <img src={motivation} alt=''></img>
                </div>
            </div>
        </section>
    )
}

export default Motivation