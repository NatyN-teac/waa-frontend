import axios from "axios";
import React, { useRef, useState } from "react";

const AddPost = ({ onSuccessRefresh }) => {
  const url = "http://localhost:8080/v1/api/posts";

  const titleRef = useRef("");
  const authorRef = useRef("");
  const contentRef = useRef("");
  const handleAddPost = async () => {
    //handle post post
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const content = content.current.value;
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
        titleRef.current.value = "";
        authorRef.current.value = "";
        contentRef.current.value = "";
      }
    }

    onSuccessRefresh(true);
    // console.log(title, author, content);
  };

  return (
    <div className="main-post">
      <form onSubmit={handleAddPost}>
        <h2>Add Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Enter post title"
          ref={titleRef}
          // onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter post Author"
          ref={authorRef}
          // onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="text"
          name="content"
          placeholder="Enter post content"
          ref={contentRef}
          // onChange={(event) => setContent(event.target.value)}
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
           type="submit"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
