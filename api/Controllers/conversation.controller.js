import Conversation from "../models/conversation.model.js";
import createError from "../utils/createError.js";

// create conversation
export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (err) {
    next(err);
  }
};

// get single conversation
export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) return next(createError(404, "Not found!"));
    res.status(200).json(conversation);
  } catch (err) {
    next(err);
  }
};

// get all conversations
export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 });
    res.status(200).json(conversations);
  } catch (err) {
    next(err);
  }
};

// update conversation
export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedConversation);
  } catch (err) {
    next(err);
  }
};

// delete conversation
export const deleteConversation = async (req, res, next) => {
  try {
    const deletedConversation = await Conversation.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedConversation) return next(createError(404, "Not found!"));
    res.status(200).send("deleted.");
  } catch (err) {
    next(err);
  }
};
