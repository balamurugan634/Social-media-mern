import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app=new express()
mongoose.connect(process.env.MONGO).then(()=>console.log("connected")).catch((error)=>console.log(error))
app.listen(3000,()=>{
    console.log("listening...")
})
app.use(express.json())


/* middleware*/
app.use((req,res,err,next)=>{
    const statuscode=err.statusCode || 500;
    const message=err.message || "internal server error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})