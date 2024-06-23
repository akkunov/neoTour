import React from 'react';
import style from './button.module.css';

function Button({
                    onClick,
                    children,
                    disabled = false,
                    styles,
                    type = 'button'  // Тип кнопки по умолчанию 'button'
                }) {
    return (
        <button
            disabled={disabled}
            className={style.bookBtn}
            onClick={onClick}
            type={type}
            style={styles}>
            {children}
        </button>
    );
}

export default Button;
