import React from 'react';
import { connect } from 'react-redux';

const Posts = ({category, posts}) => (
  <div>
    Posts from {category || 'all'}
  </div>
);

const mapStateToProps = ({posts, categories}, ownProps) => {
  return {
    category: categories.current,
    posts
  }
}

export default connect(mapStateToProps)(Posts);
