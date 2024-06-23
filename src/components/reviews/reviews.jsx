import React from 'react';
import style from './reviews.module.css';

function Reviews({
    name,
    ico,
    review
    }) {

    return (
        <div className={style.wrapper}>
          <div className={style.header}>
              <img src={ico} alt="user logo"/>
              <span>{name}</span>
          </div>
            <p className={style.review}>
                That was such a nice place. The most beautiful place
                I’ve ever seen. My advice to everyone not to
                forget to take warm coat
            </p>
        </div>
    );
}

export default Reviews;