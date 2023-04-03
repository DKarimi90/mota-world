import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className='left'>
            <h6>Partners</h6>
            <p>Honda</p>
            <p>Toyota</p>
            <p>Nissan</p>
            <p>Subaru</p>
            <p>Mazda</p>
        </div>
        <div className='center'>
            <Link to="services"  onClick={() => window.scrollTo(0, 0)}><h6>Our Services</h6></Link>
            <p>New car Imports</p>
            <p>Used car Imports</p>
            <p>Auto consultations</p>
            <p>Auto Sales</p>
        </div>
        <div className='center'>
            <Link to="contact" onClick={() => window.scrollTo(0, 0)}>
            <h6>Contact Us</h6>
            </Link>
            <p>Phone: (+254)-720-345-654</p>
            <p>Email: motorworldkenya@nairobi.com</p>
            <p>Address: 5th Street, Upperhill</p><br/>
        </div>
        <div className='center'>
          <Link to ='about' onClick={() => window.scrollTo(0, 0)}><h6>About us</h6></Link>
          <p>Visit the page to know more about us</p><hr/>
          <Link to='' onClick={() => window.scrollTo(0, 0)}><p>Back to top</p></Link>
        </div>
    </div>
  )
}
export default Footer;