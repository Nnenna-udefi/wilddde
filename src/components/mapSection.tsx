"use client";
import { useState } from "react";
import Image from "next/image";
import Uparrow from "@/images/arrow.jpg";
import leftUpArrow from "@/images/arrowLeftUp.png";
import leftDownArrow from "@/images/arrowLeftDown.png";
import rightUpArrow from "@/images/arrowRightDown.png";

export const MapSection = () => {
  const [showMap, setShowMap] = useState(false);

  const handleClick = () => {
    setShowMap(true);
  };

  return (
    <div>
      {!showMap ? (
        <div
          className="bg-[#c4683cb3] hover:bg-gray-200 cursor-pointer py-20 relative group"
          onClick={handleClick}
        >
          {/* Hover Background */}
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

          <div className="flex justify-center items-center flex-col relative z-10">
            <div className="flex gap-48 my-4">
              <Image
                src={leftUpArrow}
                width={100}
                height={100}
                alt="map-arrow"
              />
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
      ) : (
        <div className="h-[500px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509735!2d144.96315791531665!3d-37.81410797975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776975d21b0e0!2sFederation+Square!5e0!3m2!1sen!2sau!4v1615281435589!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      )}
    </div>
  );
};
