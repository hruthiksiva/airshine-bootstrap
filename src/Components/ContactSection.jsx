import React from 'react'

const ContactSection = () => {
  return (
    <div className='container-fluid py-5 my-5'>
          <div className='col-12 text-center mx-auto py-5 mb-3'>
          <h1>Have a Question? Contact Us!</h1>
          </div>
          <div className='row d-flex justify-content-center align-items-center text-center'>
          <div className='col-12 col-md-3 px-5 lh-lg'>
          <h5>Contact us</h5>
          <p className='lh-sm grey'>Call Us : <span className='purple-font'>+91 94247 34387</span>
          <br/>Email : example@gmail.com</p>
          </div>
          <div className='col-12 col-md-3 px-5 lh-lg'>
          <h5>Opening Hours</h5>
          <p className='lh-sm grey'> Mon-Friday : 8.00 am - 10:00 am</p>
          </div>
          <div className='col-12 col-md-3 px-5 lh-lg'>
          <h5>Our Office</h5>
          <p className='lh-sm grey'>Vinjaya nagar, Banglore</p>
          </div>
          </div>
        </div>
  )
}

export default ContactSection
