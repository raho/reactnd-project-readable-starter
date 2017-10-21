import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Comment extends Component {

  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        {JSON.stringify(comment, null, 2)}
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
