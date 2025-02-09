import { useEffect, useState } from 'react';
import faq from '../assets/data/faq.json';
import FormsSection from '../Components/FormsSection';
import ContactSection from '../Components/ContactSection';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const faqData = faq.faq;

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  return (
    <>
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light py-5">
      <div className="container">
        <h1 className="text-center display-4 font-weight-bold mb-5">Frequently Asked Questions</h1>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="card mb-3">
              <div className="card-header" id={`heading${index}`}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link w-100 text-left text-dark font-weight-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
              </div>
              <div
                id={`collapse${index}`}
                className="collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="card-body text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <FormsSection />
    <ContactSection />
    </>
    
  );
};

export default FAQPage;
