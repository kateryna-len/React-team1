import React from 'react'
import NavBar from './Navbar'
import '../../style/Header.css'
import Researchbox from './Researchbox'



function Header(){
  return (
    <div>
<div className='header'>
      <div>
        <img className='img-logo' src='/image/logo.jpeg' />
      </div>
      <div className='navbar-header'> 
        <NavBar/>
      </div>
      </div>
    </div>
  )
}
export default Header;