import React from "react";
import { Menu } from "lucide-react";
import { CustomButton } from "./ui/customButton";
import { checkInNav } from "./utils/constant";

export const HeroSection = () => {
  return (
    <div className="relative px-4 md:px-12 md:bg-bgHero2 bg-bgHero1 md:rounded-xl rounded-none overflow-hidden bg-cover  md:bg-[length:50%_100%] md:bg-right  bg-no-repeat  py-6 font-fontMedian">
      {/* Overlay */}
      {/* <div className="absolute  inset-0 bg-black opacity-10"></div> */}

      <div className=" items-center flex border-b text-md border-borderBrown pb-3 md:text-lg justify-between">
        <div>
          <p className="text-lg  text-black">
            <span className="border rounded-full border-black p-2">Wilde</span>{" "}
            Aparthotels
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CustomButton
            className="bg-[#f3ece2] text-black border-black border"
            text={"Login"}
          />
          <Menu className="text-white md:text-black" />
        </div>
      </div>

      <div className="mt-14">
        <h1 className="font-median mb-14 md:text-black text-[#f3ece2] text-[60px] lg:text-[100px] tracking-tight md:w-[50%]  w-full ">
          Life begins in{" "}
          <span className="border-b-2 border-white md:border-black">
            London{" "}
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
