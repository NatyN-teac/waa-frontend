import React from "react";
import Post from "./Post";

const Posts = ({ posts,handleSelect }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            handleSelect={handleSelect}
          />
        );
      })}
    </div>
  );
};

export default Posts;
