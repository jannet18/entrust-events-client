import React from "react";

const PreviewFrame = () => {
  return (
    <div className="container mx-auto px-2 py-4 lg:px-6 lg:pt-24  space-y-6">
      <div className="flex flex-col items-center space-y-3">
        <p className="uppercase tracking-wider font-semibold text-teal-700">
          check our recent projects
        </p>
        <h1 className="md:text-6xl text-4xl font-bold capitalize whitespace-nowrap text-teal-900 ">
          Photo Gallery
        </h1>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2 py-3">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/1566867/pexels-photo-1566867.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <div className="w-full flex ">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                src="https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="flex">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                src="https://images.pexels.com/photos/724300/pexels-photo-724300.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              src="https://images.pexels.com/photos/2147490/pexels-photo-2147490.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewFrame;
