import orderBy from 'lodash.orderby';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from './Post';

const sortOptions = [
  { id: 'date_asc', sortBy: 'timestamp', sortDir: 'asc', display: 'Date asc'},
  { id: 'date_desc', sortBy: 'timestamp', sortDir: 'desc', display: 'Date desc'},
  { id: 'score_asc', sortBy: 'voteScore', sortDir: 'asc', display: 'Score asc'},
  { id: 'score_desc', sortBy: 'voteScore', sortDir: 'desc', display: 'Score desc'},
];

class Posts extends Component {
  state = {
    sortBy: sortOptions[0]
  }

  sortPosts = (sortBy) => {
    this.setState({
      sortBy
    })
    console.log(sortBy);
  }

  render() {
    let { posts } = this.props;
    let { sortBy } = this.state;
    posts = orderBy(posts, [sortBy.sortBy], [sortBy.sortDir]);
    return (
      <div className="posts">

        <div className="container">
          <span>Sort by: </span>
          <div class="btn-group" data-toggle="buttons">
            {sortOptions.map(sortOption => (
              <label class={'btn btn-light ' + (sortOption.id === sortBy.id ? 'active' : '')}>
                <input 
                  type="radio" 
                  name="options" 
                  id={sortOption.id} 
                  autocomplete="off" 
                  onClick={() => this.sortPosts(sortOption)}
                  checked={sortOption.id === sortBy.id}
                />{sortOption.display}
              </label>
            ))}
          </div>
          <div className="row">
            {posts.map(post => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <Post post={post}/>
              </div>
            ))} 
          </div>
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Posts);
