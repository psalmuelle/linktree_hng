import React from "react";
import "./Contact.css"
import zuriLogo from "./images/zuri_logo.svg"
import i4gLogo from "./images/I4G_logo.svg"


export default function Contact(){
  const name = "Erinle Samuel"
    return(
        <div className="container">
            <header>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </header>
            <form>
              <div className="name">
              <div className="input__container">
                <label htmlFor="first_name">First name</label>
                <input type="text" id="first_name" required placeholder="Enter your first name"/>
              </div>
              
              <div className="input__container">
                <label htmlFor="last_name">Last name</label>
                <input type="text" id="last_name" required placeholder="Enter your last name"/>
              </div>
              </div>

              <div className="input__container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="yourname@email.com"/>
              </div>

              <div className="input__container m">
                <label htmlFor="message">Message</label>
                <textarea required id="message">
                </textarea>
              </div>
                <div>
                    <input type="checkbox" id="checkbox" required/>
                    <label htmlFor="checkbox" >You agree to providing your data to {name} who may contact you.</label>
                </div>
              <button id="btn__submit" type="submit">Send Message</button>
            </form>

            <footer>
     <div>
      <img src={zuriLogo} alt="zuri logo"/>
      <div id='hng__task'>HNG Internship 9 Frontend Task</div>
      <img src={i4gLogo} alt="I4G logo"/>
     </div>
      </footer>
        </div>
    )
}