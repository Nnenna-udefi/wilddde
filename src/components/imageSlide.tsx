"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { ImageSlideShow } from "./utils/constant";

export const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 3;

  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#c4673b] py-20">
      <div className="lg:flex px-12 md:px-36 block gap-20 justify-between">
        <div className="lg:w-[30%] w-full">
          <h2 className="italic text-2xl">Explore London</h2>
          <h1 className="text-6xl md:text-[90px]">
            A poke around the big smoke
          </h1>
        </div>
        <p className="md:text-2xl text-lg md:mt-0 mt-6 lg:w-[60%] w-full">
          Oscar himself once quipped that London is &#34;entirely composed now
          of beautiful idiots and brilliant lunatics&#34;, and we couldn&#39;t
          agree more. Five minutes spent meandering down this great city&#39;s
          winding streets and you too will be sucked in by its maddening charm.
          A cacophony of fascinating personalities, places and public transport
          (truly, the Victoria line is a marvel) - if this is insanity, we
          welcome it with open arms.
        </p>
      </div>

      <div className="md:my-40 my-20">
        <div className="flex justify-between  px-12 md:px-36">
          <h3 className="text-[48px] md:text-[60px]">Our Favourites</h3>

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
        <div className="relative overflow-hidden  my-10 w-full px-12 md:px-36">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleSlides)
              }%)`,
              width: `${(ImageSlideShow.length / visibleSlides) * 100}%`,
            }}
          >
            {ImageSlideShow.map((slide) => (
              <div key={slide.caption} className="flex-shrink-0  w-[25%] px-4">
                <div className="rounded-md overflow-hidden">
                  <Image
                    src={slide.url}
                    width={500}
                    height={500}
                    alt={slide.caption}
                    className="w-full md:h-[500px] h-[350px] hover:opacity-70 object-cover"
                  />
                </div>
                <p className="text-2xl md:text-4xl my-3">{slide.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          {Array.from({
            length: ImageSlideShow.length - visibleSlides + 1,
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
