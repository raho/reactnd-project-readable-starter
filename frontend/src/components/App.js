import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import PostsContainer from './PostsContainer';
import PostDetailContainer from './PostDetailContainer';
import CategoriesLoader from './CategoriesLoader';

// TODO: edit post (modal form?) from details
// TODO: add post (modal form?) from listing
// TODO: edit post (modal form?) from listing (show the same modal)
/**
 * Only display the UI after CategoriesLoader loaded all categories and set the current from URL.
 * 
 * @param {*} param0 
 */
const App = ({ currentCategorySet, badCurrentCategory }) => (
  <div>
    <Route path="/:category?" component={CategoriesLoader}/>
    { currentCategorySet ? <Route path="/:category?" component={Navigation}/> : null}
    { currentCategorySet && badCurrentCategory ? 
        <div className="alert alert-warning" role="alert">
          Category not found
        </div>
        : null
    }
    { currentCategorySet ? <Route exact path="/:category?" component={PostsContainer}/> : null }
    { currentCategorySet ? <Route exact path="/:category/:post_id" component={PostDetailContainer}/> : null }
  </div>
)

const mapStateToProps = ({categories}) => {
  return {
    badCurrentCategory: categories.currentBad,
    currentCategorySet: categories.currentSet
  }
}

export default withRouter(connect(mapStateToProps)(App));
