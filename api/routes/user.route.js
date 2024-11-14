import express from 'express';
import { deleteUser, becomeSeller } from '../Controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

// Delete a user
router.delete('/:id', verifyToken, deleteUser);
// become a seller
router.post('/:id', verifyToken, becomeSeller);

export default router;
