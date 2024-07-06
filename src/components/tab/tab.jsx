import React, { useState, useRef } from 'react';
import styles from './tab.module.css';
import TourCard from "../tourCard/tourCard.jsx";
import useScroll from "../../hooks/useScroll.jsx";
import {useActions} from "../../hooks/useActions.jsx";

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const contentRef = useRef(null);
    const { isDragging, setIsDragging } = useScroll(contentRef);
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

    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabHeaders}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tabHeader} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => handleTabClick(index,tab.category)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent} ref={contentRef}>
                {tabs[activeTab].data.map((items) => (
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
