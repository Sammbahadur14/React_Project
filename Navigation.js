import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function Navigation() {
  return (
    <>
      <ul id="topInfo">
        <li>Mob +91 9453090081</li>
        <li>info@thefreelancer.com</li>
      </ul>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <Link to = "/" className="navbar-brand" href="#">
            The Freelancer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to ="/" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to ="/services" className="nav-link" href="#">
                  Service
                </Link>
              </li>

              <li className="nav-item">
                <Link to ="/portfolio" className="nav-link" href="#">
                  Our Story
                </Link>
              </li>

              <li className="nav-item">
                <Link to ="/about" className="nav-link" href="#">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to ="/contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link to ="/blogs" className="nav-link" href="#">
                  Blog
                </Link>
              </li>
            </ul>
            
            <div className="login-btn">
                <Link to ="/loginpage" className="nav-link" href="#">
                  Login
                </Link>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
