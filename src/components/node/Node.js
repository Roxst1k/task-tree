import React, {useContext, useState} from 'react';
import MyContext from "../../context/context";
import Modal from "../modal/Modal";
import style from './node.module.css'
import ChildrenTree from "../childrenTree/ChildrenTree";
import {showModalContent} from "../../function/function";

const Node = () => {
    const {state: data, dispatch} = useContext(MyContext)
    const [showChildren, setShowChildren] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const handleClickActive = () => {
        setShowChildren(prevState => !prevState)
    }


    const showModalWithContent = (event) => {
        const id = data[0].id
        const name = data[0].name

        showModalContent(
            setShowModal,
            setModalContent,
            event,
            dispatch,
            id,
            name
        )
    }

    return (
        <>
            <div className={style.wrapper}>
                <button className={`${style.showBtn} ${showChildren ? style.active : ''}`}
                        onClick={() => handleClickActive(data.id)}
                        disabled={data[0].expanded === false}
                >
                    >
                </button>
                <h4 className={style.title}>
                    {data[0].name}
                </h4>
                <button
                    className={`${style.btn} ${style.renameBtn}`}
                    onClick={(e) => showModalWithContent(e)}
                    data-id='rename'
                >
                    Rename
                </button>
                <button
                    className={`${style.btn} ${style.deleteBtn}`}
                    onClick={(e) => showModalWithContent(e)}
                    data-id='delete'
                    disabled={true}
                >
                    Delete
                </button>
                <button
                    className={`${style.btn} ${style.addBtn}`}
                    onClick={(e) => showModalWithContent(e)}
                    data-id='add'
                >
                    Add new category
                </button>
            </div>
            {
                showModal &&
                <Modal
                    showModal={setShowModal}
                >
                    {modalContent}
                </Modal>
            }
            {
                showChildren && data[0].children.map(category => (
                    <ChildrenTree
                        key={category.id}
                        name={category.name}
                        children={category.children}
                        id={category.id}
                        expanded={category.expanded}
                        setShowModal={setShowModal}
                        showModal={showModal}
                        dispatch={dispatch}
                        setModalContent={setModalContent}
                    />
                ))
            }
        </>
    );
};

export default Node;