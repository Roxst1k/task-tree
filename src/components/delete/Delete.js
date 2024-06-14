import React from 'react';
import style from './delete.module.css'

const Delete = ({closeModal, id, dispatch, setIsDelete}) => {


    const deleteChild = (e) => {
        closeModal(false)
        setIsDelete(true)
        setTimeout(() => {
            dispatch({
                type: 'DELETE_CHILD',
                payload: {
                    id: id,
                }
            })
        }, 500)
    }

    return (
            <div className={style.delete_content}>
                <p className={style.title}>Are you sure?</p>
                <button
                    className={style.btnClose}
                    onClick={() => closeModal(false)}
                >
                    X
                </button>
                <div className={style.btn_wrapper}>
                    <button
                        className={style.btnYes}
                        onClick={(e) => deleteChild(e)}
                    >
                        Yes
                    </button>
                    <button
                        className={style.btnNo}
                        onClick={() => closeModal(false)}
                    >
                        No
                    </button>
                </div>
            </div>


    );
};

export default Delete;