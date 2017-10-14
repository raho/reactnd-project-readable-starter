import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
  SET_CURRENT_CATEGORY
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

export default combineReducers({
  categories
});
