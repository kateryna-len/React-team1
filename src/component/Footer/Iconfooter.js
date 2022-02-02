import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

function Iconfooter(){
  return (
<div className='icon-awe'>
      <p className='icon-fa'> <FaFacebook/></p> 
      <p className='icon-tw'> <FaTwitter/></p>
      <p className='icon-ta'> <FaXbox/></p>
      <p className='icon-te'> <BsTelegram/></p>
    </div>

  )
}
export default Iconfooter;