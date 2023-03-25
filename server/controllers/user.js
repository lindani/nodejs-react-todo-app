import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, resp, next) => {
	if (req.params.id === req.user.id) {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);

			resp.status(200).json(updatedUser);
		} catch (error) {
			next(error);
		}
	} else {
		return next(createError(403, "You can only update your account"));
	}
};
