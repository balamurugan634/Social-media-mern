import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs'
import errorHandler from "../utils/error.js";
export const signUp=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body;
        const mailregex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!mailregex.test(email)){
            return res.status(400).json({error:"invalid email address"})
        }
        const existinguser=await User.findOne({name})
        if(existinguser){
            return res.status(200).json({error:"user already exist"})
        }
        const existingmail=await User.findOne({email})
        if(existingmail){
            return res.status(200).json({error:"mail already exist"})
        }
        // const salt=bcrypt.genSalt(10)
        const hashedpass=bcrypt.hashSync(password,10)
        const newuser=await User({
            name,
            password:hashedpass,
            email
        })

        if(newuser){
            await newuser.save()
            res.status(200).json({messge:"user created"})
        }
        else{
            next(errorHandler(400,"internal sever error"))
        }

    } catch (err) {
        next(err)
    }
}