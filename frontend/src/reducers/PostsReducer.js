import { RECEIVE_POSTS, RECEIVE_POST, UPDATE_POST, UPDATE_COMMENT, RECEIVE_COMMENT } from '../actions/types';

function posts(state = [], action) {
  if (action.type === RECEIVE_POSTS) {
    const { posts } = action;
    return posts;
  }
  if (action.type === RECEIVE_POST) {
    const { post } = action;
    const postIndex = state.findIndex(p => p.id === post.id);
    if (postIndex < 0) {
      const posts = JSON.parse(JSON.stringify(state)); //clone posts
      posts.push(post);
      return posts;
    }
  }
  if (action.type === UPDATE_POST) {
    const { post } = action;
    const postIndex = state.findIndex(p => p.id === post.id);
    if (postIndex >= 0) {
      const posts = JSON.parse(JSON.stringify(state)); //clone posts
      if (post.deleted) {
        posts.splice(postIndex, 1);
      } else {
        // replace with udpated post, just keep comments
        post.comments = state[postIndex].comments;
        posts[postIndex] = post;
      }
      return posts;
    }
  }
  if (action.type === UPDATE_COMMENT) {
    const { comment } = action;
    const postIndex = state.findIndex(p => p.id === comment.parentId);
    if (postIndex >= 0) {
      const posts = JSON.parse(JSON.stringify(state)); //clone posts
      const post = posts[postIndex];
      const commentIndex = post.comments.findIndex(c => c.id === comment.id);
      if (commentIndex >= 0) {
        if (comment.deleted) {
          post.comments.splice(commentIndex, 1);
        } else {
          // replace with udpated comment
          post.comments[commentIndex] = comment;
        }
        return posts;
      }
    }
  }
  if (action.type === RECEIVE_COMMENT) {
    const { comment } = action;
    const postIndex = state.findIndex(p => p.id === comment.parentId);
    if (postIndex >= 0) {
      const posts = JSON.parse(JSON.stringify(state)); //clone posts
      posts[postIndex].comments.push(comment);
      return posts;
    }
  }
  return state;
}

export default posts;
