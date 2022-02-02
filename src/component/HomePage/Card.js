import React from "react";
import '../../style/home-stylesheet/Card.css';

export default function Card({item}) {
    return (
        <div className='single-card'>
            <img src={item.image} width='200px' height='250px' />
            <h3>{item.title}</h3>
            <h4>{item.author}</h4>
        </div>
    )
}
