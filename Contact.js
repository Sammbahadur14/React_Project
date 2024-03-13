import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

function Contact() {
  // ================== Validaton ============================

// Separate state for each form field value
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [mobile, setMobile] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

// Separate state for each form field error
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [mobileError, setMobileError] = useState('');
const [subjectError, setSubjectError] = useState('');
const [messageError, setMessageError] = useState('');

const handleInputChange = (e) => {
  const { name, value } = e.target;

  // Update form field value
  switch (name) {
    case 'name':
      setName(value);
      setNameError('');
      break;
    case 'email':
      setEmail(value);
      setEmailError('');
      break;
    case 'mobile':
      setMobile(value);
      setMobileError('');
      break;
    case 'subject':
      setSubject(value);
      setSubjectError('');
      break;
    case 'message':
      setMessage(value);
      setMessageError('');
      break;
    default:
      break;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Simple validation
  const validationErrors = validateForm();

  if (Object.values(validationErrors).some((error) => error !== '')) {
    // If there are validation errors, update the error states
    setNameError(validationErrors.name);
    setEmailError(validationErrors.email);
    setMobileError(validationErrors.mobile);
    setSubjectError(validationErrors.subject);
    setMessageError(validationErrors.message);
  } else {
    // Form is valid, perform the submission logic here

    console.log(
      alert( 'Form submitted:') , {
      name,
      email,
      mobile,
      subject,
      message,
    });
    
    // Add your form submission logic here (e.g., send data to the server)
  }
};

const validateForm = () => {
  let errors = {
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  };

  // Check for presence of values
  if (!name.trim()) {
    errors.name = 'Name is required';
  }

  if (!email.trim()) {
    errors.email = 'Email is required';
  }

  if (!mobile.trim()) {
    errors.mobile = 'Mobile number is required';
  }

  if (!subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};


  // ================= Scroll effect===========================

  useEffect(() => {
    // Configure ScrollReveal for each div

    ScrollReveal().reveal(".slide-right", {
      duration: 1000,
      distance: "50px",
      origin: "left",
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".slide-left", {
      duration: 1000,
      distance: "50px",
      origin: "right",
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".slide-up", {
      duration: 1000,
      distance: "50px",
      origin: "bottom",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".slide-down", {
      duration: 1000,
      distance: "50px",
      origin: "top",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className="contact-sec sec-pad">
        <div className="container">
          <div className="section-head slide-down">
            <h4>
              <span>Contact</span> Us
            </h4>
          </div>
          <div className="row slide-up">
            <div className="col-md-6">
              <div className="contact-detail">
                <ul className="contact-ul">
                  <li>
                    <i className="fa fa-location-dot" /> 21, Prayagraj, India
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <Link href="tel:08510004495">
                      <b>0255000XXXX</b>
                    </Link>
                    ,
                    <Link href="tel:08510005495">
                      <b>0251600XXXX</b>
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    <Link href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> samm@gmail.com</b>
                    </Link>
                  </li>
                </ul>
                <span>
                  <Link href="#" className="fb">
                    <i className="fa-brands fa-facebook" />
                  </Link>
                  <Link href="#" className="insta">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link href="#" className="twitter">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <form className="contFrm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="inptFld"
                      value={name}
                      onChange={handleInputChange}
                    />
                    {nameError && <span className="errors">{nameError}</span>}
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      value={email}
                      onChange={handleInputChange}
                    />
                    {emailError && <span className="errors">{emailError}</span>}
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Phone Number"
                      className="inptFld"
                      value={mobile}
                      onChange={handleInputChange}
                    />
                    {mobileError && <span className="errors">{mobileError}</span>} 
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="subject"
                      className="inptFld"
                      value={subject}
                      onChange={handleInputChange}
                    />
                    {subjectError && <span className="errors">{subjectError}</span>}
              
                  </div>
                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      name="message"
                      placeholder="Your Message..."
                      value={message}
                      onChange={handleInputChange}
                    />
                    {messageError && <span className="errors">{messageError}</span>}
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      defaultValue="SUBMIT"
                      className="brand-btn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =======================Background animation =========================== */}

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
