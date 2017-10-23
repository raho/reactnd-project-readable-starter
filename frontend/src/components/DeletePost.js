import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePost } from '../actions';

const DeletePost = ({ deletePost }) => (
  <div>
    <button
      type="button"
      className="btn btn-danger btn-sm btn-space"
      onClick={deletePost}
    >
      <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
    </button>
  </div>
)

DeletePost.propTypes = {
  post: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: () => dispatch(deletePost(ownProps.post.id))
})

export default connect(null, mapDispatchToProps)(DeletePost);
