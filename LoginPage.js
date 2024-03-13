import React, { useState } from "react";
import "./Style.css";
import LoginPic from "./Img/Securelogin.gif";
function LoginPage() {
  // State variables to store form data and validation errors

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data state
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error for the current input
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm(formData);

    // If there are validation errors, update the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, perform the submission logic here
      console.log("Form submitted:", formData);
    }
  };

  // Function to validate the form data
  const validateForm = (data) => {
    let errors = {};

    // Validate username
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    // Validate email
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    // Validate password
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  // Function to check the validity of an email address
  const isValidEmail = (email) => {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <section>
        <div className="row formInp">
          <div className="section-head slide-down">
            <h4>
              <span>Login</span> page
            </h4>
          </div>

          <div className="col-md-6">
            <h2 className="slide-down">Login now</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
              <div className="formfiled">
                <span className="space"></span>
                <label>Username:</label>
                <input
                  className="inputFld"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <span className="errors">{errors.username}</span>
                )}
              </div>

              <div className="formfiled">
                <label>Email:</label>
                <input
                  className="inputFld"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="errors">{errors.email}</span>}
              </div>

              <div className="formfiled">
                <label>Password:</label>
                <input
                  className="inputFld"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <span className="errors">{errors.password}</span>
                )}
              </div>

              <button type="submit" className="subBtn">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 Form-pic slide-left">
          <img src={LoginPic} alt="#" />
        </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
