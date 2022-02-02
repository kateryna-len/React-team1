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
                    Комплекти для програми Єпідтримка
                </h1>
                <p>
                Вітаємо! На нашому сайті можна розрахуватись карткою «єПідтримка»!<br/> Ми щасливі надати можливість використати ваші кошти якнайвигідніше. Комплекти на 1000 гривень вже чекають саме на вас!
                </p>
            </div>
        </div>
    )
}
