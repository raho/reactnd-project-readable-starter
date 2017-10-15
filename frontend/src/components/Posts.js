import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({category, posts}) => (
  <div className="posts">
    <div className="container">
      <div className="row">
        {posts.map(post => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4">
            <Post post={post}/>
          </div>
        ))} 
      </div>
    </div>
  </div>
);

const mapStateToProps = ({posts, categories}, ownProps) => {
  return {
    category: categories.current,
    posts
  }
}

export default connect(mapStateToProps)(Posts);
