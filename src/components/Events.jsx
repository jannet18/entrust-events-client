import React from "react";
import { FaCircle } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

function Events() {
  return (
    <>
      <section className="bg-[#f6f0ea] p-20">
        <div className="flex flex-col items-center justify-center space-y-4 py-10">
          <div className="flex items-center justify-center space-x-3">
            <h1 className="uppercase text-3xl font-bold text-[#095749]">
              What we do
            </h1>
          </div>
          <h1 className="capitalize text-7xl text-[#095749]">
            Events we cater
          </h1>
          <p className="text-3xl font-thin tracking-wider text-center">
            We provide catering for company events and drink parties.
            Full-service catering with drinks, canapes, luxury appetizers,
            waiting staff, and rental materials. Plenty of vegetarian and vegan
            options!
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-full h-full">
            <h1 className="text-3xl absolute top-10 left-[43%] z-10 text-white">
              Corporate
            </h1>
            <div className="grid-column relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blurred Image"
                className="w-full h-full object-cover filter blur-sm"
                // absolute inset-0
              />
            </div>
            <div className="absolute top-[15%] left-[25%] z-0 w-96 h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clear Image"
                className=" rounded-t-full w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-5 left-[43%] flex items-center gap-3 uppercase py-3 px-4 rounded-3xl bg-orange-200 border-2 border-transparent text-[#333] w-fit text-md mr-4 hover:bg-white">
              learn more <IoIosArrowRoundForward />
            </button>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* <!-- First Column --> */}
          <div className="relative w-full">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl font-bold absolute top-8 left-1/2 transform -translate-x-1/2 text-white z-20">
              Corporate
            </h1>
            {/* <!-- Blurred Background Image --> */}
            <div className="overflow-hidden h-[500px]  md:h-[600px] rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blurred Image"
                className="w-full h-full object-cover filter blur-0 scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl "></div>
            {/* <!-- Clear Foreground Image --> */}
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-72 md:w-80 h-72 md:h-96 z-10">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clear Image"
                className="rounded-t-full  w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* <!-- Button --> */}
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 uppercase py-3 px-6 rounded-full bg-orange-300 text-[#333] hover:bg-orange-400 transition-all">
              Learn more <IoIosArrowRoundForward size={24} />
            </button>
          </div>
          <div className="relative w-full">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl font-bold absolute top-8 left-1/2 transform -translate-x-1/2 text-white z-20">
              Weddings
            </h1>
            {/* <!-- Blurred Background Image --> */}
            <div className="overflow-hidden h-[500px]  md:h-[600px] rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blurred Image"
                className="w-full h-full object-cover filter blur-0 scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl "></div>
            {/* <!-- Clear Foreground Image --> */}
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-72 md:w-80 h-72 md:h-96 z-10">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clear Image"
                className="rounded-b-full  w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* <!-- Button --> */}
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 uppercase py-3 px-6 rounded-full bg-orange-300 text-[#333] hover:bg-orange-400 transition-all">
              Learn more <IoIosArrowRoundForward size={24} />
            </button>
          </div>
          <div className="relative w-full">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl capitalize font-bold absolute top-8 left-1/2 transform -translate-x-1/2 text-white z-20">
              Social Events
            </h1>
            {/* <!-- Blurred Background Image --> */}
            <div className="overflow-hidden h-[500px]  md:h-[600px] rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blurred Image"
                className="w-full h-full object-cover filter blur-0 scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl "></div>
            {/* <!-- Clear Foreground Image --> */}
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-72 md:w-80 h-72 md:h-96 z-10">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clear Image"
                className="rounded-b-full  w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* <!-- Button --> */}
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 uppercase py-3 px-6 rounded-full bg-orange-300 text-[#333] hover:bg-orange-400 transition-all">
              Learn more <IoIosArrowRoundForward size={24} />
            </button>
          </div>
          <div className="relative w-full">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl font-bold absolute top-8 left-1/2 transform -translate-x-1/2 text-white z-20">
              Parties
            </h1>
            {/* <!-- Blurred Background Image --> */}
            <div className="overflow-hidden h-[500px]  md:h-[600px] rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blurred Image"
                className="w-full h-full object-cover filter blur-0 scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl "></div>
            {/* <!-- Clear Foreground Image --> */}
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-72 md:w-80 h-72 md:h-96 z-10">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clear Image"
                className="rounded-t-full  w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* <!-- Button --> */}
            {/* <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 uppercase py-3 px-6 rounded-full bg-orange-300 text-[#333] hover:bg-orange-400 transition-all">
              Learn more <IoIosArrowRoundForward size={24} />
            </button> */}
            {/* <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 uppercase py-3 px-6 rounded-full bg-orange-300 text-[#333] transition-all duration-300 ease-in-out w-12 h-12 hover:w-auto hover:px-8 hover:gap-2 hover:bg-orange-400 hover:text-[#333]">
              <span className="">Learn more</span>
              Learn more
              <IoIosArrowRoundForward size={24} />
            </button> */}
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center uppercase py-3 px-3 rounded-full bg-orange-300 text-[#333] transition-all duration-300 ease-in-out w-12 h-12 hover:w-auto hover:px-6 hover:bg-orange-400">
              {/* <span className="text-white transition-all duration-300 ease-in-out hover:pl-4"> */}
              Learn more
              {/* </span> */}
              <IoIosArrowRoundForward
                size={24}
                className="ml-2 transition-all duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
