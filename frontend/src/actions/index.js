import * as api from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const UPVOTE_POST = 'VOTE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

/**
 * For given category path, sets current category name in store
 * @param {*} categoryPath 
 */
export const setCurrentCategory = (categoryPath) => ({
  type: SET_CURRENT_CATEGORY,
  categoryPath
});

export const fetchCategories = () => (dispatch) => {
  return api
  .fetchCategories()
  .then(categories => dispatch(receiveCategories(categories)));
};

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
