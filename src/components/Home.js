import React from 'react'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Service from './Service'


const Home = () => {
  return (
   <>
   <div className='mn'>
    <div className='main-con'>
      <div className='cont'>
       <h3>Welcome To Webhopper</h3>
      </div>
      <div className='cont1'>
        <h1>PROVIDING SERVICE TO INNOVATE </h1>
        <h1>YOUR DIGITAL WORLD</h1>
      </div>
      <div className='cont2'>
        <button>Request A Callback</button>
      </div>
      <span>Free Estimate</span>
      

    </div>
    </div>
    <About/>
    <Service/>
    <Contact/>
   <Footer/>
   </>
      
 
      
   
  )
}

export default Home