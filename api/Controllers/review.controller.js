import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

//  create  a review
export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers cannot review a Gig"));

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review)
      return next(
        createError(403, "You have already reviewed this Gig")
      );

    //TODO: check if the user purchased the gig.
    const gig = await Gig.findById(req.body.gigId);
    if (!gig) return next(createError(404, "Gig not found"));

    const savedReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};
// get reviews
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
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
