import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  console.log(posts);
  return (
    <main>
      {posts.map((item) => {
        return <Article key={item.id} {...item} />;
      })}
    </main>
  );
};

export default ArticleList;
