import express from 'express';
import { deleteUser } from '../Controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

// Delete a user
router.delete('/:id', verifyToken, deleteUser);

export default router;
