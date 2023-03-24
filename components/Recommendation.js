import React from "react";
import Image from "next/image";
import profileLogo from "../image/profileLogo.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import jsLogo from "../image/jsLogo.png";

const Recommendation = ({ author }) => {
  return (
    <div className="h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]">
      <div className="flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full">
        Get unlimited access
      </div>
      <div className="flex items-center gap-[.6rem] border px-[1rem] rounded-full">
        <BiSearchAlt />
        <input
          className="border-none outline-none bg-none w-full"
          placeholder="Search"
          type={"text"}
        />
      </div>
      <div className="my-[2rem]">
        {/* Author container */}
        <div className="h-[5rem] w-[5rem] rounded-full overflow-hidden">
          {/* Author profile container */}
          <Image src={profileLogo} alt="#" width={100} height={100} />
        </div>
        <div className="mb-[.2rem] mt-[1rem]">Vedant Patil</div>
        <div className="text-[#787878] text-[.8rem]">1M Followers</div>
        <div className="flex gap-[.6rem] my-[1rem]">
          <button className="bg-green-700 text-white rounded-full px-[.6rem] py-[.4rem] text-sm">
            Follow
          </button>
          <button className="bg-green-700 text-white rounded-full px-[.6rem] py-[.4rem] text-sm">
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className="">
        {/* Rcommandation container */}
        <div>More from medium</div>
        <div className="">
          <div className="flex items-center justify-between cursor-pointer my-[1rem]">
            <div className="flex-4">
              <div className="flex items-center gap-[.6rem]">
                <div className="rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]">
                  <Image src={profileLogo} height={100} width={100} />
                </div>
                <div className="text-sm">Patil Vedant</div>
              </div>
              <div className="font-bold">
                The ultimate javascript course for biginners by clever
                programmers
              </div>
            </div>
            <Image
              className="object-cover"
              src={jsLogo}
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
