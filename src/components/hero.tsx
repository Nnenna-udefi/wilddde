import React from "react";
import { Menu } from "lucide-react";
import { CustomButton } from "./ui/customButton";
import { checkInNav } from "./utils/constant";

export const HeroSection = () => {
  return (
    <div className="relative px-12 md:bg-bgHero2 bg-bgHero1 md:rounded-xl rounded-none overflow-hidden bg-cover  md:bg-[length:50%_100%] md:bg-right  bg-no-repeat  py-6 font-fontMedian">
      {/* Overlay */}
      {/* <div className="absolute  inset-0 bg-black opacity-10"></div> */}

      <div className=" items-center flex border-b text-md border-borderBrown pb-3 md:text-lg justify-between">
        <div>
          <p className="text-lg text-black">
            <span className="border rounded-full border-black p-2">Wilde</span>{" "}
            Aparthotels
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CustomButton
            className="bg-white text-black border-black border"
            text={"Login"}
          />
          <Menu className="text-white md:text-black" />
        </div>
      </div>

      {/* <div className="mt-32"> */}

      <div className="mt-14">
        <h1 className="font-median mb-14 md:text-black text-white text-[60px] lg:text-[100px] tracking-tight md:w-[50%]  w-full ">
          Life begins in{" "}
          <span className="border-b-2 border-white md:border-black">
            London{" "}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1213 73"
              fill="#000"
            >
              <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
            </svg> */}
          </span>
        </h1>

        <div className="md:hidden mt-52 flex justify-center items-center">
          <div className="flex bg-[#f3ece2]  items-center rounded-md py-2 px-4 justify-between w-[90%]">
            <div>
              <p className="text-black text-lg font-serif">Start Your Search</p>
              <h2 className=" text-blackBrown">
                Add dates, guests, apartments
              </h2>
            </div>

            <div>
              <CustomButton className="bg-black text-white" text={"Search"} />
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className=" flex w-[80%] ">
            {checkInNav.map((check) => (
              <div
                key={check.heading}
                className="px-4 py-2 border-r border-[#bdb5a8] bg-[#f3ece2] hover:bg-[#ded5c4] focus:bg-[#ded5c4] w-full"
              >
                <h2 className="uppercase text-sm text-blackBrown">
                  {check.heading}
                </h2>
                <p className="text-black text-[16px] font-serif">
                  {check.text}
                </p>
              </div>
            ))}

            <div className="bg-black flex justify-center items-center text-white p-2 w-full">
              <p className="uppercase text-lg">Search</p>
            </div>
          </div>
        </div>

        <div className=" md:w-[40%] hidden md:block mt-32 border-b border-borderBrown"></div>
      </div>
    </div>
  );
};
