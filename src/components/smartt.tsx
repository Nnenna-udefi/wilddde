import React from "react";
import smartImg from "@/images/nextimg.jpg";

import Image from "next/image";

export const SmartSection = () => {
  return (
    <div className="bg-darkerBrown md:py-36 py-20">
      <div className="lg:flex  block gap-10 justify-between">
        <div className="px-12 md:pl-36 md:w-[60%] w-full">
          <div>
            <h2 className="italic text-2xl">Stay Smarter</h2>
            <h1 className="text-6xl md:text-[90px]">
              A smart and simple{" "}
              <span className="border-b-2 border-black mt-1">formula</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <p className="md:text-2xl text-lg  my-6  w-full">
              Get to know our sister brand{" "}
            </p>
            <div className="my-4">
              <button className="bg-tealGreen w-full text-md text-[#e3e6cb] md:w-[60%] rounded-md py-4 px-10 uppercase">
                Visit stayCity.com
              </button>
            </div>
          </div>
        </div>

        <div className="mr-36 lg:block hidden w-[500px]">
          <Image
            src={smartImg}
            alt="smart image"
            className="rounded-md hidden  md:block h-[700px] object-cover"
            width={400}
            height={700}
          />
        </div>

        <div className="my-6 lg:hidden block">
          <Image
            src={smartImg}
            alt="smart image"
            className="w-full  h-[700px] object-cover"
            width={400}
            height={700}
          />
        </div>

        <div className="md:hidden block px-12 md:px-36">
          <p className="md:text-2xl text-xl  my-6  w-full">
            Get to know our sister brand{" "}
          </p>
          <div className="my-4">
            <button className="bg-tealGreen w-full text-md text-[#e3e6cb] md:w-[60%] rounded-md py-4 px-10 uppercase">
              Visit stayCity.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
