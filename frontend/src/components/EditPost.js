import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { editPost } from '../actions';

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

class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  openModal = () => {
    this.setState({
      title: this.props.post.title,
      body: this.props.post.body,
      modalOpen: true
    })
  }
  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  updateTitle = (title) => {
    this.setState({
      title
    })
  }
  updateBody = (body) => {
    this.setState({
      body
    })
  }

  editPost = () => {
    const { title, body } = this.state;
    this.props.editPost(title, body);
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const { title, body, modalOpen } = this.state;
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
            <div class="form-group">
              <label for="title">Title</label>
              <input 
                id="title" 
                className="form-control" 
                type="text" 
                placeholder="Title" 
                value={title}
                onChange={(event) => this.updateTitle(event.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="body">Body</label>
              <textarea
                id="body"
                className="form-control"
                rows="3"
                placeholder="Post body"
                value={body}
                onChange={(event) => this.updateBody(event.target.value)}
              />
            </div>
            <ButtonWrap>
              <button
                type="button"
                onClick={this.editPost}
                disabled={title === this.props.post.title && body === this.props.post.body}
                className="btn btn-primary btn-sm"
              >Save</button>
            </ButtonWrap>
          </form>
        </Modal>
      </div>
    )
  }
}

EditPost.propTypes = {
  post: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  editPost: (title, body) => dispatch(editPost(ownProps.post.id, title, body))
})

export default connect(null, mapDispatchToProps)(EditPost);
