import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Comment from './Comment';
import VoteScore from './VoteScore';

const PostDetailContainer = styled.div`
  padding: 20px 80px;
`;

const Author = styled.div`
  font-size: 12px;
`;

const Date = styled.div`
  font-size: 12px;
  color: #666;
`;

const Title = styled.h4`
  padding: 10px 0px;
`;

const Body = styled.p`
  color: #666;
`;

const CommentsContainer = styled.div`
  padding: 15px 100px;
  background: #f9f9f9;
`;

const CommentsHeader = styled.div`
  font-size: 14px;
  color: #666;
  padding: 2px 10px;
  background: white;
  border: 1px solid rgba(0,0,0,.09);
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  margin: 10px 0px;
`;

const PostDetail = ({ post }) => {
  const { category, author, timestamp, title, body, comments } = post;

  return (
    <div>
      <PostDetailContainer>
        <span className="badge badge-dark">{category}</span>
        <Author>{author}</Author>
        <Date>{moment(timestamp).format('YYYY-MM-DD')}</Date>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <VoteScore post={post} />
      </PostDetailContainer>
      <CommentsContainer>
        <div className="container">
          <CommentsHeader>
            Comments: {comments.length}
          </CommentsHeader>
          <div className="row">
            {comments.map(comment => (
              <div key={comment.id} className="col-12">
                <Comment comment={comment} />
              </div>
            ))}
          </div>
        </div>
      </CommentsContainer>
    </div>
  )
};

export default PostDetail;
