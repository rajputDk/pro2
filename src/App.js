import React from 'react'
import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'

import {BrowserRouter,Route, Routes} from 'react-router-dom'


 function App() {
  return (
    <div>
       <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route> 
        </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App