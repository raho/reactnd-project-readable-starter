import * as api from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

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
  api
  .fetchPosts()
  .then(posts => dispatch(receivePosts(posts)));
};

// TODO: fetchPosts if needed => or always???
// export const fetchCategoriesIfNeeded = () => {
//   return (dispatch, getState) => {
//     if (shouldFetchCategories(getState())) {
//       return dispatch(fetchCategories());
//     }
//   };
// }