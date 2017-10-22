import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, votePost } from '../actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  padding: 10px;
  margin: 10px 0px 10px 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  overflow: hidden;
`;

const PostField = styled.div`
  margin-bottom: 5px;
`;

const PostTitle = styled.div`
  font-size: 1.5em;
  line-height: 1.3em;
  height: 3em;
  overflow: hidden;
  cursor: pointer; cursor: hand;
  margin-bottom: 10px;
`;


class Post extends Component {

  render() {
    const { categories, post } = this.props;
    const postCategoryPath = categories.find(category => category.name === post.category).path
    return (
      <PostContainer>
        <PostTitle>
          <Link className="post-title" to={`/${postCategoryPath}/${post.id}`}>{post.title}</Link>
        </PostTitle>
        <PostField>by: {post.author}</PostField>
        <PostField>date: {moment(post.timestamp).format('YYYY-MM-DD')}</PostField>
        <PostField>comments: {post.comments.length}</PostField>
        <PostField>score: {post.voteScore}</PostField>
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
      </PostContainer>
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
