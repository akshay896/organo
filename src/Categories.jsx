import React, { useEffect, useRef } from 'react';
import Product1 from './img/product-category1.png';
import Product2 from './img/product-category2.png';
import Product3 from './img/product-category3.png';
import Product4 from './img/product-category4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Categories() {
  const carouselRef = useRef(null);
  
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
    <div className="categories-container">
      <div>
        <h4 className="text-center about-us">~ Categories ~</h4>
        <h1 className="text-center">We believe in working with <br /> accredited farmers</h1>
      </div>
      <div className="products" ref={carouselRef}>
        <div className="product-box" data-aos="fade-up">
          <div className="inner-box">
            <div className="head-part">
              <div className="first-letter">S</div>
              <div className='productimg-container'>
                <img className='product-img' src={Product1} alt="" />
              </div>
            </div>
            <div className='content text-center'>
              <h4 className='text-center'>Spices</h4>
              <p className='text-center'>Purchasing from select family farmers who farm organically.</p>
              <button className='shop-now ulli'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="product-box" data-aos="fade-up">
          <div className="inner-box">
            <div className="head-part">
              <div className="first-letter">V</div>
              <div className='productimg-container'>
                <img className='product-img' src={Product2} alt="" />
              </div>
            </div>
            <div className='content text-center'>
              <h4 className='text-center'>Vegetables</h4>
              <p className='text-center'>Purchasing from select family farmers who farm organically.</p>
              <button className='shop-now pachakkari'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="product-box" data-aos="fade-up">
          <div className="inner-box">
            <div className="head-part">
              <div className="first-letter">F</div>
              <div className='productimg-container'>
                <img className='product-img' src={Product3} alt="" />
              </div>
            </div>
            <div className='content text-center'>
              <h4 className='text-center'>Fresh Fruits</h4>
              <p className='text-center'>Purchasing from select family farmers who farm organically.</p>
              <button className='shop-now pazham'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="product-box" data-aos="fade-up">
          <div className="inner-box">
            <div className="head-part">
              <div className="first-letter">N</div>
              <div className='productimg-container'>
                <img className='product-img' src={Product4} alt="" />
              </div>
            </div>
            <div className='content text-center'>
              <h4 className='text-center'>Nuts & Dried Food</h4>
              <p className='text-center'>Purchasing from select family farmers who farm organically.</p>
              <button className='shop-now nuts'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
