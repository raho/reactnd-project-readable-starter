import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { addPost } from '../actions';

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  openModal = () => {
    this.setState({
      category: this.props.categories.current || this.props.categories.all[0].name,
      title: '',
      body: '',
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
  updateCategory = (category) => {
    console.log('category', category)
    this.setState({
      category
    })
  }

  addPost = () => {
    const { category, title, body } = this.state;
    this.props.addPost(category, title, body)
    .then(post => {
      this.props.history.push(`/${post.category}/${post.id}`);
    });
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const { category, title, body, modalOpen } = this.state;
    const { categories } = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.openModal}
        >
          <i className="fa fa-plus-square" aria-hidden="true"></i> Add Post
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
              <label htmlFor="category">Category</label>
              <select 
                id="category"
                className="form-control" 
                value={category} 
                onChange={(event) => this.updateCategory(event.target.value)}>
              >
                {categories.all.map(category => (
                  <option key={category.path}>{category.name}</option>
                ))} 
              </select>
            </div>
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
                onClick={this.addPost}
                disabled={title === ''}
                className="btn btn-primary btn-sm"
              >Save</button>
            </ButtonWrap>
          </form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addPost: (category, title, body) => dispatch(addPost(category, title, body))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));
