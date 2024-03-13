import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Pic2 from './Img/home2.svg';

function Portfolio() {

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
      <section id="success-story">
    <div className="section-head slide-down">
        <h4>
          <span>Our Success</span> Story
        </h4>
    </div>

        <div className="slider">
          <div className="col-6 slide-text slide-right">
            <div>
              <h2>World Travel Protection</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <Link to="/contact" href="" className="brand-btn">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-6 slide-img slide-left">
            <img
              src={Pic2}
              alt="World Travel App Development"
              title="World Travel Protection"
            />
          </div>
        </div>
</section>


      {/* ========================================================= */}

      <section id="revenue" className="brand-logos slide-up">
        <h1 className="sec-heading">
          We Drive Growth &amp; Revenue for the Best Companies
        </h1>
        <div>
          <Link>
            <img
              src="https://www.dropbox.com/s/lmvtthec9yn0ti6/Allianz.png?raw=1"
              alt="Allianz"
              title="Work with Allianz"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/kotgq2u4qr34i2u/audi.jpg?raw=1"
              alt="Audi"
              title="Work with Audi"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/t5dapt3lkz7rdhe/BMW.png?raw=1"
              alt="BMW"
              title="Work with BMW"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/ocqbsbgj590ztyy/ESPN.png?raw=1"
              alt="ESPN"
              title="Work with ESPN"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/2maaqxijcmbaqxg/LG.png?raw=1"
              alt="LG"
              title="Work with LG"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/yn3gj203hrdjfu7/Logo_NIKE.png?raw=1"
              alt="Nike"
              title="Work with Nike"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/gfxa6exv7h1ro6q/Suzuki_logo.png?raw=1"
              alt="Suzuki"
              title="Work with Suzuki"
            />
          </Link>
          <Link>
            <img
              src="https://www.dropbox.com/s/b7vwmjf6e0owybv/Visa.svg?raw=1"
              alt="Visa"
              title="Work with Visa"
            />
          </Link>
        </div>
      </section>

      
      <section id="highlights">
        <h1 className="sec-heading slide-down">Company Highlights</h1>
        <div className="slider slide-up">
          <div className="col-6 slide-text">
            <div>
              <h2>Team The Freelacer at IBM, Sector 68, 2024, Noida</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <Link  href="" className="brand-btn">
                See More
              </Link>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img
              src="https://www.dropbox.com/s/vnkswx20c0dg5ta/analyzing.jpg?raw=1"
              alt="Team Work in Los Angeles"
              title="Company Team Work"
            />
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
export default Portfolio;
