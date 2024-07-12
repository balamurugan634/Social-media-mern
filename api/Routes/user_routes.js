import express from 'express'
import { signIn, signUp } from '../Controllers/auth_control.js'
const router=express.Router()
router.post('/signup',signUp)
router.get('/signin',signIn)

export default router