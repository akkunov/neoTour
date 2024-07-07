import React, {useEffect} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions.jsx";

import style from './detailTour.module.css';

import Reviews from "../../components/reviews/reviews.jsx";
import ModalC from "../../components/modal/Modal.jsx";
import MessageModal from "../../components/modal/messageModal/messageModal.jsx";4

import ArrowLeft from '../../assets/icon/arrowLeft.svg';
import Marker from '../../assets/icon/marker.svg';
import {useSelector} from "react-redux";



function DetailTour(props) {
    const {id} = useParams()
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const {getToursById,bookTrip} = useActions();
    const {tour} = useSelector(state => state.tours)
    const handleGoBack = () => {
        navigate(-1); // Навигация назад
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getToursById(id)
    },[pathname])

    function bookTripSubmit (data){
        console.log(data)
        const formattedData  = {
            phone:data.number,
            people_amount: data.count,
            comment: data.message,
            tourId:tour.data.id
        };
        bookTrip(formattedData)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.background} >
                <img src={tour.data?.images[0]} alt="place img"/>
            </div>

            <button className={style.goBack_btn} onClick={handleGoBack}>
                <img src={ArrowLeft} alt="Arrow Left" />
                Go back
            </button>
            <div className={style.content}>
                <h1 className={style.name}>
                    {tour.data?.name}
                </h1>
                <div className={style.location}>
                    <img src={Marker} alt=" marker icon"/>
                    {tour.data?.location}, {tour.data?.country}
                </div>
                <h3 className={style.descTitle}>Description</h3>
                <p className={style.desc}>
                    {tour.data?.description}
                </p>
                <h3 className={style.reviews}>
                    Reviews
                </h3>
                {tour.data?.reviews && tour.data.reviews.map((item ,index) => (
                        <Reviews {...item} key={index}/>

                    )
                )}

            </div>

            <ModalC submit={bookTripSubmit}/>
            <MessageModal />

        </div>
    );
}

export default DetailTour;