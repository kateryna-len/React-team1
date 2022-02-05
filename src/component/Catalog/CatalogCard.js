import React from "react";
import '../../style/catalog/CatalogCard.css';

export default function CatalogCard({item}) {
    return (
        <div className='single-card-catalog'>
            <img src={item.image} width='200px' height='250px' />
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <p>{item.price}{'грн'}</p>
        </div>
    )
}
