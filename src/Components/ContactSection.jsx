import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  return (
    <section className="bg-white py-5 text-center">
      <div className="container">
        <h2 className="display-5 text-primary fw-bold mb-3">Have a Question? Contact Us!</h2>
        <p className="lead text-secondary mb-5">We are here to assist you.</p>
        
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card bg-light p-4 shadow-sm">
              <h3 className="h4 text-primary fw-bold">Contact Us</h3>
              <p><strong>Call Us:</strong> +91 95855 57593</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card bg-light p-4 shadow-sm">
              <h3 className="h4 text-primary fw-bold">Opening Hours</h3>
              <p>Mon-Sat: 10:00 am - 07:00 pm</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-md-6 col-12">
            <div className="card bg-light p-4 shadow-sm">
              <h3 className="h4 text-primary fw-bold">Our Trichy Office</h3>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0515564201996!2d80.27182027491995!3d13.059195887264277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661f812837cd%3A0xe3a5b3f7b15785da!2sTrichy%20Airshine%20Tours%20%26%20Travels%20(P)%20Ltd.%2C!5e1!3m2!1sen!2sin!4v1739109930618!5m2!1sen!2sin" 
                width="100%" height="300" 
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card bg-light p-4 shadow-sm">
              <h3 className="h4 text-primary fw-bold">Our Chennai Office</h3>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0515564201996!2d80.27182027491995!3d13.059195887264277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661f812837cd%3A0xe3a5b3f7b15785da!2sTrichy%20Airshine%20Tours%20%26%20Travels%20(P)%20Ltd.%2C!5e1!3m2!1sen!2sin!4v1739109930618!5m2!1sen!2sin" 
                width="100%" height="300" 
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
