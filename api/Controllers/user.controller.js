import User from "../models/user.model.js"; 
import jwt from "jsonwebtoken";

// delete a user
export const deleteUser = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not Authenticated!");

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) return res.status(401).json("Token is not valid!");
      try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json("User not found!");

        if (payload.userId === user._id.toString()) {
          await User.findByIdAndDelete(req.params.id);
          return res.status(200).json("User has been deleted!");
        }
        return res.status(403).json("You can delete only your account!");
      } catch (error) {
        return res.status(500).json({ message: "Error processing request" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



