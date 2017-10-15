import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PostsContainer from './PostsContainer';
import PostDetail from './PostDetail';
import CategoriesLoader from './CategoriesLoader';

const App = ({categoriesLoaded}) => (
  <div>
    <Route path="/:category?" component={CategoriesLoader}/>
    {categoriesLoaded ? <Route exact path="/:category?" component={PostsContainer}/> : null}
    {categoriesLoaded ? <Route exact path="/:category/:post_id" component={PostDetail}/> : null}
  </div>
)

const mapStateToProps = ({categories}) => {
  return {
    categoriesLoaded: categories.loaded
  }
}

export default withRouter(connect(mapStateToProps)(App));
