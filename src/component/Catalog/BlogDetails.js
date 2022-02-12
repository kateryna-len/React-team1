import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {books} from '../HomePage/data/BooksData';
import '../../style/BlogDetails.css'


function BlogDetails(){

  const {id} = useParams()
  return(
    <div className='blog-details-main'>
      
        {books.filter((item )=> (item.id + '') === id)
        .map((item, index)=>(
          <div className='blog-details-content' key={index}>
            <div className='blog-details-pagebox'>

              <div>
              <img src={item.image} width='300px' height='400px' />
            </div>
            <div className='text-descr'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              </div>
            </div>
            <div className='price-btn' >

              <div >
                <p>Price: {item.price} </p>
              </div>

              <div>
                <Link to='/catalog'>
                  <button className='btn-1'>Go back</button>
                </Link>
                
              <button className='btn-2'>Add to cart</button>
               </div>
              
            </div>
            
            
           
          </div>
        ))}


      </div>
  )
}

export default BlogDetails;
