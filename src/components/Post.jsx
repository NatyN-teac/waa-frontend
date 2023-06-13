import React from "react";

const Post = ({id, title, author,handleSelect }) => {
  return (
    <div className="single-post" onClick={() => handleSelect(id)}>
        <h3>{id}</h3>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Post;
