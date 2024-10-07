import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Blog() {
  return (
    <div className="bg-[#f6f0ea]">
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <div className="flex items-center justify-center space-x-3">
          <h1 className="uppercase text-md font-bold text-[#095749]">
            latest news
          </h1>
        </div>
        <h1 className="font-bold capitalize text-6xl text-[#095749]">
          Our Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div className="flex flex-row gap-8">
          <div className="relative">
            <div className="bg-[#095749] rounded-b-full w-16 h-24">
              <p className="absolute font-bold top-[4%] left-4 text-white flex flex-col items-center hover:text-black">
                17
                <span className="uppercase font-thin hover:text-white">
                  oct
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-4">
            {/* <div className="border-l-0"></div> */}
            <h6 className="uppercase font-thin text-sm text-[#095749] hover:text-[#333]">
              off topic uncategorized <span>. by admin</span>
            </h6>
            <h1 className="text-3xl text-[#095749] font-bold hover:text-[#333]">
              Culinary creativity: Signature Dishes for your event menu
            </h1>
            <p className="tracking-wider font-thin">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              odit temporibus illum voluptate dolore eos voluptates similique
              quasi placeat? Quibusdam quaerat omnis corrupti illum animi,
              laboriosam suscipit incidunt voluptate dolores.
            </p>
            <button className="flex items-center gap-2 font-thin uppercase text-sm hover:text-[#095749]">
              read more <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="relative">
            <div className="bg-[#095749] rounded-b-full w-16 h-24">
              <p className="absolute font-bold top-[4%] left-4 text-white flex flex-col items-center hover:text-black">
                18
                <span className="uppercase font-thin hover:text-white">
                  oct
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-4">
            {/* <div className="border-l-0"></div> */}
            <h6 className="uppercase font-thin text-sm text-[#095749]">
              off topic <span>uncategorized</span> <span>. by admin</span>
            </h6>
            <h1 className="text-3xl text-[#095749] font-bold">
              Event planning pitfalls to avoid: Lessons from
            </h1>
            <p className="tracking-wider font-thin">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              odit temporibus illum voluptate dolore eos voluptates similique
              quasi placeat? Quibusdam quaerat omnis corrupti illum animi,
              laboriosam suscipit incidunt voluptate dolores.
            </p>
            <button className="flex items-center gap-2 font-thin uppercase text-sm">
              read more <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="relative">
            <div className="bg-[#095749] rounded-b-full w-16 h-24">
              <p className="absolute font-bold top-[4%] left-4 text-white flex flex-col items-center hover:text-black">
                19
                <span className="uppercase font-thin hover:text-white">
                  oct
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            {/* <div className="border-l-0"></div> */}
            <h6 className="uppercase font-thin text-sm text-[#095749]">
              off topic uncategorized <span>. by admin</span>
            </h6>
            <h1 className="text-3xl text-[#095749] font-bold">
              Culinary creativity: Signature Dishes for your event menu
            </h1>
            <p className="tracking-wider font-thin">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              odit temporibus illum voluptate dolore eos voluptates similique
              quasi placeat? Quibusdam quaerat omnis corrupti illum animi,
              laboriosam suscipit incidunt voluptate dolores.
            </p>
            <button className="flex items-center gap-2 font-thin uppercase text-sm">
              read more <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
