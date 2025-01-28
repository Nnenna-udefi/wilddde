import React from "react";
import { AirConditioner, Bar, Kitchen, Restaurant } from "./ui/icons";

const wonArray = [
  {
    image: Bar,
    caption: "How Wonderful",
    text: "We delight our members with 10% off all stays",
  },
  {
    image: Kitchen,
    caption: "Forever flexible",
    text: "Enjoy flexible booking and free cancellation options",
  },
  {
    image: Restaurant,
    caption: "At your service",
    text: "Our reception team are on hand to make your wish a reality",
  },
  {
    image: AirConditioner,
    caption: "Stay Longer",
    text: "Relish 20% off stays over 7 nights",
  },
];

export const WonderfulSection = () => {
  return (
    <div className="bg-lightBrown px:12 md:px-20 py-20">
      <div className="grid place-items-center px-12 md:px-0 md:grid-cols-4 grid-cols-2 gap-20">
        {wonArray.map((array) => (
          <div
            key={array.caption}
            className="flex flex-col text-center justify-center items-center"
          >
            <div className="w-20">
              <array.image />
            </div>
            <p className="italic text-2xl">{array.caption}</p>
            <p className="text-lg my-2 text-center">{array.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
