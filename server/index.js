import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import todoRoutes from "./routes/todos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());

dotenv.config();

/* MONGOOSE */
const PORT = process.env.PORT || 6001;

const connect = () => {
	mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Connect to DB");
		})
		.catch((error) => console.log(`${error} did not connect`));
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);
app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "Something went wrong";
	return res.status(status).json({
		success: false,
		status,
		message,
	});
});

app.listen(PORT, () => {
	connect();
	console.log(`connected to ${PORT}`);
});
