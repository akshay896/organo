import React, { useState, useEffect } from 'react';
import Land from './img/download.png';
import img1 from './img/customer.png';
import img2 from './img/team.png';
import img3 from './img/new-product.png';
import img4 from './img/medal.png';

function Review() {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const reviewContainer = document.querySelector('.review-container');
      if (!reviewContainer) return;
      const reviewContainerTop = reviewContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (reviewContainerTop < windowHeight && !countersVisible) {
        setCountersVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countersVisible]);

  const CountingNumber = ({ initialValue, finalValue }) => {
    const [count, setCount] = useState(initialValue);
    const increment = finalValue / 100; // Divide by 100 to increment smoothly

    useEffect(() => {
      if (count < finalValue) {
        const timer = setInterval(() => {
          setCount(prevCount => prevCount + increment);
        }, 10); // Adjust the interval for the desired speed
        return () => clearInterval(timer);
      }
    }, [count, finalValue, increment]);

    return <>{Math.ceil(count)}</>;
  };

  return (
    <div className='agri-land'>
      <div className='review-container'>
        <div className="review-box">
          <div><img className='icons' src={img1} alt="" /></div>
          <div className='Number'>
            {countersVisible && <CountingNumber initialValue={0} finalValue={1542} />}
            <span className='plus-icon'>+</span>
          </div>
        </div>
        <div className="review-box">
          <div><img className='icons' src={img2} alt="" /></div>
          <div className='Number'>
            {countersVisible && <CountingNumber initialValue={0} finalValue={182} />}
            <span className='plus-icon'>+</span>
          </div>
        </div>
        <div className="review-box">
          <div><img className='icons' src={img3} alt="" /></div>
          <div className='Number'>
            {countersVisible && <CountingNumber initialValue={0} finalValue={285} />}
            <span className='plus-icon'>+</span>
          </div>
        </div>
        <div className="review-box">
          <div><img className='icons' src={img4} alt="" /></div>
          <div className='Number'>
            {countersVisible && <CountingNumber initialValue={0} finalValue={27} />}
            <span className='plus-icon'>+</span>
          </div>
        </div>
      </div>
      <div>
        <div className='review-container second'>
          <div className="review-box ssecond">Satisfied Clients</div>
          <div className="review-box ssecond">Expert Team</div>
          <div className="review-box ssecond">Activate Products</div>
          <div className="review-box ssecond">Awards Winning</div>
        </div>
        <img className='w-100' src={Land} alt="" />
      </div>
    </div>
  );
}

export default Review;
