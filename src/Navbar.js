import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import './App.css'

export const Navbar = () => {
    const [mobile,setMobile]=useState(false)
  return (
    <div>
    <nav className='navbar'>
     
        <div className='container'>
        <img  src={require('./cropped-Capture.jpg')}/>

        <ul className={ mobile?'nav-links-mobile':'nav-links'} onClick={()=>setMobile(false)}>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/service'><li>Service</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
           
            
        </ul>
        <button className='mobile-menu-icon' onClick={()=>setMobile(!mobile)}>
            {mobile?<ImCross/>:<FaBars/>}</button>
       
        </div>
       
    </nav>

    </div>
  )
}
export default Navbar