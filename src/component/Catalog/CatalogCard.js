import React from "react";
import '../../style/catalog/CatalogCard.css';
import { BiHeart } from "react-icons/bi";
import CatalogBtn from "./CatalogBtn";





export default function CatalogCard({item}) {
    return (

            <div className='single-card-catalog'>
            {item.top === 'Новинка' ?<div className='hop'><p>{item.top} </p></div>  : <div className='hoq'>{item.top}</div> }
            
            <img src={item.image} width='200px' height='250px'/>
            <div className='catalog-box'>
                <p className='cod'>Код: {item.cod}</p><p className='icon'><BiHeart/></p>
            </div>
            <div>
            <p className='year'>Рік: {item.year}</p>
            </div>
            <h3>{item.title}</h3>
            <p className='author'>{item.author}</p>
            <div className='catalog-box'>
                <p><strong>Ціна:</strong></p><p>{item.price}{'грн'}</p>
            </div>
            <div className='btn-catalog'>
                <CatalogBtn item = {item}/>
            </div>
        </div>
        
    )
}
