import React from 'react'

const ContactSection = () => {
  return (
    <div className='container-fluid py-5 my-5 domestic-section'>
          <div className='col-12 text-center mx-auto py-5 mb-3'>
          <h1>Have a Question? Contact Us!</h1>
          </div>
          <div className='row d-flex justify-content-center align-items-center text-center'>
          <div className='col-12 col-md-3 px-5 lh-lg'>
          <h5>Contact us</h5>
          <p className='lh-sm grey'>Call Us : <span className='purple-font'>+919585557593</span>
          <br/>Email : contact@airshineonline.com</p>
          </div>
          <div className='col-12 col-md-3 px-5 lh-lg'>
          <h5>Opening Hours</h5>
          <p className='lh-sm grey'> Mon-Sat : 10:00 am - 07:00 pm</p>
          </div>
          <div className='col-12 col-md-3 px-5 lh-lg'>
          <h5>Our Office</h5>
          <p className='lh-sm grey'>Trichy, Tamil Nadu</p>
          </div>
          </div>
        </div>
  )
}

export default ContactSection
