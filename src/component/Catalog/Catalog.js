import React from 'react'
import Filterbox from './Filterbox'

function Catalog(){
  return(
    <div className='catalog-main'> 
      <div>
        <Filterbox/>
      </div>
      <div>Main contatn mini box</div>
    </div>
  )
}

export default Catalog;