import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
  SET_CURRENT_CATEGORY,
  RECEIVE_POSTS,
  RECEIVE_POST,
  UPDATE_POST
} from '../actions';

function categories(state = { current: null, currentBad: false, all: [], loaded: false }, action) {
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
      let currentBad = false;
      if (categoryPath && !category) {
        currentBad = true;
      }
      return {
        ...state,
        current: category && category.name,
        currentBad
      };
    default:
      return state;
  }
}

function posts(state = [], action) {
  if (action.type === RECEIVE_POSTS) {
    const { posts } = action;
    return posts;
  }
  if (action.type === RECEIVE_POST) {
    const { post } = action;
    const postIndex = state.findIndex(p => p.id === post.id);
    if (postIndex < 0) {
      const posts = state.slice(); //copy array
      posts.push(post);
      return posts;
    } else {
      return state;
    }
  }
  if (action.type === UPDATE_POST) {
    const { post } = action;
    const postIndex = state.findIndex(p => p.id === post.id);
    if (postIndex >= 0) {
      const posts = state.slice(); //copy array
      if (post.deleted) {
        posts.splice(postIndex, 1);
      } else {
        // replace with udpated post, just keep comments
        post.comments = state[postIndex].comments;
        posts[postIndex] = post;
      }
      return posts;
    } else {
      return state;
    }
  }
  return state;
}

export default combineReducers({
  categories,
  posts
});
