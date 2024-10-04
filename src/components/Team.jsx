import React from "react";

function Team() {
  return (
    <div className="bg-[#f6f0ea]">
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <div className="flex items-center justify-center space-x-3">
          <h1 className="uppercase text-xl font-bold text-[#095749]">
            meet incredible people
          </h1>
        </div>
        <h1 className="capitalize text-4xl text-[#095749]">Our Team</h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-20">
        <div>
          <div className="bg-white rounded-t-full hover:bg-[#ebc6a4]">
            <div className="image-box">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669363fvefn.png"
                alt=""
                className="w-auto h-[500px] object-contain rounded-t-full bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-[#095749] font-bold">Albert Flores</h1>
            <span className="uppercase font-thin text-gray-700">Head Chef</span>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-t-full hover:bg-[#ebc6a4]">
            <div className="image-box">
              <img
                src="https://i.pinimg.com/originals/8c/79/ad/8c79ad83c69ceda5379e9e3dee683e43.png"
                alt=""
                className="w-auto h-[500px] object-contain rounded-t-full bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-[#095749] font-bold">Albert Flores</h1>
            <span className="uppercase font-thin text-gray-700">Head Chef</span>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-t-full hover:bg-[#ebc6a4] p-6">
            <div className="image-box">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669634llgk1.png"
                alt=""
                className="w-auto h-[450px] object-contain rounded-t-full bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-[#095749] font-bold">Albert Flores</h1>
            <span className="uppercase font-thin text-gray-700">Head Chef</span>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-t-full hover:bg-[#ebc6a4]">
            <div className="image-box">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669538jccuo.png"
                alt=""
                className="w-auto h-[500px] object-contain rounded-t-full bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-[#095749] font-bold">Albert Flores</h1>
            <span className="uppercase font-thin text-gray-700">Head Chef</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
