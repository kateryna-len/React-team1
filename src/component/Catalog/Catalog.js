import React, {useState, useEffect} from 'react'
import Filterbox from './Filterbox'
import CatalogCards from './CatalogCards'
//import { books } from '../HomePage/data/BooksData'
import {getBooks} from '../../services-axios/api.service'
import Loading from './Loading'


function Catalog(){
  
const [book, setBook] = useState([])
const [data, setData] = useState(book)
const [isLoading, setIsLoading] = useState(false)
  
useEffect(()=>{
  setIsLoading(false)
    getBooks().then(value=>setBook([...value.data]))
   setTimeout(()=>setIsLoading(true), 6000)
  },[])


  const filterChild = (child)=>{
    const result = child===undefined ? book : (book.filter((items)=>{
      return items.gender === child
    })) 
    setData(result)
    
  }
  return(
    <div className='catalog-main'> 
    <div></div>
      <div>
        <Filterbox   filterChild={filterChild} />
      </div>
      <div>
         {isLoading ? <CatalogCards data={data}/> : <Loading/> } 
       
          
      </div>
    </div>
  )
}
export default Catalog
