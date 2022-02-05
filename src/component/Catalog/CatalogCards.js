import React from "react";
import CatalogCard from './CatalogCard';
import {books} from '../HomePage/data/BooksData';
import '../../style/catalog/CatalogCards.css';

export default function CatalogCards(){
    return(
        <div className='catalog-cards-container'>
            <div className='cards'>
                {
                    books.map(value => <CatalogCard key={value.id} item={value}/>)
                }
            </div>
        </div>
    )
}
