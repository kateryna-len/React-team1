import React from 'react'
import { Link } from 'react-router-dom';

function CatalogBtn({item}){
  return(
    <div>
      <Link to={`/catalog/${item.id}`}>
       <button className='catalog-btn' type='button'>Buy</button> 
      </Link>
    
    </div>
  )
}

export default  CatalogBtn;