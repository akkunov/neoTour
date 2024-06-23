import React, { useEffect, useState } from 'react';
import style from "./bookForm.module.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';
import Button from "../button/button.jsx";

const countBtnStyle = {
    width: 42,
    height: 48,
    background: "#897CFF",
    borderRadius: 16
};

function BookForm({ handleSubmit }) {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!number || count === 0);
    }, [number, count]);

    const handlePlus = () => {
        setCount(prevCount => (prevCount < 50 ? prevCount + 1 : prevCount));
    };

    const handleMinus = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!disabled) {
            handleSubmit({ number, message, count });
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={style.formContainer}>
                <PhoneInput
                    country={'kg'}
                    value={number}
                    onChange={setNumber}
                    specialLabel={'Phone number'}
                    containerStyle={{ width: "90%" }}
                    placeholder={'+996 707 111 111'}
                    inputStyle={{ width: '100%', borderRadius: "100px" }}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}
                />
                <label htmlFor="comment" className={style.commentLabel}>Commentaries to trip</label>
                <input
                    type="text"
                    id='comment'
                    placeholder='Write your wishes to trip...'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={style.comment}
                />
                <div className={style.peopleContainer}>
                    <span className={style.peopleTitle}>Number of People</span>
                    <div className={style.counters}>
                        <Button styles={countBtnStyle} onClick={handleMinus}>
                            <img src="/src/assets/icon/minus.svg" alt="minus icon"/>
                        </Button>
                        <span className={style.count}>{count}</span>
                        <Button styles={countBtnStyle} onClick={handlePlus}>
                            <img src="/src/assets/icon/plus.svg" alt="plus icon"/>
                        </Button>
                    </div>
                </div>
                <div className={style.btnContainer}>
                    <Button
                        type="submit"
                        styles={{ borderRadius: "2.8rem", fontSize: "var(--font-xs)", height: '6rem' }}
                        disabled={disabled}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default BookForm;
