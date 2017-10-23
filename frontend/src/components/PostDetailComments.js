import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import orderBy from 'lodash.orderby';
import Comment from './Comment';

const CommentsContainer = styled.div`
  padding: 15px 100px;
  background: #f9f9f9;
`;

const CommentsHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const PostDetailComments = ({ comments }) => {
  const sortedComments = orderBy(comments, ['voteScore'], ['desc']);
  return (
    <CommentsContainer>
      <div className="container">
        <CommentsHeader>
          Comments: {comments.length}
        </CommentsHeader>
        <div className="row">
          {sortedComments.map(comment => (
            <div key={comment.id} className="col-12">
              <Comment comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </CommentsContainer>
  )
}

PostDetailComments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default PostDetailComments;
