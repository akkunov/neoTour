import React, { useState } from 'react';
import styles from './tab.module.css';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
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
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tab;
