import React, {useState} from 'react';
import './PostCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom';
import { createPost } from '../../services/posts'


function PostCreate(props) {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    author: ''
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({created})
  }
  if (isCreated) {
    return <Redirect to={'/posts'} />
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    placeholder='Title'
                    value={post.title}
                    name='title'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    className="input-image"
                    placeholder='Image URL'
                    value={post.imgURL}
                    name='img'
                    required
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-description"
                    rows={10}
                    placeholder='Description'
                    value={post.content}
                    name='description'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-author"
                    placeholder='Author'
                    value={post.author}
                    name='author'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
    </Layout>
  );
}

export default PostCreate;