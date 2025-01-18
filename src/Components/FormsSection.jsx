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
    // Handle form submission (e.g., send the data to an API)
    console.log(formData)
  }

  return (
    <div className='container-fluid purple'>
      <div className='row p-3 p-md-5 d-flex justify-content-center'>
        <div className='col-12 col-lg-5 order-1 order-lg-2 m-4 text-center'>
          <img src={contacthero} 
          className='img-fluid order-2 rounded-4' alt='Contact Hero' 
          style={{
            width:'80%',
            height:'100%',
            objectFit:'cover',
            objectPosition:'50% center'
          }}
          />
        </div>
        <div className='col-12 col-lg-5 order-2 order-lg-1 m-4'>
        <p className='purple-dark badge my-3'>LET'S CONNECT</p>
          <h2 className='purple-font mb-4'>READY TO DISCUSS YOUR PROJECT WITH US?</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='form-control'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='subject' className='form-label'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='form-control'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>Message</label>
              <textarea
                id='message'
                name='message'
                className='form-control'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='rounded p-2 px-3 border-0 purple-button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default FormsSection