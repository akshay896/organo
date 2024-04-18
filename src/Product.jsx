import React from 'react';
import p1 from './img/juice.jpg';
import p2 from './img/cabbage.jpg';
import p3 from './img/brown bread.jpg';
import p4 from './img/orange.png';
import p5 from './img/apple.png';
import p6 from './img/fresh juice.jpg';
import p7 from './img/organic rice.jpg';
import p8 from './img/oat cake.jpg';

function Product() {
  return (
    <div className='Product-container'>
      <h4 className='text-center about-us'>~ Products ~</h4>
      <h1 className='we-believe text-center'>All of our products are organic <br /> & fresh.</h1>
      <div className='main-product-container'>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p1} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Organic Juice</h3>
              <h5 className='p-price'>$10.00 - $20.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p2} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Organic Cabbage</h3>
              <h5 className='p-price'>$4.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p4} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Fresh Orange</h3>
              <h5 className='p-price'>$12.00 - $65.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p3} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Brown Bread</h3>
              <h5 className='p-price'>$6.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-product-container'>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p5} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Red Apple </h3>
              <h5 className='p-price'>$18.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p6} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Fresh Juice</h3>
              <h5 className='p-price'>$8.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p7} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Organic Rice</h3>
              <h5 className='p-price'>$10.00 - $20.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
        <div className='outer-box'>
          <div className="products2">
            <div className='header'>
              <img className='w-100' src={p8} alt="" />
            </div>
            <div className='text-center'>
              <h3 className='p-head'>Oat Cake</h3>
              <h5 className='p-price'>$14.00</h5>
              <p className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
