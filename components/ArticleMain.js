import Image from "next/image";
import React from "react";
import monkeyPic from "../image/monkey.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import bannerImg from "../image/banner.png";

const ArticleMain = ({ post, author }) => {
  return (
    <div className="flex items-center justify-center flex-[1] border-l border-r">
      <div className="h-screen w-full p-[2rem]">
        <div className="flex justify-between items-center mt-[2.2rem] mb-[2.2rem]">
          <div className="flex gap-[1rem]">
            <div className="h-[3rem] w-[3rem] grid center rounded-full overflow-hidden">
              <Image
                alt="#"
                className="object-cover"
                src={monkeyPic}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div>{author?.data?.author}</div>
              <div className="flex gap-[2.5rem] text-[#787878]">
                <span>
                  June 15 7 read{" "}
                  <span className="flex items-center gap-[.2rem] text-[#1A8917]">
                    <AiFillPlayCircle />
                    Listen
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] text-[#787878] cursor-pointer">
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className="w-[.5rem]" />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="h-[18rem] w-full grid center overflow-hidden mb-[2rem]">
            <Image
              alt="#"
              src={author?.data?.bannerImage}
              className="h-[18rem] w-full"
              height={100}
              width={100}
            />
          </div>
          <h1 className="text-3xl">{author?.data?.title}</h1>
          <h4 className="">
            <div>{author?.data?.author}, jun 15 2022 </div>
            <div className="text-[1.4rem] text-[#292929]">
              Brief : {author?.data?.brief}
            </div>
          </h4>
          <div className="text-[1.4rem] text-[#292929]">
            {author?.data?.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
