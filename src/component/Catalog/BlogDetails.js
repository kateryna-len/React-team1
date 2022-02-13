import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import '../../style/BlogDetails.css'
import { getBooks } from '../../services-axios/api.service';


function BlogDetails(){

  const {id} = useParams()
  const[books, setBooks] = useState([])

  useEffect(()=>{
    getBooks().then(value=>setBooks([...value.data]))
  }, [])
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
