import React from "react";
import ReadersNav from "@/components/ReadersNav";
import Recommandation from "../../components/Recommendation";

const Post = () => {
  return (
    <div className="flex">
      <ReadersNav />
      <div>Main Content</div>
      <Recommandation />
    </div>
  );
};

export default Post;
