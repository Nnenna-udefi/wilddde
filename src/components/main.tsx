import { MapIcon } from "lucide-react";
import React from "react";
import { Hotels } from "./hotels";
import { ImageSlide } from "./imageSlide";
import { Comfort } from "./comfort";
import Uparrow from "@/images/arrow.jpg";
import leftUpArrow from "@/images/arrowLeftUp.png";
import leftDownArrow from "@/images/arrowLeftDown.png";
import rightUpArrow from "@/images/arrowRightDown.png";
import Image from "next/image";
import { MemberSlide } from "./memberSlide";
import { SmartSection } from "./smartt";
import { WonderfulSection } from "./wonderful";

export const MainSection = () => {
  return (
    <main className="  font-fontMedian my-8">
      <div className="block px-12 md:px-40 md:flex mb-4 justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl">4 Apartments in London</h2>
          <button className="hidden md:flex rounded-full border text-lg my-4 px-6 py-3  gap-2 border-borderBrown bg-none">
            <MapIcon className="border-r pr-2 fill-black border-borderBrown" />
            <span>Map</span>
          </button>
        </div>

        <div className="md:w-[50%] md:mt-0 mt-3 w-full">
          <p className="text-[20px] md:text-2xl">
            Why London? World-class art, ravishing food and pubs older than
            certain countries. Any more questions?
          </p>
        </div>

        <button className="md:hidden  rounded-full border text-lg my-4 py-2 px-4 flex gap-2 border-borderBrown bg-none">
          <MapIcon className="border-r pr-2 fill-black border-borderBrown" />
          <span>Map</span>
        </button>
      </div>

      <hr className="mt-10 px-12 md:px-40 border border-borderBrown w-full" />

      <Hotels />

      <div className="bg-[#c4683cb3] hover:bg-gray-200 cursor-pointer  py-20">
        <div className=" flex justify-center items-center flex-col">
          <div className="flex gap-48 my-4">
            <Image src={leftUpArrow} width={100} height={100} alt="map-arrow" />
            <Image src={Uparrow} width={100} height={100} alt="map-arrow" />
          </div>
          <p className="text-3xl md:text-4xl text-white">Click to Load Map</p>
          <div className="flex gap-48 my-4">
            <Image
              src={leftDownArrow}
              width={100}
              height={100}
              alt="map-arrow"
            />
            <Image
              src={rightUpArrow}
              width={100}
              height={100}
              alt="map-arrow"
            />
          </div>
        </div>
      </div>

      <ImageSlide />

      <Comfort />

      <MemberSlide />

      <SmartSection />

      <WonderfulSection />
    </main>
  );
};
