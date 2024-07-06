import React from 'react';
import style from './reviews.module.css';

function Reviews({
                     username,
                     imageUrl,
                     review
    }) {

    return (
        <div className={style.wrapper}>
          <div className={style.header}>
              <img src={imageUrl} alt="user logo"/>
              <span>{username}</span>
          </div>
            <p className={style.review}>
                {review}
            </p>
        </div>
    );
}

export default Reviews;