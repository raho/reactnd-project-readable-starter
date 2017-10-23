import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostIfNeeded } from '../actions';
import PostDetail from './PostDetail';
import PostDetailComments from './PostDetailComments';

class PostDetailContainer extends Component {
  state = {
  };

  componentDidMount() {
    this.fetchPost(this.props.postId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.postId !== nextProps.postId) {
      this.fetchPost(nextProps.postId);
    }
  }

  fetchPost(id) {
    this.setState({ error: null });
    this.props.fetchPostIfNeeded(id)
    .catch(err => {
      this.setState({ error: err.message });
    })
  }

  render() {
    const { post, comments } = this.props;
    const { error } = this.state;
    return (
      <div>
        { post && <PostDetail post={post}/> }
        { post && <PostDetailComments comments={comments}/> }
        { error &&
          <div className="alert alert-danger" role="alert">
            Post not found: {error}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({posts}, ownProps) => {
  const postId = ownProps.match.params.post_id;
  const post = posts.find(p => p.id === postId);
  const comments = post ? post.comments : [];
  return {
    postId,
    post,
    comments
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostIfNeeded: (id) => dispatch(fetchPostIfNeeded(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
