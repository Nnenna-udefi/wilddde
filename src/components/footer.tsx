import React from "react";
import { CustomButton } from "../ui/customButton";
import { ChevronDown, Copyright, Facebook, Instagram } from "lucide-react";
import { Amex, MasterCard, TikTok, Visa, XTwiter } from "../ui/icons";

export const Footer = () => {
  return (
    <div className="bg-tealGreen font-fontMedian text-[#ded5b8]  py-20">
      <div className="lg:flex block justify-between md:px-12 px-8">
        <div className="w-full md:w-[15%]">
          <h4 className="italic text-2xl mb-4">Service</h4>
          <ul className="text-xl md:text-2xl flex flex-col gap-4">
            <li className="hover:underline cursor-pointer">January Sale</li>
            <li className="hover:underline cursor-pointer">Contact us</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">
              Dog Friendly Stays
            </li>
          </ul>
        </div>
        <div className="md:my-0 my-6 w-full md:w-[15%]">
          <h4 className="italic text-2xl mb-4">Our Company</h4>
          <ul className="text-xl md:text-2xl flex flex-col gap-4">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Sustainability</li>
            <li className="hover:underline cursor-pointer">Press & Media</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">
              Board of Directors
            </li>
            <li className="hover:underline cursor-pointer">Development</li>
          </ul>
        </div>
        <div className="md:my-0 my-6 w-full md:w-[15%]">
          <h4 className="italic text-2xl mb-4">Partner Service</h4>
          <ul className="text-xl md:text-2xl flex flex-col gap-4">
            <li className="hover:underline cursor-pointer">Car hire</li>
            <li className="hover:underline cursor-pointer">Airport transfer</li>
            <li className="hover:underline cursor-pointer">
              Events & Activities
            </li>
            <li className="hover:underline cursor-pointer">
              Upgrade Your Stay
            </li>
          </ul>
        </div>
        <div className="md:my-0 mt-12">
          <h4 className="italic text-2xl mb-4">Newsletter</h4>
          <div className="block md:flex justify-between border-b py-2 text-2xl">
            <input
              type="text"
              placeholder="Email address"
              className="placeholder:text-lightTeal border-none bg-transparent"
            />
            <CustomButton
              text="Sign Up"
              className="bg-[#e8e0d5] md:mt-0 mt-6 text-[16px] text-tealGreen"
            />
          </div>
          <p className="md:text-xl text-lg my-2">
            Sign up for special offers and lashings of wanderlust
          </p>
          <div className="flex gap-8 mt-6 items-center">
            <Instagram size={30} />
            <Facebook className="fill-darkerBrown text-transparent" size={30} />
            <XTwiter />
            <TikTok />
          </div>
        </div>
      </div>

      <div className="py-10 lg:flex block items-center md:px-12 px-8">
        <div className="md:flex block gap-5 md:gap-10 lg:w-[50%] w-full ">
          <div className="">
            <p className="text-xl italic">Languages</p>
            <button className="rounded-full hover:bg-lightTeal items-center my-6 gap-20 text-lg border flex justify-between px-4 py-2 border-lightTeal">
              <span>English</span>
              <ChevronDown size={20} />
            </button>
          </div>

          <div className="">
            <p className="text-xl italic">Currency</p>
            <button className="rounded-full hover:bg-lightTeal items-center my-6 gap-20 text-lg border flex justify-between px-4 py-2 border-lightTeal">
              <span>USD ($)</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
        <hr className="border md:hidden block px-0 mb-10 border-lightTeal w-full my-4" />

        <p className="text-xl italic">
          Part of the{" "}
          <span className="border-b border-[#ded5b8]">StayCity Group</span>
        </p>
      </div>

      <hr className="border border-lightTeal w-full my-4" />

      <div className="md:flex block gap-16 my-10 items-center md:px-12 px-8">
        <div className="flex gap-4">
          <div className="border border-lightTeal rounded-md p-2">
            <Visa />
          </div>
          <div className="border border-lightTeal rounded-md p-2">
            <MasterCard />
          </div>
          <div className="border border-lightTeal rounded-md p-2">
            <Amex />
          </div>
        </div>

        <div className="flex md:mt-0 mt-4 lg:flex-row flex-col items-center md:gap-10 gap-2 text-base md:text-lg">
          <p className="underline">Privacy</p>
          <p className="underline">Terms & Conditions</p>
          <div className="flex gap-1 mt-4 items-center">
            <Copyright size={15} />
            <p>2025, StayCity Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};
