import * as api from '../utils/api';
import { RECEIVE_POSTS, RECEIVE_POST, UPDATE_COMMENT, RECEIVE_COMMENT, UPDATE_POST } from './types';


export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = (category) => (dispatch) => {
  let posts;
  return api
  .fetchPosts(category)
  .then(_posts => {posts = _posts})
  .then(() => Promise.all(posts.map(post => api.fetchPostComments(post.id))))
  .then(results => {
    posts.forEach((post, index) => {
      post.comments = results[index];
    })
  })
  .then(() => dispatch(receivePosts(posts)));
};

/**
 * Fetch if not in store yet
 */
export const fetchPostIfNeeded = (id) => (dispatch, getState) => {
  const posts = getState().posts;
  if (!posts.find(p => p.id === id)) {
    return dispatch(fetchPost(id));
  } else {
    return Promise.resolve(null);
  }
};

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = (id) => (dispatch) => {
  let post;
  return api
  .fetchPost(id)
  .then(_post => {post = _post})
  .then(() => api.fetchPostComments(post.id))
  .then(comments => {
    post.comments = comments;
  })
  .then(() => dispatch(receivePost(post)));
};

export const votePost = (postId, up) => (dispatch) => {
  return api
  .votePost(postId, up)
  .then(post => dispatch(updatePost(post)));
}

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
});

export const deletePost = (postId) => (dispatch) => {
  return api
  .deletePost(postId)
  .then(post => dispatch(updatePost(post)));
};

export const editPost = (postId, title, body) => (dispatch) => {
  return api
  .updatePost(postId, title, body)
  .then(post => dispatch(updatePost(post)));
}

export const addPost = (category, title, body) => (dispatch) => {
  let post;
  return api
  .addPost(category, title, body)
  .then(_post => {
    post = _post;
    post.comments = [];
  })
  .then(() => dispatch(receivePost(post)))
  .then(() => post);
};

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment
});

export const deleteComment = (commentId) => (dispatch) => {
  return api
  .deleteComment(commentId)
  .then(comment => dispatch(updateComment(comment)));
};

export const voteComment = (commentId, up) => (dispatch) => {
  return api
  .voteComment(commentId, up)
  .then(comment => dispatch(updateComment(comment)));
}

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const addComment = (postId, body) => (dispatch) => {
  return api
  .addComment(postId, body)
  .then(comment => dispatch(receiveComment(comment)));
};

export const editComment = (commentId, body) => (dispatch) => {
  return api
  .updateComment(commentId, body)
  .then(comment => dispatch(updateComment(comment)));
}
