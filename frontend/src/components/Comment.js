import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import DeleteComment from './DeleteComment';
import VoteScore from './VoteScore';

const CommentDiv = styled.div`
  padding: 2px 10px;
  background: white;
  border: 1px solid rgba(0,0,0,.09);
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  margin: 10px 0px;
`
const Header = styled.div`
  padding-top: 3px;
  display: flex;
  justify-content: space-between;
`;

const HeaderRight = styled.div`
  padding-top: 5px;
`;

const Author = styled.div`
  font-size: 12px;
`;

const Date = styled.div`
  font-size: 12px;
  color: #666;
`;

const Body = styled.p`
  color: #666;
  padding: 10px 0px;
  font-size: 15px;
`;

class Comment extends Component {

  render() {
    const { comment } = this.props;
    const { author, timestamp, body } = comment;
    return (
      <CommentDiv>
        <Header>
          <div>
            <Author>{author}</Author>
            <Date>{moment(timestamp).format('YYYY-MM-DD')}</Date>
          </div>
          <HeaderRight>
            <DeleteComment comment={comment}/>
          </HeaderRight>
        </Header>
        <Body>{body}</Body>
        <VoteScore comment={comment}/>
      </CommentDiv>
    )
  }
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapStateToProps = ({categories}) => {
  return {
  }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
