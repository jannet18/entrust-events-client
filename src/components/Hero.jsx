import React from "react";
import Events from "./Events";
import { FaCircle } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero({ showMenu }) {
  return (
    <>
      <div
        className={`relative bg-[#095749] h-screen flex items-center justify-center ${
          showMenu ? "blur-md bg-black/50" : ""
        }`}
      >
        {/* <div className="relative bg-[#095749] h-screen flex items-center justify-center "> */}
        <img
          src="https://media.istockphoto.com/id/522645617/photo/empty-glasses-in-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=4dA4JK7duSvYHy2Pva8-HINl3AZPNJ12r1pWbsMuyhQ="
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover opacity-50 ${
            showMenu ? "blur-md bg-black/50" : ""
          }`}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold capitalize">
            Creating memorable experiences
          </h1>
          <span className="text-4xl font-thin">One Event at a Time</span>
          <p className="mt-4 text-lg font-thin">
            Creating unforgettable experiences with quality ingredients and top
            talent.
          </p>
          <div className="space-x-4">
            <a
              href="/events"
              className="mt-8 inline-block py-2 px-6 rounded-lg bg-orange-500 hover:bg-orange-600"
            >
              Explore our services
            </a>
            <a
              href="https://airtable.com/appwtrbbamJqyKLJ9/pagPa6N7Qzd3qrpn1/form"
              className="mt-8 inline-block py-2 px-6 rounded-lg bg-orange-500 hover:bg-orange-600"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
      <Events />
    </>
  );
}

export default Hero;
