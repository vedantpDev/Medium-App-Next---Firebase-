import React from "react";
import Image from "next/image";
import bannerImg from "../image/banner.png";

const Banner = () => {
  return (
    <div className="flex gap-10 p-5 bg-[#fcc017] item-center justify-evenly border-y border-black">
      <div className="space-y-5">
        <div className="max-w-xl text-[6rem] ">Stay Curious</div>
        <h3 className="text-2xl">
          Discover Stories, thinking, and expertise from writters on any topic.
        </h3>
        <button className="bg-black text-white py-2 px-4 rounded-full">
          Start Reading
        </button>
      </div>
      <div>
        <Image alt="#" className="" src={bannerImg} height={400} width={500} />
      </div>
    </div>
  );
};

export default Banner;
