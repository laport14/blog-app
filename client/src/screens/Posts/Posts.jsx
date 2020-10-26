import React, { useState, useEffect } from 'react';
import '.Posts.css'

import Product from '../../components/Product/Product'
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products'

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect()
}

function Posts(props) {
  return (
    <div>
      
    </div>
  );
}

export default Posts;