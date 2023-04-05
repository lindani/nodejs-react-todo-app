import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
	CircularProgress,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";

import { getTodos } from "../actions/todoActions";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));

const TodoList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { todos, loading } = useSelector((state) => state.todos);

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	return (
		<div className={classes.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<List>
					{todos.map((todo) => (
						<ListItem key={todo._id}>
							<ListItemText primary={todo.title} secondary={todo.description} />
						</ListItem>
					))}
				</List>
			)}
		</div>
	);
};

export default TodoList;
