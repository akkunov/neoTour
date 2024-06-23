import React from 'react';
import style from './hero.module.css';
import Discover from "../components/category/discover/discover.jsx";
import Recommended from "../components/recommended/recommended.jsx";

function Hero(props) {
    return (
        <>
            <main className={style.hero}>
                <div className={style.title_block}>
                    <h1 className={style.title}>
                        Winter Vacation Trips
                    </h1>
                    <p className={style.desc}>
                        Enjoy your winter vacations with warmth
                        and amazing sightseeing on the mountains.
                        Enjoy the best experience with us!
                    </p>
                    <button className={style.lets_btn}>
                        Let’s Go!s
                        <img src="/src/assets/icon/arrow-right.svg" alt=""/>
                    </button>
                </div>
                <div className={style.img_block}>
                    <img src="src/assets/svg/hero.svg" alt="hero img"/>
                </div>
            </main>
            <Discover />
            <Recommended/>
        </>

    );
}

export default Hero;