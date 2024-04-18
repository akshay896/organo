import React from 'react'
import t1 from './img/t1.jpg'
import t2 from './img/t2.jpg'
import t3 from './img/t3.jpg'
import leaf from './img/left-leaf.png'


function Team() {
  return (
    
      <div className='team-container text-center'>
        
        <div className="team-items">
          <img className='t-member' src={t1} alt="" />
          <div className='leaf1'><img className='' src={leaf} alt="" /></div>
         

          <div className='name-board'>
            <h4 className='text-center text-light'>Alisa Lisa</h4>
            <p className='text-light'>Custom care Officer</p>
          </div>
          <p className='mt-4'>Lisa focused on providing customers with organic and fair trade food.</p>
        </div>
        <div className="team-items">
        <img className='t-member' src={t2} alt="" />
        <div className='leaf1'><img className='' src={leaf} alt="" /></div>
          

          <div className='name-board'>
            <h4 className='text-center text-light'>Alisa Lisa</h4>
            <p className='text-light'>Custom care Officer</p>
          </div>
          <p className='mt-4'>Lisa focused on providing customers with organic and fair trade food.</p>
        </div>
        <div className="team-items">
        <img className='t-member' src={t3} alt="" />
        <div className='leaf1'><img className='' src={leaf} alt="" /></div>
        

          <div className='name-board'>
            <h4 className='text-center text-light'>Alisa Lisa</h4>
            <p className='text-light'>Custom care Officer</p>
          </div>
          <p className='mt-4'>Lisa focused on providing customers with organic and fair trade food.</p>
        </div>
      </div>
    
   
  )
}

export default Team