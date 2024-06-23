import React, {useState} from 'react';
import Modal from "react-modal";
import styles from './messageModal.module.css'
import Button from "../button/button.jsx";
function MessageModal(props) {
    const [isOpen, setOpen]  = useState(true)
    function closeModal(){
        setOpen(false)
    }
    return (
        <Modal  isOpen={isOpen}
                onRequestClose={closeModal}
                className={styles.modal}
        >
            <div className={styles.message}>Hello p</div>
            <Button styles={{height: "7rem"}} onClick={closeModal}>
                Ok
            </Button>
        </Modal>
    );
}

export default MessageModal;