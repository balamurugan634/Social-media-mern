import mongoose from "mongoose";
const userschema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,
            minlenght:6,
        },
        bio:{
            type:String,
            default:""
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        following:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
                default:[]
            }
        ],
        followers:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
                default:[]
            }
        ],
        likedposts:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Post',
                default:[]
            }
        ],
        profileimg:{
            type:String,
            default:""
        },
        coverimg:{
            type:String,
            default:""
        }
    },{timestamps:true}
)

const User=mongoose.model('User',userschema)
export default User;