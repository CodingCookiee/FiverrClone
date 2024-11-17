import express from 'express'
import { verifyToken } from '../middleware/jwt.js';
import { createOrder, getOrders, intent, updateOrder, deleteOrder } from '../Controllers/order.controller.js';


const router = express.Router();

router.post('/:gigId',verifyToken, createOrder)
router.get('/',verifyToken, getOrders)
router.post('/create_payment_intent/:id', verifyToken, intent)
router.put('/',verifyToken, updateOrder)
router.delete('/:id',verifyToken, deleteOrder)

export default  router