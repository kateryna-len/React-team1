import React from "react";
import '../../style/home-stylesheet/Article.css';

export default function Article() {
    return (
        <div className='article'>
            <div className='image-content'>
                <img className='baner' src='https://www.ranok.com.ua/storage/cache/banners/epidtrimka-700.jpg'/>
            </div>
            <div className='text-content'>
                <h1>
                Kits for the Support program
                </h1>
                <p>
                Congratulations! On our site you can pay with the card "eSupport"!<br/> We are happy to provide you with the opportunity to use your funds to the best of your ability. Kits for 1000 hryvnias are already waiting for you!
                </p>
            </div>
        </div>
    )
}
