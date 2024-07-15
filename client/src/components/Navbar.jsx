import React from "react";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import XSvg from "../assets/X";
import { Link } from "react-router-dom";

const Navbar = () => {

  const content=[
    {
      icon:GoHome,
      title:"Home"
    },
    {
      icon:FiSearch,
      title:"Explore"
    },
    {
      icon:IoNotificationsOutline,
      title:"Notification"
    },
    {
      icon:FaUser,
      title:"Profile"
    },{
      icon:IoAddCircleOutline,
      title:"Post"
    }
  ]
  return (
    <div className="text-white h-full w-1/4 ">
      <div className="w-full h-full flex flex-col items-center pt-1">
        <Link to={"/"} className="my-3 w-full sm:w-1/2  flex justify-center md:justify-start rounded-full pl-1">
          <XSvg className="px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900" />
        </Link>
        <ul className="w-full flex flex-col items-center gap-3 md:gap-6 justify-center md:justify-end  ">
          {content.map((item)=>(
              <li className=" w-full sm:w-5/6 p-2 hover:bg-stone-950 rounded-full flex items-center justify-center">
              <Link className="w-full flex items-center gap-2 justify-center md:justify-start ">
                <item.icon className="w-8 h-8 " />
                <span className="hidden md:block text-lg">{item.title}</span>
              </Link>
            </li>
          ))}
          
        </ul>
      </div>
      </div>
  );
};

export default Navbar;
