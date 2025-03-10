import { MapIcon } from "lucide-react";
import React from "react";
import { Hotels } from "./hotels";
import { ImageSlide } from "./imageSlide";
import { ComfortSection } from "./comfort";
import { MemberSlide } from "./memberSlide";
import { SmartSection } from "./smartt";
import { WonderfulSection } from "./wonderful";
import { MapSection } from "./mapSection";

export const MainSection = () => {
  return (
    <main className="  font-fontMedian my-8">
      <div className="block px-8 md:px-36 md:flex mb-4 justify-between">
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

      <hr className="mt-10 px-8 md:px-36 border border-borderBrown w-full" />

      <Hotels />

      <MapSection />

      <ImageSlide />

      <ComfortSection />

      <MemberSlide />

      <SmartSection />

      <WonderfulSection />
    </main>
  );
};
