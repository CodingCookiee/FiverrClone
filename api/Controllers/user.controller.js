import User from "../models/user.model.js";

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (!req.userId) {
      return res.status(403).json({ message: "User ID is not set!" });
    }

    if (req.userId.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "You can delete only your account!" });
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
