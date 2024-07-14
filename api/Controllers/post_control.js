import Post from "../Models/post.model.js"
import User from "../Models/user.model.js"

export const createpost =async (req,res,next)=>{
    try{
        const postdescription=req.body.text
        const postimg=req.body.img
        const user=req.body.user.id
        // console.log(user)

        const userval=User.findById({name:user})
        if(!user) return res.status(300).json({message:"user not found"})
        if(!postdescription && !postimg){
            return res.status(300).json({message:"must have description and image"})
        }
       const newpost=await Post.create({postdescription,postimg,user})
        await newpost.save()
        res.status(200).json({message:"post created"})
    }
    catch(error){
        res.status(500).json({ error: "Internal server error" });
    }
}
export const getAllpost=async (req,res,next)=>{
    try {
        const allpost=await Post.find().sort({createdAt:-1})
        if(allpost.length ===0){
            res.status(200).json([])
        }
        res.status(200).json(allpost)
    } catch (error) {
        next(error)
    }
}
