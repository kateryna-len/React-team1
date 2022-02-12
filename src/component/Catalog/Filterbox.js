import React from 'react'
import Filterbtn from './Filterbtn'
import '../../style/Filterbox.css'
function Filterbox({filterResult, filterChild}){
  return(
    <div>
    <div className='filter-box'>
      <div className='filter-left'>
      <button className='filter-button1' onClick={()=>filterChild('Новинка')}>New</button>
      <button className='filter-button1' onClick={()=>filterChild('child')} >CHILDREN'S LITERATURE</button>
      <button className='filter-button1' onClick={()=>filterChild('adult')}>ADULT LITERATURE</button>
      </div>
      <div className='filter-right'>
        <Filterbtn/>
      </div>
     
    </div>
  </div>
  )
}

export default Filterbox;