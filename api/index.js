import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Userrouter from './Routes/user_routes.js'
import cookieParser from 'cookie-parser'
import Postrouter from './Routes/post_routes.js'
dotenv.config()
const app=new express()
mongoose.connect(process.env.MONGO).then(()=>console.log("connected")).catch((error)=>console.log(error))
app.listen(3000,()=>{
    console.log("listening...")
})
app.use(express.json())
app.use(cookieParser())
app.use('/api/user',Userrouter)
app.use('/api/post',Postrouter)
/* middleware*/
app.use((err,req,res,next)=>{
    const statuscode=err.statusCode || 500;
    const message=err.message || "internal server error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})