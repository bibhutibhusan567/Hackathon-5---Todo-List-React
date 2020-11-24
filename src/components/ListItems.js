import React, { useState } from "react";

function ListItems(props) {
    const [editedTask, setEditedTask] = useState(props.item);
    const [editMode, setEditMode] = useState(false);

    const getEditedData = (event) => {
        setEditedTask(event.target.value);
    }
    const saveEditedTask = () => {
        props.editHandler(editedTask, props.idx);
        setEditMode(false);

    }

    return (
        <div className="list">
            {editMode ? (
                <>
                    <textarea className="editTask" onChange={getEditedData} value={editedTask}></textarea>
                    <button className="saveTask" onClick={saveEditedTask} disabled={editedTask.trim().length === 0}>Save Task</button>
                </>
            ) : (
                    <>
                        {props.item}
                        <button className="edit" onClick={() => setEditMode(true)}>Edit</button>
                        <button className="delete" onClick={() => props.deleteHandler(props.idx)}>Delete</button>
                    </>
                )}

        </div>
    );
}
export default ListItems;