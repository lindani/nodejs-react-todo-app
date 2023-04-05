import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { addTodo } from "../redux/actions";

function TodoForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo(title, description));
	};

	return (
		<Box
			onSubmit={onFormSubmit}
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				label="Title"
				variant="standard"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				required
			/>
			<TextField
				label="Description"
				variant="standard"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
				required
			/>
			<Button type="submit" variant="contained">
				Add Todo
			</Button>
		</Box>
	);
}

export default TodoForm;
