import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import Stripe from "stripe";

// create payment intent
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  const gig = await Gig.findById(req.params.id);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });

  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

// get orders
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      $or: [
        { sellerId: req.userId },
        { buyerId: req.userId }
      ],
      isCompleted: true
    }).sort({ createdAt: -1 });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};


// confirm order:
export const confirm = async (req, res, next) => {
  try {
    const order = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      },
      { new: true } // Return updated document
    );
    res.status(200).send("Order has been confirmed");
  } catch (err) {
    next(err);
  }
};


// delete order
export const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (req.user._id !== order.buyerId) {
      return next(createError(403, "You can't delete this order"));
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).send("Order has been deleted");
    }
  } catch (err) {
    next(err);
  }
};
