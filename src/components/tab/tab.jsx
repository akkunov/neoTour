import React, {useState, useRef, useEffect} from 'react';
import styles from './tab.module.css';
import TourCard from "../tourCard/tourCard.jsx";
import useScroll from "../../hooks/useScroll.jsx";
import {useActions} from "../../hooks/useActions.jsx";
import {POPULAR} from "../../service/consts.js";

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const contentRef = useRef(null);
    const categoryRef = useRef(null);
    const [ isDragging, setIsDragging ]= useScroll(contentRef);
    const [ CisDragging, CsetIsDragging]= useScroll(categoryRef);
    const {getToursByCategory} =  useActions()

    const handleTabClick = (index, category) => {
        setActiveTab(index);
        getToursByCategory(category)
        if (contentRef.current) {
            contentRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const preventLinkDrag = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        getToursByCategory(POPULAR)
    },[])

    
    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabHeaders}>
                <ul className={styles.categoryContainer} ref={categoryRef}>
                    {tabs.map((tab, index) => (
                        <li key={index} className={styles.categoryContainerList}>
                            <button
                                className={`${styles.tabHeader} ${activeTab === index ? styles.active : ''}`}
                                onClick={() => handleTabClick(index,tab.category)}
                            >
                                {tab.name}
                            </button>
                        </li>

                    ))}
                </ul>
            </div>
            <div className={styles.tabContent} ref={contentRef}>
                {tabs[activeTab].error ?  <span>{tabs[activeTab].error}</span> :
                    tabs[activeTab].data.map((items) => (
                        <TourCard
                            {...items}
                            key={items.id}
                            type={'discover'}
                            onDragStart={preventLinkDrag}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Tab;
