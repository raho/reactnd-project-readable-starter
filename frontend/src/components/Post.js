import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VoteScore from './VoteScore';

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
        <VoteScore post={post}/>
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

export default connect(mapStateToProps)(Post);
