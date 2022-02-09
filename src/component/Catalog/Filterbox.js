import React from 'react'
import Filterbtn from './Filterbtn'
import '../../style/Filterbox.css'
function Filterbox({filterResult, filterChild}){
  return(
    <div>
    <div className='filter-box'>
      <div className='filter-left'>
      <button className='filter-button1' onClick={()=>filterChild('Новинка')}>НОВИНКИ</button>
      <button className='filter-button1' onClick={()=>filterChild('child')} >ДИТЯЧА ЛІТЕРАТУРА</button>
      <button className='filter-button1' onClick={()=>filterChild('adult')}>ЛІТЕРАТУРА ДЛЯ ДОРОСЛИХ</button>
      <button className='filter-button1' onClick={()=>filterChild('adult','child',  )}>ВІД НАЙМЕНШОЇ ЦІНИ</button>
      </div>
      <div className='filter-right'>
        <Filterbtn/>
      </div>
     
    </div>
  </div>
  )
}

export default Filterbox;