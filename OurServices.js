import React, { useEffect } from 'react'
import './OurServices.css';
import ScrollReveal from 'scrollreveal';

function OurServices() {

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
    <div className="feat bg-gray pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="section-head col-sm-12">
        <h4 className='slide-down'>
          <span>Why Choose</span> Me?
        </h4>
        <p className='slide-up'>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's
          <br />
          standard dummy text ever since the 1500s, when an unknown book.
        </p>
      </div>
      <div className="col-lg-4 col-sm-6 slide-up">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_one">
            <i className="fa fa-globe" />
          </span>
          <h6>Modern Design</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor Aenean massa.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 slide-down">
        <div className="item">
          <span className="icon feature_box_col_two">
            <i className="fa fa-anchor" />
          </span>
          <h6>Creative Design</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor Aenean massa.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 slide-up">
        <div className="item">
          <span className="icon feature_box_col_three">
            <i className="fa fa-hourglass-half" />
          </span>
          <h6>Your Photoshoping</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor Aenean massa.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 slide-down">
        <div className="item">
          <span className="icon feature_box_col_four">
            <i className="fa fa-database" />
          </span>
          <h6>Business Growth</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor Aenean massa.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 slide-up">
        <div className="item">
          <span className="icon feature_box_col_five">
            <i className="fa fa-upload" />
          </span>
          <h6>Market Strategy</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor Aenean massa.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 slide-down">
        <div className="item">
          <span className="icon feature_box_col_six">
            <i className="fa fa-camera" />
          </span>
          <h6>Retina Ready</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor Aenean massa.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default OurServices