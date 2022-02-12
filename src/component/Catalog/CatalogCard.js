import React from "react";
import '../../style/catalog/CatalogCard.css';
import { BiHeart } from "react-icons/bi";
import CatalogBtn from "./CatalogBtn";





export default function CatalogCard({item}) {
    return (

            <div className='single-card-catalog'>
            {item.top === 'New' ?<div className='hop'><p>{item.top} </p></div>  : <div className='hoq'>{item.top}</div> }
            
            <img src={item.image} width='200px' height='250px'/>
            <div className='catalog-box'>
                <p className='cod'>Cod: {item.cod}</p><p className='icon'><BiHeart/></p>
            </div>
            <div>
            <p className='year'>Year: {item.year}</p>
            </div>
            <h3>{item.title}</h3>
            <p className='author'>{item.author}</p>
            <div className='catalog-box'>
                <p><strong>Price:</strong></p><p>{item.price}</p>
            </div>
            <div className='btn-catalog'>
                <CatalogBtn item = {item}/>
            </div>
        </div>
        
    )
}
