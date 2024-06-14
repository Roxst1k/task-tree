import React, {useState} from 'react';
import style from "./childrenTree.module.css";
import {showModalContent} from "../../function/function";

const ChildrenTree = (
    {
        name,
        expanded,
        children,
        id,
        showModal,
        dispatch,
        setShowModal,
        setModalContent
    }) => {

    const [showChildren, setShowChildren] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    const showModalWithContent = (event) => {
        showModalContent(
            setShowModal,
            setModalContent,
            event,
            dispatch,
            id,
            name,
            setIsDelete
        )
    };


    return (
        <div style={{marginLeft: 40}}>
            <div
                className={`${style.wrapper} ${isDelete ? style.delete : ''}`}
            >
                <button
                    className={`${style.showBtn} ${showChildren ? style.active : ''}`}
                    disabled={expanded === false}
                    onClick={() => setShowChildren(prevState => !prevState)}

                >
                    >
                </button>
                <h4 className={style.title}>
                    {name}
                </h4>
                <button
                    className={`${style.btn} ${style.renameBtn}`}
                    data-id='rename'
                    onClick={(e) => showModalWithContent(e)}
                >
                    Rename
                </button>
                <button
                    className={`${style.btn} ${style.deleteBtn}`}
                    data-id='delete'
                    onClick={(e) => showModalWithContent(e)}
                >
                    Delete
                </button>
                <button
                    className={`${style.btn} ${style.addBtn}`}
                    data-id='add'
                    onClick={(e) => showModalWithContent(e)}
                >
                    Add new category
                </button>
            </div>
            {
                showChildren && children.map(category => (
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
        </div>
    );
};

export default ChildrenTree;
