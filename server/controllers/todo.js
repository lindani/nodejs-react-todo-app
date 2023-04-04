import { createError } from "../error.js";
import Todo from "../models/Todo.js";

export const addToDoItem = async (req, res, next) => {
	const newTodo = new Todo({ userId: req.user.id, ...req.body });
	try {
		const savedTodo = await newTodo.save();
		res.status(200).json(savedTodo);
	} catch (err) {
		next(err);
	}
};

export const getToDoItems = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const todos = await Todo.find({ userId });
		res.status(200).json(todos);
	} catch (err) {
		next(err);
	}
};

export const getToDoItem = async (req, res, next) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (req.user.id === todo.userId) {
			res.status(200).json(todo);
		} else {
			return next(createError(404, "You can only find your own To-do item!"));
		}
	} catch (err) {
		next(err);
	}
};

export const updateToDoItem = async (req, res, next) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (!todo) return createError(403, "Todo item not found!");
		if (req.user.id === todo.userId) {
			const updatedTodo = await Todo.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedTodo);
		} else {
			return next(createError(403, "You can only update your own To-do item!"));
		}
	} catch (err) {
		next(err);
	}
};

export const deleteToDoItem = async (req, res, next) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (!todo) return next(createError(403, "To-do item not found!"));
		if (req.user.id === todo.userId) {
			await Todo.findByIdAndDelete(req.params.id);
			res.status(200).json("To-do item deleted successfully");
		} else {
			return next(createError(403, "You can only delete your own To-do item!"));
		}
	} catch (err) {
		next(err);
	}
};
