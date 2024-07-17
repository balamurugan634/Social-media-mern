import React, { useContext, useState } from "react";
// import Post from "./Post";

import Foryou from "../pages/Foryou";
import Following from "../pages/Following";
import { socialcontext } from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Createpost from "../pages/Createpost";
import Notificationpage from "../pages/Notificationpage";

const Center = () => {
  const {profilepage,
    setprofilepage,
    searchpage,
    setsearchpage,
    notificationpage,
    setnotificationpage,
    postpage,
    setpostpage,
    followingpage,
    setfollowingpage,
    foryoupage,
    setforyoupage}=useContext(socialcontext)
  // const [foryoupage, setforyoupage] = useState(true);
  // const [followingpage, setfollowingpage] = useState(false);
  // const [postpage, setpostpage] = useState(false);

  return (
    <div className="w-3/4 lg:w-1/2 sm:p-1  relative text-white">
      <ul className=" w-full h-12 sticky top-0 bg-black overflow-hidden flex">
        <button
          to={"/foryou-post"}
          onClick={(e) => {
            setforyoupage(true);
            setfollowingpage(false);
            setpostpage(false);
            setsearchpage(false)
            setnotificationpage(false)
            setprofilepage(false)
            setsearchpage(false)
          }}
          className=" w-1/2 flex justify-center items-center font-semibold capitalize cursor-pointer hover:bg-stone-950  border-blue-400 hover:border-b-2"
        >
          For you
        </button>
        <button
          to={"/following-post"}
          onClick={(e) => {
            setforyoupage(false);
            setfollowingpage(true);
            setpostpage(false);
            setsearchpage(false)
            setnotificationpage(false)
            setprofilepage(false)
            setsearchpage(false)
          }}
          className="w-1/2 flex justify-center items-center font-semibold cursor-pointer hover:bg-stone-950 border-blue-400 hover:border-b-2 active:border-b-2"
        >
          Follwing
        </button>
      </ul>
      <div className="bg-black w-full h-[45rem] overflow-y-auto ">
        {foryoupage && <Foryou />}
        {followingpage && <Following />}
        {profilepage && <Profile />}
        {searchpage && <Search />}
        {notificationpage && <Notificationpage />}
        {postpage && <Createpost />}
        {/* {postpage && <postpage />} */}
        {/* <Post /> */}
      </div>
    </div>
  );
};

export default Center;
