import React from 'react';
import style from './discover.module.css';
import CNavLink from "../navLink/navLink.jsx";
import Tab from "../../tab/tab.jsx";

const tabs = [
    {
        label: 'Popular',
        id: Date.now(),
        content: <div>Content for Tab 1</div>,
    },
    {
        label: 'Featured',
        content: <div>Content for Tab 2</div>,
    },
    {
        label: 'Most Visited',
        content: <div>Content for Tab 3</div>,
    },
    {
        label: 'Europe',
        content: <div>Content for Tab 4</div>,
    },
    {
        label: 'Asia',
        content: <div>Content for Tab 5</div>,
    },
];
function Discover(props) {
    return (
        <div className={style.discover}>
            <div className={style.discoverHeader}>
                <h2 className={style.title}>
                    Discover
                </h2>
                {/*sroll buttons*/}
                <div className={style.scroll_btns}>
                    <button>
                        left
                    </button>
                    <button>
                        right
                    </button>
                </div>
            </div>
                    <Tab tabs={tabs} />
        </div>
    );
}



export default Discover;