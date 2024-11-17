import express from 'express'
import { verifyToken } from '../middleware/jwt.js';
import { createConversation, deleteConversation, getConversations, getSingleConversation, updateConversation } from '../Controllers/conversation.controller.js';

const router = express.Router();

router.get('/',verifyToken, getConversations)
router.post('/',verifyToken, createConversation)
router.get('/single/:id',verifyToken, getSingleConversation)
router.put('/:id',verifyToken, updateConversation)
router.delete('/:id',verifyToken, deleteConversation)



export default  router