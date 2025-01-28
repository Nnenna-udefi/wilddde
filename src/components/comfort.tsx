import React from "react";
import toil from "@/images/toiletImg.jpg";
import Uparrow from "@/images/arrow.jpg";
import laundry from "@/images/laundryImg.jpg";
import Image from "next/image";

export const Comfort = () => {
  return (
    <div className="bg-[#c4673b] pb-32">
      <div className="m px-12 md:px-36 ">
        <div className="md:w-[90%] w-full">
          <h2 className="italic text-2xl">Explore Wilde</h2>
          <h1 className="text-6xl md:text-7xl ">
            Apartment freedom, hotel comforts
          </h1>
        </div>
        <p className="md:text-xl my-2 text-lg ">
          All the comforts of home but with fresher sheets.{" "}
        </p>
      </div>
      <div className="grid px-10 py-10 gap-6 md:grid-cols-5 grid-cols-2">
        <div className="h-[200px] md:h-[300px] flex flex-col justify-between">
          <Image
            src={toil}
            alt="toiletries image"
            width={500}
            height={500}
            className="w-36 md:w-full"
          />
          <p className="italic text-2xl">Premium toiletries</p>
        </div>
        <div className="h-[200px] md:[250px] flex flex-col justify-between">
          <p className="italic text-2xl">Flexible Booking</p>
          <hr className="border-2 border-black mt-10" />
        </div>
        <div className="h-[200px] md:[250px] flex flex-col justify-between">
          <p className="italic text-2xl">Fitness Room</p>
          <hr className="border-2 border-black mt-10" />
        </div>
        <div className="h-[200px] md:h-[300px] flex flex-col justify-between">
          <Image
            src={laundry}
            alt="toiletries image"
            width={500}
            height={500}
            className="w-36 md:w-full"
          />
          <p className="italic text-2xl">Laundry room</p>
        </div>
        <div className="h-[200px] md:[250px] flex flex-col justify-between">
          <p className="italic text-2xl">Breakfast & bar</p>
          <hr className="border-2 border-black mt-10" />
        </div>
        <div className="h-[200px] pt-40">
          <hr className="border-2 border-black mt-10" />
        </div>
        <div className="h-[200px] md:h-[300px] flex flex-col justify-between">
          <Image
            src={Uparrow}
            alt="toiletries image"
            width={500}
            height={500}
            className="w-36 md:w-full"
          />
        </div>
        <div className="h-[200px] md:[250px] flex flex-col justify-between">
          <p className="italic text-2xl">Free highspeed wi-fi</p>
          <hr className="border-2 border-black mt-10" />
        </div>
        <div className="h-[200px]  pt-40">
          <hr className="border-2 border-black mt-10" />
        </div>
        <div className="h-[200px] md:[250px] flex flex-col justify-between">
          <p className="italic text-2xl">Nepresso Machine</p>
          <hr className="border-2 border-black mt-10" />
        </div>
      </div>

      <div className="flex justify-center items-center  px-12">
        <button className="bg-black w-full md:w-[50%] text-md text-white rounded-md py-4 px-10 uppercase">
          What is an Aparthotel?
        </button>
      </div>
    </div>
  );
};
