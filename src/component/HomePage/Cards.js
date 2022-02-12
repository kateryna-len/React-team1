import React, {useEffect, useState} from "react";
import Card from "./Card";
import '../../style/home-stylesheet/Cards.css';
import Button from "./Button";
import {getBooks} from "../../services-axios/api.service";

export default function Cards(){

    const[noOfElement, setNoOfElement] = useState(4)
    const [books, setBooks] = useState([]);

    useEffect(() => {

        getBooks().then(value => setBooks([...value.data]) )
    }, []);


    const loadMore = ()=>{
        setNoOfElement(noOfElement + noOfElement)
    }
    const slice = books.slice(0, noOfElement)
    return(
        <div className='cards-container'>
            <div className='cards'>
                {
                    slice.map(value => <Card key={value.id} item={value}/>)
                }
            </div>
            <div className='button-container'>
                <Button loadMore={loadMore}/>
            </div>
        </div>
    )
}
