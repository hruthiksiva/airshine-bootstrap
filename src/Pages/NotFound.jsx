import React from 'react'

const NotFound = () => {
  return (
    <div>
      <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light">
  <i className="fas fa-exclamation-triangle text-warning fa-4x mb-4"></i>
  <h1 className="display-1 fw-bold mb-3">404 Not Found</h1>
  <p className="fs-4 mb-4">This page does not exist</p>
  <a href="/" className="btn btn-primary btn-lg">
    Go Back
  </a>
</section>

    </div>
  )
}

export default NotFound