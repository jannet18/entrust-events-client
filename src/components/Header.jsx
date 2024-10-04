// Header.js
import React from "react";
import Hero from "./Hero";
import { IoMdStarOutline } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="relative ">
      <header className="dark:bg-[#095749] h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center gap-20">
          <div className="uppercase text-teal-800 dark:text-[#e3c1a0] font-black text-3xl">
            Entrust Events
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Home
                </a>
                <IoMdStarOutline className="text-[#44786d] hover:text-white" />
                <a href="#" className="py-2 px-6 flex">
                  About
                </a>
                <IoMdStarOutline className="text-[#44786d] hover:text-white" />
                <a href="#" className="py-2 px-6 flex">
                  Services
                </a>
                <IoMdStarOutline />
                <a href="#" className="py-2 px-6 flex">
                  Menu
                </a>
                <IoMdStarOutline className="text-[#44786d] hover:text-white" />
                <a href="#" className="py-2 px-6 flex">
                  Venues
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              </button>
            </div>
            <div className="tracking-widest text-white lg:flex hidden">
              <p className="uppercase flex items-center gap-3 justify-center">
                Call us <FaPhoneVolume className="text-[#e3c1a0]" />
                <span>+2547657382</span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Header;
