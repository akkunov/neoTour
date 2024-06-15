import React from 'react';
import style from './tourCard.module.css';
import {Link} from "react-router-dom";
function TourCard({
     name,
    image,
    width,
    height,
    }) {
    return (
        <Link>
            <div className={style.card} style={{width, height}}>
                <img className={style.card__image} src={image}  style={{width, height}}/>
                <span className={style.card__name}>{name}</span>
            </div>
        </Link>


    );
}

export default TourCard;