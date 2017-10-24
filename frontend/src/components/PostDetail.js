import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import VoteScore from './VoteScore';
import DeleteButton from './DeleteButton';
import PostDetailComments from './PostDetailComments';

const PostDetailContainer = styled.div`
  padding: 20px 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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

const PostDetail = ({ post }) => {
  const { category, author, timestamp, title, body } = post;

  return (
    <div>
      <PostDetailContainer>
        <Header>
          <div>
            <span className="badge badge-dark">{category}</span>
            <Author>{author}</Author>
            <Date>{moment(timestamp).format('YYYY-MM-DD')}</Date>
          </div>
          <DeleteButton post={post}/>
        </Header>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <VoteScore post={post} />
      </PostDetailContainer>
      <CommentsContainer>
        <PostDetailComments post={post}/>
      </CommentsContainer>
    </div>
  )
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
