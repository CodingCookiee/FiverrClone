import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    if (!req.userId) {
      return next(createError(403, "You are not authenticated!"));
    }

    if (req.userId.toString() !== user._id.toString()) {
      return next(
        createError(403, "You are not authorized to delete this user!")
      );
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// become a seller
export const becomeSeller = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return next(createError(404, "User not found!"));
    }
    if (user.isSeller) {
      return next(createError(400, "You are already a seller!"));
    }
    user.isSeller = true;
    await user.save();
    res.status(200).json({ message: "You are now a seller!" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// get user
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
