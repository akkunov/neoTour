import React from 'react';
import {NavLink} from "react-router-dom";
import style from './navLink.module.css';

const CNavLink = ({ to, exact=false, children, className, ...rest }) => {
    const [active, setActive] = React.useState()
    console.log(exact)
    return (
        <NavLink
            to={to}
            exact={exact}
            className={({ isActive }) =>
                `${className} ${isActive ? style.active : ''}`
            }
            {...rest}
        >
            {children}
        </NavLink>
    );
};



export default CNavLink;