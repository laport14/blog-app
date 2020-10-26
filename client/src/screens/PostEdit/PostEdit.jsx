import React, { useState, useEffect } from 'react';
import './PostEdit.css';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getPost, updatePost } from '../../services/products'

const PostEdit(props) {
  const [product, setProdcut] = useState({
    name: '',
    description: '',
  })
  return (
    <div>
      
    </div>
  );
}

export default PostEdit;