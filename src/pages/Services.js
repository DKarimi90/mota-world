import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className='contact'>
      <div className='services'>
          <div className='more-info'>
        <h5>New car Imports</h5>
        <p>Welcome to Motor World Kenya, your premier source for importing high-quality vehicles from around the world. Our team has years of experience in the industry, and we specialize in importing luxury cars from Europe and Japan. We are proud to offer a range of services to make the car importation process as smooth and easy as possible, including vehicle sourcing, inspection, shipping, and customs clearance.</p>
          </div>
          <div className='more-info'>
        <h5>Used car Imports</h5>
        <p>In addition to our car importation services, we also offer a selection of high-quality second-hand vehicles for sale. Our inventory includes a range of makes and models to suit every budget and preference, and we take great care to ensure that each vehicle is thoroughly inspected and in excellent condition before it is listed for sale. Contact us today to learn more about our selection of second-hand cars..</p>
          </div>
          <div className='more-info'>
        <h5>Auto consultations</h5>
        <p>We also offer consultation services to provide guidance and support to customers who are interested in importing or purchasing a car from overseas. Our knowledgeable team can answer your questions, provide expert advice, and help you navigate the complexities of the car importation process. Contact us today to learn more about our consultation services.</p>
        </div>
      </div>
        <Link to='/' onClick={() => window.scrollTo(0, 0)}>Back Home</Link>
    </div>
  )
}

export default Services; 