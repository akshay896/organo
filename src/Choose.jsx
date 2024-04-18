import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Choose() {
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

      // Settings that can be overridden on a per-element basis, by `data-aos-*` attributes:
      offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
      delay: 100, // Add delay (in milliseconds) before the animation starts.
      duration: 800, // Set the duration (in milliseconds) of the animation.
      easing: 'ease', // Specify the easing function for the animation.
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Clean up function
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="choose-container">
      <div className="choose-box first">
        <div className="features" data-aos="fade-right">
          <div className="outside-round"><div className="round"><i className="fa-solid fa-rotate-left brands"></i></div></div>
          <div className="text-center">
            <h4 className="feature-head">Return Policy</h4>
            <p className="feature-para">Purchasing from select family farmers who farm organically.</p>
          </div>
        </div>
        <div className="features" data-aos="fade-right">
          <div className="outside-round"><div className="round"><i className="fa-brands fa-envira brands"></i></div></div>
          <div className="text-center">
            <h4 className="feature-head">100% Fresh</h4>
            <p className="feature-para">Purchasing from select family farmers who farm organically.</p>
          </div>
        </div>  
        <div className="features" data-aos="fade-right">
          <div className="outside-round"><div className="round"><i className="fa-solid fa-phone-volume brands"></i></div></div>
          <div className="text-center">
            <h4 className="feature-head">Support 24/7</h4>
            <p className="feature-para">Purchasing from select family farmers who farm organically.</p>
          </div>
        </div>
        <div className="features" data-aos="fade-right">
          <div className="outside-round"><div className="round"><i className="fa-solid fa-shield-halved brands"></i></div></div>
          <div className="text-center">
            <h4 className="feature-head">Secured Payment</h4>
            <p className="feature-para">Purchasing from select family farmers who farm organically.</p>
          </div>
        </div>
      </div>
      <div className="choose-box" data-aos="fade-left">
        <h4 className='about-us mt-5'>~ Why Choose Us? ~</h4>
        <h1 className='we-believe'>We do not buy from the open market & traders.</h1>
        <p className='organic-means'>Purchasing from select family farmers who farm organically because they believe in it and so we do. We are conscious of air miles and our carbon footprint so a lot of our produce comes from Egypt.</p><br />
        <p className='organic-means'>Organic Foods and Café is a family run company that runs organic super markets and cafés selling fresh organic and biodynamic food, suppliers, skincare, cosmetics, baby items and household cleaning products. We have 5 shops in Dubai – on Sheikh Zayed Road.</p>
      </div>
    </div>
  );
}

export default Choose;
