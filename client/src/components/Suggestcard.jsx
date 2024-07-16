import React from "react";

const Suggestcard = () => {
  return (
    <div className=" flex w-full p-2 gap-4 items-center">
      <img
        src="https://wallpapers.com/images/hd/moon-retro-vector-art-7op8fanjrtajdzp0.jpg"
        alt=""
        className="lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-full object-cover"
      />
      <h2 className="text-md xl:text-xl font-semibold">username</h2>
      <button className="bg-white text-black px-2 xl:px-4 rounded-full py-2 font-bold">Follow</button>
    </div>
  );
};

export default Suggestcard;
