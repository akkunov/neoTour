import React from 'react';
import style from './discover.module.css';
import Tab from "../../tab/tab.jsx";
import {useSelector} from "react-redux";


function Discover(props) {
    const {discover} = useSelector(state => state.tours);
    return (
        <div className={style.discover}>
            <div className={style.discoverHeader}>
                <h2 className={style.title}>
                    {discover.name}
                </h2>
            </div>
                <Tab tabs={discover.category} />
        </div>
    );
}



export default Discover;