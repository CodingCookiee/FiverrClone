import express from 'express'
import { createGig, deleteGig, getGig, getGigs } from '../Controllers/gig.controller.js';
import { verifyToken } from '../middleware/jwt.js';


const router = express.Router();

router.post('/', verifyToken, createGig)
router.delete('/:id',verifyToken, deleteGig)
router.get('/single/:id',verifyToken, getGig)
router.get('/',verifyToken, getGigs)


export default  router