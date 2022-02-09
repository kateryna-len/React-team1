import React, {useState} from 'react'
import Filterbox from './Filterbox'
import CatalogCards from './CatalogCards'
import { books } from '../HomePage/data/BooksData'

function Catalog(){

  const [data, setData] = useState(books)
  const filterResalt = (catItem) =>{
    const result = books.filter((currentData)=>{
      return currentData.year === catItem
    })
    setData(result)
  }


  return(
    <div className='catalog-main'> 
      <div>
        <Filterbox filterResalt={filterResalt} />
      </div>
      <div>
          <CatalogCards data={data} />
      </div>
    </div>
  )
}

export default Catalog;
