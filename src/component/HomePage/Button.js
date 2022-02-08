import React from "react";
import '../../style/home-stylesheet/Cards.css'
export default function Button({loadMore}){
    return(
        <div>
            <button className='btn' type='button' onClick={()=>loadMore()} >Переглянути</button>
        </div>
    )
};
