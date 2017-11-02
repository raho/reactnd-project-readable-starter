import { RECEIVE_CATEGORIES, SET_CURRENT_CATEGORY } from '../actions/types';

function categories(state = { current: null, currentSet: false, currentBad: false, all: [], loaded: false }, action) {
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
        currentSet: true,
        currentBad
      };
    default:
      return state;
  }
}

export default categories;