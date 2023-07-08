import React from 'react'
import design from './image/design.jpeg'
import ser from './image/ser.jpg'
import development from './image/development.jpeg'
import Footer from './Footer'


function Service() {
  return (
    <div>
      <div className='sl'>
     <div className='sl1'>
     <h1>SERVICES</h1>
     </div>
     <div className='sl2'>
    
     <img src={development}/>
     <img src={ser} />
     <img src={design} />
     </div>
     
     <div className='sl3'>
   
    
     </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Service