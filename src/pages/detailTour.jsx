import React, {useEffect} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import style from './detailTour.module.css';
import Reviews from "../components/reviews/reviews.jsx";
import ModalC from "../components/modal/Modal.jsx";
import MessageModal from "../components/modal/messageModal/messageModal.jsx";
import ArrowLeft from '../assets/icon/arrow-left.svg';
import Marker from '../assets/icon/marker.svg';


function DetailTour(props) {
    const {id} = useParams()
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const handleGoBack = () => {
        navigate(-1); // Навигация назад
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname])
    return (
        <div className={style.wrapper}>
            <div className={style.background} >
                <img src="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" alt="plca img"/>
            </div>

            <button className={style.goBack_btn} onClick={handleGoBack}>
                <img src={ArrowLeft} alt="Arrow Left"/>
                Go back
            </button>
            <div className={style.content}>
                <h1 className={style.name}>
                    Mount Fuji
                </h1>
                <div className={style.location}>
                    <img src={Marker} alt=" marker icon"/>
                    Honshu, Japan
                </div>
                <h3 className={style.descTitle}>Description</h3>
                <p className={style.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dignissim eget amet viverra eget fames rhoncus.
                    Eget enim venenatis enim porta egestas malesuada et.
                    Consequat mauris lacus euismod montes.
                </p>
                <h3 className={style.reviews}>
                    Reviews
                </h3>
                <Reviews  name={'Anonymous'} ico={'https://th.bing.com/th/id/OIF.woYBASQiPVfTOrNSReIEjA?rs=1&pid=ImgDetMain'}/>
                <Reviews  name={'Anonymous'} ico={'https://th.bing.com/th/id/OIF.woYBASQiPVfTOrNSReIEjA?rs=1&pid=ImgDetMain'}/>
            </div>

            <ModalC />
            <MessageModal />

        </div>
    );
}

export default DetailTour;