"use client";
import React, { useState } from "react";
import img2 from "@/images/image1.jpg";
import img3 from "@/images/img2.jpg";
import Image from "next/image";
import img1 from "@/images/video.jpg";

import {
  AirConditioner,
  Bar,
  Breakfast,
  Kitchen,
  Laundry,
  Restaurant,
} from "./ui/icons";
import { ImageIcon, Star, X } from "lucide-react";
import { apartment, pictureGallery } from "./utils/constant";

export const Hotels = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#f3ece2] lg:bg-[#ebe0ce] py-4">
      {apartment.map((apartHotels) => (
        <div key={apartHotels.name}>
          <div className="my-10 px-8 md:px-36 md:flex block justify-between">
            <h2 className="hover:text-tealGreen md:w-[70%] w-full text-2xl md:text-[40px]">
              {apartHotels.name}
            </h2>
            <div>
              <div className="flex gap-6">
                <div className="flex text-[22px] justify-center items-center gap-2">
                  <Star className=" fill-tealGreen " size={15} />

                  <div className="flex md:flex-col flex-row md:gap-0 gap-2">
                    <p className="text-center">{apartHotels.rating}</p>
                    <p>Excellent</p>
                  </div>
                </div>

                <p className="underline text-[22px]">{`(${apartHotels.review} Reviews)`}</p>
              </div>
            </div>
          </div>
          <div className="px-8 md:px-36 hidden md:grid gap-4 grid-cols-2 grid-rows-2 w-full h-[300px]">
            {/* Video spanning 2 rows */}
            <div className="row-span-2 h-full">
              <video
                controls
                className="w-full h-full rounded-s-lg object-cover"
                poster={img1.src}
              >
                <source
                  src="https://download-video-ak.vimeocdn.com/v3-1/playback/af3919ca-fb29-4ddf-8696-4f18e773fc2a/28db0ebb-a749346e?__token__=st=1737900554~exp=1737914954~acl=%2Fv3-1%2Fplayback%2Faf3919ca-fb29-4ddf-8696-4f18e773fc2a%2F28db0ebb-a749346e%2A~hmac=7428d87320963c6146fc4bddd6188a01ba9a194a336ca07cea0280ac71260396&r=dXMtd2VzdDE%3D"
                  type="video/mp4"
                />
                <Image
                  src={img1}
                  alt="Video fallback"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>

            {/* Image 1 */}
            <div className="row-span-1">
              <Image
                src={img2}
                alt="glide apartment"
                className="w-full h-full rounded-e-lg object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="row-span-1">
              <Image
                src={img3}
                alt="glide apartment"
                className="w-full h-full rounded-e-lg object-cover"
              />
            </div>
          </div>

          <div className="md:hidden block h-full">
            <video
              controls
              className="w-full h-full rounded-s-lg object-cover"
              poster={img1.src}
            >
              <source
                src="https://download-video-ak.vimeocdn.com/v3-1/playback/af3919ca-fb29-4ddf-8696-4f18e773fc2a/28db0ebb-a749346e?__token__=st=1737900554~exp=1737914954~acl=%2Fv3-1%2Fplayback%2Faf3919ca-fb29-4ddf-8696-4f18e773fc2a%2F28db0ebb-a749346e%2A~hmac=7428d87320963c6146fc4bddd6188a01ba9a194a336ca07cea0280ac71260396&r=dXMtd2VzdDE%3D"
                type="video/mp4"
              />
              <Image
                src={img1}
                alt="Video fallback"
                className="w-full h-full object-cover"
              />
            </video>
          </div>
          <div className="px-8 md:px-36 left-0">
            <button
              onClick={toggleModal}
              className="rounded-full right-0 border hover:bg-black hover:text-white md:right-0 text-lg my-4 py-2 px-4 flex gap-2 border-borderBrown bg-none"
            >
              <ImageIcon className="border-r pr-2 fill-black border-borderBrown" />
              <span>View all photos (62)</span>
            </button>
          </div>

          <div className="flex justify-between px-8 md:px-36 py-10">
            <ul className="text-xl list-none space-y-2">
              <li className="custom-list-item">{apartHotels.list1}</li>
              <li className="custom-list-item">{apartHotels.list2}</li>
              <li className="custom-list-item">{apartHotels.list3}</li>
            </ul>

            <div className="hidden md:block">
              <button className="bg-tealGreen w-full text-lg text-[#e3e6cb] rounded-sm py-4 px-10 uppercase">
                View Aparthotel
              </button>
            </div>
          </div>

          <div className="px-8 md:px-36">
            <h3 className="text-3xl italic">Amenities</h3>
            <div className="grid my-4 w-full text-lg  grid-cols-3 place-items-center md:grid-cols-6">
              <div className="my-4">
                <div className="w-10 md:w-20 pb-2">
                  <Breakfast />
                </div>
                <p>{apartHotels.amenities1}</p>
              </div>
              <div className="my-4">
                <div className="w-10 md:w-20 pb-2">
                  <Bar />
                </div>
                <p>{apartHotels.amenities2}</p>
              </div>
              <div className="my-4">
                <div className="w-10 md:w-20 pb-2">
                  <Kitchen />
                </div>
                <p>{apartHotels.amenities3}</p>
              </div>
              <div className="my-4">
                <div className="w-10 md:w-20 pb-2">
                  <AirConditioner />
                </div>
                <p>{apartHotels.amenities4}</p>
              </div>
              <div className="my-4">
                <div className="w-10 md:w-20 pb-2">
                  <Laundry />
                </div>
                <p>{apartHotels.amenities5}</p>
              </div>
              <div className="my-4">
                <div className="w-10 md:w-20 pb-2">
                  <Restaurant />
                </div>
                <p>{apartHotels.amenities6}</p>
              </div>
            </div>
          </div>

          <div className="md:hidden block w-full px-8">
            <button className="bg-tealGreen w-full text-lg text-[#e3e6cb] rounded-sm py-4 px-10 uppercase">
              View Aparthotel
            </button>
          </div>

          <div className="mt-10 my-20 px-8 md:px-36">
            <hr className="border border-borderBrown w-full" />
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-[#ebe0ce] w-full max-w-7xl p-10 md:p-20 h-full overflow-y-auto ">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 border rounded-full border-gray-400 hover:opacity-60 p-4 right-4 text-black "
            >
              <X size={24} />
            </button>

            {/* Gallery */}
            <div className="p-6 grid md:grid-cols-2 grid-cols-1  gap-4">
              {pictureGallery.map((picture) => (
                <div key={picture.id} className="w-full h-full">
                  <Image
                    src={picture.image}
                    alt={`Picture ${picture.id}`}
                    className="w-full h-full object-cover hover:opacity-80 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
