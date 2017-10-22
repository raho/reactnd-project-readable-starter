import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Posts from './Posts';

// TODO: add post from listing
// TODO: edit post from listing (show the same modal)
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
