import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import PostsContainer from './PostsContainer';
import PostDetailContainer from './PostDetailContainer';
import CategoriesLoader from './CategoriesLoader';

const App = ({ categoriesLoaded, badCurrentCategory }) => (
  <div>
    { categoriesLoaded ? <Route path="/:category?" component={Navigation}/> : null}
    { categoriesLoaded && badCurrentCategory ? 
        <div className="alert alert-warning" role="alert">
          Category not found
        </div>
        : null
    }
    <Route path="/:category?" component={CategoriesLoader}/>
    { categoriesLoaded ? <Route exact path="/:category?" component={PostsContainer}/> : null }
     {categoriesLoaded ? <Route exact path="/:category/:post_id" component={PostDetailContainer}/> : null }
  </div>
)

const mapStateToProps = ({categories}) => {
  return {
    categoriesLoaded: categories.loaded,
    badCurrentCategory: categories.currentBad
  }
}

export default withRouter(connect(mapStateToProps)(App));
