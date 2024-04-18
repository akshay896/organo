import logo2 from './img/logo-white.png'
import React from 'react'
import in1 from './img/in1.jpg'
import in2 from './img/in2.jpg'
import in3 from './img/in3.jpg'
import in4 from './img/in4.jpg'
import in5 from './img/in5.jpg'
import in6 from './img/in6.jpg'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-items">
        <img className='w-50 ms-3 mt-4' src={logo2} alt="" />
        <p className='text-light mt-4 ms-3'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
        <div className='icon-container ms-3'>
          <div className="social-media">
          <i class="fa-brands fa-facebook-f soc"></i>
          </div>
          <div className="social-media">
          <i class="fa-brands fa-twitter soc"></i>
          </div>
          <div className="social-media">
          <i class="fa-brands fa-instagram soc"></i>
          </div>
          <div className="social-media">
          <i class="fa-brands fa-whatsapp soc"></i>
          </div>
        </div>
      </div>
      <div className="footer-items except">
        <h3 className='foot-head'>Links</h3>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>News</li>
        </ul>
      </div>
      <div className="footer-items except">
        <h3 className='foot-head'>Official Info</h3>
        <p className='text-light'><span className='special me-3'><i class="fa-solid fa-location-dot"></i></span> 30 Commercial Road Fratton, Australia</p>
        <p className='text-light'><span className='special me-3'><i class="fa-solid fa-phone special"></i></span> 1-888-452-1505</p>
        <p className='text-warning'>Open Hours:</p>
        <p className='text-light'>Mon – Sat: 8 am – 5 pm,
Sunday: CLOSED</p>
      </div>
      <div className="footer-items">
        <h3 className='foot-head'>Instagram</h3>
        <div className='insta-img-container'>
          <div className="div">
            <img className='w-100' src={in1} alt="" />
          </div>
          <div className="div">
          <img className='w-100' src={in2} alt="" />
          </div>
          <div className="div">
          <img className='w-100' src={in3} alt="" />
          </div>
          <div className="div">
          <img className='w-100' src={in4} alt="" />
          </div>
          <div className="div">
          <img className='w-100' src={in5} alt="" />
          </div>
          <div className="div">
          <img className='w-100' src={in6} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer