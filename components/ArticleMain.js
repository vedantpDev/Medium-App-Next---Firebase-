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

const ArticleMain = () => {
  return (
    <div className="flex items-center justify-center flex-[1] border-l border-r">
      <div className="h-screen w-full p-[2rem]">
        <div className="flex justify-between items-center mt-[2.2rem] mb-[2.2rem]">
          <div className="flex gap-[1rem]">
            <div className="h-[3rem] w-[3rem] grid center rounded-full overflow-hidden">
              <Image
                className="object-cover"
                src={monkeyPic}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div>Patil Vedant</div>
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
              src={bannerImg}
              className="h-[18rem] w-full"
              height={100}
              width={100}
            />
          </div>
          <h1 className="text-3xl">hjkegfda fajshdbadba dfajhb</h1>
          <h4 className="">
            <div>Patil Vedant, jun 15 2022 </div>
            <div className="text-[1.4rem] text-[#292929]">
              Brief : Productivity is the skill that can be learned
            </div>
          </h4>
          <div className="text-[1.4rem] text-[#292929]">
            FORWARD LEAN : POSITIVE ATTITUDE BACKWARD LEAN : NEGATIVE ATTITUDE
            ARMS FOLDED ACROSS THE CHEST : UNSYMPATHETIC ARMS HELD LOOSE : OPEN
            POSITIVE ATTITUDE UPRIGHT POSTURE : HIGH STATUS , I AM THE BOSS
            BOWING HEAD : LOWER STATUS SELF WRAPPING : WITHDRAWAL , SELF
            PROTECTION MODERATELY UPRIGHT : ENTHUSIASM , FRIENDLINESSJim Lovell
            (born March 25, 1928) is an American retired astronaut. The first
            person to fly four times in space, he commanded Apollo 13 (1970),
            which suffered a failure en route and looped around the Moon. Lovell
            also flew twice during Project Gemini, and flew with Frank Borman
            and William Anders on Apollo 8 (1968), the first crewed mission to
            orbit the Moon. Lovell was the first person to fly to the Moon
            twice, though due to the Apollo 13 abort, he never landed on it. A
            graduate of the Naval Academy class of 1952, Lovell became a test
            pilot, and missed selection by NASA as one of the Mercury Seven
            astronauts due to a temporarily high bilirubin count. He was
            accepted in September 1962 as a member of NASA's second group of
            astronauts, and is a recipient of the Congressional Space Medal of
            Honor and the Presidential Medal of Freedom. He co-authored the book
            Lost Moon, the basis for the film Apollo 13, in which he appeared in
            a cameo. (This article is part of a featured topic: NASA Astronaut
            Group 2.)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
