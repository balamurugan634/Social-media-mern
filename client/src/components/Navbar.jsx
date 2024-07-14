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
    <div className="bg-red-500 column float-left">
      <div className="w-full h-full">
        <Link to={"/"} className="flex justify-center md:justify-start">
          <XSvg className="px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900" />
        </Link>
        <ul className="flex flex-col gap-3 mt-4 text-white">
          {content.map((item)=>(
              <li className="flex justify-center md:justify-start">
              <Link className="flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer">
                <item.icon className="w-8 h-8" />
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
