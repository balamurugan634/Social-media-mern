import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import Rightpanel from "../components/Rightpanel";
import Center from "../components/Center";
export const socialcontext = createContext();
const Home = () => {
  const [profilepage, setprofilepage] = useState(false);
  const [searchpage, setsearchpage] = useState(false);
  const [notificationpage, setnotificationpage] = useState(false);
  const [postpage, setpostpage] = useState(false);
  const [foryoupage, setforyoupage] = useState(true);
  const [followingpage, setfollowingpage] = useState(false);
  return (
    <socialcontext.Provider
      value={{
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
      }}
    >
      <div className="min-h-screen w-screen flex justify-center bg-black ">
        <div className="w-full h-full md:w-[90%] lg:w-[80%] flex ">
          <Navbar />
          <Center />
          <Rightpanel />
        </div>
      </div>
    </socialcontext.Provider>
  );
};

export default Home;
