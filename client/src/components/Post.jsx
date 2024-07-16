import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";

const Post = () => {
  return (
    <div className="h-[25rem] bg-black 0 overflow-hidden mt-2 border-b border-stone-900">
      <div className="h-full w-full p-2">
        <div className="flex items-center gap-2">
        <img
          src="https://wallpapers.com/images/hd/moon-retro-vector-art-7op8fanjrtajdzp0.jpg"
          alt=""
          className="rounded-full w-10 h-10"
          />
        <h3 className="font-semibold">username</h3>
        </div>
        <p className="text-gray-300 w-full text-justify pb-1 line-clamp-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolor
          recusandae atque delectus accusamus ducimus reprehenderit temporibus?
          Consequuntur, dicta vel.
        </p>
       
        <img
          src="https://wallpapers.com/images/hd/moon-retro-vector-art-7op8fanjrtajdzp0.jpg"
          alt=""
          className="object-contain w-full  mt-2 h-[200px] sm:h-[200px] "
        />
       
        <ul className="w-full flex relative  mt-3 p-2 bottom-0 ">
          <li className="w-1/2 flex justify-center items-end">
            <FaRegHeart className="h-6 w-6"/> 
            {/* <FaHeart /> */}
          </li>
          <li className="w-1/2 flex justify-center items-center">
          <FaRegComments  className="h-6 w-6"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
