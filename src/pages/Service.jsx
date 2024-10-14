import React, { useState } from "react";
import { FaArrowRightLong, FaGreaterThan } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

function Service() {
  const { serviceType } = useParams();
  const [visibleItems, setVisibleItems] = useState({});

  const serviceDetails = {
    corporate: {
      title: "Corporate Events",
      description:
        "We provide full-service catering for corporate events, offering luxury appetizers, drinks, and more.",
      image:
        "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    weddings: {
      title: "Weddings",
      description:
        "Our wedding catering services will make your special day unforgettable, with a range of customizable options.",
      image:
        "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    social: {
      title: "Social Events",
      description:
        "For social gatherings, we offer catering that fits your event's theme, with a range of delicious options.",
      image:
        "https://images.pexels.com/photos/28892816/pexels-photo-28892816/free-photo-of-vibrant-community-gathering-in-kampala-uganda.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    parties: {
      title: "Parties",
      description:
        "Celebrate in style with our party catering services, providing everything you need for an unforgettable night.",
      image:
        "https://images.pexels.com/photos/587739/pexels-photo-587739.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  };

  const events = [
    {
      title: "Delivered",
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
  const event = serviceDetails[serviceType];

  const toggleItemVisibility = (index) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="bg-[#f6f0ea]">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/6691615/pexels-photo-6691615.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="service image"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 text-white py-4 flex flex-col justify-between">
          <h1 className="text-6xl font-bold text-center my-20">
            {event.title}
          </h1>
          <div className="flex items-center justify-center gap-2 uppercase text-xs">
            <Link to="" className="hover:text-[#095749] underline">
              Home
            </Link>
            <FaGreaterThan />
            <Link to="" className="hover:text-[#095749] underline">
              Services
            </Link>
            <FaGreaterThan />
            <span>{event.title}</span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        <div className="col-span-1 md:col-span-3 space-y-6">
          <h1 className="text-4xl md:text-5xl text-[#095749] font-bold">
            Catering Events of all sizes
          </h1>
          <p className="tracking-wider">{event.description}</p>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            officia dicta cumque. Provident, corrupti, sit quam voluptas cumque
            maxime optio quidem eveniet omnis, similique delectus debitis
            tenetur dolores sapiente molestiae.
          </p>
          <img
            src={event.image}
            alt={event.title}
            className="w-full rounded-2xl h-[400px] object-cover"
          />
          <h1 className="text-3xl font-semibold text-[#095749]">
            What we Offer
          </h1>
          <div className="space-y-8">
            {events.map((item, index) => (
              <div key={index} className="grid grid-cols-1 gap-5">
                <div className="flex items-center justify-between px-8 text-2xl">
                  <h1 className="text-[#095749] font-bold hover:text-[#333] border-t w-full hover:border-t-[#095749]">
                    {item.title}
                  </h1>
                  <button
                    onClick={() => {
                      toggleItemVisibility(index);
                    }}
                    className="w-8 h-8 text-[#095749] hover:text-[#333]"
                  >
                    {visibleItems[index] ? "-" : "+"}
                  </button>
                </div>
                {visibleItems[index] && (
                  <div className="flex gap-4 mt-4 px-4">
                    <img
                      src={item?.image}
                      alt="deliver_image"
                      className="w-48 h-48 object-cover rounded-2xl"
                    />
                    <div className="flex flex-col space-y-6 tracking-wider">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Itaque, dolores? Autem id nihil sint voluptatem
                        cumque iusto magni inventore. Eius atque, accusamus vel
                        nostrum sequi ea voluptatibus aliquid animi hic.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi, eius dolorem. Hic eveniet perspiciatis molestias.
                        Consequuntur recusandae suscipit accusantium quis,
                        labore, totam fugiat ipsam autem eum, officiis non
                        sapiente dignissimos?
                      </p>
                    </div>
                  </div>
                )}
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
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] cursor-pointer hover:text-white">
                <Link to={`/services/${event?.name}`}> Parties</Link>
              </p>
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] cursor-pointer hover:text-white">
                <Link to={`/services/${event.name}`}> Social Events</Link>
              </p>
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] cursor-pointer hover:text-white">
                <Link to={`/services/${event.name}`}>Weddings</Link>
              </p>
              <p className="bg-white px-4 py-3 rounded-3xl hover:bg-[#095749] cursor-pointer hover:text-white">
                <Link to={`/services/${event.name}`}>Corporate Events</Link>
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
