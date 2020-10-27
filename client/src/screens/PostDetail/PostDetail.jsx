import React, { useState, useEffect } from 'react'
import './PostDetail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getPost, deletePost } from '../../services/posts'
import { useParams, Link, Redirect } from 'react-router-dom'

const PostDetail = (props) => {
  
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Chill I'm Loading</h1>
  }
  if (isDeleted) {
    return <Redirect to={'/posts'} />
  }
  const handleDelete = async () => {
    await deletePost(post._id)
    setIsDeleted(!isDeleted)
  }

  return (
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={post.imgURL} alt={post.title} />
        <div className="detail">
          <div className="title">{post.title}</div>
          <div className="content">{post.content}</div>
          <div className="author">By: {post.author}</div>
          <div className="container">
            <Link className="edit-link" to={`/posts/${post._id}/edit`}><button className="edit-button">Edit</button></Link>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail