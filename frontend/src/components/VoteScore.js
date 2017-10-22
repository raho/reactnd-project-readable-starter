import React from 'react';
import { connect } from 'react-redux';
import { deletePost, votePost } from '../actions';
import styled from 'styled-components';

const VoteScoreContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
`;

const VoteScoreItem = styled.div`
  margin-right: 10px;
`;

const Score = styled.div`
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 5px;
`;

const VoteScore = ({ post, vote }) => (
  <VoteScoreContainer>
    <VoteScoreItem>
      <Score className="bg-secondary text-light">score: {post.voteScore}</Score>
    </VoteScoreItem>
    <VoteScoreItem>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm btn-space"
        onClick={() => vote(true)}
      >
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Upvote
      </button>
    </VoteScoreItem>
    <VoteScoreItem>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm btn-space"
        onClick={() => vote(false)}
        >
        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i> Downvote
      </button>
    </VoteScoreItem>
  </VoteScoreContainer>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: (up) => dispatch(votePost(ownProps.post.id, up)),
  delete: () => dispatch(deletePost(ownProps.post.id))
})

export default connect(null, mapDispatchToProps)(VoteScore);
