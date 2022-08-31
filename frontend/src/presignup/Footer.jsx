import React from 'react'
import back2 from "../img/body.jpg";
import "./Footer.css"
const Footer = () => {
  return (
    <section id="footer">

          <div className="brand">
            <img src={back2} alt=''></img>
          </div>

          <div>
            <p className="texter"> 2022 Pacific, India Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deserunt?
            </p>
          </div>

          <div>
            <p className="texter">Adress: AT/PO: Keonjhar, Dist: Keonjhar, Pin: 758083</p>
          </div>

          <div className="social">
            <a href="https://www.facebook.com/" >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokanath-panda-642193238/" >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/Lokanat48464605" >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

        </section>
  )
}

export default Footer