import React from 'react';
import Comment from './Comment';

// TODO: post data
// TODO: comments
const PostDetail = ({ post }) => (
  <div>
    Post detail {JSON.stringify(post, null, 2)}
    <div className="container">
      <div className="row comments">
        {post.comments.map(comment => (
          <div key={post.id} className="col-12">
            <Comment comment={comment}/>
          </div>
        ))} 
      </div>
    </div>
  </div>
);

export default PostDetail;
