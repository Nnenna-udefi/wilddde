"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
// import { CustomButton } from "./ui/customButton";
import Image from "next/image";

export const TopBar = () => {
  const [showSale, setShowSale] = useState(true);

  const toggleSection = () => {
    setShowSale(false);
  };
  return (
    <div className="">
      {showSale && (
        <div className="px-8 md:px-12 py-4 text-black bg-[#f3ece2]">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Image
                src="https://eqtrneuscpwebsa.azureedge.net/media/f5ulrlwb/1plusvaluedplusmember-2.svg"
                alt="logo"
                height={54}
                width={72}
                loading="lazy"
              />
              <div className="md:text-lg text-sm md:flex block gap-2">
                <p className="italic ">20% off of January Sale!</p>
                <p className="underline">Book Now</p>
              </div>
            </div>
            <div className="hover:border hover:p-2 hover:rounded-full hover:border-gray-400 cursor-pointer">
              <X onClick={toggleSection} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
