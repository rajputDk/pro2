import React from 'react'
import jio from './image/jio.jpg'
import Send from './image/send.jpg'
import Timer from './image/timer.jpg'
import Offer from './image/offer.jpg'
import Footer from './Footer'
import {TfiTimer} from 'react-icons/tfi'


function About() {
  return (
    <>
      <div className='ab'>
        <div className='ab1'>
          <h1>ABOUT US</h1>
        </div>
        <div className='ab2'>
          <div className='ab3'>
            <h4>SHORT STORY</h4>
            <h1>ABOUT SMART DIGI HOME</h1>
            {/* </div>
            <div className='ab5'> */}
            <p> ask questions, make suggestions, and encourage us to find new and exciting ways to be creative. We always act in accordance with our basic values of integrity, diligence, and trust. These qualities, in our opinion, need to guide everything we undertake. Because of how much we genuinely enjoy what we do, our clients benefit. Our solutions are more robust, user-friendly, and long-lasting thanks to a no-compromise quality approach. Staff with extensive industry experience to fully comprehend your situation and recommend the best option that meets your needs and is within your . </p>
            </div>
         
               <div className='ab4'>
            <img  src={jio}/> 

            </div>  

        </div>
       

      </div>
      <div className='ab6'>
        <div className='ab7'>
        <img  src={Timer}/>
        <h6>FLEXIBLE SCHEDULE</h6>
        
        </div>
        <div className='ab8'>
        <img  src={Offer}/>
       <h6>AFFORDABLE PACKAGE</h6>
        </div>
        <div className='ab9'>
        <img  src={Send}/>
     <h6>SPECIAL OFFER</h6>
        </div>
   
      </div>
{/* <Footer/> */}
    </>
  )
}

export default About