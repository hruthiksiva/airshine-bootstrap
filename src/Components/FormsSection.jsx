import React, { useState } from 'react'
import contacthero from '../assets/images/contact/contact-1.jpg'

const FormsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='container-fluid py-5'>
      <div className='row d-flex justify-content-center align-items-center'>
        
        {/* Contact Image */}
        <div className='col-12 col-lg-5 order-1 order-lg-2 text-center'>
  <img 
    src={contacthero} 
    className='img-fluid rounded-4 shadow-lg d-block mx-auto' 
    alt='Contact Hero' 
    style={{
      width: '100%', // Default full width
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      maxWidth: 800,
      maxHeight: 1000
    }}
  />
</div>

<style>
{`
  @media (min-width: 992px) { /* Applies only for desktop (lg and above) */
    img {
      width: 80% !important;  /* Cropped left and right */
    }
  }
`}
</style>


        {/* Form Section */}
        <div className='col-12 col-lg-5 order-2 order-lg-1 px-4 px-md-5'>
          <p className='badge custom-badge my-3'>LET'S CONNECT</p>
          <h2 className='text-primary mb-4'>Ready to Discuss Your Trip With Us?</h2>

          <form onSubmit={handleSubmit} className='custom-form'>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='form-control custom-input'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            

            <div className='mb-3'>
              <label htmlFor='subject' className='form-label'>Mobile Number</label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='form-control custom-input'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email (optional)</label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control custom-input'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>Places You Want to Visit</label>
              <textarea
                id='message'
                name='message'
                className='form-control custom-input'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type='submit' className='btn custom-button'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default FormsSection
