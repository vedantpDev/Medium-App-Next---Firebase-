import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import profileLogo from "../image/profileLogo.png";

const ReadersNav = () => {
  return (
    <div className="w-[10rem] h-screen flex flex-col justify-between items-center p-[1rem]">
      <Link href={"/"}>
        <div className="cursor-pointer">
          {/* Logo Container */}
          <Image src={logo} height={200} width={200} />
        </div>
      </Link>
      <div>
        <div className="flex flex-col gap-5 justify-center items-center text-4xl text-[#787878]">
          {/* Icon container */}
          <BiBookmarks />
          <BsPencilSquare />
          <FiBell />
          <RiArticleLine />
          <HiOutlineHome />
        </div>
      </div>
      <div className="rounded-full overflow-hidden place-items-center">
        {/* Profile Image conatiner */}
        <Image
          className="object-cover"
          src={profileLogo}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default ReadersNav;
