import React from "react";
import { FaGreaterThan, FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="bg-[#f6f0ea]">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/6691615/pexels-photo-6691615.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="service image"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 text-white py-4 flex flex-col justify-between">
          <h1 className="text-6xl font-bold text-center my-20">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 uppercase text-xs">
            <Link to="" className="hover:text-[#095749] underline">
              Home
            </Link>
            <FaGreaterThan />
            <Link to="" className="hover:text-[#095749] underline">
              Contact
            </Link>
            {/* <FaGreaterThan />
            <span>Weddings</span> */}
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-4">
          <div className="bg-gray-100 hover:bg-[#095749] hover:text-white  flex items-center gap-4 p-3 md:p-6">
            <MdOutlineEmail className="w-10 h-10 bg-white p-2 text-[#333] rounded-full" />
            <div className="text-2xl">
              <h1>Email Address</h1>
              <a href="mailto:"></a>
            </div>
          </div>
          <div className="bg-gray-100 hover:bg-[#095749] hover:text-white flex items-center gap-4 p-3 md:p-6">
            <FaPhone className="w-10 h-10 bg-white p-2  text-[#333] rounded-full" />
            <div className="text-2xl">
              <h1>Phone Number</h1>
              <a href="mailto:">+254 72200000</a>
            </div>
          </div>
          <div className="bg-gray-100 hover:bg-[#095749] hover:text-white flex items-center gap-4 p-3 md:p-6">
            <IoLocationOutline className="w-10 h-10 bg-white text-[#333] p-2 rounded-full" />
            <div className="text-2xl">
              <h1>Office Address</h1>
              <a href="mailto:"></a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.1037054704593!2d36.67670978273019!3d-1.1218084789161489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f266644b0fbc3%3A0x4400b5d614749d70!2sTigoni%20Bapist%20Church!5e0!3m2!1sen!2ske!4v1728571393221!5m2!1sen!2ske"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="space-y-8 p-10 md:p-20">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-[#095749] capitalize">
          Get In Touch
        </h1>
        <div className="bg-white p-10 md:p-20 rounded-tr-[120px] rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl flex flex-col items-center gap-4">
          <form className="w-full">
            <div className="space-y-3 md:space-y-6">
              <div className="space-y-3 md:space-y-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-3 bg-gray-100 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="w-full p-3  bg-gray-100 outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="w-full p-3  bg-gray-100 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="w-full p-3  bg-gray-100 outline-none"
                  />
                </div>
              </div>
              <textarea
                type=""
                placeholder="Enter Message"
                rows={10}
                columns={15}
                className="w-full p-3  bg-gray-100 outline-none"
              />
            </div>
          </form>
          <button
            type="button"
            className="bg-[#095749] p-3 hover:bg-[#ebc6a4] uppercase text-sm text-white hover:text-[#333]"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
