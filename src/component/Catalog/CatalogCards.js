import React, {useContext, useState, useEffect} from 'react';
import CatalogCard from './CatalogCard';
//import {books} from '../HomePage/data/BooksData';
import '../../style/catalog/CatalogCards.css';
import BooksContext from '../../BooksContext';
import {getBooks} from '../../services-axios/api.service'
import Loading from './Loading';



export default function CatalogCards({data, isLoading}) {

    const {searchedBook} = useContext(BooksContext);
     const [books,setBooks] = useState([])

    useEffect(()=>{
        getBooks().then(value=>setBooks([...value.data]))

    }, [])

    
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
