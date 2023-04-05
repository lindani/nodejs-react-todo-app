import axios from "axios";

const API_URL = "http://localhost:3001/api";

const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const signup = (name, password) => {
	return api.post("/auth/signup", { name, password });
};

export const signin = (name, password) => {
	return api.post("/auth/signin", { name, password });
};

export const getTodos = () => {
	return api.get("/todos");
};

export const addTodo = (text) => {
	return api.post("/todos", { text });
};

export const deleteTodo = (id) => {
	return api.delete(`/todos/${id}`);
};

export const updateTodo = (id, completed) => {
	return api.patch(`/todos/${id}`, { completed });
};
