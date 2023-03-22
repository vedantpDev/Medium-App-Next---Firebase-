import React from "react";
import Image from "next/image";
import { authorImg } from "@/image/banner";

const PostCard = () => {
  return (
    <div className="">
      <div className="">
        <Image src={authorImg} alt="#" width={100} height={100} />
      </div>
      <div className="">Patil Vedant</div>
    </div>
  );
};

export default PostCard;
