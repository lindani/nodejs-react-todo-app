import express from "express";
import {
	addToDoItem,
	getToDoItems,
	getToDoItem,
	updateToDoItem,
	deleteToDoItem,
} from "../controllers/todo.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addToDoItem);
router.get("/", verifyToken, getToDoItems);
router.get("/:id", verifyToken, getToDoItem);
router.put("/:id", verifyToken, updateToDoItem);
router.delete("/:id", verifyToken, deleteToDoItem);

export default router;
