import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PostCard from "@/components/PostCard";
import { MediumContext } from "../context/mediumContext";
import { useContext } from "react";

export default function Home() {
  const { users } = useContext(MediumContext);
  console.log(users);
  return (
    <div className="mx-auto">
      <Header />
      <Banner />
      <div className="flex justify-center">
        <div className="max-w-7xl flex-1">
          <div className="flex flex-col gap-3 p-2 sm:grid-cols2 md:gap-6 md:p-6 lg:grid-cols-3">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
