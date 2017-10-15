import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Navigation from './Navigation';
import Posts from './Posts';

// TODO: Posts should display '404' for bad category: when category properly selected then true, otherwise some error in store
// TODO: 1. delete post
// TODO: 2. link to post view
// TODO: 3. sort posts
// TODO: 4. edit post
class PostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.category);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps.category) {
      this.props.fetchPosts(nextProps.category);
    }
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Posts/>
      </div>
    );
  }
}

const mapStateToProps = ({categories}, ownProps) => {
  return {
    category: categories.current
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (category) => dispatch(fetchPosts(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
