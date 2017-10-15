import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
  SET_CURRENT_CATEGORY,
  RECEIVE_POSTS,
  UPDATE_POST
} from '../actions';

function categories(state = { current: null, all: [], loaded: false }, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const { categories } = action;
      return {
        ...state,
        all: categories,
        loaded: true
      };
    case SET_CURRENT_CATEGORY:
      const { categoryPath } = action;
      const category = state.all.find(cat => cat.path === categoryPath);
      return {
        ...state,
        current: category && category.name
      };
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      const { posts } = action;
      return posts;
    case UPDATE_POST:
      const { post } = action;
      const postIndex = state.findIndex(p => p.id === post.id);
      if (postIndex >= 0) {
        // replace with udpated post, just keep comments
        post.comments = state[postIndex].comments;
        const posts = state.slice(); //copy array
        posts[postIndex] = post;
        return posts;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts
});
