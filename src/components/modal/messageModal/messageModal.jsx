import React, {useState} from 'react';
import Modal from "react-modal";
import styles from './messageModal.module.css'
import Button from "../button/button.jsx";
import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/useActions.jsx";
function MessageModal() {
    const book  = useSelector(state => state.book);
    const {closeModal}= useActions();


    function closeModalHandler(){
        closeModal()
    }
    return (
        <Modal  isOpen={book.isModalOpen}
                onRequestClose={closeModal}
                className={styles.modal}
        >
            <div className={styles.message}>{book.modalMessage}</div>
            <Button styles={{height: "7rem"}} onClick={closeModalHandler}>
                Ok
            </Button>
        </Modal>
    );
}

export default MessageModal;