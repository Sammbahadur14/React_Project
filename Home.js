import ScrollReveal from "scrollreveal";
import "./Style.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import man1 from "./Img/man3.gif";
import Pic2 from "./Img/home2.svg";
import Cars1 from "./Img/lappy.jpg";
import Cars2 from "./Img/webdev.jpg";
import Cars3 from "./Img/code2.jpg";
import man2 from "./Img/Man1.gif";


function Home() {
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
      <section id="intro">
        <div id="intro-info">
          <div>
            <h1 className="slide-right">
              Full Service Mobile App Development Company
            </h1>
            <div id="intro-tag-btn">
              <span className="slide-left">
                Over 100M app downloads across 1500+ projects.
              </span>
              <Link to="/contact" href="" className="brand-btn">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
        <div id="development-img" className="slide-down">
          <img
            src={man1}
            alt="Mobile App Development"
            title="Mobile App Development"
          />
        </div>
      </section>
      <section id="delivery">
        <h1 className="sec-heading slide-bottom">
          Delivering Experience Since 2023
        </h1>
        <div className="col-6 delivery-img slide-right">
          <img
            src={Pic2}
            alt="Productivity Delivering Experience"
            title="Delivering Experience Since 2009"
          />
        </div>
        <div className="col-6 slide-up">
          <h2>Accelerating your business growth with Digital Experiences</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            <br /> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <Link to="/contact" href="" className="brand-btn">
            Contact Us
          </Link>
        </div>

        {/* ============================== Clousers section ========================================*/}

<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    
      <h2 className="slide-down">Get Started Today!</h2>

    <div className="carousel-item active" data-bs-interval={10000}>
      <img src= {Cars1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src= {Cars2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Cars3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


{/* =============================== Clousers end ===================================*/}

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="slide-down">Explore Our Features</h3>
              <p className="slide-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                voluptate illum enim dolorum accusamus modi? Saepe eius,
                ducimus, inventore repudiandae fugit, illum numquam accusantium
                nisi dolore sed obcaecati hic dolorum? Voluptatem culpa, aliquam
                fugit tempora odio a eligendi nulla, ad ipsam illum, corporis
                corrupti nihil quo est laborum commodi! 
              </p>
            </div>

            <div className="col-md-6 slide-left">
              <img src={man2} alt="Features"/>
            </div>
          </div>
        </div>

  {/* =========================================================================   \ */}

  <div className="container">
    <div className="row cont-head">
      <h2 className="slide-down">Get Started Today!</h2>

      <p className="slide-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem numquam assumenda, repudiandae ipsam nobis! Placeat non id quae harum, maxime facere neque voluptatem reiciendis, veritatis magni sunt voluptate quidem officiis dolores possimus mollitia voluptas quos! Ut voluptatem nesciunt doloremque Praesentium modi reprehenderit hic vel adipisci tempora delectus excepturi unde eaque voluptatum tenetur minima optio quo totam illo, nisi deleniti non quae voluptas corporis quod numquam quas eos illum? Ipsa doloremque amet incidunt, commodi ipsam beatae reiciendis expedita ab!
      </p>
    </div>
  </div>


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
      </section>
    </>
  );
}

export default Home;
