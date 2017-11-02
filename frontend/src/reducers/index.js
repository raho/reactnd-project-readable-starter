import { combineReducers } from 'redux';
import categories from './CategoriesReducer';
import posts from './PostsReducer';

export default combineReducers({
  categories,
  posts
});
