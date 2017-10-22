import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const PostDetailContainer = styled.div`
  padding: 20px 80px;
`

const CommentsContainer = styled.div`
  padding: 30px;
`

// TODO: post data
// TODO: comments
const PostDetail = ({ post }) => (
  <PostDetailContainer>
    Post detail {JSON.stringify(post, null, 2)}
    <div className="container">
      <CommentsContainer className="row">
        {post.comments.map(comment => (
          <div key={comment.id} className="col-12">
            <Comment comment={comment}/>
          </div>
        ))} 
      </CommentsContainer>
    </div>
  </PostDetailContainer>
);

export default PostDetail;
