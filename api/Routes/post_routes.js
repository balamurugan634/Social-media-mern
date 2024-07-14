import express from 'express'
import { verifytoken } from '../utils/verifytoken.js'
import { createcomment, createpost, getAllpost } from '../Controllers/post_control.js'
const router=express.Router()
router.post('/createpost',verifytoken,createpost)
router.get('/getallpost',verifytoken,getAllpost)
router.post('/comment/:id',verifytoken,createcomment)
export default router