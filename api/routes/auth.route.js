import express from 'express'
import { register, login, logout, verifyUserExists, changePassword } from '../Controllers/auth.controller.js';


const router = express.Router();

router.post('/register', register) 
router.post('/login', login)
router.post('/logout', logout)
router.post('/verify-user', verifyUserExists)
router.put('/change-password', changePassword)



export default  router