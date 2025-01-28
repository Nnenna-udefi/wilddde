import React from "react";
import { CustomButton } from "./ui/customButton";
import { ChevronDown, MapPin, X } from "lucide-react";

interface SideNavProps {
  closeNav: () => void;
}

export const SideNav = ({ closeNav }: SideNavProps) => {
  return (
    <div className="fixed top-0 right-0 h-screen bg-[#ebe0ce] z-50 w-full md:w-[70%] overflow-y-auto">
      <div className=" px-10 pb-10 bg-[#ebe0ce]">
        <div className=" items-center flex border-b text-md border-borderBrown  md:text-lg justify-between">
          <div className="flex gap-6">
            <button className="rounded-full hover:bg-black hover:text-lightBrown items-center my-6 gap-6 text-base border flex justify-between px-4 py-2 border-black">
              <span>USD ($)</span>
              <ChevronDown size={20} />
            </button>
            <button className="rounded-full hover:bg-black hover:text-lightBrown items-center my-6 gap-6 text-base border flex justify-between px-4 py-2 border-black">
              <span>English</span>
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <CustomButton
              className="text-[#f3ece2] hidden md:block bg-black border"
              text={"Log in"}
            />
            <X className="text-black cursor-pointer" onClick={closeNav} />
          </div>
        </div>

        <div className="md:flex my-10 block justify-between">
          <div className="md:border-r border-none border-borderBrown">
            <h4 className="italic text-xl mb-4">Wilde Destinations</h4>
            <div className="text-3xl  md:text-5xl flex flex-col gap-4">
              <div className="flex items-center gap-3 hover:text-tealGreen">
                <MapPin />
                <p>Berlin</p>
              </div>
              <div className="flex items-center  gap-3 hover:text-tealGreen">
                <MapPin />
                <p>Edinburgh</p>
              </div>
              <div className="flex items-center  gap-3 hover:text-tealGreen">
                <MapPin />
                <p>London</p>
              </div>
              <div className="flex items-center  gap-3 hover:text-tealGreen">
                <MapPin />
                <p>Manchester</p>
              </div>
            </div>

            <p className="italic text-2xl mt-6 my-2">
              Can&apos;t find your location?
            </p>
            <p className="text-base md:text-xl w-full md:w-[70%]">
              Explore the locations of our sister brand, Staycity Aparthotels.{" "}
              <span className="underline">Staycity</span>
            </p>
          </div>

          <div className="md:w-1/2 md:border-none border-t border-borderBrown pt-4 md:pt-0 mt-6 md:mt-0 md:pl-8 w-full pl-0">
            <div className="flex md:flex-col flex-col-reverse ">
              <div className="text-[22px] flex flex-col gap-3 border-b border-borderBrown py-6">
                <p className="hover:text-tealGreen">Manage my booking</p>
                <p className="hover:text-tealGreen">Online Check-In</p>
              </div>
              <div className="text-[22px] flex flex-col gap-3 border-b border-borderBrown py-6">
                <p className="italic">About Wilde Aparthotels</p>
                <p className="hover:text-tealGreen">Contact Us</p>
                <p className="hover:text-tealGreen">Careers</p>
                <p className="hover:text-tealGreen">Terms & Conditions</p>
              </div>
            </div>

            <div className="text-xl flex flex-col gap-3 border-b underline py-6">
              <p className="hover:text-tealGreen">FAQ</p>
              <p className="hover:text-tealGreen">Blog</p>
              <p className="hover:text-tealGreen">Sign up and save</p>
            </div>
          </div>
        </div>

        <CustomButton
          className="rounded-md w-full md:hidden block uppercase py-2 text-base text-black border-black border"
          text={"Log in"}
        />
      </div>
    </div>
  );
};
