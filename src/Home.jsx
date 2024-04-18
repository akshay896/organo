import React, { useEffect } from 'react';
import Onion from './img/slider-layer2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
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
    <div className='home-container'>
      <div className='heading-container'>
        <h1 data-aos="fade-right" data-aos-duration="1500">Choose the <br /> best healthier  way of life</h1>
        <button className='shop-now-btn'>Shop Now</button>
      </div>
      <div>
        <img className='onion' src={Onion} alt="" data-aos="fade-left" />
      </div>
    </div>
  );
}

export default Home;
