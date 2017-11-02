import * as api from '../utils/api';
import { RECEIVE_CATEGORIES, SET_CURRENT_CATEGORY } from './types';

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