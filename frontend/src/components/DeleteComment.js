import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../actions';

const DeleteComment = ({ deleteComment }) => (
  <div>
    <button
      type="button"
      className="btn btn-danger btn-sm btn-space"
      onClick={deleteComment}
    >
      <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
    </button>
  </div>
)

DeleteComment.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteComment: () => dispatch(deleteComment(ownProps.comment.id))
})

export default connect(null, mapDispatchToProps)(DeleteComment);
