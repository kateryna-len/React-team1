import React from 'react'
import Filterbox from './Filterbox'
import CatalogCards from './CatalogCards'

function Catalog({searchValue}){
  return(
    <div className='catalog-main'> 
    <div></div>
      <div>
        <Filterbox/>
      </div>
      <div>

          <CatalogCards searchValue={searchValue}/>
      </div>
    </div>
  )
}

export default Catalog;
