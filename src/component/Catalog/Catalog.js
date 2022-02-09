import React from 'react'
import Filterbox from './Filterbox'
import CatalogCards from './CatalogCards'

function Catalog(){
  return(
    <div className='catalog-main'> 
    <div></div>
      <div>
        <Filterbox/>
      </div>
      <div>
          <CatalogCards />
      </div>
    </div>
  )
}

export default Catalog;
