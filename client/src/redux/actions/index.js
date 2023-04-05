import axios from "axios";

import { ADD_TODO, UPDATE_TODO, DELETE_TODO, GET_ALL_TODOS } from "./type";

const API_URL = "http://localhost:3001/api";

export const addTodo = (data) => async (dispatch) => {
	try {
		const res = await axios.post(`${API_URL}/todos`, { data });
		dispatch({ type: ADD_TODO, payload: res.data });
	} catch (error) {
		console.log("Error while calling addToDoItem API:", error.message);
	}
};
