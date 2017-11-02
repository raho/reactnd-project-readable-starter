import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/PostsActions';
import Posts from './Posts';

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
