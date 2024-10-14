import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Satisfaction() {
  const operationsData = [
    {
      title: "Best Chef Cook",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3461/3461980.png",
      description: "",
    },
    {
      title: "Delicious Food",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Xmktm_3M3mxwUkgzhG10FgqujlqPI7H-OZmLu_TT9djn9z_J6DD1m0twZbyZAHedHuY&usqp=CAU",
      description: "",
    },
    {
      title: "High Quality Services",
      imageUrl:
        "https://thumbs.dreamstime.com/b/crown-number-one-laurel-icon-shadow-crown-number-one-laurel-icon-shadow-simple-vector-logo-280837810.jpg?w=768",
      description: "",
    },
    {
      title: "Seasonal Menus",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/018/997/467/non_2x/seasonal-menu-icon-in-outline-style-cauliflower-peppers-carrots-vegetables-fall-into-the-bowl-parsley-celery-and-peas-are-added-to-the-dish-vegan-food-or-salad-vector.jpg",
      description: "",
    },
    {
      title: "Local Sourced Ingredients",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/037/740/791/small/groceries-line-icon-background-white-vector.jpg",
      description: "",
    },
    {
      title: "Fits Your Budget",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1pgP8kKypy_E9XRa7aU4S8dOuMGXfp5UQg&s",
      description: "",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center space-y-20 p-10">
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <div className="flex items-center justify-center space-x-3">
          <h1 className="uppercase text-xl md:text-3xl font-bold text-[#095749]">
            Why Entrust
          </h1>
        </div>
        <h1 className="capitalize text-4xl md:text-6xl text-[#095749] whitespace-nowrap text-center">
          Satisfaction guaranteed
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {operationsData.map((operation, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <i className="">
              <img
                src={operation.imageUrl}
                alt={operation.title}
                className="w-40 h-40 "
              />
            </i>
            <h1 className="text-[#095749] font-semibold text-center text-3xl md:text-5xl">
              {operation.title}
            </h1>
            <p className="tracking-widest text-md font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              quae totam sapiente exercitationem placeat voluptatem vitae,
              distinctio quasi iste cum laboriosam amet voluptate fugiat dicta
              error recusandae impedit adipisci nobis?
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center space-x-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-thin tracking-wide">
              Call us now
              <span className="text-[#095749] font-semibold ml-3">
                +25472200000
              </span>
            </h1>
          </div>
          <div>
            <p className="text-xl font-thin tracking-wide">
              Request a quote without obligation
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 tracking-wider capitalize py-3 px-6 rounded-3xl bg-[#ebc6a4] hover:bg-[#095749] hover:text-white">
          Request a quote <FaArrowRightLong />
        </button>
        <div>
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="cook-image"
            className="w-screen h-[200px] object-cover"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="relative">
              <img
                src="https://meetingsitespro.com/wp-content/uploads/2020/08/Portioned-2BPlate.jpg"
                alt="food-plating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white bg-black bg-opacity-30">
                <div className="flex flex-col items-center">
                  <span className="uppercase text-sm md:text-base">
                    Preferred
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold">Menus</h1>
                </div>
                <button className="flex items-center gap-2 py-2 px-4 text-sm md:py-3 md:px-6 text-[#333] rounded-3xl bg-[#ebc6a4] hover:bg-[#095749] hover:text-white transition-all">
                  Explore now <FaArrowRightLong />
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/908077986/photo/wedding-ceremony.jpg?s=612x612&w=0&k=20&c=dkRXHQpOr4lkyHtE3RV4qpgp3QloHtkfYtQ6qzFN4xw="
                alt="venues-image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white bg-black bg-opacity-30">
                <div className="flex flex-col items-center">
                  <span className="uppercase text-sm md:text-base">
                    Exclusive
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold">Venues</h1>
                </div>
                <button className="flex items-center gap-2 py-2 px-4 text-sm md:py-3 md:px-6 text-[#333] rounded-3xl bg-[#ebc6a4] hover:bg-[#095749] hover:text-white transition-all">
                  Explore now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Satisfaction;
