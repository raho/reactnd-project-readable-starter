import React, { Component } from 'react';
import { connect } from 'react-redux';
import { votePost } from '../actions';

class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div className="post-title">{post.title}</div>
        <div>by: {post.author}</div>
        <div>comments: {post.comments.length}</div>
        <div>score: {post.voteScore}</div>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm btn-space"
          onClick={() => this.props.vote(true)}
        >
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Upvote
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm btn-space"
          onClick={() => this.props.vote(false)}
          >
          <i className="fa fa-thumbs-o-down" aria-hidden="true"></i> Downvote
        </button>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: (up) => dispatch(votePost(ownProps.post.id, up))
})

export default connect(null, mapDispatchToProps)(Post);
