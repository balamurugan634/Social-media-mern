import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { useSelector } from "react-redux";

const Post = ({itemlist}) => {
  const {currentuser}=useSelector((state)=>state.user2)
  console.log(itemlist)
  return (
    <div className=" bg-black 0 overflow-hidden mt-2 border-b border-stone-900">
      <div className="h-full w-full p-2">
        <div className="flex items-center gap-2">
        <img
          src={itemlist.user.profileimg}
          alt=""
          className="rounded-full w-10 h-10"
          />
        <h3 className="font-semibold">username</h3>
        </div>
        <p className="text-gray-300 w-full text-justify pb-1 mt-1 line-clamp-3">
          {itemlist.postdescription}
        </p>
       
        <img
          src={itemlist.postimg}
          alt=""
          className="object-cover w-full  mt-2 h-[220px] sm:h-[32rem] "
        />
       
        <div className="w-full flex relative h-[2rem]  mt-3 p-2 bottom-0  bg-red-500 ">
          <div className="w-1/2 flex justify-center items-end ">
           {itemlist.likes.includes(currentuser) ? <FaRegHeart className="h-6 w-6"/> :
              <FaHeart className="h-6 w-6" />}
          </div>
          <div className="w-1/2 flex justify-center items-center">
          <FaRegComments  className="h-6 w-6"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
