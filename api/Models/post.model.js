import mongoose from "mongoose";
const postschema=new mongoose.Schema(
    {
        postimg:{
            type:String,
            required:true
        },
        postdescription:{
            type:String,
            required:true
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"}
         ],
         user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
         },
         comments:[
            {
                text:{
                    type:String,
                    required:true
                },
                user:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User",
                    required:true
                }
            }
         ]
    },{timestamps:true}
)

const Post=mongoose.model("Post",postschema)

export default Post