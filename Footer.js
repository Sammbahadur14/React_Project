import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Footer = () => {

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
      <footer>
        <div>
          <span className="logo slide-down">The Freelancer</span>
        </div>
        <div className="row slide-up">
          <div className="col-3">
            <span className="footer-cat">Solution</span>
            <ul className="footer-cat-links">
              <li>
                <Link href="">
                  <span>Interprise App Development</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Android App Development</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>ios App Development</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <span className="footer-cat">Industries</span>
            <ul className="footer-cat-links">
              <li>
                <Link href="">
                  <span>Healthcare</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Sports</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>ECommerce</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Construction</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Club</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <span className="footer-cat">Quick Links</span>
            <ul className="footer-cat-links">
              <li>
                <Link href="">
                  <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Terms &amp; Condition</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Disclaimer</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>Site Map</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3" id="newsletter">
            <span className="footer-cat">Stay Connected</span>
            <form id="subscribe">
              <input
                type="email"
                id="subscriber-email"
                placeholder="Enter Email Address"
              />
              <input type="submit" defaultValue="Subscribe" id="btn-scribe" />
            </form>
            <div className="social-links social-2">
              <Link href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link href="">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link href="">
                <i className="fab fa-instagram" />
              </Link>
            </div>

            <div id="address">
              <span className="footer-cat">Office Location</span>
              <ul>
                <li>
                  <i class="fa-solid fa-building-user"></i>
                  <div>
                    Uttar Pradesh
                    <br />
                    Sector 3, High-tech City, Naini, Prayagraj
                  </div>
                </li>
                <li>
                  <i class="fa-solid fa-torii-gate"></i>
                  <div>
                    Delhi <br /> Office 150B, Station Road, Delhi
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links social-1 col-6">
            <Link href="">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="">
              <i className="fab fa-linkedin-in" />
            </Link>
            <Link href="">
              <i className="fab fa-instagram" />
            </Link>
            <Link href="">
              <i className="fab fa-tumblr" />
            </Link>
            <Link href="">
              <i className="fab fa-reddit-alien" />
            </Link>
          </div>
        </div>
        <div id="copyright">Copyright © All rights reserved | Samm</div>
        <div id="owner">
          <span>Designed by Samm</span>
        </div>
        <Link href="#topHeader" id="gotop" className="gotop">
          Top
        </Link>
      </footer>

       {/* =======================Background animation =========================== */}

       <div class="area" >
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
    </div >
    </>
  );
};
export default Footer;
