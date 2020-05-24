import React from 'react'
import PropTypes from 'prop-types'

//this is boilerplate from Redux only
// we are going to rewrite this significantly
const Posts = ({posts}) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts