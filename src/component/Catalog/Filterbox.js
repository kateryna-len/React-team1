import React from 'react'
import Filterbtn from './Filterbtn'
import '../../style/Filterbox.css'
function Filterbox(){
  return(
    <div>
    <div className='filter-box'>
      <div className='filter-left'>
      <button className='filter-button1'>НОВИНКИ</button>
      <button className='filter-button1'>ДИТЯЧА ЛІТЕРАТУРА</button>
      <button className='filter-button1'>ЛІТЕРАТУРА ДЛЯ ДОРОСЛИХ</button>
      <button className='filter-button1'>ВІД НАЙМЕНШОЇ ЦІНИ</button>
      </div>
      <div className='filter-right'>
        <Filterbtn/>
      </div>
     
    </div>
  </div>
  )
}

export default Filterbox;