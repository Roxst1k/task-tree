import {useState} from "react";
import style from './rename.module.css'

const Rename = ({dispatch, closeModal, id}) => {
    const [newName, setNewName] = useState('')

    const renameTree = () => {
        dispatch({
            type: 'RENAME_TREE',
            payload: {
                id: id,
                newName: newName
            }
        })
    }
    const changeName = (e) => {
        e.preventDefault()

        setNewName('')
        closeModal(false)
    }


    return (
        <div className={style.rename_container}>
            <form onSubmit={e => changeName(e)}>
                <label className={style.form}>
                    {`New tree name`}
                    <input
                        type="text"
                        className={style.input}
                        placeholder={'Enter new tree name'}
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    disabled={newName.length <= 0}
                    className={style.btnSave}
                    onClick={() => renameTree()}
                >
                    Save new name
                </button>
            </form>
            <button
                className={style.btnClose}
                onClick={() => closeModal(false)}
            >
                X
            </button>
        </div>
    )
}

export default Rename