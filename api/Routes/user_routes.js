import express from 'express'
import { signUp } from '../Controllers/auth_control.js'
const router=express.Router()
router.post('/signup',signUp)
export default router