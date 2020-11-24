import React, { useState } from "react";
import ListItems from "./ListItems";
import "./../styles/App.css";

function App() {
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");

	const addNewItem = () => {
		items.push(newItem);
		setItems([...items]);
		setNewItem("");
	}

	const getData = (event) => {
		setNewItem(event.target.value);
	}

	const deleteHandler = (itemIdx) => {
		items.splice(itemIdx, 1);
		setItems([...items]);
	}

	const editHandler = (editTask, itemIdx) => {
		items[itemIdx] = editTask;
		setItems([...items]);
	}

	return (
		<div id="main">
			<textarea
				id="task"
				onChange={getData}
				placeholder="New Task"
				value={newItem}
			></textarea>

			<button
				id="btn"
				onClick={addNewItem}
				disabled={newItem.trim().length === 0}
			>Add Task</button>

			{items.map((item, idx) => (
				<ListItems
					item={item}
					key={`${item}_${idx}`}
					idx={idx}
					editHandler={editHandler}
					deleteHandler={deleteHandler}
				/>
			))}

		</div>
	);
}


export default App;
