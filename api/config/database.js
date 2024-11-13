import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Successfully Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};