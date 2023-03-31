import React, { useContext, useEffect, useState } from "react";
import ReadersNav from "@/components/ReadersNav";
import Recommandation from "../../components/Recommendation";
import ArticleMain from "@/components/ArticleMain";
import { MediumContext } from "@/context/mediumContext";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    if (posts.length == 0) {
      return;
    }
    setPost(posts.find((post) => post.id === router.query.slug));
    posts.map((data, i) => {
      if (data.userDocId === users[i].docId) {
        setAuthor(data);
      }
    });
  }, []);

  return (
    <div className="flex">
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommandation />
    </div>
  );
};

export default Post;
