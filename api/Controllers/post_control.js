import Post from "../Models/post.model.js"
import User from "../Models/user.model.js"
import errorHandler from "../utils/error.js"

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
        const allpost=await Post.find().sort({createdAt:-1}).populate({
            path: "user",
            select: "-password",
        })
        .populate({
            path: "comments.user",
            select: "-password",
        });
        if(allpost.length ===0){
            res.status(200).json([])
        }
        res.status(200).json(allpost)
    } catch (error) {
        next(error)
    }
}
export const createcomment=async (req,res,next)=>{
    const post_id=req.params.id
    const text=req.body.text
    const user=req.body.user.id
    if(!text) return next(errorHandler(400,"comment cannot be empty"))
    const post=await Post.findById(post_id)
    if(!post) return next(errorHandler(400,"post not found"))
    const comment={text:text,user:user}
    post.comments.push(comment)
    await post.save()
    res.status(200).json(post)
}

export const likeandunlike =async(req,res,next)=>{
    const post_id=req.params.id
    const user=req.body.user.id

    const post =await Post.findById(post_id)

    if(!post) return next(errorHandler(400,"post not found"))

    const likedbyuser=post.likes.includes(user)

    if(likedbyuser){
        await Post.updateOne({_id:post_id},{$pull:{likes:user}})
        await User.updateOne({_id:user},{$pull:{likedposts:post_id}})

        const updatedlikes=post.likes.filter((id)=>id.toString() !== user.toString())
        res.status(200).json(updatedlikes)
    }
    else{
        post.likes.push(user)
        await post.save()
        await User.updateOne({_id:user},{$push:{likedposts:post_id}})
        const updatedlikes=post.likes
        res.status(200).json(updatedlikes)
    }
}