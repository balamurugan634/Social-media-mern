import React from "react";
import Post from "./Post";

const Center = () => {
  return (
    <div className="w-3/4 lg:w-1/2 sm:p-1  relative text-white">
      <ul className=" w-full h-12 sticky top-0 bg-black overflow-hidden flex">
        <li className=" w-1/2 flex justify-center items-center font-semibold capitalize cursor-pointer hover:bg-stone-950">
          For you
        </li>
        <li className="w-1/2 flex justify-center items-center font-semibold cursor-pointer hover:bg-stone-950">
          Follwing
        </li>
      </ul>
      <div className="bg-black w-full h-[45rem] overflow-y-auto ">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </div>
  );
};

export default Center;
