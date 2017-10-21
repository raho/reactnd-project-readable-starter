import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, votePost } from '../actions';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    const { categories, post } = this.props;
    const postCategoryPath = categories.find(category => category.name === post.category).path
    return (
      <div className="post">
        <Link className="post-title" to={`/${postCategoryPath}/${post.id}`}>{post.title}</Link>
        <div>by: {post.author}</div>
        <div>date: {moment(post.timestamp).format('YYYY-MM-DD')}</div>
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
        <button
          type="button"
          className="btn btn-outline-danger btn-sm btn-space"
          onClick={() => this.props.delete()}
          >
          <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
        </button>
      </div>
    )
  }
};

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.all
  }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: (up) => dispatch(votePost(ownProps.post.id, up)),
  delete: () => dispatch(deletePost(ownProps.post.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
