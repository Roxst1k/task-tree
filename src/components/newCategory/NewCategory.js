import React, {useState} from 'react';
import style from './newCatagery.module.css'
import { v4 as uuidv4 } from "uuid";

const NewCategory = ({dispatch, closeModal, id}) => {
    const [category, setCategory] = useState('')

    const addNewCategory = (newCategory) => {
        const newId = uuidv4();
        dispatch({
            type: 'ADD_CHILDREN',
            payload: {
                id: id,
                newCategory: {
                    id: newId,
                    name: newCategory,
                    expanded: false,
                    children: []
                }}})
    }

    const addCategory = (e) => {
        e.preventDefault()

        addNewCategory(category)

        setCategory('')
        closeModal(false)
    }


        return (
        <div className={style.newCategory_container}>
            <form onSubmit={(e) => addCategory(e)}>
                <label className={style.form}>
                    Add new category
                    <input
                        className={style.input}
                        type={"text"}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
                <button
                    type={"submit"}
                    disabled={category <= 0}
                    className={style.btnAdd}
                >
                    Add
                </button>
            </form>
            <button
                className={style.btnClose}
                onClick={() => closeModal(false)}
            >
                X
            </button>
        </div>
    );
};

export default NewCategory;