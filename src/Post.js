import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  return (
    <article className="post">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postdate">{post.datetime}</p>
      </Link>
      <p>
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
}

export default Post
