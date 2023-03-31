import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import authorImg from "../image/mediumLogo.png";
import { MediumContext } from "../context/mediumContext";
import { useContext } from "react";
import { async } from "@firebase/util";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const PostCard = ({ post }) => {
  const { posts, users } = useContext(MediumContext);

  // const [authorData, setAuthorData] = useState(null);
  // console.log(authorData);
  // useEffect(() => {
  //   const getAuthorData = async () => {
  //     posts.map(async (post) => {
  //       await setAuthorData(
  //         (await getDoc(doc(db, "users", post.data.author))).data()
  //       );
  //     });
  //   };
  //   getAuthorData();
  // }, []);

  return (
    <div className="w-[55%]">
      {posts.map((post) => {
        return (
          <Link href={`/post/${post?.id}`}>
            <div className="flex mt-5 max-w-[50rem] h-[10rem] items-center cursor-pointer">
              <div className="flex-[2.5] flex flex-col">
                <div className="flex gap-3">
                  <div className="grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]">
                    <Image src={authorImg} alt="#" width={100} height={100} />
                  </div>
                  <div className="font-bold">{users[0]?.data?.name || ""}</div>
                </div>
                <h1 className="text-2xl font-bold">{post.data.title}</h1>
                <div className="text-[#787878] text-xl">{post.data.brief}</div>
                <div className="flex items-center justify-between text-[#787878]">
                  <span className="my-2 text-[1rem]">
                    {new Date(post.data.postedOn).toLocaleString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                    {/* {post.data.postedOn} */}. {post.data.postLength} min
                    read
                    <span className="bg-[#f2f3f2] rounded-full p-2">
                      {post.data.category}
                    </span>
                  </span>
                  <FiBookmark className="cursor-pointer h-5 w-5" />
                </div>
              </div>
              <div className="">
                <Image
                  alt="#"
                  className=" rounded-lg"
                  height={200}
                  width={200}
                  src={post.data.bannerImage}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostCard;
