import React, {useContext} from 'react';
import CatalogCard from './CatalogCard';
import {books} from '../HomePage/data/BooksData';
import '../../style/catalog/CatalogCards.css';
import BooksContext from '../../BooksContext';


export default function CatalogCards({data}) {

    const {searchedBook} = useContext(BooksContext);


    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchedBook)
            || book.author.toLowerCase().includes(searchedBook)
    })
    
    const filteredData = searchedBook ? filteredBooks : data;
    return (
        <div className='catalog-cards-container'>
            <div className='cards'>
                {

                    filteredData.map(value => <CatalogCard key={value.id} item={value}/>)
                }
            </div>
        </div>
    )
}
