import React from 'react'

export default function Contact() {
  return (
    <div className="contactus-container" id="contactme">
            {/* <div className="container"> */}
                <h1 className="contactus-heading">Contact me</h1>
                <h3 className="contactus-sub-heading">
                    Questions, thoughts, or just want to say hello? 
                </h3>

                <div className="contactus-form-container">
                    <form className="form" action="">
                        <div className="formfield-container">

                            <input className="formfield" type="text" 
                            name="name" id="" 
                            placeholder="Enter your name"/>
                            
                            <input className="formfield" type="email" 
                            name="email" id="" 
                            placeholder="Enter your email address"/>
                            
                            <input className="formfield" type="text" 
                            name="subject" id="" 
                            placeholder="Enter your subject"/>

                            <textarea className="formfield formfield-textarea"
                            name="message" id="" 
                            cols="30" rows="10" 
                            placeholder="Enter your message"></textarea>

                        </div>

                        <div className='form-submit-btn'>
                            <button type="submit" className="btn-pink" id="submit-btn">
                                Send Message <i className="submit-icon fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>

            {/* </div> */}
        </div>
  )
}
