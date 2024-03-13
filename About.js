import React, { useEffect } from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

function About() {

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

    <section>
    <div className="about-section">
  <div className="inner-width">
    <div className="section-head slide-down">
        <h4>
          <span>About</span> Us
        </h4>
    </div>
    <div className="about-section-row slide-up">
      <div className="about-section-col">
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            provident ea hic, neque amet sequi temporibus iure aliquid placeat
            inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime,
            necessitatibus!
          </p>
          <Link href="#" alt ="">Read More</Link>
        </div>
      </div>
      <div className="about-section-col">
        <div className="skills">
          <div className="skill">
            <div className="title">Web Design</div>
            <div className="progress">
              <div className="progress-bar p1">
                <span>90%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="title">Graphic Design</div>
            <div className="progress">
              <div className="progress-bar p2">
                <span>70%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="title">UX Design</div>
            <div className="progress">
              <div className="progress-bar p3">
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>


  <section id="partners" className="brand-logos">
    <div className="section-head slide-down">
        <h4>
          <span>Our</span> Partners
        </h4>
    </div>
    
    <div className='slide-up'>
      <Link>
        <img
          src="https://www.dropbox.com/s/mk5ca04seizpf8l/aws.svg?raw=1"
          alt="Work with AWS"
          title="Our Work"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/r9utt5nj9k9m1t8/Dell.png?raw=1"
          alt="Dell"
          title="Work with Dell"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/umw9g0zgm1ecfvn/Intel.png?raw=1"
          alt="intel"
          title="Work with intell"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/x0hrha2dosey99z/ibm.png?raw=1"
          alt="IBM"
          title="Work with IBM"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/ekzu1wcki6jziay/Microsoft.svg?raw=1"
          alt="Microsoft"
          title="Work with Microsoft"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/lvl5cp14i3v0wgi/Nasscom.png?raw=1"
          alt="Nasscom"
          title="Work with Nasscom"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/h66k9jaaknxaum4/Samsung.png?raw=1"
          alt="Samsung"
          title="Work with Samsung"
        />
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/86cbtf78khj0q9z/Nvidia.png?raw=1"
          alt="Nvidia"
          title="Work with Nvidia"
        />
      </Link>{" "}
    </div>
  </section>

  {/*----------------------Services --------------------------------------*/}


  <section id="topList" className="brand-logos">
    <h1 className="sec-heading slide-down">
      Recognition as Top Mobile Development Company
    </h1>
    <div className='slide-up'>
      <Link>
        <img
          src="https://www.dropbox.com/s/19czj59oq0orbfa/tm.png?raw=1"
          alt="Top 10 MobleApp Development Companies"
          title="Top 10 MobleApp Development Companies"
        />
        <span>Recognised Among Top 10 MobleApp Development Companies</span>
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/130734rofy1f261/tata.png?raw=1"
          alt="Top 10 MobleApp Development Companies"
          title="Top 10 MobleApp Development Companies"
        />
        <span>Recognised Among Top 10 MobleApp Development Companies</span>
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/k17kwv9hiu9w98d/Infosys_logo.png?raw=1"
          alt="Top 10 MobleApp Development Companies"
          title="Top 10 MobleApp Development Companies"
        />
        <span>Recognised Among Top 10 MobleApp Development Companies</span>
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/mm4cnforc4pvwac/Wipro_Logo.png?raw=1"
          alt="Top 10 MobleApp Development Companies"
          title="Top 10 MobleApp Development Companies"
        />
        <span>Recognised Among Top 10 MobleApp Development Companies</span>
      </Link>
      <Link>
        <img
          src="https://www.dropbox.com/s/n4scpig8b3tfqkq/Amazon_logo.svg?raw=1"
          alt="Top 10 MobleApp Development Companies"
          title="Top 10 MobleApp Development Companies"
        />
        <span>Recognised Among Top 10 MobleApp Development Companies</span>
      </Link>
    </div>
  </section>
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

  )
}

export default About