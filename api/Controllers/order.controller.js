import  Order  from "../models/order.model.js";
import User  from "../models/user.model.js";
import  Gig  from "../models/gig.model.js";
import  createError  from "../utils/createError.js";
// import Stripe from "stripe";

// create a new order:
export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    const newOrder = new Order({
      gigId: gig._id,
      userId: req.user._id,
      img: gig.cover,
      title: gig.title,
      buyerId: gig.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
};

// get orders
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller
        ? { sellerId: req.user._id }
        : { buyerId: req.user._id }),
    });
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};

// create payment intent
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  const gig = await Gig.findById(req.params.id);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

// update order
export const updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    const gig = await Gig.findById(order.gigId);
    if (req.user._id !== order.buyerId) {
      return next(createError(403, "You can't update this order"));
    }
    if (order.isCompleted) {
      return next(createError(403, "Order is already completed"));
    }
    await Order.findByIdAndUpdate(req.params.id, {
      $set: { isCompleted: true },
    });
    await Gig.findByIdAndUpdate(order.gigId, {
      $inc: { sales: 1 },
    });
    res.status(200).send("Order has been completed");
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
