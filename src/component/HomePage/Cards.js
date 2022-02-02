import React from "react";
import Card from "./Card";
import {books} from "./data/BooksData";
import '../../style/home-stylesheet/Cards.css';
import Button from "./Button";

export default function Cards(){
    return(
        <div className='cards-container'>
            <div className='cards'>
                {
                    books.map(value => <Card key={value.id} item={value}/>)
                }
            </div>
            <div className='button-container'>
                <Button/>
            </div>
        </div>
    )
}
