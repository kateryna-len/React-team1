import React, {useState} from 'react'
import Filterbox from './Filterbox'
import CatalogCards from './CatalogCards'
import { books } from '../HomePage/data/BooksData'


function Catalog(){
  return(
    <div className='catalog-main'> 
    <div></div>
      <div>
        <Filterbox  />
      </div>
      <div>
          <CatalogCards />
      </div>
    </div>
  )
}
export default Catalog
