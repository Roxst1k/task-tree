import React from 'react';
import style from './modal.module.css'

const Modal = ({showModal, children}) => {
    const closeModal = (e) => {
        showModal(false);
    }


    return (
        <>
            <div
                className={style.container}
                onClick={closeModal}
            >
            </div>
            <div className={style.card}>
                {children}
            </div>
        </>
    );
};

export default Modal;