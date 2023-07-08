import React from 'react'
import email from './image/emai1l.png'
import call from './image/call.png'
import location from './image/location.png'
import Footer from './Footer'


function Contact() {
  return (
    <div>
      <div className='ct'>
        <div className='ct1'>
          <h1>CONTACT</h1>
        </div>
        <div className='ct2'>
          <h6>MAKE AN APPOINTMENT</h6>
          <h1>GET IN TOUCH</h1>
          <div className='ctt'>
            <div className='ct3'>
              <img src={email} />
              <h1>E-MAIL</h1>
              <h6>info@smartdigihome.com</h6>
            </div>
            <div className='ct4'>
              <img src={call} />
              <h1>PHONE</h1>
              <h6>+91XXXXXXXXXX</h6>
            </div>
            <div className='ct5'>
              <img src={location} />
              <h3>62/1969, Nettipadam Road, Ernakulam South</h3>
              <h3>Kochi, Kerala 682016</h3>
            </div>

          </div>

          <hr />




          <div className='ct6'>
            <h6>MESSAGE US</h6>
            <h1>FREE</h1>
            <h1>APPOINTMENT</h1>
          </div>

          <label for="fname">Your Name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label for="lname">Your Email:</label><br />
          <input type="text" id="lname" name="lname" /><br></br>
          <label for="lname">Your Subject:</label><br />
          <input type="text" id="lname" name="lname" />
          {/* <p><label for="w3review">masseage</label></p> */}
          <h6>Masseage</h6>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>  
          
          <div className='ct9'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109782.8671228349!2d76.62734023564995!3d30.69830520749905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1687475852067!5m2!1sen!2sin"></iframe>

          </div>

        </div>

      </div>


      {/* <Footer></Footer> */}
    </div>
    
  )
}

export default Contact