import axios from "axios";
import React, { useState } from "react";

const AddPost = ({ onSuccessRefresh }) => {
  const url = "http://localhost:8080/v1/api/posts";
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const handleAddPost = async () => {
    //handle post post
    //add comment component
    if (title && author && content) {
      const requestObj = {
        user_id: 14,
        title: title,
        author: author,
        content: content,
      };
      const response = await axios.post(url, requestObj);
      console.log(response.status);
      if (response.status === 201) {
        setTitle(" ");
        setContent(" ");
        setAuthor(" ");
      }
    }
   
    onSuccessRefresh(true);
    // console.log(title, author, content);
  };

  return (
    <div className="main-post">
      <h2>Add Post</h2>
      <input
        type="text"
        name="title"
        placeholder="Enter post title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="Enter post Author"
        onChange={(event) => setAuthor(event.target.value)}
      />
      <input
        type="text"
        name="content"
        placeholder="Enter post content"
        onChange={(event) => setContent(event.target.value)}
      />

      <button
        style={{
          color: "white",
          backgroundColor: "orange",
          outline: "none",
          border: "none",
          borderRadius: "5px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "10px",
        }}
        onClick={handleAddPost}
      >
        Save Post
      </button>
    </div>
  );
};

export default AddPost;
