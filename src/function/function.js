import Rename from "../components/rename/Rename";
import NewCategory from "../components/newCategory/NewCategory";
import Delete from "../components/delete/Delete";
import React from "react";

export function showModalContent(
    setShowModal,
    setModalContent,
    event,
    dispatch,
    id,
    name,
    setIsDelete = {},
) {
    const action = event.target.getAttribute('data-id');

    if (action === 'rename') {
        setModalContent(
            <Rename
                closeModal={setShowModal}
                dispatch={dispatch}
                id={id}
                name={name}
            />);
    } else if (action === 'add') {
        setModalContent(
            <NewCategory
                dispatch={dispatch}
                closeModal={setShowModal}
                id={id}
            />);
    } else if (action === 'delete') {
        setModalContent(
            <Delete
                closeModal={setShowModal}
                id={id}
                dispatch={dispatch}
                setIsDelete={setIsDelete}
            />);
    }

    setShowModal(true);
}

