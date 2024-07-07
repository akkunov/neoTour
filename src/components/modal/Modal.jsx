import React from 'react';
import Modal from 'react-modal';
import style from "./Modal.module.css";
import Button from "./button/button.jsx";

import BookForm from "./form/bookForm.jsx";




function ModalC({submit}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
    }
    function closeModal() {
        setIsOpen(false);
    }

    function handleSubmit(data){
        submit(data)
        closeModal()
    }

    return (
        <>
            <div className={style.book__container}>
                <Button onClick={openModal}>
                    Book now
                </Button>
            </div>
            <Modal
                className={style.customStyles}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className={style.container}>
                    <div className={style.header}>
                        <h2 className={style.header__title}>Info</h2>
                        <button className={style.close__btn} onClick={closeModal}>
                            <img src="/src/assets/icon/close.svg" alt=""/>
                        </button>
                    </div>
                    <p className={style.desc}>
                        To submit an application for a tour reservation,
                        you need to fill in your information and select
                        the number of people for the reservation
                    </p>
                    <BookForm handleSubmit={handleSubmit} />
                </div>
            </Modal>
        </>
    );
}

export default ModalC;