import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { editPost } from '../actions/PostsActions';

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
    const { post } = this.props;
    const { title, body } = this.state;
    this.props.editPost(post.id, title, body);
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
          className='react-modal'
          overlayClassName='react-overlay'
          contentLabel='Modal'
        >
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input 
                id="title" 
                className="form-control" 
                type="text" 
                placeholder="Title" 
                value={title}
                onChange={(event) => this.updateTitle(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
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

export default connect(null, {editPost})(EditPost);
