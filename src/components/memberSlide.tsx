"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { MemberSlideShow } from "./utils/constant";

export const MemberSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 3;

  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-darkerBrown md:py-36 py-20">
      <div className="lg:w-[50%] w-full px-12 md:px-36 ">
        <div>
          <h2 className="italic text-2xl">Become a member</h2>
          <h1 className="text-6xl md:text-[65px] my-2 ">Join the Wilde-Side</h1>
        </div>
      </div>

      <div className="my-10">
        <div className="flex justify-between items-center px-12 md:px-36">
          <h3 className="text-2xl">
            {" "}
            We reserve the best rates for our friends, naturally
          </h3>

          <div className="md:flex hidden gap-6">
            <CircleChevronLeft
              size={50}
              onClick={() => handleNavigation(currentIndex - 1)}
              className="hover:fill-[#dfd5c4] focus:fill-[#dfd5c4]"
            />
            <CircleChevronRight
              size={50}
              onClick={() => handleNavigation(currentIndex + 1)}
              className="hover:fill-[#dfd5c4] focus:fill-[#dfd5c4]"
            />
          </div>
        </div>

        {/* Slide Container */}
        <div className="relative overflow-hidden  my-10 w-full px-20 md:px-36">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleSlides)
              }%)`,
              width: `${(MemberSlideShow.length / visibleSlides) * 100}%`,
            }}
          >
            {MemberSlideShow.map((slide) => (
              <div
                key={slide.caption}
                className="flex-shrink-0 w-full  lg:w-[20%] px-4"
              >
                <p className="text-xl italic my-3">{slide.caption}</p>
                <p className="text-3xl md:text-5xl text-center my-3">
                  {slide.text}
                </p>
                <div className="border-r border-borderBrown overflow-hidden">
                  <Image
                    src={slide.url}
                    width={500}
                    height={500}
                    alt={slide.caption}
                    className="w-full md:h-[300px] h-[250px] hover:opacity-70 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xl my-3 text-center">{slide.terms}</p>
                  <button className="text-md md:text-xl border rounded-full italic py-1 px-4 my-2 text-black border-black hover:text-white hover:bg-black">
                    {slide.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          {Array.from({
            length: MemberSlideShow.length - visibleSlides + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex
                  ? "bg-black"
                  : "bg-gray-800 hover:bg-gray-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
