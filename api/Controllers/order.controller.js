import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import Stripe from "stripe";
import nodemailer from 'nodemailer'

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
    
    if (!order) {
      return res.status(404).send("Order not found");
    }

    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};


// send invoice email
export const sendInvoice = async (req, res, next) => {
  try {
    const { orderId, email, orderDetails } = req.body;
    
    if (!email || email === '[object Object]') {
      return res.status(400).json({ message: "Valid email is required" });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Your Invoice for Order #${orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1dbf73;">Thank You for Your Purchase!</h1>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Service:</strong> ${orderDetails.title}</p>
            <p><strong>Amount Paid:</strong> $${orderDetails.price}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Invoice sent successfully" });
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
