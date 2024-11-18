import Gig from '../models/gig.model.js';
import createError from '../utils/createError.js';

// create Gig
export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, 'Only sellers can create a gig!'));
  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
  };

// deleteGig
export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId.toString() !== req.userId) 
      return next(createError(403, 'You can delete only your gig'));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json('Gig has been deleted.');
  } catch (err) {
    next(err);
  }
};



// getGig
export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) next(createError(404, 'Gig not found!'));
    res.status(200).json(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: { $regex: q.cat, $options: "i" } }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && {
      $or: [
        { title: { $regex: decodeURIComponent(q.search), $options: "i" } },
        { desc: { $regex: decodeURIComponent(q.search), $options: "i" } },
        { cat: { $regex: decodeURIComponent(q.search), $options: "i" } }
      ]
    }),
  };

  try {
    const gigs = await Gig.find(filters).sort({ [q.sort || "createdAt"]: -1 });
    res.status(200).json(gigs);
  } catch (err) {
    next(err);
  }
};
