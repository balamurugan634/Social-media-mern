import React, { useContext, useState } from "react";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import XSvg from "../assets/X";
import { Link } from "react-router-dom";
import { socialcontext } from "../pages/Home";

const Navbar = () => {
  const content = [
    {
      icon: GoHome,
      title: "Home",
    },
    {
      icon: FiSearch,
      title: "Explore",
    },
    {
      icon: IoNotificationsOutline,
      title: "Notification",
    },
    {
      icon: FaUser,
      title: "Profile",
    },
    {
      icon: IoAddCircleOutline,
      title: "Post",
    },
  ];
  // console.log(content[0])
  // const [profilepage,setprofilepage]=useState(false)
  // const [searchpage,setsearchpage]=useState(false)
  // const [notificationpage,setnotificationpage]=useState(false)
  // const [postpage,setpostpage]=useState(false)
  const {
    profilepage,
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
    setforyoupage,
  } = useContext(socialcontext);

  return (
    <div className="text-white h-full w-1/4 ">
      <div className="w-full h-full flex flex-col items-center pt-1">
        <Link
          to={"/"}
          className="my-3 w-full sm:w-1/2  flex justify-center md:justify-start rounded-full pl-1"
        >
          <XSvg className="px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900" />
        </Link>
        <ul className="w-full flex flex-col items-center gap-3 md:gap-6 justify-center md:justify-end  ">
          {/* {content.map((item)=>(
              <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center" key={item.title}>
              <button  className="w-full flex items-center gap-2 justify-center md:justify-start " key={item.title}>
                <item.icon className="w-8 h-8 " />
                <span className="hidden md:block text-lg">{item.title}</span>
              </button>
            </li>
          ))} */}
          <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center">
            <Link to={'/'} className="w-full flex items-center gap-2 justify-center md:justify-start "onClick={() => {
                setforyoupage(true);
                setfollowingpage(false);
                setpostpage(false);
                setsearchpage(false);
                setnotificationpage(false);
                setprofilepage(false);
                setsearchpage(false);
              }} >
              <GoHome className="w-8 h-8 " />
              <span className="hidden md:block text-lg">
                {content[0].title}
              </span>
            </Link>
          </li>
          <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center">
            <button
              className="w-full flex items-center gap-2 justify-center md:justify-start "
              onClick={() => {
                setforyoupage(false);
                setfollowingpage(false);
                setpostpage(false);
                setsearchpage(false);
                setnotificationpage(false);
                setprofilepage(false);
                setsearchpage(true);
              }}
            >
              <FiSearch className="w-8 h-8 " />
              <span className="hidden md:block text-lg">
                {content[1].title}
              </span>
            </button>
          </li>
          <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center">
            <button
              className="w-full flex items-center gap-2 justify-center md:justify-start "
              onClick={() => {
                setforyoupage(false);
                setfollowingpage(false);
                setpostpage(false);
                setsearchpage(false);
                setnotificationpage(true);
                setprofilepage(false);
                setsearchpage(false);
              }}
            >
              <IoNotificationsOutline className="w-8 h-8 " />
              <span className="hidden md:block text-lg">
                {content[2].title}
              </span>
            </button>
          </li>
          <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center">
            <button
              className="w-full flex items-center gap-2 justify-center md:justify-start "
              onClick={(e) => {
                setforyoupage(false);
                setfollowingpage(false);
                setpostpage(false);
                setsearchpage(false);
                setnotificationpage(false);
                setprofilepage(true);
                setsearchpage(false);
              }}
            >
              <FaUser className="w-8 h-8 " />
              <span className="hidden md:block text-lg">
                {content[3].title}
              </span>
            </button>
          </li>
          <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center">
            <button
              className="w-full flex items-center gap-2 justify-center md:justify-start "
              onClick={(e) => {
                setforyoupage(false);
                setfollowingpage(false);
                setpostpage(true);
                setsearchpage(false);
                setnotificationpage(false);
                setprofilepage(false);
                setsearchpage(false);
              }}
            >
              <IoAddCircleOutline className="w-8 h-8 " />
              <span className="hidden md:block text-lg">
                {content[4].title}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
