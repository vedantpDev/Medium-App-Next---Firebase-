import React from "react";
import ReadersNav from "@/components/ReadersNav";
import Recommandation from "../../components/Recommendation";
import ArticleMain from "@/components/ArticleMain";

const Post = () => {
  return (
    <div className="flex">
      <ReadersNav />
      <ArticleMain />
      <Recommandation />
    </div>
  );
};

export default Post;
