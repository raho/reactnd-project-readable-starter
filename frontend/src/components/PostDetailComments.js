import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import orderBy from 'lodash.orderby';
import Comment from './Comment';
import AddComment from './AddComment';

const CommentsHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const PostDetailComments = ({ post }) => {
  const comments = orderBy(post.comments, ['voteScore'], ['desc']);
  return (
    <div className="container">
      <CommentsHeader>
        Comments: {comments.length}
      </CommentsHeader>
      <AddComment post={post}/>
      <div className="row">
        {comments.map(comment => (
          <div key={comment.id} className="col-12">
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    </div>
  )
}

PostDetailComments.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetailComments;
