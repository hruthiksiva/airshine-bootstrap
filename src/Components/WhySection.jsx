import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faChartLine, faHeadset, faShieldAlt, faLightbulb, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const WhySection = () => {
  return (
    <div className="container-fluid py-5 bg-dark">
        <div className="row d-flex justify-content-center text-center my-5">
          <div className="col-10 text-white">
            <h1>Our <span className="text-center" style={{ color:'lightBlue' }}>Core Strengths</span></h1>
            <p className="">
              At AaiTech, we take great pride in our core strengths, which fuel our dedication to quality work and client satisfaction. Our creative approach is driven by ongoing research and development, guaranteeing that we provide the best solutions customized to your particular company requirements.
              <p className="fw-normal" style={{ color: 'teal' }}>Get in touch today to explore the possibilities. Your success, our commitment.</p>
            </p>
          </div>
        </div>

        {/* Cards for Core Strengths */}
        <div className="row d-flex pb-5 justify-content-center">
          {/* Card 1: Innovation and R&D */}
          <div className="card border-0 col-md-3 shadow-sm col-10 m-3 herobg  rounded-4" style={{  }}>
            <div className="card-body d-flex flex-column align-items-start" style={{ display: 'flex', flexDirection: 'column' }}>
              <FontAwesomeIcon icon={faFlask} size="2x" className="mb-3" style={{  }} /> {/* Font Awesome Icon */}
              <h5 className="card-title">Innovation and R&D</h5>
              <p className="card-text">
                Driving innovation through continuous research and development to deliver cutting-edge solutions, ensuring our clients stay ahead in a rapidly evolving technological landscape.
              </p>
              <div className="mt-auto">
                <a href="/contact" className="" style={{ textDecoration: 'none',  }}>Start with us  </a>
              </div>
            </div>
          </div>

          {/* Card 2: Scalability */}
          <div className="card border-0 col-md-3 shadow-sm col-10 m-3 herobg rounded-4" style={{  }}>
            <div className="card-body d-flex flex-column align-items-start" style={{ display: 'flex', flexDirection: 'column' }}>
              <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-3" style={{  }} /> {/* Font Awesome Icon */}
              <h5 className="card-title">Scalability</h5>
              <p className="card-text">
                Designing flexible solutions that grow seamlessly with your business, ensuring long-term scalability and adaptability to changing market demands.
              </p>
              <div className="mt-auto">
                <a href="/contact" className="" style={{ textDecoration: 'none',  }}>Start with us  </a>
              </div>
            </div>
          </div>

          {/* Card 3: Customer Support */}
          <div className="card border-0 col-md-3 shadow-sm col-10 m-3 herobg rounded-4" style={{  }}>
            <div className="card-body d-flex flex-column align-items-start" style={{ display: 'flex', flexDirection: 'column' }}>
              <FontAwesomeIcon icon={faHeadset} size="2x" className="mb-3" style={{  }} /> {/* Font Awesome Icon */}
              <h5 className="card-title">Customer Support</h5>
              <p className="card-text">
                Providing exceptional support to ensure client success and satisfaction, with a dedicated team available to address your needs promptly and effectively.
              </p>
              <div className="mt-auto">
                <a href="/contact" className="" style={{ textDecoration: 'none',  }}>Start with us  </a>
              </div>
            </div>
          </div>

          {/* Card 4: Security and Compliance */}
          <div className="card border-0 col-md-3 shadow-sm col-10 m-3 herobg rounded-4" style={{  }}>
            <div className="card-body d-flex flex-column align-items-start" style={{ display: 'flex', flexDirection: 'column' }}>
              <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mb-3" style={{  }} /> {/* Font Awesome Icon */}
              <h5 className="card-title">Security and Compliance</h5>
              <p className="card-text">
                Implementing robust security measures and ensuring compliance with industry standards, safeguarding your data and maintaining trust and reliability.
              </p>
              <div className="mt-auto">
                <a href="/contact" className="" style={{ textDecoration: 'none',  }}>Start with us  </a>
              </div>
            </div>
          </div>

          {/* Card 5: Proactive Problem Solving */}
          <div className="card border-0 col-md-3 shadow-sm col-10 m-3 herobg rounded-4" style={{  }}>
            <div className="card-body d-flex flex-column align-items-start" style={{ display: 'flex', flexDirection: 'column' }}>
              <FontAwesomeIcon icon={faLightbulb} size="2x" className="mb-3" style={{  }} /> {/* Font Awesome Icon */}
              <h5 className="card-title">Proactive Problem Solving</h5>
              <p className="card-text">
                Anticipating and resolving challenges swiftly to maintain project momentum and client satisfaction, ensuring smooth and efficient project delivery.
              </p>
              <div className="mt-auto">
                <a href="/contact" className="" style={{ textDecoration: 'none',  }}>Start with us  </a>
              </div>
            </div>
          </div>

          {/* Card 6: Commitment to Deadlines */}
          <div className="card border-0 col-md-3 shadow-sm col-10 m-3 herobg rounded-4" style={{  }}>
            <div className="card-body d-flex flex-column align-items-start" style={{ display: 'flex', flexDirection: 'column' }}>
              <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="mb-3" style={{  }} /> {/* Font Awesome Icon */}
              <h5 className="card-title">Commitment to Deadlines</h5>
              <p className="card-text">
                Consistently meeting project deadlines, ensuring timely delivery and client satisfaction, while maintaining the highest standards of quality.
              </p>
              <div className="mt-auto">
                <a href="/contact" className="" style={{ textDecoration: 'none',  }}>Start with us </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WhySection