import { useState } from "react";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";

const Dashboard = () => {
  const data = [
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
  ];
  const [postTitle, setPostTitle] = useState("");
  const [postData, setPostData] = useState(data);
  const [currentPost, setCurrentPost] = useState();

  const handleTitleUpdate = (event) => {
    setPostTitle(event.target.value);
  };
  const handleUpdateBtn = () => {
    const updatedPosts = [...postData];
    const updatedPost = { ...updatedPosts[0], title: postTitle };
    updatedPosts[0] = updatedPost;
    setPostData(updatedPosts);
  };
  const handleSelect = (id) => {
    const selectedPost = postData.find((p) => p.id === id);
    setCurrentPost(selectedPost);
  };
  const handleEdit = (id) => {
    console.log("edit is clicked");
  };
  const handleDelete = (id) => {
    console.log("delete is clicked");
  };
  return (
    <main>
      <Posts posts={postData} handleSelect={handleSelect} />
      <div className="main">
        <input type="text" name="postTitle" onChange={handleTitleUpdate} />
        <button type="submit" className="btn" onClick={handleUpdateBtn}>
          Change Name
        </button>
      </div>

      {currentPost && (
        <div className="post-details">
          <PostDetails
            currentPost={currentPost}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </main>
  );
};

export default Dashboard;
