import React from "react";

import { useContext, useEffect, useState } from "react";
import { CurrentContext } from "../globalContext";

const Post = ({ id, title, author, handleSelect }) => {
  const { currentPost, setCurrentPost } = useContext(CurrentContext);
  return (
    <div className="single-post" onClick={() => setCurrentPost(id)}>
      <h3>{id}</h3>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Post;
