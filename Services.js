import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./Style.css";
import { useEffect } from "react";
function Services() {

  useEffect(() => {
    // Configure ScrollReveal for each div
    ScrollReveal().reveal('.slide-right', {
      duration: 1000,
      distance: '50px',
      origin: 'left',
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('.slide-left', {
      duration: 1000,
      distance: '50px',
      origin: 'right',
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('.slide-up', {
      duration: 1000,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.slide-down', {
      duration: 1000,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
    });

  }, []);

  return (
    <>
      <section id="services">
        <div className="section-head slide-down">
          <h4>
            <span>Our</span> Services
          </h4>
        </div>

        <ul className="slide-up">
          <li>
            <div>
              <Link href="">
                <i className="fas fa-laptop" />
                <span>Stratagy and Consultant</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="">
                <i className="fas fa-users" />
                <span>User Experience Design</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="">
                <i className="fas fa-mobile-alt" />
                <span>Mobile App Development</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="">
                <i className="fab fa-chrome" />
                <span>Web App Development</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="">
                <i className="fas fa-ribbon" />
                <span>Quality Analysis and Testing</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="">
                <i className="fas fa-ticket-alt" />
                <span>Application Management &amp; Support</span>
              </Link>
            </div>
          </li>
        </ul>
        <div id="service-footer">
          <Link to="/ourservices" href="" className="brand-btn">
            View All Service
          </Link>
        </div>
      </section>

      {/* =======================Background animation =========================== */}

      <div className="area">
        <ul className="circles">
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

export default Services;
