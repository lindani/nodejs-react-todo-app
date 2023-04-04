import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
