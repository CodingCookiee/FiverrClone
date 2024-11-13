import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    gigId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
  },
  {
    timestamps: true,
  }
);
const Review = mongoose.model("Review", ReviewSchema);
export default Review;
