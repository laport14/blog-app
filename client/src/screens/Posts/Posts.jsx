import React, { useState, useEffect } from "react";
import "./Posts.css";

import Post from "../../components/Post/Post";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";

const Posts = (props) => {
  const [queriedPosts, setQueriedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);

  const postsJSX = queriedPosts.map((post, index) => (
    <Post
      _id={post._id}
      title={post.title}
      imgURL={post.imgURL}
      content={post.content}
      author={post.author}
      key={index}
    />
  ));

  return (
    <Layout>
      <div className="posts">{postsJSX}</div>
    </Layout>
  );
};

export default Posts;
