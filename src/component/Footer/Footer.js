import React from 'react'
import FooterContact from './FooterContract'
import Iconfooter from './Iconfooter'
import '../../style/Footer.css'


function Footer(){
  return(
    <div className='footer'>
<div className='footer-main'>
      <div>
        <FooterContact/>
      </div>
      <div>
        <img className='footer-logo' src='/image/logo.jpeg'/>
      </div>
      <div className='icon'><Iconfooter/></div>
    </div>
    <span>© 2022 All rights reserved.  </span>

    </div>
  )
}

export default Footer;