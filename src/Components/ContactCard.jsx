import React from 'react';

const ContactCard = () => {
  return (
    <div className="container-fluid base px-5 py-5">
        <div className="row text-center herobg rounded-4 py-5" style={{minHeight:'400px'}}>
            <div className=" col-12 fw-bold text-fluid" style={{fontSize:'70px'}}>Ready to Scale Your Business?</div>
                <div className="col-12 grey px-5 mt-3 mb-4 herpara"  style={{fontSize:'20px'}}>
                  Take the first step towards digital excellence. Partner with us and unlock unparalleled growth opportunities.
                </div>
            <a className="col-12" style={{textDecoration:'none', color:'teal'}}>Get Started Today > </a>
        </div>
      </div>
  
  );
};

export default ContactCard;