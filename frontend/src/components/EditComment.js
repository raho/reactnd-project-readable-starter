import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { editComment } from '../actions';

const customStyles = {
  content: {
    top: '50%',
    left: '200px',
    right: '200px',
    bottom: 'auto',
    transform: 'translate(0, -50%)',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class EditComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  openModal = () => {
    this.setState({
      body: this.props.comment.body,
      modalOpen: true
    })
  }
  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  updateBody = (body) => {
    this.setState({
      body
    })
  }

  editComment = () => {
    this.props.editComment(this.state.body);
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const { body, modalOpen } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={this.openModal}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i> Edit
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Modal'
        >
          <form>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                id="body"
                className="form-control"
                rows="3"
                placeholder="Comment body"
                value={body}
                onChange={(event) => this.updateBody(event.target.value)}
              />
            </div>
            <ButtonWrap>
              <button
                type="button"
                onClick={this.editComment}
                disabled={body === this.props.comment.body}
                className="btn btn-primary btn-sm"
              >Save</button>
            </ButtonWrap>
          </form>
        </Modal>
      </div>
    )
  }
}

EditComment.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  editComment: (body) => dispatch(editComment(ownProps.comment.id, body))
})

export default connect(null, mapDispatchToProps)(EditComment);
