import React, { useEffect } from 'react';
import Banner from './img/banner-animate1.png';
import Banner2 from './img/banner-animate2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Offer() {
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
    <div className='offer-container'>
      <div data-aos="fade-right" data-aos-duration="1500" className="offer-box one">
        <div>
          <h4 className='fw-bold mt-3 mb-4 ms-2'>Get 10% off on Vegetables</h4>
          <p className='ms-2'>Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.</p>
          <button className='btn btn-warning ms-2 mt-3'>Shop Now</button>
        </div>
        <div>
          <img className='mt-4 banner-img' src={Banner} alt="" />
        </div>
      </div>
      <div data-aos="fade-right" className="offer-box two">
        <div  >
          <h4 className='fw-bold mt-3 mb-4 ms-2'>Get garden fresh fruits</h4>
          <p className='ms-2'>Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.</p>
          <button className='btn btn-warning ms-2 mt-3'>Shop Now</button>
        </div>
        <div>
          <img className='mt-4 banner-img' src={Banner2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
