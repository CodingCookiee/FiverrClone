import mongoose from "mongoose";
const { Schema } = mongoose;

const ConversationSchema = new Schema(
  { 
    id: {
      type: String,
      required: true,
      unique: true
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      default: true,
    },
    readByBuyer: {
      type: Boolean,
      default: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Conversation = mongoose.model("Conversation", ConversationSchema);
export default Conversation;
