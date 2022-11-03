import React from "react";



export default function Contact(){
    return(
        <div>
            <header>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </header>
            <form>
              <div>
                <label htmlFor="first_name">First name</label>
                <input type="text" id="first_name" required placeholder="Enter your first name"/>
              </div>
              
              <div>
                <label htmlFor="last_name">Last name</label>
                <input type="text" id="last_name" required placeholder="Enter your last name"/>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="yourname@email.com"/>
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea required id="message">
                </textarea>
              </div>
                <div>
                    <input type="checkbox" id="checkbox" required/>
                    <label htmlFor="checkbox" >You agree to providing your data to Samuel who may contact you.</label>
                </div>
              <button id="btn__submit" type="submit">Send Message</button>
            </form>
        </div>
    )
}