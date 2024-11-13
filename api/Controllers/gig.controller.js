// delete a user
export const deleteUser = ("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (err) {
    res.status(404).json({ message: "User not found" });
  }
});

