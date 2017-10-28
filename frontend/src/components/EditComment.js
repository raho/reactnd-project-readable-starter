import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EditComment = ({ comment }) => (
  // onClick={doDelete}
  <div>
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm"
    >
      <i className="fa fa-pencil" aria-hidden="true"></i> Edit
    </button>
  </div>
)

EditComment.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
}

export default connect(null, mapDispatchToProps)(EditComment);
