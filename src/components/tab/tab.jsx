import React, { useState, useRef, useEffect } from 'react';
import styles from './tab.module.css';
import TourCard from "../tourCard/tourCard.jsx";

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const contentRef = useRef(null);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (contentRef.current) {
            contentRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // Прокрутка к началу при смене вкладки
        }
    };

    const handleMouseDown = (event) => {
        setIsDragging(true);
        startX.current = event.pageX - contentRef.current.offsetLeft;
        scrollLeft.current = contentRef.current.scrollLeft;
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - contentRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Скорость прокрутки
        contentRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (event) => {
        startX.current = event.touches[0].pageX;
        scrollLeft.current = contentRef.current.scrollLeft;
    };

    const handleTouchMove = (event) => {
        if (!isDragging) return;
        const x = event.touches[0].pageX;
        const walk = (x - startX.current) * 2; // Скорость прокрутки
        contentRef.current.scrollLeft = scrollLeft.current - walk;
    };

    useEffect(() => {
        const container = contentRef.current;
        if (container) {
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mouseleave', handleMouseUp); // Прекращение прокрутки при выходе курсора за пределы контейнера
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove);
            container.addEventListener('touchend', handleMouseUp);

            return () => {
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mouseleave', handleMouseUp);
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
                container.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging]);
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
                        onClick={() => handleTabClick(index)}
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
                        onDragStart={preventLinkDrag}  />
                ))}
            </div>
        </div>
    );
};

export default Tab;
