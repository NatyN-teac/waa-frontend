import React, { useEffect, useState } from "react";
import axios from "axios";

const PostDetails = ({ currentPost, handleEdit, handleDelete }) => {
  const { id, title, author } = currentPost;
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = `http://localhost:8080/v1/api/posts/${id}/post-detail`;

  const getPostDetail = async () => {
    console.log("url: ", url);
    var response = await axios.get(url);
    var data = response.data;
    setIsLoading(false);
    console.log("post detail", data);
    setContent(data.postDescription);
  };

  useEffect(() => {
    getPostDetail();
  }, [id]);
  return (
    <div className="details">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{isLoading ? "loading" : content}</p>
      <button
        type="submit"
        style={{
          color: "white",
          backgroundColor: "orange",
          outline: "none",
          border: "none",
          borderRadius: "5px",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "8px",
          paddingBottom: "8px",
          marginLeft: "10px",
        }}
        onClick={() => handleEdit(id)}
      >
        Edit
      </button>
      <button
        type="submit"
        style={{
          color: "white",
          backgroundColor: "red",
          outline: "none",
          border: "none",
          borderRadius: "5px",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "8px",
          paddingBottom: "8px",
          marginLeft: "10px",
        }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default PostDetails;
