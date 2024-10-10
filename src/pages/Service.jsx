import React from "react";
import { FaArrowRightLong, FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Service() {
  const events = [
    {
      title: "Deliverd",
      image:
        "https://images.pexels.com/photos/1431306/pexels-photo-1431306.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "",
    },
    {
      title: "Plated",
      image:
        "https://images.pexels.com/photos/2059152/pexels-photo-2059152.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "",
    },
    {
      title: "Resident",
      image:
        "https://images.pexels.com/photos/3952055/pexels-photo-3952055.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "",
    },
    {
      title: "Personalized Catering",
      image:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "",
    },
  ];
  return (
    <div className="bg-[#f6f0ea]">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/6691615/pexels-photo-6691615.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="service image"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 text-white py-4 flex flex-col justify-between">
          <h1 className="text-6xl font-bold text-center my-20">Weddings</h1>
          <div className="flex items-center justify-center gap-2 uppercase text-xs">
            <Link to="" className="hover:text-[#095749] underline">
              Home
            </Link>
            <FaGreaterThan />
            <Link to="" className="hover:text-[#095749] underline">
              Services
            </Link>
            <FaGreaterThan />
            <span>Weddings</span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        <div className="col-span-1 md:col-span-3 space-y-6">
          <h1 className="text-4xl md:text-5xl text-[#095749] font-bold">
            Catering Events of all sizes
          </h1>
          <p className="tracking-wider">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            obcaecati, neque adipisci quia ad consectetur culpa natus incidunt
            sit repellat, nihil sequi praesentium facilis quod provident dolorum
            sapiente. Esse, commodi.
          </p>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            officia dicta cumque. Provident, corrupti, sit quam voluptas cumque
            maxime optio quidem eveniet omnis, similique delectus debitis
            tenetur dolores sapiente molestiae.
          </p>
          <img
            src="https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="image_name"
            className="w-full rounded-2xl h-[400px] object-cover"
          />
          <h1 className="text-3xl font-semibold text-[#095749]">
            What we Offer
          </h1>
          <div className="space-y-8">
            {events.map((item, id) => (
              <div key={id} className="grid grid-cols-1 gap-5">
                <div className="flex items-center justify-between px-8 text-2xl">
                  <h1 className="text-[#095749] font-bold hover:text-[#333] border-t w-full hover:border-t-[#095749]">
                    {item.title}
                  </h1>
                  <button className="w-8 h-8 text-[#095749] hover:text-[#333]">
                    +
                  </button>
                </div>
                <div className="flex gap-4 mt-4 px-4">
                  <img
                    src={item?.image}
                    alt="deliver_image"
                    className="w-48 h-48 object-cover rounded-2xl"
                  />
                  <div className="flex flex-col space-y-6 tracking-wider">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque, dolores? Autem id nihil sint voluptatem cumque
                      iusto magni inventore. Eius atque, accusamus vel nostrum
                      sequi ea voluptatibus aliquid animi hic.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi, eius dolorem. Hic eveniet perspiciatis molestias.
                      Consequuntur recusandae suscipit accusantium quis, labore,
                      totam fugiat ipsam autem eum, officiis non sapiente
                      dignissimos?
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#095749] p-3 rounded-3xl text-xs uppercase text-white hover:bg-[#e3c1a0]"
            >
              Request Quotes <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="col-span-1 space-y-6 ">
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Services</h1>
            <div className="space-y-4">
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] hover:text-white">
                Parties
              </p>
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] hover:text-white">
                Social Events
              </p>
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] hover:text-white">
                Weddings
              </p>
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] hover:text-white">
                Corporate
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="">Recent Event Inspiration</h1>
            <div className="grid grid-cols-2 p-2 gap-3">
              <img
                src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="inspo"
                className="w-auto h-20 rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/33242/cooking-ingredient-cuisine-kitchen.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="inspo"
                className="w-auto h-20 rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="inspo"
                className="w-auto h-20 rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/33242/cooking-ingredient-cuisine-kitchen.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="inspo"
                className="w-auto h-20 rounded-md"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="plating"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex flex-col items-center justify-center gap-4 absolute inset-0 bg-black bg-opacity-30 text-white rounded-2xl">
              <h1 className="text-xl font-bold text-[#e3c1a0]">30% Off</h1>
              <p className="uppercase">on first order</p>
              <span className="capitalize font-thin text-lg">Call us now</span>
              <span className="font-bold">+2547220000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
