import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
import axios from "axios";
import AddPost from "../components/AddPost";

const Dashboard = () => {
  const url = "http://localhost:8080/v1/api/posts";

  const [postTitle, setPostTitle] = useState("");
  const [postData, setPostData] = useState([]);
  const [currentPost, setCurrentPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [flat, setFlat] = useState(false);

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
  const handleDelete = async (id) => {
    await deletePost(id);
  };
  const fetchPostData = async () => {
    try {
      let postData = await axios.get(url);
      let data = postData.data;
      setPostData(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };
  const deletePost = async (id) => {
    const deletePost = await axios.delete(`${url}/${id}`);
    if (deletePost.status === 200) {
      setCurrentPost(undefined);
      setFlat(true);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, [flat]);

  if (isLoading) {
    return (
      <main className={{ display: "flex" }}>
        <p className={{ textAlignment: "center" }}>Loading...</p>
      </main>
    );
  }
  return (
    <main>
      <AddPost onSuccessRefresh={setFlat} />
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
