import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment, deletePost } from '../actions/PostsActions';

const DeleteButton = ({ doDelete }) => (
  <div>
    <button
      type="button"
      className="btn btn-outline-danger btn-sm"
      onClick={doDelete}
    >
      <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
    </button>
  </div>
)

DeleteButton.propTypes = {
  post: PropTypes.object,
  comment: PropTypes.object
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.post) {
    return {
      doDelete: () => dispatch(deletePost(ownProps.post.id))
    }
  } else {
    return {
      doDelete: () => dispatch(deleteComment(ownProps.comment.id))
    }
  }
}

export default connect(null, mapDispatchToProps)(DeleteButton);
