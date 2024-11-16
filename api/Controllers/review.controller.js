import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

//  create  a review
export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "Seller cannot create a review"));
  }

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    next(error);
  }
};

// get reviews
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find().populate("gigId");
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

// delete a review
export const deleteReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "Seller cannot delete a review"));
  }
  try {
    await Review.findByIdAndDelete(req.params.id);
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $pull: { reviews: req.params.id },
    });
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};
