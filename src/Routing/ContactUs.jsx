import React from 'react'

const ContactUs = () => {
  return (
    <div>
    <div className='container1'>
      <div className='form'>
        <form>
          <h2>Contact-Us</h2>
          Name:- <input type='text' placeholder='Enter your name' />
          <br/>
          Email:- <input type='email' placeholder='Enter your email' />
          <br/>
          Phone no.:- <input type='number' placeholder='Enter your phone no.' />
          <br/>
          Enquiry:- <input type='text' placeholder='Enter your enquiry' />
          <br/>
          <input type="submit" value='Submit'/>
        </form>
      </div>
    </div>
    <center>
      <p>Have questions, feedback, or need help with your order?<br/>
          We're here for you!<br/>
          🕒 Customer Support Hours:
          Mon - Sat | 10:00 AM – 7:00 PM<br/>
          We'd love to hear from you!
      </p>
      </center>
    </div>
    
  )
}

export default ContactUs;