import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Satisfaction from "./Satisfaction";
import Team from "./Team";
import { Link } from "react-router-dom";
function Events() {
  const eventsData = [
    {
      name: "corporate",
      title: "Corporate",
      imageUrl:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "weddings",
      title: "Weddings",
      imageUrl:
        "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "social",
      title: "Social Events",
      imageUrl:
        "https://images.pexels.com/photos/2927584/pexels-photo-2927584.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "parties",
      title: "Parties",
      imageUrl:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <>
      <section className="bg-[#f6f0ea] p-6 md:p-16">
        <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center">
          <h1 className="uppercase text-xl md:text-2xl font-bold text-[#095749]">
            What we do
          </h1>

          <h1 className="capitalize text-5xl md:text-7xl text-[#095749]">
            Events we cater
          </h1>
          <p className="text-lg md:text-2xl font-thin tracking-wider">
            We provide catering for company events and drink parties.
            Full-service catering with drinks, canapes, luxury appetizers,
            waiting staff, and rental materials. Plenty of vegetarian and vegan
            options!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
          {eventsData.map((event, index) => (
            <div key={index} className="relative w-full">
              <h1 className="text-3xl md:text-4xl font-bold absolute top-4 left-1/2 transform -translate-x-1/2 text-white z-20">
                {event.title}
              </h1>

              <div className="overflow-hidden h-[400px] md:h-[500px]  lg:h-[600px] rounded-3xl">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover filter blur-0 scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl "></div>

              <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-60 md:w-72 h-60 md:h-80 z-10">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="rounded-t-full  w-full h-full object-cover shadow-lg"
                />
              </div>

              <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 uppercase py-2 px-4 md:py-3 md:px-6 rounded-full bg-orange-300 text-[#333] hover:bg-orange-400 transition-all whitespace-nowrap ">
                <Link to={`/services/${event.name}`}>Learn more</Link>
                <IoIosArrowRoundForward size={24} />
              </button>
            </div>
          ))}
        </div>
      </section>
      <Satisfaction />
      <Team />
    </>
  );
}

export default Events;
