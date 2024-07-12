import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs'
import errorHandler from "../utils/error.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const signUp=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body;
        const mailregex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!mailregex.test(email)){
            return res.status(400).json({message:"invalid email address"})
        }
        const existinguser=await User.findOne({name})
        if(existinguser){
            return res.status(400).json({message:"user already exist"})
        }
        const existingmail=await User.findOne({email})
        if(existingmail){
            return res.status(400).json({message:"mail already exist"})
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
            res.status(200).json({message:"user created"})
        }
        else{
            next(errorHandler(400,"internal sever error"))
        }

    } catch (err) {
        next(err)
    }
}
export const signIn=async (req,res,next)=>{
    try{
    const {email,password}=req.body;
    const mailregex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!mailregex.test(email)){
        return next(400,"invalid email address")
    }
    const validuser=await User.findOne({email:email})
    if(!validuser){
        return next(errorHandler(500,"mail not found"))
    }
    const validpass=bcrypt.compareSync(password,validuser.password);
    if(!validpass){
        return next(errorHandler(401,"wrong credentials"))
    }
    const token=jwt.sign({id:validuser._id},process.env.SECRET)
    const {password:pass,...rest}=validuser._doc
    res.cookie('acces_token',token,{httpOnly:true}).status(200).json(rest)
}
catch(error){
    next(error)
}
    
}
export const google =async (req,res,next)=>{
    try{
    const {email}=req.body
    const user=await User.findOne({email})
    if(user){
        const token=jwt.sign({id:user._id},process.env.SECRET)
        const {password:pass,...rest}=user._doc
        return res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)     
    }
    else{
        const generate_pass=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8)
        const hashedpass=bcrypt.hashSync(generate_pass,10)
        const newuser=await User({
            name:req.body.name,
            email,
            password:hashedpass,
            profileimg:req.body.photo
        })
        try{
            await newuser.save()
            const token=jwt.sign({id:newuser._id},process.env.SECRET)
            const {password:pass,...rest}=newuser._doc
            res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
        }
        catch(error){
            next(error)
        }
    }
    }
    catch(error){
        next(error)
    }
}