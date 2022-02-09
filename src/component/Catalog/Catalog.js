import React, {useState} from 'react'
import Filterbox from './Filterbox'
import CatalogCards from './CatalogCards'
import { books } from '../HomePage/data/BooksData'


function Catalog(){
  const [data, setData] = useState(books)
  const filterChild = (child)=>{
    const result = books.filter((items)=>{
      return items.gender === child
    })
    setData(result)
  }
  return(
    <div className='catalog-main'> 
    <div></div>
      <div>
        <Filterbox   filterChild={filterChild} />
      </div>
      <div>
          <CatalogCards data={data} />
      </div>
    </div>
  )
}
export default Catalog
