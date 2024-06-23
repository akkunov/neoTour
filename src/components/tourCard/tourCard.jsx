import React from 'react';
import style from './tourCard.module.css';
import {Link} from "react-router-dom";
function TourCard({
     name,
    image,
    onDragStart,
    type,
    id
    }) {

    if (type=='discover')
        return (
            <Link onDragStart={onDragStart} to={`/${id}`}>
                <div className={style.dcard} >
                    <img className={style.card__image} src={image}  />
                    <span className={style.dcard__name}>{name}</span>
                </div>
            </Link>
        );
    if(type== 'recommended'){
        return (
            <Link onDragStart={onDragStart}  to={`/${id}`}>
                <div className={style.rcard} >
                    <img className={style.card__image} src={image}  />
                    <span className={style.rcard__name}>{name}</span>
                </div>
            </Link>
        );
    }


}

export default TourCard;