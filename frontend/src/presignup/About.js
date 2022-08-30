import React,{useState} from 'react'
import aboutimg from "../img/about.svg";
import "./About.css"

const About = () => {
    const [isreadmore,setisreadmore] = useState(false)
  return (
   
    <section id="about">
    <div class="about-row">
        <div class="about-left-col">
            <h1> About <span>Us</span></h1>
            <p>
                This is a place where people go to train and exercise, but also to unwind, socialize, and recharge. Therefore, a good gym is a facility that promotes physical activity, provides a safe, functional, and comfortable workout environment, and creates a pleasant and enjoyable atmosphere for recreation and socialization.  {isreadmore?"":"...."}
                {isreadmore?" And recharge. Therefore, a good gym is a facility that promotes physical activity, provides a safe, functional, and comfortable workout environment, and creates a pleasant and enjoyable atmosphere for recreation and socialization.":""}
                <span onClick={()=>setisreadmore(!isreadmore)}>{isreadmore?" read less...":" read more..."}</span>
            </p>
            
        </div>
        <div class="about-right-col">
        <img src={aboutimg} alt=''></img>
    
        </div>
    </div>
    </section>
  )
}

export default About
