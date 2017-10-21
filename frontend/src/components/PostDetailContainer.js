import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostIfNeeded } from '../actions';
import Navigation from './Navigation';
import PostDetail from './PostDetail';

class PostDetailContainer extends Component {

  componentDidMount() {
    this.props.fetchPostIfNeeded(this.props.postId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.postId !== nextProps.postId) {
      this.props.fetchPostIfNeeded(this.props.postId);
    }
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Navigation/>
        {post && <PostDetail post={ post }/>}
      </div>
    );
  }
}

const mapStateToProps = ({posts}, ownProps) => {
  const postId = ownProps.match.params.post_id;
  const post = posts.find(p => p.id === postId);
  return {
    postId,
    post
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostIfNeeded: (id) => dispatch(fetchPostIfNeeded(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
