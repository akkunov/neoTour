import React, {useEffect} from 'react';
import style from './recommended.module.css'
import {useSelector} from "react-redux";
import TourCard from "../tourCard/tourCard.jsx";
import {useActions} from "../../hooks/useActions.jsx";



function Recommended(props) {
    const {recommended}=useSelector(state => state.tours);
    const {getRecommendedTours} = useActions();

    useEffect(()=> {
        getRecommendedTours();
    },[])
    return (
        <div className={style.rec}>
            <div className={style.recHeader}>
                <h2 className={style.title}>
                    Recommended
                </h2>
            </div>
            <div className={style.recContent}>
                {recommended.data.map((items) =>
                    <TourCard
                        {...items}
                        type={'recommended'}
                        key={items.id}
                    />)}
            </div>
        </div>
    );
}

export default Recommended;