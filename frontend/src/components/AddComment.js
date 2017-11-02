import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currentUserName } from '../utils/api';
import { addComment } from '../actions';

const AddCommentDiv = styled.div`
  padding: 2px 10px;
  background: white;
  border: 1px solid rgba(0,0,0,.09);
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  margin: 10px 0px;
`

const User = styled.div`
  font-size: 12px;
  padding: 10px 0px;
`;

const InputWrap = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const TextAreaCol = styled.div`
  flex: 1;
  padding-right: 10px;
`;

class AddComment extends Component {
  state = {
    body: ''    
  }

  addCom

  updateBody = (body) => {
    this.setState({
      body
    })
  }

  addComment = () => {
    this.props.addComment(this.props.post.id, this.state.body);
    this.setState({
      body: ''
    });
  }

  render() {
    const { body } = this.state;

    return (
      <AddCommentDiv>
        <User>{currentUserName}</User>
        <InputWrap>
          <TextAreaCol>
            <textarea 
              className="form-control" 
              id="body" 
              rows="1" 
              placeholder="Add comment" 
              value={body}
              onChange={(event) => this.updateBody(event.target.value)}
            />
          </TextAreaCol>
          <button 
            type="button"
            onClick={this.addComment}
            disabled={body===''}
            className="btn btn-primary btn-sm"
          >Add</button>
        </InputWrap>
      </AddCommentDiv>
    )
  }
};

AddComment.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect(null, {addComment})(AddComment);
