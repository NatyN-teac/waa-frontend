import React from "react";

const PostDetails = ({ currentPost, handleEdit, handleDelete }) => {
  const { id, title, author } = currentPost;
  return (
    <div className="details">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>This is content of the post....</p>
      <button
        type="submit"
        style={{ color: "white", backgroundColor: "orange" }}
        onClick={() => handleEdit(id)}
      >
        Edit
      </button>
      <button
        type="submit"
        style={{ color: "white", backgroundColor: "red" }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default PostDetails;
