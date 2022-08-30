import React from 'react'
import contactimg from "../img/contact.webp";
import "./Contact.css"

const Contact = () => {
  return (
    
    <section id='contact'>
        <div class="contact-row">
            <div class="contact-left-col">
                <h1> Contact <span>Us</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut hic fuga officiis quis ad in, debitis ducimus, ullam commodi quos reiciendis, amet placeat cumque consequatur explicabo porro cupiditate architecto!
                </p>
                <div class="contact-right-col">
                    <img src={contactimg} alt=''></img>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Contact