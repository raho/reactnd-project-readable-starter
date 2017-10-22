import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// TODO: comments
class Comment extends Component {

  render() {
    const { comment } = this.props;
    return (
      <div>
        {comment.body}
      </div>
    )
  }
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapStateToProps = ({categories}) => {
  return {
  }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
