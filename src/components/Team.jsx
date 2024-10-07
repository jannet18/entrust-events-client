import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import PreviewFrame from "./PreviewFrame";

function Team() {
  return (
    <>
      <div className="bg-[#f6f0ea]">
        <div className="flex flex-col items-center justify-center space-y-4 py-10">
          <div className="flex items-center justify-center space-x-3">
            <h1 className="uppercase text-lg md:text-xl font-bold text-[#095749]">
              meet incredible people
            </h1>
          </div>
          <h1 className="capitalize text-3xl md:text-4xl lg:text-5xl text-[#095749]">
            Our Team
          </h1>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 m-20">
          {[
            {
              name: "Albert Flores",
              role: "Head Chef",
              image:
                "https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669363fvefn.png",
            },
            {
              name: "Albert Flores",
              role: "Head Chef",
              image:
                "https://i.pinimg.com/originals/8c/79/ad/8c79ad83c69ceda5379e9e3dee683e43.png",
            },
            {
              name: "Albert Flores",
              role: "Head Chef",
              image:
                "https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669634llgk1.png",
            },
            {
              name: "Albert Flores",
              role: "Head Chef",
              image:
                "https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669538jccuo.png",
            },
          ].map((teamMember, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-t-full hover:bg-[#ebc6a4] transition-all duration-300 ease-in-out">
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="w-auto h-[350px] md:h-[450px] lg:h-[500px] p-2 object-contain rounded-t-full"
                />
              </div>
              <div className="text-center mt-4">
                <h1 className="text-lg md:text-xl text-[#095749] font-bold">
                  {teamMember.name}
                </h1>
                <span className="uppercase text-gray-700 font-thin">
                  {teamMember.role}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden relative h-[400px]">
          <video
            src="https://videos.pexels.com/video-files/7601433/7601433-hd_1920_1080_24fps.mp4"
            autoPlay
            loop
            playsInline
            className="background-clip"
          />

          <div className="absolute flex items-center justify-between w-full top-[40%]">
            <div className="enjoy-slide flex items-center justify-center space-x-24 p-6 uppercase text-[#e3c1a0]">
              <span className="text-8xl font-bold flex items-center gap-10">
                Healthy <IoMdStarOutline className="w-14 h-14" />
              </span>
              <span className="text-8xl font-bold flex items-center gap-10">
                Enjoy <IoMdStarOutline className="w-14 h-14" />
              </span>
              <span className="text-8xl font-bold flex items-center gap-10">
                Fresh <IoMdStarOutline className="w-14 h-14" />
              </span>
              <span className="text-8xl font-bold flex items-center gap-10">
                Taste <IoMdStarOutline className="w-14 h-14" />
              </span>
            </div>
            <div className="enjoy-slide flex items-center justify-center space-x-reverse space-x-24 p-6 uppercase text-[#e3c1a0]">
              <span className="text-8xl font-bold flex items-center gap-10">
                Healthy <IoMdStarOutline className="w-14 h-14" />
              </span>
              <span className="text-8xl font-bold flex items-center gap-10">
                Enjoy <IoMdStarOutline className="w-14 h-14" />
              </span>
              <span className="text-8xl font-bold flex items-center gap-10">
                Fresh <IoMdStarOutline className="w-14 h-14" />
              </span>
              <span className="text-8xl font-bold flex items-center gap-10">
                Taste <IoMdStarOutline className="w-14 h-14" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <PreviewFrame />
    </>
  );
}

export default Team;
