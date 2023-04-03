import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div className='contact'>
        <p className='customer'>Thank you showing interest in our products. Our staff will get back to you soonest!</p>
        <p>For more details contact us through:</p>
        <p>Phone: (+254)-720-345-654</p>
        <p>Email: motorworldkenya@nairobi.com</p>
        <p>Address: 5th Street, Upperhill</p>
        <Link to='/'>Logout</Link>
    </div>
  )
}
export default Contact;