import React from "react";

import { X } from "lucide-react";
// import { CustomButton } from "./ui/customButton";
import Image from "next/image";

export const Nav = () => {
  return (
    <div className="">
      <div className="px-12 py-4 bg-[#f3ece2]">
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
          <X />
        </div>
      </div>
      {/* <div className="px-12 bg-[#ebe0ce] py-6 items-center flex justify-between">
        <div>
          <p>Wilde Apartments</p>
        </div>
        <div className="flex gap-3 items-center">
          <CustomButton className="bg-black text-white" text={"Login"} />
          <Menu className="text-black" />
        </div>
      </div> */}
    </div>
  );
};
