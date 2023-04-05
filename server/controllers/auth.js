import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
	try {
		const { name, password } = req.body;
		const existingUser = await User.findOne({ name });
		if (existingUser) return next(createError(404, "User already exists"));

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(req.body.password, salt);
		const newUser = await User({ ...req.body, password: hashedPassword });
		await newUser.save();
		res.status(200).send("User has been created successfully");
	} catch (error) {
		next(error);
	}
};

export const signin = async (req, res, next) => {
	try {
		const { name, password } = req.body;
		const user = await User.findOne({ name });
		if (!user) return next(createError(404, "User not found"));

		const isCorrect = await bcrypt.compare(password, user.password);
		if (!isCorrect) return next(createError(400, "Wrong credentials!"));

		const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
		const { password: userPassword, ...includedUserDetails } = user._doc;
		res
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.status(200)
			.json(includedUserDetails);
	} catch (error) {
		next(error);
	}
};
