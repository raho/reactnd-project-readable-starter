import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchPosts } from '../actions';
import Navigation from './Navigation';
import Posts from './Posts';

// TODO: Posts should display '404' for bad category
class PostsContainer extends Component {

  componentDidMount() {
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
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
