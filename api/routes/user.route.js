import express from 'express'
import { deleteUser } from '../Controllers/user.controller.js';

const router = express.Router();

// Delete a user
router.delete('/:id', deleteUser);


export default  router