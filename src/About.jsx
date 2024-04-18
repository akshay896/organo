import React, { useEffect } from 'react';
import About2 from './img/about-img2.jpg';
import Organic from './img/organic-food.png';
import Organic2 from './img/organic-food2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
      delay: 100, // Add delay (in milliseconds) before the animation starts.
      duration: 800, // Set the duration (in milliseconds) of the animation.
      easing: 'ease', // Specify the easing function for the animation.
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="about-us-container">
      <div data-aos="fade-right">
        <img className='about-img' src={About2} alt="" />
      </div>
      <div data-aos="fade-left">
        <h4 className='about-us'>~ About us ~</h4>
        <h1 className='we-believe'>We believe in working with accredited farmers</h1>
        <p className='organic-foods'>Organic Foods and Café is a family run company founded in 2004 that runs organic supermarkets</p>
        <p className='organic-means'>Organic means growing our food, which is to nourish us, without chemical aids during the growing process such as fertilisers, pesticides, fungicides, herbicides, larvicides etc</p>
        <div className='why'>
          <div className='d-flex' data-aos="fade-up">
            <div>
              <img className='why-img' src={Organic} alt="" />
            </div>
            <div>
              <h5>Why Organic?</h5>
              <p>We're making room for self care today with plan.</p>
            </div>
          </div>
          <div className='d-flex' data-aos="fade-up">
            <div>
              <img className='why-img' src={Organic2} alt="" />
            </div>
            <div>
              <h5>Specialty Produce</h5>
              <p>We're making room for self care today with plan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
