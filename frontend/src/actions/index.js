import * as api from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const UPVOTE_POST = 'VOTE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

/**
 * For given category path, sets current category name in store
 * @param {*} categoryPath 
 */
export const setCurrentCategory = categoryPath => ({
  type: SET_CURRENT_CATEGORY,
  categoryPath
});

export const fetchCategories = () => dispatch => {
  return api
  .fetchCategories()
  .then(categories => dispatch(receiveCategories(categories)));
};

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = (category) => dispatch => {
  let posts
  return api
  .fetchPosts(category)
  .then(_posts => {posts = _posts})
  .then(() => Promise.all(posts.map(post => api.fetchPostComments(post.id))))
  .then(results => {
    posts.forEach((post, index) => {
      post.comments = results[index];
    })
  })
  .then(() => dispatch(receivePosts(posts)))
};

export const votePost = (postId, up) => dispatch => {
  return api
  .votePost(postId, up)
  .then(post => dispatch(updatePost(post)));
}

export const updatePost = post => ({
  type: UPDATE_POST,
  post
});

export const deletePost = (postId) => dispatch => {
  return api
  .deletePost(postId)
  .then(post => dispatch(updatePost(post)));
}

// TODO: fetchPosts if needed => or always???
// export const fetchCategoriesIfNeeded = () => {
//   return (dispatch, getState) => {
//     if (shouldFetchCategories(getState())) {
//       return dispatch(fetchCategories());
//     }
//   };
// }