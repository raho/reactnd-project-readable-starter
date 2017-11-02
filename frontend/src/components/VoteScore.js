import React from 'react';
import { connect } from 'react-redux';
import { voteComment, votePost } from '../actions/PostsActions';
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

/**
 * It works for both Post and Comment, depending if post or comment given in props
 */
const VoteScore = ({ score, vote }) => (
  <VoteScoreContainer>
    <VoteScoreItem>
      <Score className="bg-secondary text-light">score: {score}</Score>
    </VoteScoreItem>
    <VoteScoreItem>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={() => vote(true)}
      >
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Upvote
      </button>
    </VoteScoreItem>
    <VoteScoreItem>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={() => vote(false)}
        >
        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i> Downvote
      </button>
    </VoteScoreItem>
  </VoteScoreContainer>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.post) {
    return {
      score: ownProps.post.voteScore,
      vote: (up) => dispatch(votePost(ownProps.post.id, up))
    }
  } else {
    return {
      score: ownProps.comment.voteScore,
      vote: (up) => dispatch(voteComment(ownProps.comment.id, up))
    }
  }
}

export default connect(null, mapDispatchToProps)(VoteScore);
